"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "motion/react";
import {
  Sparkles,
  Zap,
  CheckCircle2,
  ArrowRight,
  ShieldCheck,
  Layers,
  Copy,
  Check,
  Terminal,
  ChevronDown,
  DollarSign,
  ExternalLink,
  Lock,
  KeyRound,
  Code2,
  Boxes,
} from "lucide-react";

import { GradientLine } from "@/components/Svg";
import { inquiryApi, newsletterApi } from "@/api/api";

// Logo imports matching the home page
import ClaudeLogo from "@/assets/logos/calud.webp";
import GeminiLogo from "@/assets/logos/gemini.webp";
import ChatgptLogo from "@/assets/logos/chatgpt.webp";
import DeepSeekLogo from "@/assets/logos/deepseek.webp";
import KimiLogo from "@/assets/logos/kimi.webp";

// Short snippets: the only change is base_url + api_key
const CODE_SNIPPETS = {
  python: {
    title: "Python",
    code: `from openai import OpenAI

client = OpenAI(
    base_url="https://api.credex.ai/v1",  # the only change
    api_key="YOUR_CREDEX_KEY",
)

reply = client.chat.completions.create(
    model="anthropic/claude-3-7-sonnet",  # or any other model
    messages=[{"role": "user", "content": "Hello!"}],
)`,
  },
  node: {
    title: "Node.js",
    code: `import OpenAI from "openai";

const client = new OpenAI({
  baseURL: "https://api.credex.ai/v1", // the only change
  apiKey: process.env.CREDEX_API_KEY,
});

const reply = await client.chat.completions.create({
  model: "openai/gpt-4o", // or any other model
  messages: [{ role: "user", content: "Hello!" }],
});`,
  },
  curl: {
    title: "cURL",
    code: `curl https://api.credex.ai/v1/chat/completions \\
  -H "Authorization: Bearer YOUR_CREDEX_KEY" \\
  -H "Content-Type: application/json" \\
  -d '{
    "model": "deepseek/deepseek-r1",
    "messages": [{"role": "user", "content": "Hello!"}]
  }'`,
  },
};

const ROTATING_MODELS = ["Claude", "GPT", "Gemini", "DeepSeek", "Kimi", "Llama"];

const STEPS = [
  {
    icon: KeyRound,
    title: "Grab your key",
    desc: "One key unlocks every model. No waiting, no approvals.",
  },
  {
    icon: Code2,
    title: "Swap one line",
    desc: "Point your OpenAI SDK at Credex. The rest of your code stays the same.",
  },
  {
    icon: Boxes,
    title: "Pick any model",
    desc: "Claude today, Gemini tomorrow? Just change the model name.",
  },
];

const BENEFITS = [
  {
    icon: DollarSign,
    title: "Keep up to 45% more",
    desc: "Same models. Same answers. Just a smaller bill.",
  },
  {
    icon: Layers,
    title: "One key, 200+ models",
    desc: "Stop juggling accounts, keys and invoices. One place, one bill.",
  },
  {
    icon: Zap,
    title: "No more 3am outages",
    desc: "Provider down or rate-limited? We switch to a backup instantly. Your users never notice.",
  },
  {
    icon: ShieldCheck,
    title: "Private by default",
    desc: "We don't store your prompts. We never train on them. Period.",
  },
];

interface PriceRow {
  name: string;
  provider: string;
  listInput: number;
  listOutput: number;
  routerInput: number;
  routerOutput: number;
  discount: string;
}

// Prices per 1M tokens
const PRICES: PriceRow[] = [
  { name: "Claude 3.7 Sonnet", provider: "Anthropic", listInput: 3.0, listOutput: 15.0, routerInput: 1.85, routerOutput: 9.25, discount: "38%" },
  { name: "GPT-4o", provider: "OpenAI", listInput: 2.5, listOutput: 10.0, routerInput: 1.55, routerOutput: 6.2, discount: "38%" },
  { name: "Gemini 2.0 Flash", provider: "Google", listInput: 0.1, listOutput: 0.4, routerInput: 0.055, routerOutput: 0.22, discount: "45%" },
  { name: "DeepSeek R1", provider: "DeepSeek", listInput: 0.55, listOutput: 2.19, routerInput: 0.29, routerOutput: 1.15, discount: "47%" },
  { name: "Llama 3.3 70B", provider: "Meta", listInput: 0.4, listOutput: 0.4, routerInput: 0.22, routerOutput: 0.22, discount: "45%" },
];

