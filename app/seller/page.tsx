import type { Metadata } from "next"
import Faq from "@/sections/common/Faq"
import Footer from "@/sections/common/Footer"
import AcceptedVendors from "@/sections/seller/AcceptedVendors"
import Hero from "@/sections/seller/Hero"
import InfoCards from "@/sections/seller/InfoCards"
import ProcessStep from "@/sections/seller/ProcessStep"
import Navbar from "@/components/Navbar"
import Testimonial from "@/sections/common/Testimonial"

import AishaImg from "@/assets/sellers/Aisha_Patel_UK_50.webp";
import AnanyaImg from "@/assets/sellers/Ananya_Sharma_India_50.webp";
import AnthonyImg from "@/assets/sellers/Anthony_Reed_USA_50.webp";
import ClaraImg from "@/assets/sellers/Clara_Dubois_France_50.webp";
import ElenaImg from "@/assets/sellers/Elena_Popescu_Romania_50.webp";
import EthanImg from "@/assets/sellers/Ethan_Cole_USA_50.webp";
import HussainImg from "@/assets/sellers/Hussain_Al_Nuaimi_UAE_50.webp";
import JakubImg from "@/assets/sellers/Jakub_Nowak_Poland_50.webp";
import KaranImg from "@/assets/sellers/Karan_Mehta_India_50.webp";
import MohammedImg from "@/assets/sellers/Mohammed_Al_Habsi_UAE_50.webp";
import NikolaiImg from "@/assets/sellers/Nikolai_Petrov_Czechia_50.webp";
import SofiaImg from "@/assets/sellers/Sofia_Dimitrova_Bulgaria_50.webp";

