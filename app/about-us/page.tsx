import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/sections/common/Footer";
import AboutUsClient from "@/components/AboutUsClient";

export const metadata: Metadata = {
  title: "About Us | Credex — Trusted AI & Cloud Credit Marketplace",
  description: "Learn about Credex — the trusted marketplace for buying, selling, and monetizing unused AI and cloud credits. We eliminate digital waste by securely connecting verified buyers and sellers of AWS, OpenAI, GCP, Azure, and Claude credits.",
  keywords: [
    "about credex", "credex marketplace", "cloud credits marketplace",
    "ai credits marketplace", "trusted cloud credits platform",
    "sell unused cloud credits", "buy discounted cloud credits",
    "resell ai credits platform", "unused aws credits marketplace",
    "openai credits marketplace", "gcp credits marketplace",
    "cloud cost optimization platform", "ai credit exchange",
    "cloud credits reseller platform", "secure credit transfer",
  ],
  alternates: {
    canonical: "https://credex.rocks/about-us",
  },
  openGraph: {
    title: "About Us | Credex — Trusted AI & Cloud Credit Marketplace",
    description: "Learn about Credex — the trusted marketplace for buying, selling, and monetizing unused AI and cloud credits. We securely connect buyers and sellers of AWS, OpenAI, GCP, Azure, and Claude credits.",
    url: "https://credex.rocks/about-us",
    type: "website",
    images: [
      {
        url: "https://credex.rocks/images/credex-social.jpg",
        width: 1200,
        height: 630,
        alt: "About Credex",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "About Us | Credex — Trusted AI & Cloud Credit Marketplace",
    description: "Learn about Credex — the trusted marketplace for buying, selling, and monetizing unused AI and cloud credits.",
    images: ["https://credex.rocks/images/credex-social.jpg"],
  },
};

export default function AboutUsPage() {
  return (
    <main className="min-h-screen pt-[120px] md:pt-[80px] font-pp-mori-regular overflow-x-hidden">
      <Navbar />
      <AboutUsClient />
      <Footer key="about-footer" />
    </main>
  );
}
