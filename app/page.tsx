import type { Metadata } from "next"
import dynamic from "next/dynamic"
import Navbar from "@/components/Navbar"
import Hero from "@/sections/Home/Hero"

const StatsFeatureSection = dynamic(() => import("@/sections/Home/StatsFeatureSection"))
const PlansAndPricing = dynamic(() => import("@/sections/Home/PlansAndPricing"))
const ProcessStep = dynamic(() => import("@/sections/Home/ProcessStep"))
const Security = dynamic(() => import("@/sections/Home/Security"))
const AgencySavings = dynamic(() => import("@/sections/Home/AgencySavings"))
const Testimonial = dynamic(() => import("@/sections/common/Testimonial"))
const Faq = dynamic(() => import("@/sections/common/Faq"))
const Footer = dynamic(() => import("@/sections/common/Footer"))

import AveryImg from "@/assets/buyers/Avery_Nguyen_USA_13_50.webp";
import FatimaImg from "@/assets/buyers/Fatima_Al_Qasimi_UAE_3_50.webp";
import JensImg from "@/assets/buyers/Jens_Muller_Germany_2_50.webp";
import LucaImg from "@/assets/buyers/Luca_Romano_Italy_2_50.webp";
import MartaImg from "@/assets/buyers/Marta_Garcia_Spain_2_50.webp";
import MayaImg from "@/assets/buyers/Maya_Thompson_USA_2_50.webp";
import OmarImg from "@/assets/buyers/Omar_Al_Mansoori_UAE_3_50.webp";
import PriyaImg from "@/assets/buyers/Priya_Nair_India_2_50.webp";
import RachelImg from "@/assets/buyers/Rachel_Lim_Singapore_3_50.webp";
import RohitImg from "@/assets/buyers/Rohit_Iyer_India_3_50.webp";
import SofiaImg from "@/assets/buyers/Sofia_Nilsson_Sweden_3_50.webp";
import WeiLinImg from "@/assets/buyers/Wei-Lin_Tan_Singapore_2_50.webp";

