"use client";

import Link from "next/link";
import { GradientLine } from "@/components/Svg";

/* ---------- Static check icon ---------- */
function StaticCheck() {
    return (
        <div className="relative flex items-center justify-center">
            <svg
                width="88"
                height="88"
                viewBox="0 0 88 88"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                {/* Track circle */}
                <circle cx="44" cy="44" r="40" stroke="#E6F5EE" strokeWidth="4" fill="white" />
                {/* Full arc */}
                <circle cx="44" cy="44" r="40" stroke="url(#checkGrad)" strokeWidth="4" strokeLinecap="round" fill="none" />
                <defs>
                    <linearGradient id="checkGrad" x1="0" y1="0" x2="88" y2="88" gradientUnits="userSpaceOnUse">
                        <stop stopColor="#0FF395" />
                        <stop offset="1" stopColor="#086841" />
                    </linearGradient>
                </defs>
            </svg>

            {/* Checkmark */}
            <svg
                className="absolute"
                width="36"
                height="36"
                viewBox="0 0 36 36"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                <path
                    d="M7 18.5L14.5 26L29 10"
                    stroke="url(#tickGrad)"
                    strokeWidth="3.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                />
                <defs>
                    <linearGradient id="tickGrad" x1="7" y1="10" x2="29" y2="26" gradientUnits="userSpaceOnUse">
                        <stop stopColor="#0FF395" />
                        <stop offset="1" stopColor="#086841" />
                    </linearGradient>
                </defs>
            </svg>
        </div>
    );
}

/* ---------- What happens next card ---------- */
const nextSteps = [
    {
        icon: (
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                <path d="M20 4H4C2.9 4 2 4.9 2 6v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2z" stroke="#086841" strokeWidth="1.8" strokeLinecap="round" />
                <path d="M2 8l10 7 10-7" stroke="#086841" strokeWidth="1.8" strokeLinecap="round" />
            </svg>
        ),
        label: "Confirmation email sent to your inbox",
    },
    {
        icon: (
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                <circle cx="12" cy="12" r="10" stroke="#086841" strokeWidth="1.8" />
                <path d="M12 6v6l4 2" stroke="#086841" strokeWidth="1.8" strokeLinecap="round" />
            </svg>
        ),
        label: "Our team reviews your inquiry within 24 hours",
    },
    {
        icon: (
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                <path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z" stroke="#086841" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
        ),
        label: "We'll reach out with next steps & pricing",
    },
    {
        icon: (
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" stroke="#086841" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
        ),
        label: "Credits transferred securely within 24h of payment",
    },
];

/* ---------- Credex logo mark ---------- */
function CredexMark({ size = 28 }: { size?: number }) {
    return (
        <svg width={size} height={size + 1} viewBox="0 0 36 37" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M29.1273 9.94472C31.5201 11.5758 32.3367 14.4527 32.1936 17.2658C32.0483 20.1199 30.928 23.2817 28.9699 26.1543C27.0117 29.027 24.4777 31.226 21.8741 32.4045C19.3079 33.5658 16.3315 33.8572 13.9388 32.2262C11.5461 30.5952 10.7294 27.7182 10.8725 24.9051C11.0178 22.0509 12.1385 18.8885 14.0967 16.0158C16.055 13.1432 18.5885 10.9449 21.192 9.76646C23.7582 8.60497 26.7345 8.31367 29.1273 9.94472Z" stroke="#086841" strokeWidth="4" />
            <path d="M27.0331 4.86983C33.5605 9.31935 33.8542 18.9905 28.9713 26.154C24.0882 33.3176 14.9783 36.5796 8.45079 32.13C1.92339 27.6804 1.63001 18.0085 6.51312 10.845C11.3963 3.68178 20.5057 0.420458 27.0331 4.86983Z" stroke="#086841" strokeWidth="4" />
        </svg>
    );
}

