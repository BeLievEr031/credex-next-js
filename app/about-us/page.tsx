import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/sections/common/Footer";
import AboutUsClient from "@/components/AboutUsClient";

export const metadata: Metadata = {
  title: "About Credex | Secure Marketplace for AI & Cloud Credits",
  description: "Credex is a secure marketplace to buy discounted AI & cloud credits (AWS, OpenAI, GCP, Azure, Claude) or sell unused ones. Escrow-protected, NDA-backed.",
  keywords: [
    "AI & cloud credit marketplace",
    "about Credex",
    "what is Credex",
    "buy discounted cloud credits",
    "sell unused cloud credits",
    "unused startup credits",
    "AWS Activate credits",
    "escrow-protected credit transfer",
    "is it safe to buy cloud credits",
    "cloud cost optimization",
    "cloud credits marketplace",
    "ai credits marketplace",
  ],
  alternates: {
    canonical: "https://credex.rocks/about-us",
  },
  openGraph: {
    title: "About Credex | Secure Marketplace for AI & Cloud Credits",
    description: "Buy discounted AI & cloud credits or sell unused ones. Escrow-protected, NDA-backed.",
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
    title: "About Credex | Secure Marketplace for AI & Cloud Credits",
    description: "Buy discounted AI & cloud credits or sell unused ones. Escrow-protected, NDA-backed.",
    images: ["https://credex.rocks/images/credex-social.jpg"],
  },
};

const aboutSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": "https://credex.rocks/#organization",
      "name": "Credex",
      "legalName": "Dreadnought Technology Private Limited",
      "url": "https://credex.rocks",
      "logo": "https://credex.rocks/favicon.svg",
      "email": "team@credex.rocks",
      "sameAs": ["https://www.linkedin.com/company/credexmarketplace/"],
      "address": [
        {
          "@type": "PostalAddress",
          "streetAddress": "DSO-IFZA, IFZA Properties, Dubai Silicon Oasis",
          "addressLocality": "Dubai",
          "addressCountry": "AE",
        },
        {
          "@type": "PostalAddress",
          "streetAddress": "WeWork, DLF Forum, Cyber City Phase-III",
          "addressLocality": "Gurugram",
          "addressRegion": "Haryana",
          "postalCode": "122002",
          "addressCountry": "IN",
        },
      ],
    },
    {
      "@type": "AboutPage",
      "@id": "https://credex.rocks/about-us#webpage",
      "url": "https://credex.rocks/about-us",
      "name": "About Credex | Secure Marketplace for AI & Cloud Credits",
      "about": { "@id": "https://credex.rocks/#organization" },
      "breadcrumb": { "@id": "https://credex.rocks/about-us#breadcrumb" },
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://credex.rocks/about-us#breadcrumb",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://credex.rocks" },
        { "@type": "ListItem", "position": 2, "name": "About Us", "item": "https://credex.rocks/about-us" },
      ],
    },
    {
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "What is Credex?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text":
              "Credex is a marketplace where startups buy discounted AI and cloud credits, and companies sell credits they won't use before they expire. Supported credits include AWS, Azure, GCP, OpenAI, Anthropic Claude, Gemini and GPU providers.",
          },
        },
        {
          "@type": "Question",
          "name": "Is it safe to buy cloud credits on Credex?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text":
              "Yes. Every deal runs through escrow. Sellers verify ownership and balance first, the buyer's payment is held until access is transferred and confirmed, and both sides sign a double-blind NDA.",
          },
        },
        {
          "@type": "Question",
          "name": "How much can I save on cloud and AI credits?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text":
              "Buyers typically save up to 50% compared with paying the provider directly for the same credits.",
          },
        },
        {
          "@type": "Question",
          "name": "Do I need to change my code or API setup?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text":
              "No. You get full control of the account, so your existing SDKs, API keys, endpoints and rate limits work as before.",
          },
        },
        {
          "@type": "Question",
          "name": "Which credits can I sell?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text":
              "AWS (including AWS Activate), Azure, GCP, OpenAI, MongoDB Atlas, Cursor, Lambda Labs and other AI and cloud credits.",
          },
        },
      ],
    },
  ],
};

export default function AboutUsPage() {
  return (
    <main className="min-h-screen pt-[120px] md:pt-[80px] font-pp-mori-regular overflow-x-hidden">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(aboutSchema) }}
      />
      <Navbar
        links={[
          { lable: "Pricing", link: "/plans-pricing" },
          { lable: "Blog", link: "/blog" },
          { lable: "Contact", link: "/contact-us" },
        ]}
      />
      <AboutUsClient />
      <Footer key="about-footer" />
    </main>
  );
}