export const metadata: Metadata = {
  title: "Credex | Buy & Sell Unused AI & Cloud Credits — Save Up to 60%",
  description: "Buy discounted AWS, OpenAI, GCP, Azure, Claude, and Gemini credits at up to 60% off, or sell and monetize your unused AI and cloud credits securely. Credex is the trusted marketplace for buyers and sellers of AI and cloud credits.",
  keywords: [
    // Buy intent — homepage primary
    "buy aws credits", "buy openai credits", "buy gcp credits", "buy azure credits",
    "buy claude credits", "buy anthropic credits", "buy gemini credits",
    "buy gpu credits", "buy h100 credits", "buy a100 credits",
    "buy lambda labs credits", "buy cloudflare credits", "buy supabase credits",
    "buy mongodb credits", "buy deepgram credits", "buy posthog credits",
    "purchase aws credits", "purchase openai credits", "purchase gcp credits",
    "buy openai credits online", "buy aws credits online", "buy gcp credits online",
    "buy google cloud credits", "buy cursor credits",
    // For sale
    "aws credits for sale", "openai credits for sale", "gcp credits for sale",
    "azure credits for sale", "google cloud credits for sale", "claude api credits for sale",
    "anthropic credits for sale", "gemini credits for sale", "lambda labs credits for sale",
    "cloudflare credits for sale", "supabase credits for sale", "cursor credits for sale",
    "mongodb credits for sale", "openai api credits for sale",
    // Sell / monetize intent
    "sell aws credits", "sell unused aws credits", "sell gcp credits",
    "sell azure credits", "sell openai credits", "sell ai credits",
    "sell cloud credits", "monetize aws credits", "monetize cloud credits",
    "cash out aws credits", "convert aws credits to cash",
    "sell aws credits for cash", "sell unused cloud credits",
    // Resell / marketplace
    "resell aws credits", "resell ai credits", "resell cloud credits",
    "resell startup credits", "cloud credits reseller", "ai credits reseller",
    "aws credits marketplace", "platform to sell ai credits",
    // Discount / cheap
    "discounted aws credits", "discounted openai credits", "discounted gcp credits",
    "discounted azure credits", "discounted claude credits", "cheap aws credits",
    "cheap openai credits", "cheap gcp credits", "cheap azure credits",
    // AI model credits
    "buy gpt credits", "buy gpt 4 credits", "buy gpt 4o credits",
    "buy claude sonnet credits", "buy claude opus credits", "buy claude haiku credits",
    "buy gemini flash credits", "buy gemini pro credits", "buy mistral credits",
    "buy deepseek credits", "buy grok credits", "buy llama credits",
    // Cost optimization
    "cloud cost optimization", "aws cost optimization", "reduce aws bill",
    "cloud cost management", "unused aws credits", "leftover aws credits",
  ],
  alternates: {
    canonical: "https://credex.rocks/",
  },
  openGraph: {
    title: "Credex | Buy & Sell Unused AI & Cloud Credits — Save Up to 60%",
    description: "Buy discounted AWS, OpenAI, GCP, Azure, and Claude credits at up to 60% off, or sell and monetize your unused AI and cloud credits securely through Credex.",
    url: "https://credex.rocks/",
    siteName: "Credex",
    images: [
      {
        url: "https://credex.rocks/images/credex-social.jpg",
        width: 1200,
        height: 630,
        alt: "Credex - Unused Cloud & AI Credits Marketplace",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Credex | Buy & Sell Unused AI & Cloud Credits — Save Up to 60%",
    description: "Buy discounted AWS, OpenAI, GCP, Azure, and Claude credits at up to 60% off, or sell and monetize your unused AI and cloud credits securely through Credex.",
    creator: "@credex",
    images: ["https://credex.rocks/images/credex-social.jpg"],
  },
};

export default function Home() {
    const faqs = [
        {
            question: "What is Credex?",
            answer:
                "Credex is a verified marketplace where companies buy or sell unused AI models, LLMs, Cloud, API & SaaS credits (e.g., OpenAI, Claude, AWS, GCP, Azure). You get the same credits you’d buy from providers: no infrastructure changes, no performance loss.",
        },
        {
            question: "What kinds of credits can I buy, and how much do I save?",
            answer:
                "Popular options include OpenAI, Anthropic, AWS, and GCP. Buyers typically save about 45–50% compared to standard list prices.",
        },
        {
            question: "Will performance or rate limits change if I buy through Credex?",
            answer:
                "No. It would be the same as you opening your own account on these platforms. We source top-tier accounts with enterprise rate limits, so your calls perform as expected.",
        },
        {
            question: "How do you transfer credits or access?",
            answer:
                "Two ways: (a) ownership transfer to your designated email, or (b) root admin/credentials transfer. You then change the password and enable 2FA for full control and privacy.",
        },
        {
            question: "Will my identity be shared?",
            answer:
                "No, your identity will not be shared, a Mutual NDA is executed. The seller signs an NDA with Credex and Buyer also signs an NDA with Credex. This preserves confidentiality for both sides.",
        },
        {
            question: "How long does this take?",
            answer:
                "Plan for about a week for paperwork. After payment is ready, the ownership/credentials transfer typically completes within ~24 hours. If your legal team is quick to revert then we can wrap up the entire process within 24 hours.",
        },
        {
            question: "Can I verify the account before paying?",
            answer:
                "Yes. We provide screenshots showing credit balance, validity, and rate limits. For extra assurance, we can arrange read-only access so your team can generate API keys and run test calls.",
        },
        {
            question: "What if the access later breaks or credits become unusable?",
            answer:
                "We offer 24×7 support and an ownership guarantee: if credits become inaccessible within validity, we’ll replace the credits or refund the unused amount (buyer has to share the proof).",
        },
        {
            question: "Where do these credits come from?",
            answer:
                "From companies that over-purchased or startups that received grant credits via accelerators/incubators and no longer need them (e.g., shut down or pivoted). Credex buys those accounts and passes the savings to buyers.",
        },
        {
            question: "How do you keep deals safe and clean?",
            answer:
                "Four ways: vendor verification, ownership auditing (credit history), transaction transparency (escrow + history + support chat), and in-house authentication tools.",
        },
        {
            question: "What’s the payment + escrow flow?",
            answer:
                "Buyer request → payment → secure transfer of access → buyer confirms usage → seller payout (with escrow protection throughout).",
        },
        {
            question: "Do I need to change my code or infrastructure?",
            answer:
                "No. Use your existing SDKs/endpoints. It’s full API compatibility with zero code changes.",
        },
        {
            question: "Any real-world examples of impact?",
            answer:
                "A fast-scaling agency cut LLM spend by up to 50%, improved project margins by ~50%, and made no code changes, just predictable usage pricing.",
        },
        {
            question: "What paperwork do you need from us? Any taxes?",
            answer:
                "For invoicing: legal entity name, address, invoice emails, and (if applicable) GST No. (India, +18% as input credit) or TRN/VAT (UAE, +5% as input).",
        },
        {
            question: "Why talk about sustainability here?",
            answer:
                "Letting credits expire is digital waste. Credex helps reclaim spend and reduce waste “impact-led SaaS sustainability.”",
        },
    ]

    const reviews = [
        {
            name: "CTO",
            designation: "Software Company, USA",
            review:
                "We were burning cash experimenting with multiple LLMs. Credex let us lock in credits ~40% cheaper without touching our code. Read-only checks before paying gave my team confidence, and transfer was done the next day. It took pressure off our runway and let us ship faster.",
            img: MayaImg,
        },
        {
            name: "Co-founder",
            designation: "EdTech, India",
            review:
                "Our OpenAI usage kept spiking during exam season. With Credex, we bought Tier-5 accounts at a discount and kept our latency targets. The savings went straight to expanding scholarships. Support was responsive even on Sunday nights.",
            img: RohitImg,
        },
        {
            name: "Head of Data",
            designation: "Analytics, Singapore",
            review:
                "Procurement cycles can kill momentum. Credex’s escrow + proof screenshots made approvals easy, then we switched the account owner and turned on 2FA. Zero production changes, immediate savings.",
            img: WeiLinImg,
        },
        {
            name: "VP Product",
            designation: "Health Tech, Sweden",
            review:
                "We model patient-support workflows on Claude and GPT-4. The discounted credits helped us scale while staying within our non-profit budget. Audit trails and vendor verification were the deciding factors for our board.",
            img: SofiaImg,
        },
        {
            name: "Engineering Lead",
            designation: "Robotics, UAE",
            review:
                "We needed burst capacity for a client demo week. Credex got us verified accounts with top-tier limits and clean ownership. No drop in performance. The 24/7 chat actually answered rare these days.",
            img: OmarImg,
        },
        {
            name: "Founder",
            designation: "Legal Tech, USA",
            review:
                "Our case-summaries app has unpredictable traffic. Credex let us lock predictable pricing and cut our cloud + LLM blend by ~38%. The refund/replacement guarantee reduced my risk enough to say ‘yes’.",
            img: AveryImg,
        },
        {
            name: "COO",
            designation: "Health Tech, Italy",
            review:
                "We’re conservative about vendors. Getting screenshots + limited access to test API calls before purchase made our security team comfortable. Transfer was quick, and monthly costs dropped exactly as quoted.",
            img: LucaImg,
        },
        {
            name: "Data Science Manager",
            designation: "E-commerce, India",
            review:
                "We moved our training jobs to GCP/AWS credits. No rate-limit surprises, no mystery blockers, just real accounts with runway left. Would do it again.",
            img: PriyaImg,
        },
        {
            name: "CEO",
            designation: "EdTech, UAE",
            review:
                "The team helped us buy time before a regional pilot. The NDA approach and identity shielding mattered to our partners. We scaled student chatbots across three campuses within budget.",
            img: FatimaImg,
        },
        {
            name: "CTO",
            designation: "IT Services, Germany",
            review:
                "Solid process: NDA, escrow, proof, transfer, done. We saved on OpenAI and reallocated the budget to human QA. Hard to argue with that.",
            img: JensImg,
        },
        {
            name: "Product Lead",
            designation: "Legal Tech, Spain",
            review:
                "We tested via read-only access and saw the limits we needed. After transfer, we flipped passwords and 2FA and were alive in an hour. It felt like buying time as much as credits.",
            img: MartaImg,
        },
        {
            name: "Co-founder",
            designation: "FinTech, Singapore",
            review:
                "The savings let us launch two features that were stuck in cost limbo. We kept hitting our SLAs with zero code changes exactly as promised.",
            img: RachelImg,
        },
    ];

    const organizationSchema = {
        "@context": "https://schema.org",
        "@type": "Organization",
        "name": "Credex",
        "url": "https://credex.rocks",
        "logo": "https://credex.rocks/favicon.svg",
        "description": "Credex is the trusted marketplace for reselling unused AI and cloud credits from OpenAI, Claude, Gemini, Anthropic, AWS, GCP, and more securely and at minimal cost.",
        "sameAs": [
            "https://www.linkedin.com/company/credexmarketplace/"
        ]
    };

    const websiteSchema = {
        "@context": "https://schema.org",
        "@type": "WebSite",
        "name": "Credex",
        "url": "https://credex.rocks"
    };

    const faqSchema = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": faqs.map(faq => ({
            "@type": "Question",
            "name": faq.question,
            "acceptedAnswer": {
                "@type": "Answer",
                "text": faq.answer
            }
        }))
    };

    return (
        <main className="relative min-h-screen w-full font-pp-mori-regular overflow-x-hidden">
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
            />
            <Navbar
                links={[
                    {
                        lable: "How it Works",
                        link: '#how-it-works'
                    },
                    {
                        lable: "Guarantee",
                        link: '#guarantee'
                    },
                    {
                        lable: "FAQ",
                        link: '#faq'
                    },
                    {
                        lable: "Contact",
                        link: '#contact'
                    },
                    {
                        lable: "Blog",
                        link: '/blog'
                    },
                ]}
            />
            <Hero />
            <StatsFeatureSection />
            <PlansAndPricing />
            <ProcessStep />
            <Security />
            <div className="px-2 md:px-0">
                <AgencySavings />
            </div>
            <Testimonial reviews={reviews}
                description="These quotes are from real buyers using Credex to buy or sell unused credits.Identifying details (names & company names) are anonymized due to NDAs. Roles, regions, industries, and outcomes are accurate. For serious evaluations, we can share reference customers under NDA."
                type="BUYER"
            />
            <Faq faqs={faqs} type="BUYER" />
            <Footer key={"page-footer-45"} />
        </main>
    )
}
