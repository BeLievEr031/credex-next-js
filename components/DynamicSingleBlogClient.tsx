import Link from "next/link";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/sections/common/Footer";

interface BlogDataItem {
    h1?: string;
    h2?: string;
    p?: string;
    img?: string;
    ul?: string[];
}

interface BlogDetails {
    _id: string;
    slug: string;
    title: string;
    blogJSONData: {
        data: BlogDataItem[];
    };
    bannerImgUrl: string;
    createdAt: string;
    updatedAt?: string;
}

function formatDate(dateString: string): string {
    try {
        const date = new Date(dateString);
        return date.toLocaleDateString("en-US", {
            year: "numeric",
            month: "long",
            day: "numeric",
        });
    } catch {
        return dateString;
    }
}

export default function DynamicSingleBlogClient({
    initialBlog,
    initialError,
    slug,
}: {
    initialBlog: BlogDetails | null;
    initialError: string | null;
    slug: string;
}) {
    // Data is pre-fetched on the server and passed directly — render synchronously.
    // No client-side loading state needed; this avoids a Suspense/spinner in the
    // static HTML which would hide content from search engine crawlers.
    const blog = initialBlog;
    const error = initialError;

    if (error || !blog) {
        return (
            <main className="font-pp-mori-regular min-h-screen flex flex-col justify-between">
                <Navbar />
                <div className="flex flex-col items-center justify-center flex-grow py-32 px-5 text-center">
                    <h1 className="text-2xl md:text-3xl font-semibold text-red-500 font-pp-mori-semibold">
                        {error || "Blog post not found."}
                    </h1>
                    <p className="text-[#19363FB2] mt-2 mb-6">
                        We couldn&apos;t retrieve the blog post you were looking for.
                    </p>
                    <Link
                        href="/blog"
                        className="bg-[#0FF395] hover:bg-emerald-300 text-black font-medium px-6 py-3 rounded-lg transition"
                    >
                        Back to Blogs
                    </Link>
                </div>
                <Footer />
            </main>
        );
    }

    return (
        <main className="font-pp-mori-regular">
            <Navbar />

            {/* Hero banner — pre-rendered at build time for crawlers */}
            <section
                className="w-full bg-[#062524] pt-28 md:pt-44 pb-20 md:grid grid-cols-2 justify-items-center px-5 md:px-28 flex flex-col-reverse"
                aria-label="Blog post header"
            >
                <div className="md:w-[500px] mt-5 md:mt-0">
                    <h1 className="font-semibold font-pp-mori-semibold text-[32px] md:text-[40px] leading-tight text-white">
                        {blog.title}
                    </h1>
                    <div className="text-white pt-8">
                        <p className="font-pp-mori-regular tracking-widest">
                            <time dateTime={blog.createdAt}>{formatDate(blog.createdAt)}</time>
                        </p>
                        <p>By Credex</p>
                    </div>
                </div>
                <div>
                    <div className="mt-5 md:mt-0">
                        <div className="bg-[#121212] w-full aspect-[4/3] md:aspect-[638/410] md:w-[638px] md:h-[410px] rounded-[20px] overflow-hidden relative">
                            <Image
                                src={blog.bannerImgUrl}
                                alt={blog.title}
                                fill
                                unoptimized
                                className="object-cover object-top"
                                priority
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* Article body — fully server-rendered HTML for SEO */}
            <div className="flex flex-col md:flex-row gap-2 justify-center">
                <article
                    className="md:w-[790px] px-5 md:pr-10 md:text-justify"
                    aria-label={blog.title}
                >
                    <div className="flex justify-center pt-5 md:pt-12">
                        <div className="space-y-5 mt-4 md:mt-0 w-full">
                            {blog.blogJSONData?.data?.map((item, index) => {
                                // CMS h1 fields become h2 in the article body since the
                                // page-level h1 is the blog title in the hero section above.
                                if ("h1" in item && item.h1) {
                                    return (
                                        <h2
                                            key={index}
                                            className="md:text-3xl text-2xl font-semibold font-pp-mori-semibold"
                                        >
                                            {String(item.h1).trim()}
                                        </h2>
                                    );
                                }

                                if ("h2" in item && item.h2) {
                                    return (
                                        <h3
                                            key={index}
                                            className="text-xl md:text-2xl font-semibold font-pp-mori-semibold"
                                        >
                                            {item.h2.trim()}
                                        </h3>
                                    );
                                }

                                if ("p" in item && item.p) {
                                    return (
                                        <p
                                            key={index}
                                            className="text-[#19363FB2] md:text-xl leading-relaxed"
                                        >
                                            {item.p.trim()}
                                        </p>
                                    );
                                }

                                if ("img" in item && item.img) {
                                    return (
                                        <BlogImg
                                            key={index}
                                            src={item.img}
                                            alt={
                                                blog?.title
                                                    ? `Illustration for ${blog.title}`
                                                    : "Blog image"
                                            }
                                        />
                                    );
                                }

                                if ("ul" in item && Array.isArray(item.ul)) {
                                    return (
                                        <ul
                                            key={index}
                                            className="text-[#19363FB2] md:text-xl mt-4 px-4 space-y-3"
                                        >
                                            {item.ul.map((bullet, liIndex) => (
                                                <li key={liIndex} className="list-disc ml-5">
                                                    {bullet.trim()}
                                                </li>
                                            ))}
                                        </ul>
                                    );
                                }

                                return null;
                            })}
                        </div>
                    </div>
                </article>

                {/* Sidebar CTA — rendered statically, no JS needed */}
                <aside className="md:w-[411px] pt-10 relative block">
                    <div className="flex justify-center items-center sticky top-[100px]">
                        <div className="bg-[#062f2a] text-white rounded-sm shadow-lg relative py-7 md:py-15 px-10 md:px-10 w-[95%] md:w-full">
                            <h2 className="text-3xl font-semibold leading-tight mb-6">
                                Ready to cut your cloud costs?
                            </h2>

                            <ul className="space-y-4 text-lg text-gray-200 mb-10 list-disc pl-5">
                                <li>Buy verified unused AI &amp; cloud credits at up to 50% off</li>
                                <li>Escrow-protected transactions with transfer guarantee</li>
                                <li>Zero code changes — use with your existing SDKs</li>
                            </ul>

                            <div className="flex justify-center">
                                <Link
                                    href="/plans-pricing"
                                    className="bg-[#0FF395] hover:bg-emerald-300 text-black font-medium px-6 py-3 rounded-lg transition"
                                >
                                    Explore Credex packages
                                </Link>
                            </div>
                        </div>

                        <div className="absolute -bottom-5 md:-bottom-16 left-1/2 -translate-x-1/2 -z-10">
                            <svg
                                width="300"
                                height="164"
                                viewBox="0 0 669 164"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                                className="hidden md:block"
                                aria-hidden="true"
                            >
                                <path d="M0 0H669V164L334.5 155L0 164V0Z" fill="#F15A42" />
                            </svg>
                            <svg
                                width="314"
                                height="124"
                                viewBox="0 0 314 124"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                                className="block md:hidden"
                                aria-hidden="true"
                            >
                                <path d="M0.875 0.875H313.875V123.875L157.375 117.125L0.875 123.875V0.875Z" fill="#F15A42" />
                            </svg>
                        </div>
                    </div>
                </aside>
            </div>

            <Footer />
        </main>
    );
}

function BlogImg({ src, alt }: { src: string; alt?: string }) {
    return (
        <figure>
            <div className="bg-black mt-5 overflow-hidden relative w-full aspect-[16/9]">
                <Image
                    src={src}
                    alt={alt || "Blog inline image"}
                    fill
                    unoptimized
                    className="object-cover"
                />
                <div className="absolute w-full h-2 top-0 left-0 bg-white" aria-hidden="true" />
                <div className="absolute w-full h-2 bottom-0 left-0 bg-white" aria-hidden="true" />
                <div className="absolute w-2 h-full top-0 left-0 bg-white" aria-hidden="true" />
                <div className="absolute w-2 h-full top-0 right-0 bg-white" aria-hidden="true" />
            </div>
        </figure>
    );
}
