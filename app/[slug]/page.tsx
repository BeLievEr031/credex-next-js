import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/sections/common/Footer";
import {
  getAllProductPlans,
  getProductPlanBySlug,
  getAllProductSlugs,
  ProductPlan,
} from "@/data/productPlans";
import {
  ShieldCheck,
  Lock,
  Code2,
  CheckCircle2,
  ArrowRight,
  Sparkles,
  HelpCircle,
  FileText,
  AlertCircle,
  ChevronRight,
  TrendingDown,
  Layers,
  Zap,
} from "lucide-react";

export const dynamicParams = false;

export async function generateStaticParams() {
  const slugs = getAllProductSlugs();
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }> | { slug: string };
}): Promise<Metadata> {
  const resolvedParams = await params;
  const plan = getProductPlanBySlug(resolvedParams.slug);

  if (!plan) {
    return {
      title: "Product Plan Not Found | Credex",
      description: "The requested credit plan could not be found.",
    };
  }

  const canonicalUrl = `https://credex.rocks/${plan.slug}`;

  return {
    title: plan.title,
    description: plan.description,
    keywords: [plan.primaryKeyword, ...plan.secondaryKeywords],
    alternates: {
      canonical: canonicalUrl,
    },
    openGraph: {
      title: plan.title,
      description: plan.description,
      url: canonicalUrl,
      type: "website",
      images: [
        {
          url: "https://credex.rocks/images/credex-social.jpg",
          width: 1200,
          height: 630,
          alt: `${plan.product} Credits - Credex`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: plan.title,
      description: plan.description,
      images: ["https://credex.rocks/images/credex-social.jpg"],
    },
  };
}

export default async function ProductPlanPage({
  params,
}: {
  params: Promise<{ slug: string }> | { slug: string };
}) {
  const resolvedParams = await params;
  const plan = getProductPlanBySlug(resolvedParams.slug);

  if (!plan) {
    notFound();
  }

  const relatedPlans = plan.relatedSlugs
    .map((slug) => getProductPlanBySlug(slug))
    .filter((p): p is ProductPlan => Boolean(p));

  // JSON-LD Schema
  const schemaData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        name: plan.serviceSchemaName,
        serviceType: plan.serviceSchemaType,
        description: plan.serviceSchemaDesc,
        provider: { "@id": "https://credex.rocks/#organization" },
        areaServed: "Worldwide",
        url: `https://credex.rocks/${plan.slug}`,
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "Home",
            item: "https://credex.rocks",
          },
          {
            "@type": "ListItem",
            position: 2,
            name: "Plans",
            item: "https://credex.rocks/plans-pricing",
          },
          {
            "@type": "ListItem",
            position: 3,
            name: `${plan.shortName} Credits`,
            item: `https://credex.rocks/${plan.slug}`,
          },
        ],
      },
      {
        "@type": "FAQPage",
        mainEntity: plan.faqs.map((faq) => ({
          "@type": "Question",
          name: faq.q,
          acceptedAnswer: {
            "@type": "Answer",
            text: faq.a,
          },
        })),
      },
    ],
  };

  return (
    <main className="min-h-screen bg-[#FAFAF8] text-[#19363F] font-pp-mori-regular antialiased selection:bg-[#0FF395] selection:text-black">
      {/* JSON-LD Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      />

      <Navbar />

      <div className="pt-28 md:pt-36 max-w-6xl mx-auto px-5 md:px-8 pb-16">
        {/* 1. Breadcrumb */}
        <nav
          aria-label="Breadcrumb"
          className="flex items-center gap-2 text-xs md:text-sm text-[#747373] mb-8 font-pp-mori-regular"
        >
          <Link
            href="/"
            className="hover:text-[#086841] transition-colors flex items-center gap-1"
          >
            Home
          </Link>
          <span className="text-gray-300">›</span>
          <Link
            href="/plans-pricing"
            className="hover:text-[#086841] transition-colors"
          >
            Plans
          </Link>
          <span className="text-gray-300">›</span>
          <span className="text-[#19363F] font-medium" aria-current="page">
            {plan.product} Credits
          </span>
        </nav>

        {/* 2. Hero Section */}
        <section className="mb-14">
          <div className="flex flex-col md:flex-row md:items-start justify-between gap-8">
            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#086841]/10 text-[#086841] text-xs font-semibold uppercase tracking-wider mb-5">
                <Sparkles className="w-3.5 h-3.5 text-[#086841]" />
                <span>Verified Marketplace • Up to 50% Off</span>
              </div>

              <h1 className="text-3xl md:text-5xl font-semibold font-pp-mori-semibold leading-tight text-[#19363F] mb-6">
                {plan.h1}
              </h1>

              <p className="text-base md:text-xl text-[#5B677C] leading-relaxed mb-8">
                {plan.intro}
              </p>

              {/* Special Claude Sold-Out Highlight Box & Waitlist */}
              {plan.isSoldOut && (
                <div className="mb-8 p-6 rounded-2xl bg-gradient-to-r from-amber-50 to-orange-50 border border-amber-200">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="px-3 py-1 rounded-full bg-amber-500 text-white text-xs font-bold uppercase tracking-wider">
                      Currently Sold Out
                    </span>
                    <span className="text-sm text-amber-900 font-medium">
                      High demand for direct Anthropic accounts
                    </span>
                  </div>
                  <p className="text-sm text-amber-900 mb-4">
                    Direct Claude API credits sell out quickly. Join our priority
                    waitlist to be notified instantly when verified balances
                    are listed:
                  </p>
                  <form
                    action="/contact-us"
                    method="GET"
                    className="flex flex-col sm:flex-row gap-3 mb-4"
                  >
                    <input
                      type="hidden"
                      name="waitlist"
                      value="buy-claude-credits"
                    />
                    <input
                      type="email"
                      name="email"
                      required
                      placeholder="Enter your work email for stock alerts"
                      className="px-4 py-3 rounded-xl border border-amber-300 bg-white text-sm text-gray-900 focus:outline-none focus:ring-2 focus:ring-amber-500 flex-grow"
                    />
                    <button
                      type="submit"
                      className="px-6 py-3 rounded-xl bg-amber-600 hover:bg-amber-700 text-white font-medium text-sm transition-colors cursor-pointer shrink-0"
                    >
                      Join Stock Waitlist
                    </button>
                  </form>

                  {plan.soldOutAlternativeText && plan.soldOutAlternativeUrl && (
                    <div className="pt-3 border-t border-amber-200/80 flex items-center justify-between flex-wrap gap-2 text-sm text-amber-950 font-medium">
                      <span>{plan.soldOutAlternativeText}</span>
                      <Link
                        href={plan.soldOutAlternativeUrl}
                        className="inline-flex items-center gap-1.5 text-[#086841] hover:text-[#065032] font-semibold underline underline-offset-4"
                      >
                        Explore AWS Bedrock Credits →
                      </Link>
                    </div>
                  )}
                </div>
              )}

              {/* CTA Buttons as real HTML links */}
              <div className="flex flex-wrap items-center gap-4">
                <Link
                  href={`/contact-us?product=${plan.slug}`}
                  className="px-7 py-3.5 rounded-xl bg-[#086841] text-white font-semibold font-pp-mori-semibold hover:bg-[#065032] transition-colors shadow-sm flex items-center gap-2 group"
                >
                  <span>Get {plan.shortName} credits</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link
                  href="/seller"
                  className="px-7 py-3.5 rounded-xl border-2 border-[#19363F]/20 text-[#19363F] font-semibold font-pp-mori-semibold hover:border-[#086841] hover:text-[#086841] transition-colors bg-white"
                >
                  Sell {plan.shortName} credits
                </Link>
              </div>
            </div>

            {/* Provider Logo Banner */}
            <div className="shrink-0 p-6 md:p-8 rounded-2xl bg-white border border-gray-200 shadow-sm flex flex-col items-center justify-center text-center w-full md:w-64">
              <div className="w-24 h-24 relative flex items-center justify-center mb-4">
                <Image
                  src={plan.logo}
                  alt={`${plan.product} logo`}
                  width={96}
                  height={96}
                  className="max-h-20 w-auto object-contain"
                  priority
                />
              </div>
              <span className="font-semibold font-pp-mori-semibold text-lg text-[#19363F]">
                {plan.product}
              </span>
              <span className="text-xs text-[#086841] font-semibold mt-1">
                Verified Inventory
              </span>
            </div>
          </div>
        </section>

        {/* 3. Plan Box Section */}
        <section className="mb-16">
          <div className="bg-white rounded-2xl border border-gray-200 p-6 md:p-8 shadow-[0_4px_24px_rgba(0,0,0,0.04)]">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-6 border-b border-gray-100 gap-4">
              <div>
                <h2 className="text-2xl md:text-3xl font-semibold font-pp-mori-semibold text-[#19363F]">
                  {plan.product} credit plans
                </h2>
                <p className="text-sm text-[#747373] mt-1">
                  Verified account packages with transfer guarantee and escrow settlement
                </p>
              </div>
              <span className="self-start sm:self-auto px-3.5 py-1.5 rounded-full bg-[#0FF395]/20 text-[#086841] font-bold text-xs uppercase tracking-wider">
                Discount: up to 50% off
              </span>
            </div>

            {/* Real HTML Definition Table / DL */}
            <dl className="grid grid-cols-1 md:grid-cols-4 gap-6 pt-6">
              <div className="p-4 rounded-xl bg-[#FAFAF8] border border-gray-100">
                <dt className="text-xs uppercase font-medium text-gray-500 mb-1">
                  Product
                </dt>
                <dd className="text-base font-semibold text-[#19363F]">
                  {plan.planBox.productName}
                </dd>
              </div>

              <div className="p-4 rounded-xl bg-[#FAFAF8] border border-gray-100">
                <dt className="text-xs uppercase font-medium text-gray-500 mb-1">
                  Validity
                </dt>
                <dd className="text-base font-semibold text-[#19363F]">
                  {plan.planBox.validity}
                </dd>
              </div>

              <div className="p-4 rounded-xl bg-[#FAFAF8] border border-gray-100">
                <dt className="text-xs uppercase font-medium text-gray-500 mb-1">
                  Credit Sizes
                </dt>
                <dd className="text-base font-semibold text-[#086841]">
                  {plan.planBox.credits}
                </dd>
              </div>

              <div className="p-4 rounded-xl bg-[#FAFAF8] border border-gray-100">
                <dt className="text-xs uppercase font-medium text-gray-500 mb-1">
                  Rate Limits / Support
                </dt>
                <dd className="text-base font-semibold text-[#19363F]">
                  {plan.planBox.rateLimits}
                </dd>
              </div>
            </dl>

            <div className="mt-6 pt-6 border-t border-gray-100 flex flex-col sm:flex-row items-start sm:items-center justify-between text-xs text-[#5B677C] gap-3">
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-[#086841]" />
                Zero code changes required — use with your existing tools & SDKs
              </span>
              <span className="flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-[#086841]" />
                100% Escrow-protected transaction
              </span>
            </div>
          </div>
        </section>

        {/* 4. Why Credex Section */}
        <section className="mb-16">
          <div className="text-center md:text-left mb-8">
            <p className="text-xs uppercase font-semibold text-[#086841] tracking-widest mb-2">
              Security & Guarantees
            </p>
            <h2 className="text-2xl md:text-3xl font-semibold font-pp-mori-semibold text-[#19363F]">
              Why buy {plan.product} credits through Credex
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            <div className="bg-white p-6 rounded-2xl border border-gray-200 shadow-sm flex flex-col">
              <div className="w-10 h-10 rounded-xl bg-[#086841]/10 text-[#086841] flex items-center justify-center mb-4">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <h3 className="font-semibold font-pp-mori-semibold text-lg text-[#19363F] mb-2">
                Escrow-protected payment
              </h3>
              <p className="text-sm text-[#5B677C] leading-relaxed">
                Your payment is held securely in escrow and only released once
                you verify ownership and balance validity.
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-gray-200 shadow-sm flex flex-col">
              <div className="w-10 h-10 rounded-xl bg-[#086841]/10 text-[#086841] flex items-center justify-center mb-4">
                <Lock className="w-5 h-5" />
              </div>
              <h3 className="font-semibold font-pp-mori-semibold text-lg text-[#19363F] mb-2">
                Double-blind NDA
              </h3>
              <p className="text-sm text-[#5B677C] leading-relaxed">
                Both buyer and seller details remain completely confidential
                under binding institutional non-disclosure agreements.
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-gray-200 shadow-sm flex flex-col">
              <div className="w-10 h-10 rounded-xl bg-[#086841]/10 text-[#086841] flex items-center justify-center mb-4">
                <Code2 className="w-5 h-5" />
              </div>
              <h3 className="font-semibold font-pp-mori-semibold text-lg text-[#19363F] mb-2">
                Zero code changes
              </h3>
              <p className="text-sm text-[#5B677C] leading-relaxed">
                Keep your existing architecture, codebases, endpoints, and SDKs.
                Simply plug in the new API keys or credentials.
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-gray-200 shadow-sm flex flex-col">
              <div className="w-10 h-10 rounded-xl bg-[#086841]/10 text-[#086841] flex items-center justify-center mb-4">
                <CheckCircle2 className="w-5 h-5" />
              </div>
              <h3 className="font-semibold font-pp-mori-semibold text-lg text-[#19363F] mb-2">
                Verified sellers and balances
              </h3>
              <p className="text-sm text-[#5B677C] leading-relaxed">
                Every credit balance undergoes strict manual verification
                and balance confirmation before ever being listed.
              </p>
            </div>
          </div>
        </section>

        {/* 5. How it Works Section */}
        <section className="mb-16">
          <div className="bg-[#062524] text-white rounded-3xl p-8 md:p-12 relative overflow-hidden">
            <div className="max-w-2xl mb-10">
              <p className="text-xs uppercase font-semibold text-[#0FF395] tracking-widest mb-2">
                Process
              </p>
              <h2 className="text-2xl md:text-4xl font-semibold font-pp-mori-semibold text-white">
                How it works
              </h2>
              <p className="text-[#8FA8A6] text-sm md:text-base mt-2">
                Safe, audited transfer of verified credit balances in three transparent steps.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="border-l-2 border-[#0FF39540] pl-5">
                <span className="text-[#0FF395] font-mono text-sm block mb-2">
                  Step 01
                </span>
                <h3 className="text-lg font-semibold font-pp-mori-semibold text-white mb-2">
                  Vendor audit
                </h3>
                <p className="text-[#8FA8A6] text-sm leading-relaxed">
                  We verify the seller&apos;s account ownership, active balance,
                  expiry dates, and service tiers before matching with buyers.
                </p>
              </div>

              <div className="border-l-2 border-[#0FF39540] pl-5">
                <span className="text-[#0FF395] font-mono text-sm block mb-2">
                  Step 02
                </span>
                <h3 className="text-lg font-semibold font-pp-mori-semibold text-white mb-2">
                  Escrow funding
                </h3>
                <p className="text-[#8FA8A6] text-sm leading-relaxed">
                  The buyer funds the deal through our secure escrow mechanism.
                  Funds remain protected and untouched during credentials handover.
                </p>
              </div>

              <div className="border-l-2 border-[#0FF39540] pl-5">
                <span className="text-[#0FF395] font-mono text-sm block mb-2">
                  Step 03
                </span>
                <h3 className="text-lg font-semibold font-pp-mori-semibold text-white mb-2">
                  Guarantee transfer
                </h3>
                <p className="text-[#8FA8A6] text-sm leading-relaxed">
                  Full control of root credentials or API keys is transferred to you.
                  You confirm balance access, backed by our replacement guarantee.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* 6. Use Cases Section */}
        <section className="mb-16">
          <div className="mb-8">
            <p className="text-xs uppercase font-semibold text-[#086841] tracking-widest mb-2">
              Target Applications
            </p>
            <h2 className="text-2xl md:text-3xl font-semibold font-pp-mori-semibold text-[#19363F]">
              Who uses {plan.product} credits
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {plan.useCases.map((useCase, idx) => (
              <div
                key={idx}
                className="bg-white p-6 rounded-2xl border border-gray-200 shadow-sm flex items-start gap-4"
              >
                <div className="w-8 h-8 rounded-full bg-[#086841]/10 text-[#086841] flex items-center justify-center font-bold text-sm shrink-0 mt-0.5">
                  {idx + 1}
                </div>
                <p className="text-base text-[#19363F] font-medium leading-snug">
                  {useCase}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* 7. FAQ Section (HTML Pre-rendered on Page Load) */}
        <section className="mb-16">
          <div className="mb-8">
            <p className="text-xs uppercase font-semibold text-[#086841] tracking-widest mb-2">
              Common Questions
            </p>
            <h2 className="text-2xl md:text-3xl font-semibold font-pp-mori-semibold text-[#19363F]">
              Frequently Asked Questions
            </h2>
          </div>

          <div className="space-y-4">
            {plan.faqs.map((faq, idx) => (
              <details
                key={idx}
                open={idx === 0}
                className="group bg-white rounded-2xl border border-gray-200 p-6 [&_summary::-webkit-details-marker]:hidden transition-all duration-200"
              >
                <summary className="flex items-center justify-between cursor-pointer list-none">
                  <h3 className="font-semibold font-pp-mori-semibold text-lg text-[#19363F] pr-4">
                    {faq.q}
                  </h3>
                  <span className="w-7 h-7 rounded-full bg-gray-100 text-gray-600 flex items-center justify-center shrink-0 group-open:rotate-90 transition-transform">
                    <ChevronRight className="w-4 h-4" />
                  </span>
                </summary>
                <p className="mt-4 text-[#5B677C] text-base leading-relaxed border-t border-gray-100 pt-4">
                  {faq.a}
                </p>
              </details>
            ))}
          </div>
        </section>

        {/* 8. Related Credits Section */}
        {relatedPlans.length > 0 && (
          <section className="mb-16">
            <div className="mb-8">
              <p className="text-xs uppercase font-semibold text-[#086841] tracking-widest mb-2">
                Explore More
              </p>
              <h2 className="text-2xl md:text-3xl font-semibold font-pp-mori-semibold text-[#19363F]">
                Related credits
              </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
              {relatedPlans.map((rel) => (
                <Link
                  key={rel.slug}
                  href={`/${rel.slug}`}
                  className="bg-white p-6 rounded-2xl border border-gray-200 hover:border-[#086841] hover:shadow-md transition-all group flex flex-col justify-between"
                >
                  <div>
                    <div className="w-12 h-12 relative mb-4">
                      <Image
                        src={rel.logo}
                        alt={`${rel.product} logo`}
                        width={48}
                        height={48}
                        className="max-h-10 w-auto object-contain"
                      />
                    </div>
                    <h3 className="font-semibold font-pp-mori-semibold text-lg text-[#19363F] group-hover:text-[#086841] transition-colors mb-1">
                      {rel.product}
                    </h3>
                    <p className="text-xs text-[#747373] mb-3">
                      Tiers: {rel.planBox.credits}
                    </p>
                  </div>
                  <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#086841] mt-4">
                    View plan details <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </span>
                </Link>
              ))}
            </div>
          </section>
        )}

        {/* 9. Guides Section */}
        {plan.guides.length > 0 && (
          <section className="mb-16">
            <div className="mb-8">
              <p className="text-xs uppercase font-semibold text-[#086841] tracking-widest mb-2">
                Knowledge Base
              </p>
              <h2 className="text-2xl md:text-3xl font-semibold font-pp-mori-semibold text-[#19363F]">
                Guides & Resources
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {plan.guides.map((guide, idx) => (
                <Link
                  key={idx}
                  href={guide.url}
                  className="bg-white p-6 rounded-2xl border border-gray-200 hover:border-[#086841] hover:shadow-sm transition-all group flex items-start gap-4"
                >
                  <div className="w-10 h-10 rounded-xl bg-[#086841]/10 text-[#086841] flex items-center justify-center shrink-0 mt-0.5">
                    <FileText className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-semibold font-pp-mori-semibold text-base text-[#19363F] group-hover:text-[#086841] transition-colors mb-1">
                      {guide.title}
                    </h3>
                    <span className="inline-flex items-center gap-1 text-xs font-medium text-[#747373]">
                      Read guide <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </section>
        )}

        {/* Sell Credits Callout if applicable */}
        {plan.sellText && (
          <section className="mb-16">
            <div className="p-6 md:p-8 rounded-2xl bg-[#E8F5E9] border border-[#C8E6C9] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div>
                <h3 className="text-lg font-semibold font-pp-mori-semibold text-[#1B5E20]">
                  {plan.sellText}
                </h3>
                <p className="text-sm text-[#2E7D32] mt-1">
                  Don&apos;t let unused balances sit idle and expire. Turn them into cash securely.
                </p>
              </div>
              <div className="flex items-center gap-3 shrink-0">
                {plan.sellUrl && (
                  <Link
                    href={plan.sellUrl}
                    className="text-xs font-semibold text-[#1B5E20] hover:underline"
                  >
                    Read sell guide →
                  </Link>
                )}
                <Link
                  href={plan.sellBtnUrl}
                  className="px-5 py-2.5 rounded-xl bg-[#1B5E20] hover:bg-[#144717] text-white font-medium text-sm transition-colors"
                >
                  List your credits
                </Link>
              </div>
            </div>
          </section>
        )}

        {/* 10. Final CTA Section */}
        <section className="text-center pt-8 pb-4">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-semibold font-pp-mori-semibold text-[#19363F] mb-4">
              Ready to cut your {plan.shortName} bill?
            </h2>
            <p className="text-base md:text-lg text-[#5B677C] mb-8">
              Connect with our team to lock in verified credits at up to 50% discount with full escrow protection.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <Link
                href={`/contact-us?product=${plan.slug}`}
                className="px-8 py-4 rounded-xl bg-[#086841] text-white font-semibold font-pp-mori-semibold hover:bg-[#065032] transition-colors shadow-sm"
              >
                Get {plan.shortName} credits
              </Link>
              <a
                href="https://wa.me/918956042145?text=Hi,%20I%27m%20interested%20in%20buying%20credits"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-4 rounded-xl bg-[#19363F] text-white font-semibold font-pp-mori-semibold hover:bg-black transition-colors"
              >
                Talk to sales
              </a>
            </div>
          </div>
        </section>
      </div>

      <Footer />
    </main>
  );
}
