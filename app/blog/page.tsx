import type { Metadata } from "next";
import BlogClient from "@/components/BlogClient";
import { blogApi } from "@/api/api";

export const revalidate = 3600; // revalidate every hour

export const metadata: Metadata = {
  title: "Credex Blog - AI and Cloud Credits Insights",
  description: "Read the latest articles, guides, and updates on buying and selling unused cloud and AI credits (OpenAI, AWS, GCP, Claude, etc.) on Credex.",
  alternates: {
    canonical: "https://credex.rocks/blog",
  },
  openGraph: {
    title: "Credex Blog - AI and Cloud Credits Insights",
    description: "Read the latest articles, guides, and updates on buying and selling unused cloud and AI credits.",
    url: "https://credex.rocks/blog",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Credex Blog - AI and Cloud Credits Insights",
    description: "Read the latest articles, guides, and updates on buying and selling unused cloud and AI credits (OpenAI, AWS, GCP, Claude, etc.) on Credex.",
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
