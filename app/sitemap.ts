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

  // 13 Product Plan pages
  const productPlanRoutes = [
    "/buy-openai-credits",
    "/buy-claude-credits",
    "/buy-aws-credits",
    "/buy-gcp-credits",
    "/buy-azure-credits",
    "/buy-mongodb-credits",
    "/buy-supabase-credits",
    "/buy-posthog-credits",
    "/buy-elevenlabs-credits",
    "/buy-digitalocean-credits",
    "/buy-deepgram-credits",
    "/buy-cursor-credits",
    "/buy-lambda-gpu-credits",
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
    } else if (route === "/plans-pricing") {
      priority = 0.85;
      changeFrequency = "weekly";
    }

    return {
      url: `${baseUrl}${route}`,
      lastModified: new Date(),
      changeFrequency,
      priority,
    };
  });

  // Add product plan entries
  const productPlanEntries: MetadataRoute.Sitemap = productPlanRoutes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: 0.85,
  }));
  sitemapEntries.push(...productPlanEntries);

  // Dynamic pages from the blog API
  try {
    const response = await blogApi.getBlogs({ active: true, limit: 100 });
    if (response?.data?.success && Array.isArray(response?.data?.blogs)) {
      const blogs = response.data.blogs;
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const blogEntries: MetadataRoute.Sitemap = blogs.map((blog: any) => ({
        url: `${baseUrl}/blog/${blog.slug}`,
        lastModified: new Date(blog.createdAt || new Date()),
        changeFrequency: "weekly" as const,
        priority: 0.75,
      }));
      sitemapEntries.push(...blogEntries);
    }
  } catch (error) {
    console.error("Error generating dynamic sitemap entries:", error);
  }

  return sitemapEntries;
}
