"use client";

import { useState } from "react";
import { motion, type Variants } from "motion/react";
import Image from "next/image";
import Link from "next/link";
import { 
  Shield, 
  Cpu, 
  Code2, 
  RefreshCw, 
  ArrowRight, 
  ChevronDown,
  Building2,
  Percent,
  ShieldCheck
} from "lucide-react";
import { GradientLine, Ellipse2 } from "./Svg";

import GCPLogo from "../assets/logos/gcp.png";
import ClaudeLogo from "../assets/logos/claude.png";
import GeminiLogo from "../assets/logos/gemini.png";
import ChatgptLogo from "../assets/logos/chatgpt.png";
import AWSLogo from "../assets/logos/aws.png";
import AzureLogo from "../assets/logos/azure.png";

export default function AboutUsClient() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  // Container for staggered text fade-in
  const container: Variants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const item: Variants = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  const floatLogo: Variants = {
    hidden: { opacity: 0, y: 15, scale: 0.95 },
    show: (delay = 0) => ({
      opacity: 1,
      y: [0, -8, 0],
      scale: 1,
      transition: {
        delay,
        duration: 2.2,
        ease: "easeInOut",
        repeat: Infinity,
        repeatType: "mirror",
      },
    }),
  };

  const valueCardHover: Variants = {
    hover: {
      y: -6,
      borderColor: "#0FF395",
      boxShadow: "0px 10px 30px rgba(15, 243, 149, 0.08)",
      transition: { duration: 0.3, ease: "easeOut" }
    }
  };

  const faqs = [
    {
      question: "What is Credex?",
      answer: "Credex is a marketplace where startups buy discounted AI and cloud credits, and companies sell credits they won't use before they expire. Supported credits include AWS, Azure, GCP, OpenAI, Anthropic Claude, Gemini and GPU providers."
    },
    {
      question: "Is it safe to buy cloud credits on Credex?",
      answer: "Yes. Every deal runs through escrow. Sellers verify ownership and balance first, the buyer's payment is held until access is transferred and confirmed, and both sides sign a double-blind NDA."
    },
    {
      question: "How much can I save on cloud and AI credits?",
      answer: "Buyers typically save up to 50% compared with paying the provider directly for the same credits."
    },
    {
      question: "Do I need to change my code or API setup?",
      answer: "No. You get full control of the account, so your existing SDKs, API keys, endpoints and rate limits work as before."
    },
    {
      question: "Which credits can I sell?",
      answer: "AWS (including AWS Activate), Azure, GCP, OpenAI, MongoDB Atlas, Cursor, Lambda Labs and other AI and cloud credits.",
      linkText: "List your credits here.",
      linkHref: "/seller"
    }
  ];

  return (
    <div className="relative w-full overflow-hidden bg-[#fafafa]">
      
      {/* 1. Hero Section */}
      <section className="relative min-h-[90vh] flex flex-col justify-center items-center pt-20 pb-16 px-4 md:px-0">
        
        {/* Floating Background Logos (Left Side) */}
        <motion.div
          variants={floatLogo}
          custom={0.2}
          initial="hidden"
          animate="show"
          className="absolute left-10 bottom-24 z-10 w-[90px] h-auto hidden lg:block opacity-45 hover:opacity-100 transition-opacity"
        >
          <Image src={GCPLogo} alt="Google Cloud (GCP) credits" className="w-full h-auto object-contain" />
        </motion.div>
        
        <motion.div
          variants={floatLogo}
          custom={0.5}
          initial="hidden"
          animate="show"
          className="absolute left-6 top-[38%] z-10 w-[90px] h-auto hidden lg:block opacity-45 hover:opacity-100 transition-opacity"
        >
          <Image src={ClaudeLogo} alt="Anthropic Claude credits" className="w-full h-auto object-contain" />
        </motion.div>

        <motion.div
          variants={floatLogo}
          custom={0.8}
          initial="hidden"
          animate="show"
          className="absolute left-28 top-20 z-10 w-[90px] h-auto hidden lg:block opacity-45 hover:opacity-100 transition-opacity"
        >
          <Image src={GeminiLogo} alt="Google Gemini API credits" className="w-full h-auto object-contain" />
        </motion.div>

        {/* Floating Background Logos (Right Side) */}
        <motion.div
          variants={floatLogo}
          custom={0.3}
          initial="hidden"
          animate="show"
          className="absolute right-10 bottom-24 z-10 w-[90px] h-auto hidden lg:block opacity-45 hover:opacity-100 transition-opacity"
        >
          <Image src={ChatgptLogo} alt="OpenAI ChatGPT credits" className="w-full h-auto object-contain" />
        </motion.div>

        <motion.div
          variants={floatLogo}
          custom={0.6}
          initial="hidden"
          animate="show"
          className="absolute right-6 top-[38%] z-10 w-[90px] h-auto hidden lg:block opacity-45 hover:opacity-100 transition-opacity"
        >
          <Image src={AWSLogo} alt="Amazon Web Services (AWS) credits" className="w-full h-auto object-contain" />
        </motion.div>

        <motion.div
          variants={floatLogo}
          custom={0.9}
          initial="hidden"
          animate="show"
          className="absolute right-28 top-20 z-10 w-[90px] h-auto hidden lg:block opacity-45 hover:opacity-100 transition-opacity"
        >
          <Image src={AzureLogo} alt="Microsoft Azure credits" className="w-full h-auto object-contain" />
        </motion.div>

        {/* Grid Line Vector Background */}
        <div className="absolute top-[-250px] md:top-[-210px] h-1/2 left-1/2 -translate-x-1/2 pointer-events-none opacity-80">
          <GradientLine />
        </div>

        {/* Hero Content */}
        <motion.div 
          className="relative z-10 max-w-4xl mx-auto text-center"
          variants={container}
          initial="hidden"
          animate="show"
        >
          {/* Visible Breadcrumb */}
          <motion.nav 
            aria-label="Breadcrumb" 
            className="flex items-center justify-center gap-2 text-[14px] text-[#5B677C] mb-6"
            variants={item}
          >
            <Link href="/" className="hover:text-[#086841] transition-colors underline-offset-2 hover:underline">
              Home
            </Link>
            <span className="text-[#A0AEC0]">›</span>
            <span className="text-[#19363F] font-semibold" aria-current="page">
              About Us
            </span>
          </motion.nav>

          <motion.div 
            className="inline-flex items-center gap-x-2 border border-[#D9D9D9] p-1.5 pr-4 rounded-full bg-white/70 backdrop-blur-sm text-[13px] md:text-[14px]"
            variants={item}
          >
            <span className="px-2.5 py-1 bg-[#118B6126] text-[#086841] rounded-full font-semibold">ABOUT CREDEX</span>
            <span className="text-[#5B677C]">Optimizing computational runway worldwide</span>
          </motion.div>

          <motion.h1 
            className="text-[34px] sm:text-[44px] md:text-[60px] leading-[42px] sm:leading-[52px] md:leading-[68px] font-semibold font-pp-mori-semibold text-[#19363F] mt-6 tracking-tight"
            variants={item}
          >
            About Credex:{" "}
            <span className="block bg-gradient-to-r from-[#086841] to-[#0FF395] bg-clip-text text-transparent">
              The Secure Marketplace for AI &amp; Cloud Credits
            </span>
          </motion.h1>

          <motion.p
            className="text-[#19363F] text-[20px] md:text-[25px] font-semibold font-pp-mori-semibold mt-4"
            variants={item}
          >
            Reshaping Cloud &amp; AI{" "}
            <br className="hidden md:inline" />
            Capital Efficiency
          </motion.p>

          <motion.p 
            className="text-[#5B677C] text-[16px] md:text-[19px] max-w-2xl mx-auto mt-6 leading-relaxed px-4"
            variants={item}
          >
            Every year, billions of dollars in cloud and AI credits expire unused, while growing teams pay full price for the same compute. Credex is a secure AI and cloud credit marketplace where startups{" "}
            <Link href="/" className="text-[#086841] font-semibold underline underline-offset-4 hover:text-[#0FF395] transition-colors">
              buy discounted cloud credits
            </Link>{" "}
            and companies{" "}
            <Link href="/seller" className="text-[#086841] font-semibold underline underline-offset-4 hover:text-[#0FF395] transition-colors">
              sell unused cloud credits
            </Link>{" "}
            before they expire.
          </motion.p>

          <motion.div 
            className="flex flex-wrap items-center justify-center gap-4 mt-8"
            variants={item}
          >
            <Link 
              href="/"
              className="py-3.5 px-7 bg-[#1A1A1A] hover:bg-black text-white rounded-md font-semibold text-[16px] transition-all cursor-pointer shadow-sm hover:scale-[1.03] active:scale-[0.98] inline-block text-center"
            >
              Get Discounted Credits
            </Link>
            <Link 
              href="/seller"
              className="py-3.5 px-7 border border-neutral-300 hover:border-neutral-800 bg-white text-[#1A1A1A] rounded-md font-semibold text-[16px] transition-all cursor-pointer hover:scale-[1.03] active:scale-[0.98] inline-block text-center"
            >
              Sell Unused Credits
            </Link>
          </motion.div>
        </motion.div>

        {/* Glow Background Vector */}
        <div className="absolute -z-10 bottom-[-50px] left-1/2 -translate-x-1/2 opacity-60">
          <Ellipse2 />
        </div>
      </section>

      {/* 2. Mission & Story Section */}
      <section className="py-20 md:py-28 bg-white border-y border-neutral-100">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Column 1: Left */}
            <div className="lg:col-span-5">
              <span className="text-[14px] font-semibold text-[#086841] tracking-wider uppercase">OUR MISSION</span>
              <h2 className="text-[32px] md:text-[44px] font-semibold font-pp-mori-semibold text-[#19363F] mt-3 leading-tight">
                Eliminating digital waste in SaaS &amp; AI computing.
              </h2>
              <div className="h-[3px] w-20 bg-[#0FF395] mt-6 rounded-full" />
            </div>

            {/* Column 2: Right */}
            <div className="lg:col-span-7 text-[#5B677C] text-[16px] md:text-[18px] leading-relaxed space-y-6">
              <p>
                Credex was founded with a straightforward realization: <strong>letting computational resources expire is digital waste</strong>. As AI infrastructure becomes the single largest expense line for modern tech companies, capital efficiency is no longer optional—it is a competitive necessity.
              </p>
              <p>
                Accelerators, incubators, and cloud providers grant billions in credit pools to startups. When startups pivot, shut down, scale down, or simply over-purchase, those high-value credits sit idle. We established Credex to help companies reclaim cash from these depreciating assets, passing the savings to scaling teams that need them most.
              </p>
              <p className="font-semibold text-[#19363F]">
                Our marketplace connects buyers and sellers under double-blind NDAs, backed by secure escrow, with zero code changes required. It’s the exact same service, for up to 50% off.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* NEW Section: Who's behind Credex */}
      <section className="py-20 md:py-28 bg-[#fafafa] border-b border-neutral-100">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-3xl mb-14">
            <span className="text-[14px] font-semibold text-[#086841] tracking-wider uppercase">THE TEAM &amp; COMPANY</span>
            <h2 className="text-[32px] md:text-[44px] font-semibold font-pp-mori-semibold text-[#19363F] mt-3">
              Who&apos;s behind Credex
            </h2>
            <p className="text-[#5B677C] text-[16px] md:text-[18px] mt-4 leading-relaxed">
              Credex is built and operated by Dreadnought Technology Private Limited, with teams in Dubai (IFZA, Dubai Silicon Oasis) and Gurugram, India. We operate a secure, audited secondary marketplace for AI and cloud credits, helping startups optimize infrastructure budgets while allowing companies to monetize unused computational runway.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white border border-neutral-200/80 rounded-2xl p-7 shadow-xs">
              <div className="p-3 bg-[#0FF3951A] text-[#086841] rounded-xl w-fit">
                <Building2 className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-semibold font-pp-mori-semibold text-[#19363F] mt-5">
                Registered Global Entity
              </h3>
              <p className="text-[#5B677C] text-[14px] leading-relaxed mt-2.5">
                Operated by <strong>Dreadnought Technology Private Limited</strong>, with corporate offices in Dubai Silicon Oasis (UAE) and Cyber City, Gurugram (India).
              </p>
            </div>

            <div className="bg-white border border-neutral-200/80 rounded-2xl p-7 shadow-xs">
              <div className="p-3 bg-[#0FF3951A] text-[#086841] rounded-xl w-fit">
                <Percent className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-semibold font-pp-mori-semibold text-[#19363F] mt-5">
                Up to 50% Savings
              </h3>
              <p className="text-[#5B677C] text-[14px] leading-relaxed mt-2.5">
                Enabling engineering teams to secure genuine AWS, Azure, GCP, OpenAI, Claude, and Gemini compute at substantial discounts compared to direct rates.
              </p>
            </div>

            <div className="bg-white border border-neutral-200/80 rounded-2xl p-7 shadow-xs">
              <div className="p-3 bg-[#0FF3951A] text-[#086841] rounded-xl w-fit">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-semibold font-pp-mori-semibold text-[#19363F] mt-5">
                Escrow &amp; Double-Blind NDAs
              </h3>
              <p className="text-[#5B677C] text-[14px] leading-relaxed mt-2.5">
                Every trade is escrow-protected with double-blind NDAs and thorough balance audits, protecting proprietary agreements and capital on both sides.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Core Values Grid */}
      <section className="py-20 md:py-28 bg-[#fafafa]">
        <div className="max-w-7xl mx-auto px-6">
          
          <div className="text-center mb-16">
            <span className="text-[14px] font-semibold text-[#086841] tracking-wider uppercase">OUR CORE PILLARS</span>
            <h2 className="text-[32px] md:text-[44px] font-semibold font-pp-mori-semibold text-[#19363F] mt-3">
              How we build trust in every transaction
            </h2>
            <p className="text-[#5B677C] text-[16px] md:text-[18px] max-w-xl mx-auto mt-4">
              Providing a seamless, secure, and fully audited environment to buy and sell cloud credits.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            
            {/* Pillar 1 */}
            <motion.div 
              className="bg-white border border-neutral-200/80 rounded-2xl p-8 flex flex-col justify-between transition-all"
              variants={valueCardHover}
              whileHover="hover"
            >
              <div>
                <div className="p-3 bg-[#0FF3951A] text-[#086841] rounded-xl w-fit">
                  <Shield className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-semibold font-pp-mori-semibold text-[#19363F] mt-6">
                  Absolute Discretion
                </h3>
                <p className="text-[#5B677C] text-[14px] md:text-[15px] leading-relaxed mt-3">
                  Identity shielding is critical. We execute double-blind NDAs between parties and Credex, ensuring that private accounts, proprietary deals, and business relationships stay 100% confidential.
                </p>
              </div>
            </motion.div>

            {/* Pillar 2 */}
            <motion.div 
              className="bg-white border border-neutral-200/80 rounded-2xl p-8 flex flex-col justify-between transition-all"
              variants={valueCardHover}
              whileHover="hover"
            >
              <div>
                <div className="p-3 bg-[#0FF3951A] text-[#086841] rounded-xl w-fit">
                  <Cpu className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-semibold font-pp-mori-semibold text-[#19363F] mt-6">
                  Uncompromised Limits
                </h3>
                <p className="text-[#5B677C] text-[14px] md:text-[15px] leading-relaxed mt-3">
                  No proxy lags or shared pools. You acquire full control of accounts featuring enterprise rate limits and premium tier structures, ensuring your models perform exactly as they would directly.
                </p>
              </div>
            </motion.div>

            {/* Pillar 3 */}
            <motion.div 
              className="bg-white border border-neutral-200/80 rounded-2xl p-8 flex flex-col justify-between transition-all"
              variants={valueCardHover}
              whileHover="hover"
            >
              <div>
                <div className="p-3 bg-[#0FF3951A] text-[#086841] rounded-xl w-fit">
                  <Code2 className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-semibold font-pp-mori-semibold text-[#19363F] mt-6">
                  Zero Code Changes
                </h3>
                <p className="text-[#5B677C] text-[14px] md:text-[15px] leading-relaxed mt-3">
                  100% API compatibility. Use your existing software SDKs, configurations, endpoints, and deployment setups. Transition accounts instantly with no developer friction.
                </p>
              </div>
            </motion.div>

            {/* Pillar 4 */}
            <motion.div 
              className="bg-white border border-neutral-200/80 rounded-2xl p-8 flex flex-col justify-between transition-all"
              variants={valueCardHover}
              whileHover="hover"
            >
              <div>
                <div className="p-3 bg-[#0FF3951A] text-[#086841] rounded-xl w-fit">
                  <RefreshCw className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-semibold font-pp-mori-semibold text-[#19363F] mt-6">
                  Impact-Led Model
                </h3>
                <p className="text-[#5B677C] text-[14px] md:text-[15px] leading-relaxed mt-3">
                  Reducing computational waste is our sustainability goal. By reusing allocated digital resources, we prevent waste and allow teams to redirect capital back into product growth and R&amp;D.
                </p>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* 4. Vetting & Flow Visual Section */}
      <section className="py-20 md:py-24 bg-white border-t border-neutral-100">
        <div className="max-w-5xl mx-auto px-6">
          <div className="bg-[#062524] rounded-3xl p-8 md:p-14 text-white relative overflow-hidden">
            
            {/* Background design elements */}
            <div className="absolute right-0 top-0 opacity-15 translate-x-12 -translate-y-12">
              <svg width="400" height="400" fill="none" viewBox="0 0 200 200">
                <circle cx="100" cy="100" r="80" stroke="#0FF395" strokeWidth="20" />
              </svg>
            </div>

            <span className="text-[13px] md:text-[14px] font-semibold text-[#0FF395] tracking-widest uppercase">THE EXCHANGE PROCESS</span>
            <h2 className="text-3xl md:text-4xl font-semibold font-pp-mori-semibold mt-4">
              Escrow-Protected Credit Transfers, Fully Vetted
            </h2>
            <p className="text-neutral-300 text-[15px] md:text-[16px] mt-4 max-w-2xl leading-relaxed">
              We remove counterparty risk entirely. Every deal utilizes our escrow workflow, protecting both sides of the transaction.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12 relative z-10">
              
              <div className="flex flex-col">
                <div className="flex items-center gap-x-3">
                  <span className="w-8 h-8 rounded-full bg-[#0FF395] text-[#062524] flex items-center justify-center font-bold text-[14px]">1</span>
                  <h3 className="font-semibold font-pp-mori-semibold text-[17px]">Vendor Audit</h3>
                </div>
                <p className="text-neutral-400 text-[14px] mt-2.5">
                  Sellers verify account ownership, credit source, and balance through read-only secure dashboard auditing.
                </p>
              </div>

              <div className="flex flex-col">
                <div className="flex items-center gap-x-3">
                  <span className="w-8 h-8 rounded-full bg-[#0FF395] text-[#062524] flex items-center justify-center font-bold text-[14px]">2</span>
                  <h3 className="font-semibold font-pp-mori-semibold text-[17px]">Escrow Funding</h3>
                </div>
                <p className="text-neutral-400 text-[14px] mt-2.5">
                  Buyers fund the transaction. The capital remains securely in escrow while credentials or account admin settings are transferred.
                </p>
              </div>

              <div className="flex flex-col">
                <div className="flex items-center gap-x-3">
                  <span className="w-8 h-8 rounded-full bg-[#0FF395] text-[#062524] flex items-center justify-center font-bold text-[14px]">3</span>
                  <h3 className="font-semibold font-pp-mori-semibold text-[17px]">Guarantee Transfer</h3>
                </div>
                <p className="text-neutral-400 text-[14px] mt-2.5">
                  Credex assists in enabling 2FA, shifting passwords, and confirming active status. Payout is released to the seller only after verification.
                </p>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* 5. CTA Row */}
      <section className="py-20 md:py-28 bg-[#fafafa]">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-5xl font-semibold font-pp-mori-semibold text-[#19363F]">
            Ready to reclaim your computational budget?
          </h2>
          <p className="text-[#5B677C] text-[16px] md:text-[18px] max-w-xl mx-auto mt-4 leading-relaxed">
            Whether you want to buy credits at up to 50% off or monetize idle accelerator grants, our team is ready to assist.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link 
              href="/plans-pricing"
              className="w-full sm:w-auto py-3.5 px-8 bg-[#086841] hover:bg-[#062524] text-white rounded-md font-semibold text-[16px] transition-all flex items-center justify-center gap-2 cursor-pointer shadow-sm"
            >
              Start Saving Now <ArrowRight className="w-4 h-4" />
            </Link>
            <Link 
              href="/contact-us"
              className="w-full sm:w-auto py-3.5 px-8 bg-white border border-neutral-300 hover:border-neutral-500 rounded-md font-semibold text-[16px] text-neutral-800 transition-all cursor-pointer text-center"
            >
              Talk to Credit Liquidity Desk
            </Link>
          </div>
        </div>
      </section>

      {/* NEW Section: FAQ */}
      <section className="py-20 md:py-24 bg-white border-t border-neutral-100">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-12">
            <span className="text-[14px] font-semibold text-[#086841] tracking-wider uppercase">COMMON QUESTIONS</span>
            <h2 className="text-[32px] md:text-[44px] font-semibold font-pp-mori-semibold text-[#19363F] mt-2">
              Frequently asked questions
            </h2>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => {
              const isOpen = openFaq === index;
              return (
                <div 
                  key={index}
                  className="border border-neutral-200/80 rounded-2xl overflow-hidden bg-[#FAFAFA] transition-colors"
                >
                  <button
                    onClick={() => setOpenFaq(isOpen ? null : index)}
                    className="w-full p-6 text-left flex justify-between items-center gap-4 cursor-pointer"
                    aria-expanded={isOpen}
                  >
                    <h3 className="text-[17px] md:text-[19px] font-semibold font-pp-mori-semibold text-[#19363F]">
                      {faq.question}
                    </h3>
                    <ChevronDown className={`w-5 h-5 text-[#5B677C] shrink-0 transition-transform duration-300 ${isOpen ? "rotate-180 text-[#086841]" : ""}`} />
                  </button>
                  
                  {/* Content always present in the DOM for SEO, with height transition */}
                  <div 
                    className={`px-6 overflow-hidden transition-all duration-300 ${isOpen ? "max-h-96 pb-6 opacity-100" : "max-h-0 pb-0 opacity-0"}`}
                  >
                    <p className="text-[#5B677C] text-[15px] md:text-[16px] leading-relaxed">
                      {faq.answer}
                      {faq.linkHref && faq.linkText && (
                        <>
                          {" "}
                          <Link href={faq.linkHref} className="text-[#086841] font-semibold underline underline-offset-2 hover:text-[#0FF395] transition-colors">
                            {faq.linkText}
                          </Link>
                        </>
                      )}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

    </div>
  );
}
