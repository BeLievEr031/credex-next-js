import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/sections/common/Footer";
import PlansAndPricing from "@/sections/Home/PlansAndPricing";

export const metadata: Metadata = {
  title: "Discounted AI & Cloud Credits — Plans & Pricing | Credex",
  description: "Buy cheap, discounted OpenAI, Claude, AWS, Azure, GCP, Cursor, Supabase, and Cloudflare credits at up to 60% off standard list prices. Explore verified AI and cloud credit packages with zero code changes.",
  keywords: [
    // Discount cloud credits
    "discounted aws credits", "cheap aws credits", "discounted gcp credits",
    "cheap gcp credits", "discounted azure credits", "cheap azure credits",
    "discounted google cloud credits",
    // Discount AI credits
    "discounted openai credits", "cheap openai credits", "openai api credits discount",
    "discounted anthropic credits", "discounted claude credits", "claude credits discount",
    "discounted claude opus", "discounted claude sonnet",
    "gemini api credits discount", "discounted gemini api",
    "discounted gpt 4", "discounted gpt 5", "discounted mistral",
    "discounted deepseek", "discounted grok", "discounted llama api",
    "discounted deepgram", "discounted nano banana", "discounted veo",
    // Discount SaaS credits
    "discounted cursor pro", "cursor pro discount", "cursor enterprise discount",
    "cheap cursor subscription", "discounted cloudflare", "cloudflare pro discount",
    "cloudflare enterprise discount", "cheap cloudflare business",
    "discounted supabase", "supabase pro discount",
    "discounted mongodb", "mongodb atlas discount", "mongodb atlas coupon code",
    "mongodb atlas promo code", "mongodb promo code", "mistral coupon code",
    "mistral coupon", "mistral voucher code",
    "discounted posthog", "posthog discount",
    // Purchase intent
    "purchase aws credits", "purchase openai credits", "purchase gcp credits",
    "purchase azure credits", "purchase claude credits", "purchase anthropic credits",
    "buy aws credits online", "buy openai credits online", "buy gcp credits online",
    // AI model credits for sale
    "openrouter credits for sale", "openrouter api credits discount",
    "discounted openrouter", "buy openrouter credits",
    "grok api credits", "buy grok 4 credits",
    // Bulk / reseller discounts
    "bulk aws credits", "discounted lambda labs", "aws credits marketplace",
    "bulk aws credits", "aws credit reseller", "cloud credits reseller",
  ],
  alternates: {
    canonical: "https://credex.rocks/plans-pricing",
  },
  openGraph: {
    title: "Discounted AI & Cloud Credits — Plans & Pricing | Credex",
    description: "Get discounted OpenAI, Claude, AWS, Azure, and GCP credits at up to 60% off. Explore verified plans and pricing for cheap AI and cloud credits on Credex.",
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
    title: "Discounted AI & Cloud Credits — Plans & Pricing | Credex",
    description: "Get discounted OpenAI, Claude, AWS, Azure, and GCP credits at up to 60% off. Explore verified plans and pricing for cheap AI and cloud credits on Credex.",
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
