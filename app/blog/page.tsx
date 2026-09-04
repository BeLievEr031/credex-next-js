import type { Metadata } from "next";
import BlogClient from "@/components/BlogClient";
import { blogApi } from "@/api/api";

export const revalidate = 3600; // revalidate every hour

export const metadata: Metadata = {
  title: "AI & Cloud Credits Blog — Guides, Tips & Savings | Credex",
  description: "Learn how to sell, buy, monetize, and resell unused AWS, GCP, Azure, OpenAI, Claude, and other AI and cloud credits. Expert guides on cloud cost optimization, reducing AWS bills, and getting the most from your AI budget.",
  keywords: [
    // How-to informational
    "how to sell aws credits", "how to sell ai credits", "how to sell cloud credits",
    "how to sell unused aws credits", "how to resell aws credits", "how to resell ai credits",
    "how to monetize aws credits", "how to cash out aws credits",
    "how to get money for unused credits", "how to sell unused cloud credits",
    // Can you? informational
    "can you sell aws credits", "can i resell aws credits",
    "can i sell my openai credits", "can you resell cloud credits",
    // AWS cost optimization
    "aws cost optimization", "cloud cost optimization", "aws cost management tools",
    "cloud cost management", "reduce aws bill", "lower aws costs",
    "aws bill too high", "cloud computing cost management",
    "cloud cost management datadog", "aws cost optimization tools",
    // Unused credits
    "unused aws credits", "leftover aws credits", "aws activate credits expiring",
    "what to do with leftover ai credits", "how do i sell my aws credits",
    // Where to sell
    "where to sell ai credits online", "where can i sell ai credits",
    "where can i sell aws credits", "where to sell aws credits",
    "best website to sell cloud credits", "best place to sell ai credits",
    // Marketplace
    "cloud credits reseller", "ai credits reseller", "aws credits reselling",
    "resell startup credits", "platform to sell cloud credits",
  ],
  alternates: {
    canonical: "https://credex.rocks/blog",
  },
  openGraph: {
    title: "AI & Cloud Credits Blog — Guides, Tips & Savings | Credex",
    description: "Learn how to sell, buy, monetize, and resell unused AWS, GCP, Azure, OpenAI, and Claude credits. Expert guides on cloud cost optimization and AI credit management.",
    url: "https://credex.rocks/blog",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "AI & Cloud Credits Blog — Guides, Tips & Savings | Credex",
    description: "Learn how to sell, buy, monetize, and resell unused AWS, GCP, Azure, OpenAI, and Claude credits. Expert guides on cloud cost optimization and AI credit management.",
  },
};

export default async function BlogPage() {
    let blogs = [];
    try {
        const response = await blogApi.getBlogs({ active: true, limit: 100 });
        if (response?.data?.success && Array.isArray(response?.data?.blogs)) {
            blogs = response.data.blogs;
        }
    } catch (error) {
        console.error("Failed to fetch blogs on server:", error);
    }

    return <BlogClient initialBlogs={blogs} />;
}
