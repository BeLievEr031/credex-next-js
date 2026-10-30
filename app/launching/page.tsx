import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/sections/common/Footer";
import LaunchingClient from "./LaunchingClient";

export const metadata: Metadata = {
  title: "Credex AI Router · Unified LLM Gateway & Token Arbitrage | Launching Soon",
  description:
    "One unified endpoint for 200+ frontier models including Claude 3.7 Sonnet, GPT-4.5, DeepSeek R1, and Gemini 2.0. Drop-in OpenAI SDK replacement, automatic failover, and up to 45% lower token pricing.",
  keywords: [
    "credex ai router",
    "openrouter alternative",
    "outerlabs ai",
    "unified llm gateway",
    "claude 3.7 sonnet api discount",
    "deepseek r1 api",
    "openai base_url router",
    "llm cost arbitrage",
    "multi-provider llm fallback",
    "cheaper ai tokens",
    "cursor openai base url",
  ],
  alternates: {
    canonical: "https://credex.rocks/launching",
  },
  openGraph: {
    title: "Credex AI Router · Unified LLM Gateway & Token Arbitrage | Launching Soon",
    description:
      "One unified endpoint for 200+ frontier models (Claude 3.7, GPT-4.5, DeepSeek R1, Gemini 2.0). Drop-in OpenAI SDK replacement, automatic failover, and up to 45% lower token pricing.",
    url: "https://credex.rocks/launching",
    siteName: "Credex",
    images: [
      {
        url: "https://credex.rocks/images/ai_router_gateway.jpg",
        width: 1200,
        height: 675,
        alt: "Credex AI Router - Unified LLM Gateway",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Credex AI Router · Unified LLM Gateway & Token Arbitrage | Launching Soon",
    description:
      "One unified endpoint for 200+ frontier models (Claude 3.7, GPT-4.5, DeepSeek R1, Gemini 2.0) at up to 45% lower token cost.",
    creator: "@credex",
    images: ["https://credex.rocks/images/ai_router_gateway.jpg"],
  },
};

const routerSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "SoftwareApplication",
      "name": "Credex AI Router",
      "applicationCategory": "DeveloperApplication",
      "operatingSystem": "All",
      "url": "https://credex.rocks/launching",
      "description":
        "Unified intelligent LLM routing gateway for 200+ frontier models with automatic multi-provider failover and up to 45% lower token prices.",
      "offers": {
        "@type": "Offer",
        "price": "0",
        "priceCurrency": "USD",
        "description": "$50 Free API Compute Credits for VIP Waitlist Early Access",
      },
    },
    {
      "@type": "WebPage",
      "@id": "https://credex.rocks/launching#webpage",
      "url": "https://credex.rocks/launching",
      "name": "Credex AI Router · Unified LLM Gateway | Launching Soon",
      "breadcrumb": {
        "@type": "BreadcrumbList",
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "Home",
            "item": "https://credex.rocks",
          },
          {
            "@type": "ListItem",
            "position": 2,
            "name": "AI Router Launching Soon",
            "item": "https://credex.rocks/launching",
          },
        ],
      },
    },
  ],
};

export default function LaunchingPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(routerSchema) }}
      />
      <Navbar />
      <main>
        <LaunchingClient />
      </main>
      <Footer
        title="Ready to slash your LLM API spend by 40%?"
        actionBtn1Text="Claim $50 Credits"
        actionBtn2Text="WhatsApp Alpha Desk"
        actionBtnLink="https://wa.me/918956042145?text=Hi,%20I%20have%20questions%20about%20the%20Credex%20AI%20Router%20launch."
      />
    </>
  );
}