export const metadata: Metadata = {
  title: "Sell Unused AI & Cloud Credits — Monetize & Recover Sunk Costs | Credex",
  description: "Turn idle OpenAI, Claude, AWS, GCP, Azure, Cursor, Lambda Labs, and Supabase credits into cash. Sell unused AI and cloud credits securely via escrow. Monetize leftover, expiring, or startup credits with Mutual NDA and confidential transfer.",
  keywords: [
    // Core sell intent
    "sell aws credits", "sell unused aws credits", "sell aws credits for cash",
    "sell gcp credits", "sell unused gcp credits", "sell azure credits",
    "sell unused azure credits", "sell openai credits", "sell ai credits",
    "sell cloud credits", "sell unused cloud credits", "sell google cloud credits",
    // Monetize intent
    "monetize aws credits", "monetize gcp credits", "monetize azure credits",
    "monetize cloud credits", "monetize cursor credits", "monetize lambda labs credits",
    "monetize supabase credits", "monetize mongodb credits", "monetize digitalocean credits",
    "monetize posthog credits",
    // Cash out / convert
    "cash out aws credits", "cash out cloud credits", "convert aws credits to cash",
    "how to cash out aws credits", "how to get money for unused credits",
    // Specific platform sell
    "sell lambda labs credits", "sell unused lambda labs credits",
    "sell cursor credits", "sell unused cursor credits",
    "sell supabase credits", "sell unused supabase credits",
    "sell mongodb credits", "sell unused mongodb credits",
    "sell posthog credits", "sell unused posthog credits",
    "sell gpu credits",
    // Resell intent
    "resell aws credits", "resell ai credits", "resell cloud credits",
    "resell azure credits", "resell gcp credits", "resell openai credits",
    "resell startup credits", "resell unused credits", "resell claude credits",
    "aws credits reselling", "can you sell aws credits", "can i resell aws credits",
    // How-to informational
    "how to sell aws credits", "how to sell ai credits", "how to sell cloud credits",
    "how to sell unused aws credits", "how to resell aws credits", "how to resell ai credits",
    "how to monetize aws credits", "where can i sell aws credits",
    "where can i sell ai credits", "where to sell ai credits online",
    "where to sell aws credits", "place to sell aws credits",
    "best place to sell aws credits", "best place to sell ai credits",
    "best website to sell cloud credits", "website to sell aws credits",
    "website to sell ai credits", "website to resell ai credits",
    "site to sell unused credits", "platform to sell aws credits",
    "platform to sell ai credits", "platform to sell cloud credits",
    // Unused/leftover credits
    "unused aws credits", "leftover aws credits", "aws activate credits expiring",
    "aws activate credits for sale", "how do i sell my aws credits",
    "unused mongodb atlas credits", "where can i sell unused cloud credits",
    "what to do with leftover ai credits",
    // Monetize AWS specifically
    "how to monetize aws credits", "aws bill too high", "how to resell ai credits",
    "can i sell my openai credits",
  ],
  alternates: {
    canonical: "https://credex.rocks/seller",
  },
  openGraph: {
    title: "Sell Unused AI & Cloud Credits — Monetize & Recover Sunk Costs | Credex",
    description: "Turn idle OpenAI, Claude, AWS, GCP, Azure, and other credits into cash. Sell unused AI and cloud credits securely via escrow with Mutual NDA on Credex.",
    url: "https://credex.rocks/seller",
    type: "website",
    images: [
      {
        url: "https://credex.rocks/images/credex-social.jpg",
        width: 1200,
        height: 630,
        alt: "Sell Unused Cloud & AI Credits on Credex",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Sell Unused AI & Cloud Credits — Monetize & Recover Sunk Costs | Credex",
    description: "Turn idle OpenAI, Claude, AWS, GCP, Azure, and other credits into cash. Sell unused AI and cloud credits securely via escrow on Credex.",
    images: ["https://credex.rocks/images/credex-social.jpg"],
  },
};

export default function SellerPage() {
    const faqs = [
        {
            question: "Who can sell credits on Credex?",
            answer: "Verified companies/startups with legitimately owned unused credits. We onboard only verified vendors and audit ownership history."
        },
        {
            question: "We shut down/pivoted. Can we recover value?",
            answer: "Yes, that's common. Credex buys accounts with credits to help you recover sunk costs, then passes savings to buyers."
        },
        {
            question: "What do you ask for during onboarding?",
            answer: "We sign a Mutual NDA. You provide account proofs/screenshots (credit balance, validity, rate limits). For vetted buyers, we can grant read-only access for test calls before closing."
        },
        {
            question: "How is identity handled?",
            answer: "Your identity is not disclosed to the buyer, and the buyer’s identity is not disclosed to you."
        },
        {
            question: "How do transfers and payouts work?",
            answer: "Buyer request → payment (escrow) → secure transfer of access/ownership → buyer confirms usage → seller receives payout."
        },
        {
            question: "What transfer method is used?",
            answer: "Either ownership transfer to the buyer’s email or root admin credentials. After transfer, the buyer changes passwords and enables 2FA clean handoff from your side."
        },
        {
            question: "How do you prevent stale/invalid credits being sold?",
            answer: "We perform ownership auditing and track credit/token history to avoid expired or misused credits."
        },
        {
            question: "What packages move fastest?",
            answer: "Strong demand for OpenAI, Anthropic (Claude), AWS, Azure and GCP in a range of package sizes."
        },
        {
            question: "Do providers such as OpenAI, Claude, AWS, GCP or Azure allow this?",
            answer: "Not just OpenAI, Claude, AWS, GCP or Azure but almost every single AI model, LLM, cloud or SaaS service provider has an industry-wide standard Terms & Conditions which says that these companies do not allow their credits to be exchanged or sold. It is the same as Nike saying that you have bought the shoes only for your personal use and you cannot re-sell them. It is unfair and wasteful."
        },
        {
            question: "How quickly do deals close?",
            answer: "Paperwork usually takes several days. Once that’s done and payment is queued, ownership/credentials typically transfer within ~24 hours."
        },
        {
            question: "What support exists if something goes wrong post-transfer?",
            answer: "Credex provides 24×7 support and a replacement/refund policy for buyers if accounts become inaccessible within validity (with proof). This, plus escrow, protects both sides."
        },
        {
            question: "What info do you need from us for invoicing?",
            answer: "Legal entity name, address, invoice emails, and (if applicable) GST (India, +18%) or TRN/VAT (UAE, +5%)."
        }
    ];

    const reviews = [
        {
            name: "CFO",
            designation: "Cloud Tools, USA",
            review:
                "After a product pivot, we had a pile of unused credits. Credex’s verification felt rigorous but fair. Once the buyer confirmed usage, escrow released and cash hit our account. It recovered the budget we’d written off.",
            img: AnthonyImg,
        },
        {
            name: "Founder",
            designation: "AI Studio, India",
            review:
                "We shut down a prototype program and listed our remaining credits. Identity shielding mattered; we didn't want our name in the wild. The team handled the paperwork and kept it discreet.",
            img: AnanyaImg,
        },
        {
            name: "Operations lead",
            designation: "R&D, UAE",
            review:
                "The process was clean: NDA, screenshots, then transfer. No haggling theatrics. We moved on from a pivot without feeling wasteful.",
            img: MohammedImg,
        },
        {
            name: "COO",
            designation: "EdTech, Romania",
            review:
                "We had grants we couldn’t fully use. Credex turned that into cash for a new content partnership. The transparency around credit history gave us confidence the deal would stick.",
            img: ElenaImg,
        },
        {
            name: "Finance Lead",
            designation: "Robotics, USA",
            review:
                "Happy with the escrow model. We didn’t want to risk chargebacks or gray-area buyers. Verification plus auditing protected both sides.",
            img: EthanImg,
        },
        {
            name: "Head of Ops",
            designation: "Legal Tech, Bulgaria",
            review:
                "Our internal shutdown timeline was tight; Credex still closed within the week after docs were done. The buyer got the limits they wanted, we got paid, and everyone moved on.",
            img: SofiaImg,
        },
        {
            name: "Program Manager",
            designation: "Health Tech, India",
            review:
                "I liked that they weren’t reselling sketchy vouchers. It's a real account ownership transfer with proper 2FA handoff, which kept our compliance team calm.",
            img: KaranImg,
        },
        {
            name: "CEO",
            designation: "Media & Entertainment, France",
            review:
                "We had mis-sized our credits during a hiring freeze. Converting them via Credex gave us a runway for marketing without the sunk-cost sting.",
            img: ClaraImg,
        },
        {
            name: "CTO",
            designation: "Consulting, UAE",
            review:
                "The auditing step looked for expiry risks before listing. We appreciated that diligence and avoided buyer disputes later.",
            img: HussainImg,
        },
        {
            name: "Co-founder",
            designation: "Data, Poland",
            review:
                "Straightforward fee structure and clear communication. We provided proofs once, and the team handled buyer questions using read-only access.",
            img: JakubImg,
        },
        {
            name: "General Counsel",
            designation: "Legal Tech, UK",
            review:
                "The NDA and identity shielding were non-negotiable for us. Credex respected both and documented the transfer trail properly.",
            img: AishaImg,
        },
        {
            name: "CFO",
            designation: "Cloud, Czechia",
            review:
                "Nice to turn stranded credits into a budget for an EU compliance project. The payout was released right after the buyer confirmed access.",
            img: NikolaiImg,
        },
    ];

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
        <main className="">
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
            <AcceptedVendors />
            <ProcessStep />
            <InfoCards />
            <div className="pt-[40px] md:pt-[100px]">
                <Testimonial reviews={reviews}
                    description="These quotes are from organizations that sold unused credits through Credex. Identifying details are anonymized; process and outcomes are unchanged."
                    type="SELLER"
                />
            </div>
            <Faq faqs={faqs} type="SELLER" />
            <Footer
                title="Ready to recover sunk - costs?"
                actionBtn1Text="Sell credits"
                actionBtnLink="https://wa.me/918956042145?text=Hi,%20I%27m%20a%20Seller"
            />
        </main>
    )
}
