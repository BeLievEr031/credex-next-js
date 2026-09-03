import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/sections/common/Footer";
import PlansAndPricing from "@/sections/Home/PlansAndPricing";

export const metadata: Metadata = {
  title: "AI & Cloud Credits Plans & Pricing | Credex",
  description: "Explore pricing plans for premium OpenAI, Claude, AWS, Azure, and GCP credits. Save up to 60% compared to standard list prices with zero code changes.",
  alternates: {
    canonical: "https://credex.rocks/plans-pricing",
  },
  openGraph: {
    title: "AI & Cloud Credits Plans & Pricing | Credex",
    description: "Explore pricing plans for premium OpenAI, Claude, AWS, Azure, and GCP credits. Save up to 60% compared to standard list prices with zero code changes.",
    url: "https://credex.rocks/plans-pricing",
    type: "website",
    images: [
      {
        url: "https://credex.rocks/images/credex-social.jpg",
        width: 1200,
        height: 630,
        alt: "Credex Plans & Pricing",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "AI & Cloud Credits Plans & Pricing | Credex",
    description: "Explore pricing plans for premium OpenAI, Claude, AWS, Azure, and GCP credits. Save up to 60% compared to standard list prices with zero code changes.",
    images: ["https://credex.rocks/images/credex-social.jpg"],
  },
};

export default function PlansPricingPage() {
  return (
    <main className="min-h-screen pt-[120px] md:pt-[80px] font-pp-mori-regular overflow-x-hidden">
      <Navbar />
      
      <div className="max-w-7xl mx-auto px-5 md:px-32 mt-16 text-center md:text-left">
        <h1 className="text-[36px] md:text-[56px] font-semibold font-pp-mori-semibold leading-tight text-[#19363F] mb-4">
          AI & Cloud Credit Plans
        </h1>
        <p className="text-[#5B677C] text-base md:text-lg max-w-2xl font-pp-mori-regular">
          Explore our available premium credits from OpenAI, Claude, AWS, Azure, and GCP. Save up to 60% with secure escrow verification.
        </p>
      </div>

      <PlansAndPricing />
      <Footer key="pricing-footer" />
    </main>
  );
}
