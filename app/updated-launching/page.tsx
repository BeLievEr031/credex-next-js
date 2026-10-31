import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/sections/common/Footer";
import UpdatedLaunchingClient from "./UpdatedLaunchingClient";

export const metadata: Metadata = {
  title: "Credex AI Router · One API for Every AI Model, Up to 45% Cheaper",
  description:
    "Use Claude, GPT, Gemini, DeepSeek and 200+ AI models with one API key. OpenAI-compatible, automatic fallback, no data training, and up to 45% lower token prices. Pay only for what you use.",
  keywords: [
    "credex ai router",
    "openrouter alternative",
    "cheaper llm api",
    "one api for all ai models",
    "openai compatible api",
    "claude api discount",
    "gpt api discount",
    "deepseek api",
    "llm gateway",
  ],
  alternates: {
    canonical: "https://credex.rocks/updated-launching",
  },
  openGraph: {
    title: "Credex AI Router · One API for Every AI Model, Up to 45% Cheaper",
    description:
      "One API key for Claude, GPT, Gemini, DeepSeek and 200+ models. OpenAI-compatible, automatic fallback, up to 45% lower prices.",
    url: "https://credex.rocks/updated-launching",
    siteName: "Credex",
    images: [
      {
        url: "https://credex.rocks/images/ai_router_gateway.jpg",
        width: 1200,
        height: 675,
        alt: "Credex AI Router - One API for every AI model",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Credex AI Router · One API for Every AI Model, Up to 45% Cheaper",
    description:
      "One API key for Claude, GPT, Gemini, DeepSeek and 200+ models at up to 45% lower token prices.",
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
      "url": "https://credex.rocks/updated-launching",
      "description":
        "One OpenAI-compatible API for 200+ AI models with automatic fallback and up to 45% lower token prices.",
      "offers": {
        "@type": "Offer",
        "price": "0",
        "priceCurrency": "USD",
        "description": "$50 free API credits for early access users",
      },
    },
    {
      "@type": "WebPage",
      "@id": "https://credex.rocks/updated-launching#webpage",
      "url": "https://credex.rocks/updated-launching",
      "name": "Credex AI Router · One API for Every AI Model",
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
            "item": "https://credex.rocks/updated-launching",
          },
        ],
      },
    },
  ],
};

export default function UpdatedLaunchingPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(routerSchema) }}
      />
      <Navbar />
      <main>
        <UpdatedLaunchingClient />
      </main>
      <Footer
        title="Same AI. Smaller bill. Ready to switch?"
        actionBtn1Text="Claim $50 Credits"
        actionBtn2Text="Chat on WhatsApp"
        actionBtnLink="https://wa.me/918956042145?text=Hi,%20I%20have%20questions%20about%20the%20Credex%20AI%20Router%20launch."
      />
    </>
  );
}