/* ========== Main Component ========== */
export default function ThankYouClient() {
    return (
        <main className="relative min-h-screen w-full font-pp-mori-regular overflow-x-hidden flex flex-col items-center justify-center px-4 pt-28 pb-16">
            {/* ── Background grid lines ── */}
            <div className="absolute -top-[205px] left-1/2 -translate-x-1/2 opacity-40 pointer-events-none">
                <GradientLine />
            </div>

            {/* ── Soft radial glow ── */}
            <div
                className="absolute inset-0 pointer-events-none"
                style={{
                    background:
                        "radial-gradient(ellipse 70% 55% at 50% 50%, rgba(15,243,149,0.08) 0%, transparent 70%)",
                }}
            />

            {/* ── Card ── */}
            <div className="relative z-10 w-full max-w-xl">
                {/* Badge */}
                <div className="flex justify-center mb-8">
                    <span className="border border-[#D9D9D9] text-sm px-4 py-1.5 rounded-full flex items-center gap-2 bg-white/70 backdrop-blur-sm font-pp-mori-semibold text-[#086841]">
                        <span
                            className="inline-block w-2 h-2 rounded-full"
                            style={{ background: "linear-gradient(135deg, #0FF395, #086841)" }}
                        />
                        Form Submitted Successfully
                    </span>
                </div>

                {/* White card */}
                <div className="bg-white border border-[#E5EDE8] rounded-3xl shadow-xl shadow-green-900/5 px-8 py-10 md:px-12 md:py-12">
                    {/* Check icon */}
                    <div className="flex justify-center mb-6">
                        <StaticCheck />
                    </div>

                    {/* Headline */}
                    <h1 className="text-[36px] md:text-[44px] font-semibold font-pp-mori-semibold text-center leading-tight">
                        <span
                            className="bg-clip-text text-transparent"
                            style={{ backgroundImage: "linear-gradient(135deg, #0FF395 0%, #086841 60%)" }}
                        >
                            Thank You!
                        </span>
                    </h1>

                    {/* Sub-text */}
                    <p className="text-center text-[#444] text-[16px] md:text-[18px] mt-3 leading-relaxed">
                        Your inquiry has been received. The{" "}
                        <span className="font-pp-mori-semibold text-[#086841]">Credex</span>{" "}
                        team will review it and get back to you within{" "}
                        <span className="font-pp-mori-semibold">24 hours</span>.
                    </p>

                    {/* Divider */}
                    <div className="my-8 flex items-center gap-3">
                        <div className="flex-1 h-px bg-[#E5EDE8]" />
                        <span className="text-[13px] text-[#999] font-pp-mori-regular tracking-wide uppercase">
                            What happens next
                        </span>
                        <div className="flex-1 h-px bg-[#E5EDE8]" />
                    </div>

                    {/* Steps list */}
                    <ul className="space-y-4 mb-10">
                        {nextSteps.map((step, i) => (
                            <li key={i} className="flex items-start gap-4">
                                {/* Step number bubble */}
                                <div
                                    className="shrink-0 w-8 h-8 rounded-full flex items-center justify-center text-xs font-pp-mori-semibold font-semibold text-[#086841]"
                                    style={{
                                        background: "linear-gradient(135deg, rgba(15,243,149,0.18), rgba(8,104,65,0.10))",
                                        border: "1px solid rgba(8,104,65,0.15)",
                                    }}
                                >
                                    {i + 1}
                                </div>
                                {/* Icon + text */}
                                <div className="flex items-center gap-3 pt-0.5">
                                    <div
                                        className="shrink-0 w-8 h-8 rounded-xl flex items-center justify-center"
                                        style={{ background: "rgba(15,243,149,0.1)" }}
                                    >
                                        {step.icon}
                                    </div>
                                    <span className="text-[15px] text-[#333]">{step.label}</span>
                                </div>
                            </li>
                        ))}
                    </ul>

                    {/* CTA Buttons */}
                    <div className="flex flex-col sm:flex-row gap-3">
                        <Link
                            href="/"
                            id="thank-you-home-btn"
                            className="flex-1 flex items-center justify-center gap-2 bg-[#1A1A1A] text-white font-pp-mori-semibold font-semibold px-6 py-4 rounded-xl transition-all duration-200 hover:bg-[#086841] hover:scale-[1.02] active:scale-[0.98] text-center"
                        >
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                                <path d="M3 9.5L12 3l9 6.5V20a1 1 0 01-1 1H4a1 1 0 01-1-1V9.5z" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
                                <path d="M9 21V12h6v9" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
                            </svg>
                            Go to Home Page
                        </Link>

                        {/* <Link
                            href="/plans-pricing"
                            id="thank-you-plans-btn"
                            className="flex-1 flex items-center justify-center gap-2 border border-[#086841] text-[#086841] font-pp-mori-semibold font-semibold px-6 py-4 rounded-xl transition-all duration-200 hover:bg-[#086841]/8 hover:scale-[1.02] active:scale-[0.98] text-center"
                            style={{ background: "rgba(15,243,149,0.06)" }}
                        >
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                                <rect x="3" y="3" width="18" height="18" rx="3" stroke="currentColor" strokeWidth="1.8" />
                                <path d="M8 12h8M8 8h8M8 16h5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
                            </svg>
                            View Plans & Pricing
                        </Link> */}
                    </div>
                </div>

                {/* Footer brand note */}
                <div className="mt-8 flex items-center justify-center gap-2 text-[14px] text-[#888]">
                    <CredexMark size={22} />
                    <span>
                        <span className="font-pp-mori-semibold text-[#086841]">credex</span>{" "}
                        · Safe transfer · Anonymous exchange · 24×7 support
                    </span>
                </div>
            </div>
        </main>
    );
}
