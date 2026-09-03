import type { Metadata } from "next";
import { blogApi } from "@/api/api";
import DynamicSingleBlogClient from "@/components/DynamicSingleBlogClient";

export const revalidate = 3600; // Cache and revalidate blog post pages every hour
export const dynamicParams = false;

export async function generateStaticParams() {
    try {
        const response = await blogApi.getBlogs({ active: true, limit: 100 });
        if (response?.data?.success && Array.isArray(response?.data?.blogs)) {
            const slugs = response.data.blogs
                .map((blog: any) => blog?.slug)
                .filter(Boolean);
            if (slugs.length > 0) {
                return slugs.map((slug: string) => ({ slug }));
            }
        }
    } catch (error) {
        console.error("Failed to generate static params for blog pages:", error);
    }
    // Next.js 16 requires at least one param to build successfully.
    return [{ slug: "placeholder-slug" }];
}

export async function generateMetadata({
    params,
}: {
    params: Promise<{ slug: string }> | { slug: string };
}): Promise<Metadata> {
    const resolvedParams = await params;
    const { slug } = resolvedParams;

    try {
        const response = await blogApi.getBlogBySlug(slug);
        if (response?.data?.success && response?.data?.data) {
            const blog = response.data.data;
            const title = `${blog.title} | Credex Blog`;
            
            // Generate description from paragraphs
            let description = "Read this blog post on Credex Rocks.";
            const paragraphs = blog.blogJSONData?.data
                ?.filter((item: any) => item.p)
                ?.map((item: any) => item.p) || [];
            if (paragraphs.length > 0) {
                const plainText = paragraphs[0].replace(/<[^>]*>/g, "");
                description = plainText.length > 155 ? plainText.slice(0, 155) + "..." : plainText;
            }
            
            const canonicalUrl = `https://credex.rocks/blog/${slug}`;
            const ogImage = blog.bannerImgUrl || "https://credex.rocks/images/credex-social.jpg";

            return {
                title,
                description,
                alternates: {
                    canonical: canonicalUrl,
                },
                openGraph: {
                    title,
                    description,
                    url: canonicalUrl,
                    type: "article",
                    publishedTime: blog.createdAt,
                    images: [
                        {
                            url: ogImage,
                            width: 1200,
                            height: 630,
                            alt: blog.title,
                        },
                    ],
                },
                twitter: {
                    card: "summary_large_image",
                    title,
                    description,
                    images: [ogImage],
                },
            };
        }
    } catch (error) {
        console.error("Failed to generate metadata for slug:", slug, error);
    }

    return {
        title: "Blog Post | Credex",
        description: "Read the latest updates and insights on unused AI and cloud credits from Credex.",
    };
}

export default async function DynamicSingleBlogPage({
    params,
}: {
    params: Promise<{ slug: string }> | { slug: string };
}) {
    // Safely await params to support Next.js 15 dynamic routing behavior
    const resolvedParams = await params;
    const { slug } = resolvedParams;

    let blog = null;
    let error = null;

    try {
        const response = await blogApi.getBlogBySlug(slug);
        if (response?.data?.success && response?.data?.data) {
            blog = response.data.data;
        } else {
            error = "Blog post not found.";
        }
    } catch (err: any) {
        console.error("Error fetching blog post on server:", err);
        error = err.response?.data?.message || "Failed to load the blog post.";
    }

    let articleJsonLd = null;
    if (blog) {
        let description = "Read this blog post on Credex Rocks.";
        const paragraphs = blog.blogJSONData?.data
            ?.filter((item: any) => item.p)
            ?.map((item: any) => item.p) || [];
        if (paragraphs.length > 0) {
            const plainText = paragraphs[0].replace(/<[^>]*>/g, "");
            description = plainText.length > 155 ? plainText.slice(0, 155) + "..." : plainText;
        }

        articleJsonLd = {
            "@context": "https://schema.org",
            "@type": "BlogPosting",
            "headline": blog.title,
            "image": [blog.bannerImgUrl || "https://credex.rocks/images/credex-social.jpg"],
            "datePublished": blog.createdAt,
            "dateModified": blog.createdAt,
            "description": description,
            "author": {
                "@type": "Organization",
                "name": "Credex",
                "url": "https://credex.rocks"
            },
            "publisher": {
                "@type": "Organization",
                "name": "Credex",
                "logo": {
                    "@type": "ImageObject",
                    "url": "https://credex.rocks/favicon.svg"
                }
            },
            "mainEntityOfPage": {
                "@type": "WebPage",
                "@id": `https://credex.rocks/blog/${slug}`
            }
        };
    }

    return (
        <>
            {articleJsonLd && (
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
                />
            )}
            <DynamicSingleBlogClient
                initialBlog={blog}
                initialError={error}
                slug={slug}
            />
        </>
    );
}
