import { MetadataRoute } from "next";
import { blogApi } from "@/api/api";

export const dynamic = "force-static";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = "https://credex.rocks";

  // Static pages
  const staticRoutes = [
    "",
    "/seller",
    "/blog",
    "/cancellation-refunds",
    "/privacy",
    "/shipping",
    "/term-condition",
    "/refferal/buyer",
    "/refferal/seller",
    "/plans-pricing",
    "/contact-us",
    "/about-us",
  ];

  const sitemapEntries: MetadataRoute.Sitemap = staticRoutes.map((route) => {
    let priority = 0.5;
    let changeFrequency: "daily" | "weekly" | "monthly" = "weekly";

    if (route === "") {
      priority = 1.0;
      changeFrequency = "daily";
    } else if (route === "/seller") {
      priority = 0.9;
      changeFrequency = "daily";
    } else if (route === "/blog") {
      priority = 0.8;
      changeFrequency = "daily";
    }

    return {
      url: `${baseUrl}${route}`,
      lastModified: new Date(),
      changeFrequency,
      priority,
    };
  });

  // Dynamic pages from the blog API
  try {
    const response = await blogApi.getBlogs({ active: true, limit: 100 });
    if (response?.data?.success && Array.isArray(response?.data?.blogs)) {
      const blogs = response.data.blogs;
      const blogEntries: MetadataRoute.Sitemap = blogs.map((blog: any) => ({
        url: `${baseUrl}/blog/${blog.slug}`,
        lastModified: new Date(blog.createdAt || new Date()),
        changeFrequency: "weekly" as const,
        priority: 0.6,
      }));
      sitemapEntries.push(...blogEntries);
    }
  } catch (error) {
    console.error("Error generating dynamic sitemap entries:", error);
  }

  return sitemapEntries;
}