const FAQS = [
  {
    q: "Cheaper than going direct? How?",
    a: "We buy AI capacity in bulk through cloud credits on AWS, Google Cloud and Azure. Bulk means a better rate, and we pass that saving straight to you on every token.",
  },
  {
    q: "Will I have to rewrite my code?",
    a: "Nope. If your code works with the OpenAI SDK, it works with Credex. Change the base URL and key, and you're done. It also plugs into Cursor, Cline and LangChain.",
  },
  {
    q: "What happens if a provider goes down?",
    a: "Nothing you'll notice. We send your request to a backup provider for the same model, so your app keeps running.",
  },
  {
    q: "Is my data safe?",
    a: "Yes. Your prompts and responses pass straight through. We don't store them, and we never use them for training.",
  },
  {
    q: "Any monthly fees or lock-in?",
    a: "None. Pay only for the tokens you use. No subscription, no minimums, and you can leave anytime.",
  },
];

const formatPrice = (n: number) => `$${n < 0.1 ? n.toFixed(3) : n.toFixed(2)}`;

export default function UpdatedLaunchingClient() {
  const [activeSnippetTab, setActiveSnippetTab] = useState<keyof typeof CODE_SNIPPETS>("python");
  const [hasCopied, setHasCopied] = useState(false);

  const [monthlySpend, setMonthlySpend] = useState<number>(5000);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [formStatus, setFormStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [formError, setFormError] = useState("");

  const [openFaq, setOpenFaq] = useState<number | null>(0);

  // Hero rotating model name
  const [modelIndex, setModelIndex] = useState(0);
  useEffect(() => {
    const id = setInterval(() => setModelIndex((i) => (i + 1) % ROTATING_MODELS.length), 2000);
    return () => clearInterval(id);
  }, []);

  const handleCopyCode = () => {
    navigator.clipboard.writeText(CODE_SNIPPETS[activeSnippetTab].code);
    setHasCopied(true);
    setTimeout(() => setHasCopied(false), 2000);
  };

  const handleWaitlistSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !email) {
      setFormError("Please enter your name and email.");
      setFormStatus("error");
      return;
    }

    setFormStatus("submitting");
    setFormError("");

    try {
      await inquiryApi.submitInquiry({
        name,
        email,
        companyName: "Credex AI Router Early Access",
        type: "BUYER",
        selectedLicenses: ["Credex AI Router API Early Access"],
        message: "Router launch early access signup (updated-launching page).",
      });

      try {
        await newsletterApi.subscribe({ email });
      } catch {
        // non-blocking
      }

      setFormStatus("success");
    } catch (err: unknown) {
      const msg =
        (err as { response?: { data?: { message?: string } } })?.response?.data
          ?.message || "Something went wrong. Please try again or message us on WhatsApp.";
      setFormError(msg);
      setFormStatus("error");
    }
  };

  const credexSpend = Math.round(monthlySpend * 0.6);
  const monthlySavings = monthlySpend - credexSpend;
  const annualSavings = monthlySavings * 12;

  return (
    <div className="relative min-h-screen bg-[#FCFDFD] text-[#062524] font-pp-mori-regular overflow-x-hidden pt-28 md:pt-36">
      {/* ========================================================
          HERO
         ======================================================== */}
      <section className="relative px-4 sm:px-6 lg:px-8 pt-4 pb-20 max-w-7xl mx-auto flex flex-col items-center justify-center text-center">
        <Image
          src={ClaudeLogo}
          alt="Claude"
          className="absolute left-6 md:left-14 top-[14%] z-10 w-[60px] md:w-[100px] h-auto hidden sm:block hero-logo pointer-events-none drop-shadow-md"
          style={{ "--float-delay": "0.3s" } as React.CSSProperties}
        />
        <Image
          src={GeminiLogo}
          alt="Gemini"
          className="absolute left-4 lg:left-28 bottom-[22%] z-10 w-[65px] lg:w-[105px] h-auto hidden sm:block hero-logo pointer-events-none drop-shadow-md"
          style={{ "--float-delay": "0.8s" } as React.CSSProperties}
        />
        <Image
          src={ChatgptLogo}
          alt="OpenAI"
          className="absolute right-6 md:right-14 top-[14%] z-10 w-[60px] md:w-[100px] h-auto hidden sm:block hero-logo pointer-events-none drop-shadow-md"
          style={{ "--float-delay": "0.5s" } as React.CSSProperties}
        />
        {/* <Image
          src={DeepSeekLogo}
          alt="DeepSeek"
          className="absolute left-0 top-[44%] z-10 w-[100px] h-auto hidden lg:block hero-logo pointer-events-none drop-shadow-md"
          style={{ "--float-delay": "0.6s" } as React.CSSProperties}
        /> */}
        <Image
          src={KimiLogo}
          alt="Kimi"
          className="absolute right-4 lg:right-28 bottom-[22%] z-10 w-[65px] lg:w-[105px] h-auto hidden sm:block hero-logo pointer-events-none drop-shadow-md"
          style={{ "--float-delay": "0.2s" } as React.CSSProperties}
        />

        <div className="absolute -top-[180px] md:-top-[220px] left-1/2 -translate-x-1/2 -z-10 pointer-events-none opacity-60">
          <GradientLine />
        </div>

        <div
          className="absolute top-10 left-1/2 -translate-x-1/2 w-[700px] h-[400px] pointer-events-none -z-10"
          style={{
            background:
              "radial-gradient(ellipse 60% 50% at 50% 40%, rgba(15,243,149,0.18) 0%, rgba(8,104,65,0.06) 50%, transparent 80%)",
          }}
        />

        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="border border-[#D9D9D9] p-[4px] rounded-full flex items-center gap-x-2 bg-white/90 backdrop-blur-md shadow-xs mb-8"
        >
          <div className="px-3 py-1.5 bg-[#118B6126] text-[#086841] font-semibold text-xs md:text-sm rounded-full flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-[#0FF395] animate-ping" />
            <span>EARLY ACCESS OPEN</span>
          </div>
          <p className="text-xs md:text-sm text-slate-700 pr-3 font-medium">
            Credex AI Router
          </p>
        </motion.div>

        <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-semibold font-pp-mori-semibold text-center leading-[1.08] max-w-5xl">
          <span className="block text-[#062524] hero-line-1">
            Every AI Model
          </span>
           <span className="block text-[#062524] hero-line-1">
            One Key
          </span>
          <span className="bg-gradient-to-r from-[#0FF395] via-[#086841] to-[#062524] bg-clip-text text-transparent block hero-line-2 mt-1 pb-2">
            Up to 45% Cheaper
          </span>
        </h1>

        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="mt-6 text-base sm:text-lg md:text-xl text-slate-600 font-pp-mori-regular max-w-2xl leading-relaxed"
        >
          Stop juggling accounts, keys and bills. Call{" "}
          <span className="relative inline-flex justify-center min-w-[5.5em] align-bottom overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.span
                key={ROTATING_MODELS[modelIndex]}
                initial={{ y: 16, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -16, opacity: 0 }}
                transition={{ duration: 0.25 }}
                className="font-pp-mori-semibold text-[#086841]"
              >
                {ROTATING_MODELS[modelIndex]}
              </motion.span>
            </AnimatePresence>
          </span>{" "}
          and 200+ more models from one place, and keep more of your budget.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.25 }}
          className="mt-9 flex flex-col sm:flex-row items-center gap-4 relative z-20"
        >
          <motion.a
            href="#waitlist"
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.98 }}
            className="w-full sm:w-auto px-8 py-4 rounded-xl bg-[#086841] hover:bg-[#075635] text-white font-pp-mori-semibold text-base font-semibold shadow-lg shadow-green-900/20 transition-all flex items-center justify-center gap-2 cursor-pointer"
          >
            <Sparkles className="w-5 h-5 text-[#0FF395]" />
            <span>Claim $50 Free Credits</span>
            <ArrowRight className="w-4 h-4" />
          </motion.a>

          <motion.a
            href="#pricing"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="w-full sm:w-auto px-7 py-4 rounded-xl bg-white border border-[#D9D9D9] hover:border-[#086841] text-[#086841] font-pp-mori-semibold text-base shadow-xs transition-all flex items-center justify-center gap-2"
          >
            <DollarSign className="w-4 h-4 text-[#086841]" />
            <span>Compare Prices</span>
          </motion.a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.35 }}
          className="mt-12 flex flex-wrap items-center justify-center gap-4 text-xs md:text-sm text-slate-600 font-pp-mori-semibold"
        >
          <span className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#E6F5EE] text-[#086841]">
            <CheckCircle2 className="w-4 h-4 text-[#086841]" />
            Switch in 1 line of code
          </span>
          <span className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#E6F5EE] text-[#086841]">
            <Zap className="w-4 h-4 text-[#086841]" />
            Stays up when providers go down
          </span>
          <span className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#E6F5EE] text-[#086841]">
            <ShieldCheck className="w-4 h-4 text-[#086841]" />
            Your prompts stay private
          </span>
        </motion.div>
      </section>

      {/* ========================================================
          HOW IT WORKS + CODE
         ======================================================== */}
      <section className="px-4 sm:px-6 lg:px-8 py-14 max-w-6xl mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-10">
          <span className="text-xs uppercase tracking-widest text-[#086841] font-pp-mori-semibold bg-[#E6F5EE] px-3 py-1 rounded-full inline-block">
            How It Works
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-pp-mori-semibold text-[#062524] mt-3">
            Live in 2 Minutes. Seriously.
          </h2>
          <p className="text-slate-600 text-sm sm:text-base mt-2">
            No new SDK to learn. No migration project.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-10">
          {STEPS.map((step, idx) => {
            const Icon = step.icon;
            return (
              <div
                key={idx}
                className="p-5 rounded-2xl border border-[#E5EDE8] bg-white shadow-xs flex items-start gap-4"
              >
                <div className="w-10 h-10 shrink-0 rounded-xl bg-[#E6F5EE] border border-[#086841]/20 text-[#086841] flex items-center justify-center">
                  <Icon className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs font-mono font-bold text-[#086841]">
                    STEP 0{idx + 1}
                  </span>
                  <h3 className="font-semibold text-base text-[#062524] mt-0.5">{step.title}</h3>
                  <p className="text-sm text-slate-600 mt-1">{step.desc}</p>
                </div>
              </div>
            );
          })}
        </div>

        <div className="rounded-2xl border-2 border-[#0FF395]/40 bg-[#062524] shadow-2xl overflow-hidden relative">
          <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#0FF395] to-transparent animate-packet-flow" />

          <div className="flex flex-wrap items-center justify-between border-b border-white/10 px-4 py-3 bg-[#041A19]">
            <div className="flex items-center gap-2 overflow-x-auto">
              <Terminal className="w-4 h-4 text-[#0FF395] mr-1 hidden sm:block" />
              {(Object.keys(CODE_SNIPPETS) as Array<keyof typeof CODE_SNIPPETS>).map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveSnippetTab(tab)}
                  className={`px-3 py-1.5 rounded-lg text-xs sm:text-sm font-pp-mori-semibold transition-all ${
                    activeSnippetTab === tab
                      ? "bg-[#0FF395] text-[#062524] font-bold shadow-xs"
                      : "text-slate-300 hover:text-white hover:bg-white/5"
                  }`}
                >
                  {CODE_SNIPPETS[tab].title}
                </button>
              ))}
            </div>

            <button
              onClick={handleCopyCode}
              className="inline-flex items-center gap-1.5 text-xs text-white px-3 py-1.5 rounded-lg bg-white/10 hover:bg-white/15 border border-white/15 transition-colors cursor-pointer"
            >
              {hasCopied ? (
                <>
                  <Check className="w-3.5 h-3.5 text-[#0FF395]" />
                  <span className="text-[#0FF395] font-semibold">Copied!</span>
                </>
              ) : (
                <>
                  <Copy className="w-3.5 h-3.5" />
                  <span>Copy</span>
                </>
              )}
            </button>
          </div>

          <div className="p-5 sm:p-7 text-xs sm:text-sm font-mono overflow-x-auto text-emerald-100 leading-relaxed bg-[#051E1D]">
            <pre>
              <code>{CODE_SNIPPETS[activeSnippetTab].code}</code>
            </pre>
          </div>
        </div>
      </section>

      {/* ========================================================
          WHY CREDEX
         ======================================================== */}
      <section className="px-4 sm:px-6 lg:px-8 py-16 max-w-7xl mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="text-xs uppercase tracking-widest text-[#086841] font-pp-mori-semibold bg-[#E6F5EE] px-3 py-1 rounded-full">
            Why Credex
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-pp-mori-semibold text-[#062524] mt-2">
            Why Teams Are Switching
          </h2>
          <p className="text-slate-600 text-sm sm:text-base mt-2">
            Everything you need. Nothing you don&apos;t.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {BENEFITS.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div key={idx} className="credex-glow-card p-7 rounded-2xl group">
                <div className="w-12 h-12 rounded-xl bg-[#E6F5EE] border border-[#086841]/20 text-[#086841] flex items-center justify-center mb-5 group-hover:scale-105 transition-transform">
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold font-pp-mori-semibold text-slate-900 mb-2">
                  {item.title}
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed">{item.desc}</p>
              </div>
            );
          })}
        </div>
      </section>

      {/* ========================================================
          PRICING
         ======================================================== */}
      <section id="pricing" className="px-4 sm:px-6 lg:px-8 py-16 max-w-5xl mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-10">
          <span className="text-xs uppercase tracking-widest text-[#086841] font-pp-mori-semibold bg-[#E6F5EE] px-3 py-1 rounded-full">
            Pricing
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-pp-mori-semibold text-[#062524] mt-2">
            Same Models. Smaller Bill.
          </h2>
          <p className="text-slate-600 text-sm mt-2">
            Price per 1 million tokens (input / output). No subscription. No hidden fees.
          </p>
        </div>

        <div className="rounded-2xl border border-[#E5EDE8] bg-white overflow-hidden shadow-lg shadow-green-950/5">
          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs sm:text-sm">
              <thead>
                <tr className="border-b border-[#E5EDE8] bg-[#F7FAF8] text-slate-500 font-pp-mori-semibold uppercase tracking-wider text-[11px]">
                  <th className="py-4 px-4 sm:px-6">Model</th>
                  <th className="py-4 px-4">Normal Price</th>
                  <th className="py-4 px-4 text-[#086841]">Credex Price</th>
                  <th className="py-4 px-4">You Save</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#E5EDE8]">
                {PRICES.map((m) => (
                  <tr key={m.name} className="hover:bg-[#F9FCFA] transition-colors group">
                    <td className="py-4 px-4 sm:px-6">
                      <span className="font-semibold text-slate-900 group-hover:text-[#086841] transition-colors block">
                        {m.name}
                      </span>
                      <span className="text-xs text-slate-500">{m.provider}</span>
                    </td>
                    <td className="py-4 px-4 text-slate-500 font-mono line-through decoration-slate-300">
                      {formatPrice(m.listInput)} / {formatPrice(m.listOutput)}
                    </td>
                    <td className="py-4 px-4 font-mono font-bold text-[#086841]">
                      {formatPrice(m.routerInput)} / {formatPrice(m.routerOutput)}
                    </td>
                    <td className="py-4 px-4">
                      <span className="inline-block px-2.5 py-0.5 rounded-full text-xs font-bold font-mono bg-[#E6F5EE] text-[#086841] border border-[#086841]/20">
                        {m.discount}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
        <p className="text-center text-xs text-slate-500 mt-4">
          Don&apos;t see your model? 200+ more are coming at launch.
        </p>
      </section>

      {/* ========================================================
          SAVINGS CALCULATOR
         ======================================================== */}
      <section className="px-4 sm:px-6 lg:px-8 py-16 max-w-5xl mx-auto">
        <div className="rounded-3xl border border-[#E5EDE8] bg-white p-6 sm:p-12 shadow-xl shadow-green-950/5 relative overflow-hidden">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <h2 className="text-3xl sm:text-4xl font-bold font-pp-mori-semibold text-[#062524]">
              How Much Could You Save?
            </h2>
            <p className="text-slate-600 text-sm mt-2">
              Drag the slider to your monthly AI bill.
            </p>
          </div>

          <div className="max-w-xl mx-auto mb-10">
            <div className="flex items-center justify-between mb-3 text-sm font-pp-mori-semibold">
              <span className="text-slate-600">Your monthly AI bill:</span>
              <span className="text-2xl font-bold text-[#086841] font-mono">
                ${monthlySpend.toLocaleString()}
              </span>
            </div>

            <input
              type="range"
              min="500"
              max="50000"
              step="500"
              value={monthlySpend}
              onChange={(e) => setMonthlySpend(Number(e.target.value))}
              className="w-full h-2.5 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-[#086841]"
            />

            <div className="flex justify-between text-[11px] text-slate-400 mt-2 font-mono">
              <span>$500</span>
              <span>$50,000</span>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-center max-w-3xl mx-auto">
            <div className="p-5 rounded-2xl bg-[#F8FAF9] border border-[#E5EDE8]">
              <span className="text-xs text-slate-500 uppercase tracking-wider block mb-1">
                You pay with Credex
              </span>
              <span className="text-2xl sm:text-3xl font-bold font-mono text-[#062524]">
                ${credexSpend.toLocaleString()}
              </span>
              <span className="text-[11px] text-slate-500 block mt-1">per month</span>
            </div>

            <div className="p-5 rounded-2xl bg-[#E6F5EE] border border-[#086841]/30 shadow-xs">
              <span className="text-xs text-[#086841] font-semibold uppercase tracking-wider block mb-1">
                You save
              </span>
              <span className="text-2xl sm:text-3xl font-bold font-mono text-[#086841]">
                ${monthlySavings.toLocaleString()}
              </span>
              <span className="text-[11px] text-emerald-700 block mt-1">per month</span>
            </div>

            <div className="p-5 rounded-2xl bg-[#062524] text-white shadow-lg shadow-green-950/10">
              <span className="text-xs text-[#0FF395] font-semibold uppercase tracking-wider block mb-1">
                Yearly savings
              </span>
              <span className="text-2xl sm:text-3xl font-bold font-mono text-white">
                ${annualSavings.toLocaleString()}
              </span>
              <span className="text-[11px] text-slate-300 block mt-1">back in your pocket</span>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================
          EARLY ACCESS FORM
         ======================================================== */}
      <section id="waitlist" className="px-4 sm:px-6 lg:px-8 py-20 max-w-3xl mx-auto">
        <div className="rounded-3xl border-2 border-[#086841]/30 bg-white p-8 sm:p-14 shadow-2xl shadow-green-950/10 relative overflow-hidden">
          <div className="flex justify-center mb-6">
            <span className="px-4 py-1.5 rounded-full text-xs font-pp-mori-semibold bg-[#E6F5EE] text-[#086841] border border-[#086841]/20 flex items-center gap-2">
              <Sparkles className="w-3.5 h-3.5 text-[#086841]" />
              Only for the first 500 signups
            </span>
          </div>

          <div className="text-center max-w-2xl mx-auto mb-10">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-pp-mori-semibold text-[#062524]">
              Grab Your Spot + $50 Free
            </h2>
            <p className="text-slate-600 text-sm sm:text-base mt-3">
              Get your API key before everyone else, with $50 of credits ready to use.
            </p>
          </div>

          {formStatus === "success" ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="py-6 text-center"
            >
              <div className="w-16 h-16 rounded-full bg-[#E6F5EE] border border-[#086841]/30 flex items-center justify-center mx-auto mb-4 text-[#086841]">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <h3 className="text-2xl sm:text-3xl font-bold font-pp-mori-semibold text-[#062524]">
                You&apos;re in!
              </h3>
              <p className="text-slate-600 mt-2 text-sm sm:text-base max-w-md mx-auto">
                Nice one, <strong className="text-slate-900">{name}</strong>. Your API key and $50
                credits will land in <strong className="text-[#086841]">{email}</strong> the moment
                we launch.
              </p>

              <div className="mt-8 flex justify-center">
                <a
                  href="https://wa.me/918956042145?text=Hi,%20I%20just%20joined%20the%20Credex%20AI%20Router%20early%20access%20list."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3.5 rounded-xl bg-[#086841] text-white font-pp-mori-semibold text-sm hover:bg-[#075635] transition-colors flex items-center gap-2"
                >
                  <span>Need access sooner? Chat on WhatsApp</span>
                  <ExternalLink className="w-4 h-4" />
                </a>
              </div>
            </motion.div>
          ) : (
            <form onSubmit={handleWaitlistSubmit} className="space-y-5 max-w-xl mx-auto">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <input
                  type="text"
                  required
                  aria-label="Your name"
                  placeholder="Your name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full px-4 py-3.5 rounded-xl bg-white border border-[#D9D9D9] text-slate-900 placeholder:text-slate-400 text-sm focus:outline-none focus:border-[#086841] focus:ring-1 focus:ring-[#086841]"
                />
                <input
                  type="email"
                  required
                  aria-label="Work email"
                  placeholder="Work email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-4 py-3.5 rounded-xl bg-white border border-[#D9D9D9] text-slate-900 placeholder:text-slate-400 text-sm focus:outline-none focus:border-[#086841] focus:ring-1 focus:ring-[#086841]"
                />
              </div>

              {formError && (
                <p className="text-xs text-red-600 bg-red-50 border border-red-200 p-3 rounded-xl">
                  {formError}
                </p>
              )}

              <button
                type="submit"
                disabled={formStatus === "submitting"}
                className="w-full py-4 rounded-xl bg-[#086841] hover:bg-[#075635] text-white font-pp-mori-semibold text-base font-semibold shadow-lg shadow-green-900/20 active:scale-[0.99] disabled:opacity-50 transition-all flex items-center justify-center gap-2 cursor-pointer"
              >
                {formStatus === "submitting" ? (
                  <span>Saving your spot...</span>
                ) : (
                  <>
                    <span>Claim My $50 Credits</span>
                    <ArrowRight className="w-5 h-5" />
                  </>
                )}
              </button>

              <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-xs text-slate-500 pt-1">
                <span className="flex items-center gap-1">
                  <Lock className="w-3.5 h-3.5 text-[#086841]" />
                  No spam
                </span>
                <span className="flex items-center gap-1">
                  <DollarSign className="w-3.5 h-3.5 text-[#086841]" />
                  No credit card needed
                </span>
              </div>
            </form>
          )}
        </div>
      </section>

      {/* ========================================================
          FAQ
         ======================================================== */}
      <section className="px-4 sm:px-6 lg:px-8 py-20 max-w-4xl mx-auto border-t border-slate-200">
        <div className="text-center mb-12">
          <span className="text-xs uppercase tracking-widest text-[#086841] font-pp-mori-semibold bg-[#E6F5EE] px-3 py-1 rounded-full">
            FAQ
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold font-pp-mori-semibold text-[#062524] mt-2">
            Questions? We&apos;ve Got Answers.
          </h2>
        </div>

        <div className="space-y-4">
          {FAQS.map((faq, i) => {
            const isOpen = openFaq === i;
            return (
              <div
                key={i}
                className="border border-[#E5EDE8] rounded-2xl bg-white overflow-hidden transition-all shadow-xs"
              >
                <button
                  type="button"
                  onClick={() => setOpenFaq(isOpen ? null : i)}
                  className="w-full px-6 py-5 text-left flex items-center justify-between gap-4 font-pp-mori-semibold text-slate-900 hover:text-[#086841] transition-colors cursor-pointer"
                >
                  <span className="text-base sm:text-lg">{faq.q}</span>
                  <ChevronDown
                    className={`w-5 h-5 text-slate-400 shrink-0 transition-transform duration-200 ${
                      isOpen ? "rotate-180 text-[#086841]" : ""
                    }`}
                  />
                </button>

                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                      className="px-6 pb-6 text-sm text-slate-600 leading-relaxed border-t border-slate-100 pt-3"
                    >
                      {faq.a}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
}
