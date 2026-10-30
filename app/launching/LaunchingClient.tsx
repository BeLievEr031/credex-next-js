"use client";

import React, { useState, useMemo } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "motion/react";
import {
  Sparkles,
  Zap,
  CheckCircle2,
  ArrowRight,
  ShieldCheck,
  Cpu,
  Layers,
  Copy,
  Check,
  Search,
  Terminal,
  Activity,
  ChevronDown,
  DollarSign,
  Play,
  RotateCcw,
  Sliders,
  ExternalLink,
  Lock,
  Server,
  Code2,
} from "lucide-react";

import { GradientLine, Ellipse2 } from "@/components/Svg";
import { inquiryApi, newsletterApi } from "@/api/api";

// Logo imports matching the home page
import GCPLogo from "@/assets/logos/gcp.webp";
import ClaudeLogo from "@/assets/logos/calud.webp";
import GeminiLogo from "@/assets/logos/gemini.webp";
import ChatgptLogo from "@/assets/logos/chatgpt.webp";
import AWSLogo from "@/assets/logos/aws.webp";
import AzureLogo from "@/assets/logos/azure.webp";

// Code Snippets for Drop-in Integration
const CODE_SNIPPETS = {
  python: {
    title: "Python (OpenAI SDK)",
    lang: "python",
    code: `import openai

client = openai.OpenAI(
    # ⚡️ Change 1 Line: Point base_url to Credex Router
    base_url="https://api.credex.ai/v1",
    api_key="crx_live_early_access_key"  # 1 key for 200+ models
)

response = client.chat.completions.create(
    model="anthropic/claude-3-7-sonnet", # or "openai/gpt-4.5", "deepseek/r1"
    messages=[{"role": "user", "content": "Analyze my vector embeddings"}],
    temperature=0.7,
)

print(response.choices[0].message.content)
# 💸 Automatically routed across Bedrock & Vertex at 40% below list price!`,
  },
  typescript: {
    title: "TypeScript / Node.js",
    lang: "typescript",
    code: `import OpenAI from "openai";

const openai = new OpenAI({
  // ⚡️ Switch base URL to unlock wholesale token rates
  baseURL: "https://api.credex.ai/v1",
  apiKey: process.env.CREDEX_API_KEY,
});

async function main() {
  const completion = await openai.chat.completions.create({
    model: "openai/o3-mini",
    messages: [{ role: "user", content: "Optimize this database index" }],
  });

  console.log(completion.choices[0].message.content);
}
main();`,
  },
  cursor: {
    title: "Cursor & Windsurf IDE",
    lang: "json",
    code: `// In Cursor -> Settings -> Models -> OpenAI API Key
// Set Override OpenAI Base URL:
{
  "openai.baseUrl": "https://api.credex.ai/v1",
  "openai.apiKey": "crx_live_your_key_here",
  "models": [
    "anthropic/claude-3-7-sonnet",
    "deepseek/deepseek-r1",
    "openai/gpt-4o"
  ]
}
// 🚀 Complete your code at 40% lower cost directly inside Cursor!`,
  },
  curl: {
    title: "cURL / REST",
    lang: "bash",
    code: `curl https://api.credex.ai/v1/chat/completions \\
  -H "Content-Type: application/json" \\
  -H "Authorization: Bearer crx_live_early_access_key" \\
  -d '{
    "model": "deepseek/deepseek-r1",
    "messages": [{"role": "user", "content": "Explain quantum computing"}],
    "stream": true
  }'`,
  },
};

// Model Catalog
interface ModelRow {
  id: string;
  name: string;
  provider: string;
  category: "reasoning" | "coding" | "fast" | "multimodal";
  listInput: number;
  listOutput: number;
  routerInput: number;
  routerOutput: number;
  discount: string;
  speed: number;
  ttft: number;
  fallbacks: string[];
  hot?: boolean;
}

const MODELS_DATA: ModelRow[] = [
  {
    id: "claude-3-7-sonnet",
    name: "Claude 3.7 Sonnet (Thinking)",
    provider: "Anthropic",
    category: "reasoning",
    listInput: 3.0,
    listOutput: 15.0,
    routerInput: 1.85,
    routerOutput: 9.25,
    discount: "-38%",
    speed: 78,
    ttft: 280,
    fallbacks: ["AWS Bedrock", "GCP Vertex", "Direct API"],
    hot: true,
  },
  {
    id: "gpt-4-5-preview",
    name: "GPT-4.5 Preview",
    provider: "OpenAI",
    category: "reasoning",
    listInput: 75.0,
    listOutput: 150.0,
    routerInput: 46.5,
    routerOutput: 93.0,
    discount: "-38%",
    speed: 52,
    ttft: 310,
    fallbacks: ["Azure OpenAI", "Direct API"],
    hot: true,
  },
  {
    id: "deepseek-r1",
    name: "DeepSeek R1",
    provider: "DeepSeek",
    category: "reasoning",
    listInput: 0.55,
    listOutput: 2.19,
    routerInput: 0.29,
    routerOutput: 1.15,
    discount: "-47%",
    speed: 96,
    ttft: 195,
    fallbacks: ["Together AI", "Fireworks", "Direct API"],
    hot: true,
  },
  {
    id: "o3-mini",
    name: "OpenAI o3-mini",
    provider: "OpenAI",
    category: "coding",
    listInput: 1.1,
    listOutput: 4.4,
    routerInput: 0.68,
    routerOutput: 2.72,
    discount: "-38%",
    speed: 115,
    ttft: 220,
    fallbacks: ["Azure OpenAI", "Direct API"],
  },
  {
    id: "claude-3-5-sonnet",
    name: "Claude 3.5 Sonnet",
    provider: "Anthropic",
    category: "coding",
    listInput: 3.0,
    listOutput: 15.0,
    routerInput: 1.89,
    routerOutput: 9.45,
    discount: "-37%",
    speed: 84,
    ttft: 260,
    fallbacks: ["AWS Bedrock", "GCP Vertex", "Direct API"],
  },
  {
    id: "gpt-4o",
    name: "GPT-4o (Omni)",
    provider: "OpenAI",
    category: "multimodal",
    listInput: 2.5,
    listOutput: 10.0,
    routerInput: 1.55,
    routerOutput: 6.2,
    discount: "-38%",
    speed: 98,
    ttft: 210,
    fallbacks: ["Azure OpenAI", "Direct API"],
  },
  {
    id: "gemini-2-0-flash",
    name: "Gemini 2.0 Flash",
    provider: "Google",
    category: "fast",
    listInput: 0.1,
    listOutput: 0.4,
    routerInput: 0.055,
    routerOutput: 0.22,
    discount: "-45%",
    speed: 154,
    ttft: 140,
    fallbacks: ["GCP Vertex AI", "Google AI Studio"],
    hot: true,
  },
  {
    id: "llama-3-3-70b",
    name: "Llama 3.3 70B Instruct",
    provider: "Meta",
    category: "fast",
    listInput: 0.4,
    listOutput: 0.4,
    routerInput: 0.22,
    routerOutput: 0.22,
    discount: "-45%",
    speed: 172,
    ttft: 125,
    fallbacks: ["Groq", "Cerebras", "AWS Bedrock"],
  },
];

const FAQS = [
  {
    q: "How does the Credex AI Router offer 35% - 50% lower prices?",
    a: "Credex operates the premier marketplace for institutional cloud & AI credits. We pool verified, pre-purchased Tier 5 enterprise grants and commitments across AWS Bedrock, GCP Vertex, and Azure OpenAI, passing massive wholesale volume arbitrage directly to developers per token.",
  },
  {
    q: "Is it a true 100% drop-in replacement for OpenAI SDK?",
    a: "Yes. Our gateway endpoint is 100% OpenAI API v1 compliant. You simply change your `base_url` to `https://api.credex.ai/v1` and you can call any model (Claude, DeepSeek, Gemini, GPT) using standard OpenAI SDK libraries in Python, Node, Go, Rust, or LangChain.",
  },
  {
    q: "What happens if a provider hits a rate limit or goes down?",
    a: "Our smart routing layer continuously monitors health and latency across 4+ underlying providers for each model family (e.g. Bedrock, Azure, GCP Vertex, and direct APIs). If an upstream endpoint returns a 429 or 5xx, the router automatically fails over within 3ms without terminating your stream.",
  },
  {
    q: "Do you store or train on my prompt data?",
    a: "Never. We enforce strict zero-retention data policies. Your prompts and completions are streamed transiently through volatile memory and are never cached, logged, or shared with third parties for training.",
  },
  {
    q: "Can I use Credex Router in Cursor, Windsurf, or Claude Code?",
    a: "Absolutely! Just paste your Credex API key and our base URL into your editor's custom OpenAI endpoint configuration. You get full agentic coding capabilities at nearly half the token cost.",
  },
];

export default function LaunchingClient() {
  // Code snippet active tab
  const [activeSnippetTab, setActiveSnippetTab] = useState<keyof typeof CODE_SNIPPETS>("python");
  const [hasCopied, setHasCopied] = useState(false);

  // Model filter state
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [searchQuery, setSearchQuery] = useState("");

  // Savings Calculator Slider
  const [monthlySpend, setMonthlySpend] = useState<number>(5000);

  // Simulation State
  const [simStep, setSimStep] = useState<number>(0);
  const [isSimulating, setIsSimulating] = useState(false);

  // Waitlist Form State
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [roleType, setRoleType] = useState<"DEVELOPER" | "STARTUP" | "AGENCY" | "ENTERPRISE">("STARTUP");
  const [monthlyTokens, setMonthlyTokens] = useState<string>("$1k - $5k / mo");
  const [formStatus, setFormStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [formError, setFormError] = useState("");

  // FAQ open states
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const handleCopyCode = () => {
    navigator.clipboard.writeText(CODE_SNIPPETS[activeSnippetTab].code);
    setHasCopied(true);
    setTimeout(() => setHasCopied(false), 2000);
  };

  const filteredModels = useMemo(() => {
    return MODELS_DATA.filter((m) => {
      const matchesCategory =
        selectedCategory === "all" || m.category === selectedCategory;
      const matchesSearch =
        m.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        m.provider.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  const runSimulation = () => {
    if (isSimulating) return;
    setIsSimulating(true);
    setSimStep(1); // Incoming request
    setTimeout(() => setSimStep(2), 700); // Route analysis
    setTimeout(() => setSimStep(3), 1400); // Primary 429 detected
    setTimeout(() => setSimStep(4), 2100); // Auto-failover to Bedrock/Azure in 3ms
    setTimeout(() => {
      setSimStep(5); // Stream output success with 40% savings
      setIsSimulating(false);
    }, 2800);
  };

  const handleWaitlistSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !email) {
      setFormError("Please enter your name and work email.");
      setFormStatus("error");
      return;
    }

    setFormStatus("submitting");
    setFormError("");

    try {
      await inquiryApi.submitInquiry({
        name,
        email,
        companyName: `${roleType} (Spend: ${monthlyTokens})`,
        type: "BUYER",
        selectedLicenses: ["Credex AI Router API Early Access"],
        message: `Router Launch VIP Early Access. Role: ${roleType}, Expected monthly spend: ${monthlyTokens}`,
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
          ?.message || "Submission failed. Please reach out via WhatsApp or try again.";
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
          HERO SECTION WITH FLOATING PROVIDER LOGOS & GRADIENTS
         ======================================================== */}
      <section className="relative px-4 sm:px-6 lg:px-8 pt-4 pb-20 max-w-7xl mx-auto flex flex-col items-center justify-center text-center">
        {/* Floating Provider Logos (CSS-only smooth animation matching Hero.tsx) */}
        <Image
          src={ClaudeLogo}
          alt="Claude"
          className="absolute left-6 md:left-14 top-[22%] z-10 w-[60px] md:w-[100px] h-auto hidden sm:block hero-logo pointer-events-none drop-shadow-md"
          style={{ "--float-delay": "0.3s" } as React.CSSProperties}
        />
        <Image
          src={GeminiLogo}
          alt="Gemini"
          className="absolute left-16 md:left-28 bottom-[15%] z-10 w-[65px] md:w-[105px] h-auto hidden sm:block hero-logo pointer-events-none drop-shadow-md"
          style={{ "--float-delay": "0.8s" } as React.CSSProperties}
        />
        <Image
          src={ChatgptLogo}
          alt="OpenAI"
          className="absolute right-6 md:right-14 top-[20%] z-10 w-[60px] md:w-[100px] h-auto hidden sm:block hero-logo pointer-events-none drop-shadow-md"
          style={{ "--float-delay": "0.5s" } as React.CSSProperties}
        />
        <Image
          src={AWSLogo}
          alt="AWS Bedrock"
          className="absolute right-16 md:right-28 bottom-[18%] z-10 w-[65px] md:w-[105px] h-auto hidden sm:block hero-logo pointer-events-none drop-shadow-md"
          style={{ "--float-delay": "0.1s" } as React.CSSProperties}
        />

        {/* Background Gradient Lines from Svg.tsx */}
        <div className="absolute -top-[180px] md:-top-[220px] left-1/2 -translate-x-1/2 -z-10 pointer-events-none opacity-60">
          <GradientLine />
        </div>

        {/* Soft mint radial glow */}
        <div
          className="absolute top-10 left-1/2 -translate-x-1/2 w-[700px] h-[400px] pointer-events-none -z-10"
          style={{
            background:
              "radial-gradient(ellipse 60% 50% at 50% 40%, rgba(15,243,149,0.18) 0%, rgba(8,104,65,0.06) 50%, transparent 80%)",
          }}
        />

        {/* Pill Badge matching website style */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="border border-[#D9D9D9] p-[4px] rounded-full flex items-center gap-x-2 bg-white/90 backdrop-blur-md shadow-xs mb-8"
        >
          <div className="px-3 py-1.5 bg-[#118B6126] text-[#086841] font-semibold text-xs md:text-sm rounded-full flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-[#0FF395] animate-ping" />
            <span>NEW PRODUCT LAUNCH</span>
          </div>
          <p className="text-xs md:text-sm text-slate-700 pr-3 font-medium">
            Credex AI Router · Drop-in OpenAI SDK Gateway
          </p>
        </motion.div>

        {/* Hero Headline */}
        <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-semibold font-pp-mori-semibold text-center leading-[1.08] max-w-5xl">
          <span className="bg-gradient-to-r from-[#0FF395] via-[#086841] to-[#062524] bg-clip-text text-transparent block hero-line-1 pb-2">
            Save Up To 45%
          </span>
          <span className="block text-[#062524] hero-line-2 mt-1">
            On 200+ Frontier AI Models
          </span>
        </h1>

        {/* Subhead */}
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="mt-6 text-base sm:text-lg md:text-xl text-slate-600 font-pp-mori-regular max-w-2xl leading-relaxed"
        >
          One unified endpoint for Claude 3.7 Sonnet, GPT-4.5, DeepSeek R1, and Gemini 2.0.
          Switch one line in your code to get automatic failover, sub-5ms router speed, and wholesale token pricing.
        </motion.p>

        {/* Action Buttons */}
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
            <span>Get Early Access + $50 Free Tokens</span>
            <ArrowRight className="w-4 h-4" />
          </motion.a>

          <motion.a
            href="#benchmarks"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="w-full sm:w-auto px-7 py-4 rounded-xl bg-white border border-[#D9D9D9] hover:border-[#086841] text-[#086841] font-pp-mori-semibold text-base shadow-xs transition-all flex items-center justify-center gap-2"
          >
            <Activity className="w-4 h-4 text-[#086841]" />
            <span>Live Model Pricing & Benchmarks</span>
          </motion.a>
        </motion.div>

        {/* Feature Pills under hero */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.35 }}
          className="mt-12 flex flex-wrap items-center justify-center gap-4 text-xs md:text-sm text-slate-600 font-pp-mori-semibold"
        >
          <span className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#E6F5EE] text-[#086841]">
            <CheckCircle2 className="w-4 h-4 text-[#086841]" />
            100% OpenAI SDK Compatible
          </span>
          <span className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#E6F5EE] text-[#086841]">
            <Zap className="w-4 h-4 text-[#086841]" />
            Zero Rate Limits (Auto-Spillover)
          </span>
          <span className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#E6F5EE] text-[#086841]">
            <ShieldCheck className="w-4 h-4 text-[#086841]" />
            Zero Data Retention / No Training
          </span>
        </motion.div>
      </section>

      {/* ========================================================
          INTERACTIVE 1-LINE DROP-IN CODE SWITCHER
         ======================================================== */}
      <section className="px-4 sm:px-6 lg:px-8 py-14 max-w-6xl mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-10">
          <span className="text-xs uppercase tracking-widest text-[#086841] font-pp-mori-semibold bg-[#E6F5EE] px-3 py-1 rounded-full inline-block">
            Developer Experience
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-pp-mori-semibold text-[#062524] mt-3">
            Change 1 Line of Code. Done.
          </h2>
          <p className="text-slate-600 text-sm sm:text-base mt-2">
            No custom SDKs. No vendor lock-in. Works directly with your existing OpenAI client, LangChain, or Cursor IDE.
          </p>
        </div>

        {/* Dark Terminal Box in Credex signature #062524 with Mint Highlights */}
        <div className="rounded-2xl border-2 border-[#0FF395]/40 bg-[#062524] shadow-2xl overflow-hidden relative">
          {/* Glowing top line */}
          <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#0FF395] to-transparent animate-packet-flow" />

          {/* Terminal Tabs */}
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
                  <span>Copy Code</span>
                </>
              )}
            </button>
          </div>

          {/* Code Body */}
          <div className="p-5 sm:p-7 text-xs sm:text-sm font-mono overflow-x-auto text-emerald-100 leading-relaxed bg-[#051E1D]">
            <pre>
              <code>{CODE_SNIPPETS[activeSnippetTab].code}</code>
            </pre>
          </div>
        </div>
      </section>

      {/* ========================================================
          ANIMATED SMART ROUTING & FAILOVER SIMULATOR
         ======================================================== */}
      <section className="px-4 sm:px-6 lg:px-8 py-16 max-w-6xl mx-auto">
        <div className="bg-white rounded-3xl border border-[#E5EDE8] p-6 sm:p-10 shadow-xl shadow-green-950/5 relative overflow-hidden">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 mb-8">
            <div>
              <span className="text-xs uppercase tracking-widest text-[#086841] font-pp-mori-semibold bg-[#E6F5EE] px-3 py-1 rounded-full">
                Live Simulation
              </span>
              <h3 className="text-2xl sm:text-3xl font-bold font-pp-mori-semibold text-[#062524] mt-2">
                Simulate Intelligent Failover & Arbitrage
              </h3>
              <p className="text-xs sm:text-sm text-slate-500 mt-1">
                See what happens under the hood when an upstream provider throttles.
              </p>
            </div>

            <button
              onClick={runSimulation}
              disabled={isSimulating}
              className="px-6 py-3.5 rounded-xl bg-[#086841] hover:bg-[#075635] text-white font-pp-mori-semibold text-sm shadow-md shadow-green-900/15 disabled:opacity-50 transition-all flex items-center gap-2 cursor-pointer"
            >
              {isSimulating ? (
                <>
                  <RotateCcw className="w-4 h-4 animate-spin text-[#0FF395]" />
                  <span>Routing API Call...</span>
                </>
              ) : (
                <>
                  <Play className="w-4 h-4 fill-current text-[#0FF395]" />
                  <span>Send Test Request</span>
                </>
              )}
            </button>
          </div>

          {/* Visual simulation steps */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div
              className={`p-5 rounded-2xl border transition-all ${
                simStep >= 1
                  ? "border-[#086841] bg-[#E6F5EE] text-[#062524] shadow-sm"
                  : "border-slate-200 bg-[#F8FAF9] text-slate-400"
              }`}
            >
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs font-mono font-bold text-[#086841]">STEP 01</span>
                {simStep >= 1 && <span className="w-2 h-2 rounded-full bg-[#086841] animate-ping" />}
              </div>
              <h4 className="font-semibold text-sm text-[#062524]">Client Request</h4>
              <p className="text-xs text-slate-600 mt-1">
                `POST /chat/completions` sent from your app to `api.credex.ai`.
              </p>
            </div>

            <div
              className={`p-5 rounded-2xl border transition-all ${
                simStep >= 2
                  ? "border-[#086841] bg-[#E6F5EE] text-[#062524] shadow-sm"
                  : "border-slate-200 bg-[#F8FAF9] text-slate-400"
              }`}
            >
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs font-mono font-bold text-[#086841]">STEP 02</span>
                {simStep >= 2 && <span className="w-2 h-2 rounded-full bg-[#086841] animate-ping" />}
              </div>
              <h4 className="font-semibold text-sm text-[#062524]">Arbitrage Router</h4>
              <p className="text-xs text-slate-600 mt-1">
                Calculates latency, quota health, and lowest token cost in &lt;2ms.
              </p>
            </div>

            <div
              className={`p-5 rounded-2xl border transition-all ${
                simStep >= 3
                  ? "border-amber-400 bg-amber-50 text-[#062524] shadow-sm"
                  : "border-slate-200 bg-[#F8FAF9] text-slate-400"
              }`}
            >
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs font-mono font-bold text-amber-700">STEP 03</span>
                {simStep >= 3 && (
                  <span className="text-[10px] font-bold text-amber-800 bg-amber-200 px-2 py-0.5 rounded-full">
                    429 Averted
                  </span>
                )}
              </div>
              <h4 className="font-semibold text-sm text-[#062524]">Auto-Spillover</h4>
              <p className="text-xs text-slate-600 mt-1">
                Primary throttled: Router instantly redirects to AWS Bedrock in 3ms.
              </p>
            </div>

            <div
              className={`p-5 rounded-2xl border transition-all ${
                simStep >= 4
                  ? "border-[#086841] bg-gradient-to-br from-[#E6F5EE] to-[#0FF395]/20 text-[#062524] shadow-md"
                  : "border-slate-200 bg-[#F8FAF9] text-slate-400"
              }`}
            >
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs font-mono font-bold text-[#086841]">STEP 04</span>
                {simStep >= 4 && <Check className="w-4 h-4 text-[#086841]" />}
              </div>
              <h4 className="font-semibold text-sm text-[#062524]">Tokens Streamed</h4>
              <p className="text-xs text-slate-600 mt-1">
                Zero downtime. Billed at 40% below official list price.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================
          LIVE MODEL PRICING & BENCHMARK TABLE
         ======================================================== */}
      <section id="benchmarks" className="px-4 sm:px-6 lg:px-8 py-16 max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
          <div>
            <span className="text-xs uppercase tracking-widest text-[#086841] font-pp-mori-semibold bg-[#E6F5EE] px-3 py-1 rounded-full">
              Model Catalog
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-pp-mori-semibold text-[#062524] mt-2">
              Model Rates & Benchmarks
            </h2>
            <p className="text-slate-600 text-sm mt-1 max-w-xl">
              Compare official list prices against Credex Router rates. All rates billed per 1 Million tokens.
            </p>
          </div>

          {/* Search Box */}
          <div className="relative w-full md:w-80">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
            <input
              type="text"
              placeholder="Search models (e.g. claude, gpt, r1)..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-3 rounded-xl bg-white border border-[#D9D9D9] text-slate-900 placeholder:text-slate-400 text-xs sm:text-sm focus:outline-none focus:border-[#086841] focus:ring-1 focus:ring-[#086841]"
            />
          </div>
        </div>

        {/* Filter Pills */}
        <div className="flex flex-wrap gap-2 mb-6">
          {[
            { id: "all", label: "All Models" },
            { id: "reasoning", label: "Reasoning (Claude 3.7 / R1 / o1)" },
            { id: "coding", label: "Coding Workhorses" },
            { id: "fast", label: "High Throughput (>100 t/s)" },
            { id: "multimodal", label: "Multimodal" },
          ].map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`px-4 py-2 rounded-full text-xs font-pp-mori-semibold transition-all ${
                selectedCategory === cat.id
                  ? "bg-[#086841] text-white shadow-xs"
                  : "bg-white text-slate-600 hover:text-slate-900 border border-[#D9D9D9]"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Table Card */}
        <div className="rounded-2xl border border-[#E5EDE8] bg-white overflow-hidden shadow-lg shadow-green-950/5">
          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs sm:text-sm">
              <thead>
                <tr className="border-b border-[#E5EDE8] bg-[#F7FAF8] text-slate-500 font-pp-mori-semibold uppercase tracking-wider text-[11px]">
                  <th className="py-4 px-4 sm:px-6">Model</th>
                  <th className="py-4 px-4">Provider</th>
                  <th className="py-4 px-4">List Price (In / Out)</th>
                  <th className="py-4 px-4 text-[#086841]">Credex Router (In / Out)</th>
                  <th className="py-4 px-4">Discount</th>
                  <th className="py-4 px-4">Throughput</th>
                  <th className="py-4 px-4">Auto-Failover Backends</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#E5EDE8]">
                {filteredModels.map((m) => (
                  <tr key={m.id} className="hover:bg-[#F9FCFA] transition-colors group">
                    <td className="py-4 px-4 sm:px-6">
                      <div className="flex items-center gap-2">
                        <span className="font-semibold text-slate-900 group-hover:text-[#086841] transition-colors">
                          {m.name}
                        </span>
                        {m.hot && (
                          <span className="text-[10px] px-2 py-0.5 rounded-full bg-[#118B6126] text-[#086841] font-bold uppercase">
                            Popular
                          </span>
                        )}
                      </div>
                    </td>

                    <td className="py-4 px-4 text-slate-600 font-medium">{m.provider}</td>

                    <td className="py-4 px-4 text-slate-500 font-mono">
                      ${m.listInput.toFixed(2)} / ${m.listOutput.toFixed(2)}
                    </td>

                    <td className="py-4 px-4 font-mono font-bold text-[#086841]">
                      ${m.routerInput.toFixed(2)} / ${m.routerOutput.toFixed(2)}
                    </td>

                    <td className="py-4 px-4">
                      <span className="inline-block px-2.5 py-0.5 rounded-full text-xs font-bold font-mono bg-[#E6F5EE] text-[#086841] border border-[#086841]/20">
                        {m.discount}
                      </span>
                    </td>

                    <td className="py-4 px-4 text-slate-700 font-mono">{m.speed} tok/s</td>

                    <td className="py-4 px-4 text-slate-500 text-xs">
                      <span className="truncate block max-w-[170px]" title={m.fallbacks.join(" -> ")}>
                        {m.fallbacks.join(" → ")}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* ========================================================
          MONTHLY SAVINGS CALCULATOR
         ======================================================== */}
      <section className="px-4 sm:px-6 lg:px-8 py-16 max-w-5xl mx-auto">
        <div className="rounded-3xl border border-[#E5EDE8] bg-white p-6 sm:p-12 shadow-xl shadow-green-950/5 relative overflow-hidden">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <span className="text-xs uppercase tracking-widest text-[#086841] font-pp-mori-semibold bg-[#E6F5EE] px-3 py-1 rounded-full">
              Runway Calculator
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold font-pp-mori-semibold text-[#062524] mt-2">
              Calculate Your Team&apos;s Savings
            </h2>
            <p className="text-slate-600 text-sm mt-2">
              Adjust the slider to your team&apos;s current monthly LLM API spend.
            </p>
          </div>

          {/* Slider */}
          <div className="max-w-xl mx-auto mb-10">
            <div className="flex items-center justify-between mb-3 text-sm font-pp-mori-semibold">
              <span className="text-slate-600">Current Monthly AI Spend:</span>
              <span className="text-2xl font-bold text-[#086841] font-mono">
                ${monthlySpend.toLocaleString()} / mo
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
              <span>$500/mo</span>
              <span>$10,000/mo</span>
              <span>$25,000/mo</span>
              <span>$50,000/mo</span>
            </div>
          </div>

          {/* Output Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-center max-w-3xl mx-auto">
            <div className="p-5 rounded-2xl bg-[#F8FAF9] border border-[#E5EDE8]">
              <span className="text-xs text-slate-500 uppercase tracking-wider block mb-1">
                With Credex Router
              </span>
              <span className="text-2xl sm:text-3xl font-bold font-mono text-[#062524]">
                ${credexSpend.toLocaleString()}
              </span>
              <span className="text-[11px] text-slate-500 block mt-1">per month</span>
            </div>

            <div className="p-5 rounded-2xl bg-[#E6F5EE] border border-[#086841]/30 shadow-xs">
              <span className="text-xs text-[#086841] font-semibold uppercase tracking-wider block mb-1">
                Monthly Cash Saved
              </span>
              <span className="text-2xl sm:text-3xl font-bold font-mono text-[#086841]">
                +${monthlySavings.toLocaleString()}
              </span>
              <span className="text-[11px] text-emerald-700 block mt-1">40% lower burn</span>
            </div>

            <div className="p-5 rounded-2xl bg-[#062524] text-white shadow-lg shadow-green-950/10">
              <span className="text-xs text-[#0FF395] font-semibold uppercase tracking-wider block mb-1">
                Annual Runway Gained
              </span>
              <span className="text-2xl sm:text-3xl font-bold font-mono text-white">
                ${annualSavings.toLocaleString()}
              </span>
              <span className="text-[11px] text-slate-300 block mt-1">reinvested in growth</span>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================
          CORE ARCHITECTURE SUPERPOWERS
         ======================================================== */}
      <section className="px-4 sm:px-6 lg:px-8 py-16 max-w-7xl mx-auto border-t border-slate-200">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="text-xs uppercase tracking-widest text-[#086841] font-pp-mori-semibold bg-[#E6F5EE] px-3 py-1 rounded-full">
            Infrastructure
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-pp-mori-semibold text-[#062524] mt-2">
            Engineered For Scale, Speed, and Privacy
          </h2>
          <p className="text-slate-600 text-sm sm:text-base mt-2">
            Built for mission-critical engineering teams and AI agents.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            {
              icon: Zap,
              title: "Sub-5ms Router Latency",
              desc: "Distributed edge proxy deployed across US, Europe, and Asia guarantees near-zero added time to first token.",
            },
            {
              icon: ShieldCheck,
              title: "Zero-Retention Privacy",
              desc: "Prompts stream through encrypted volatile memory. We never cache payloads, store completions, or train on your data.",
            },
            {
              icon: Layers,
              title: "Multi-Provider Failover",
              desc: "Never hit a 429 quota lock again. Traffic seamlessly spills across Bedrock, Vertex, and Azure when direct endpoints throttle.",
            },
            {
              icon: DollarSign,
              title: "Credit-Backed Arbitrage",
              desc: "We leverage institutional startup credit portfolios to pass 40% wholesale pricing directly to your individual API calls.",
            },
            {
              icon: Sliders,
              title: "Smart Fallback Rules",
              desc: "Configure cascading rules: try Claude 3.7 first; switch to o3-mini if latency exceeds 600ms or provider status degrades.",
            },
            {
              icon: Cpu,
              title: "Native Cursor & IDE Support",
              desc: "Paste one API key into your editor to supercharge completions across Cursor, Claude Code, Cline, and Windsurf.",
            },
          ].map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="credex-glow-card p-7 rounded-2xl group flex flex-col justify-between"
              >
                <div>
                  <div className="w-12 h-12 rounded-xl bg-[#E6F5EE] border border-[#086841]/20 text-[#086841] flex items-center justify-center mb-5 group-hover:scale-105 transition-transform">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-bold font-pp-mori-semibold text-slate-900 mb-2">
                    {item.title}
                  </h3>
                  <p className="text-sm text-slate-600 leading-relaxed">{item.desc}</p>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* ========================================================
          VIP WAITLIST & LAUNCH REGISTRATION FORM
         ======================================================== */}
      <section id="waitlist" className="px-4 sm:px-6 lg:px-8 py-20 max-w-4xl mx-auto">
        <div className="rounded-3xl border-2 border-[#086841]/30 bg-white p-8 sm:p-14 shadow-2xl shadow-green-950/10 relative overflow-hidden">
          {/* Top Banner */}
          <div className="flex justify-center mb-6">
            <span className="px-4 py-1.5 rounded-full text-xs font-pp-mori-semibold bg-[#E6F5EE] text-[#086841] border border-[#086841]/20 flex items-center gap-2">
              <Sparkles className="w-3.5 h-3.5 text-[#086841]" />
              First 500 Developers Get $50 Free API Credits
            </span>
          </div>

          <div className="text-center max-w-2xl mx-auto mb-10">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-pp-mori-semibold text-[#062524]">
              Reserve Your Early Access VIP Pass
            </h2>
            <p className="text-slate-600 text-sm sm:text-base mt-3">
              Get priority API key onboarding, zero platform fees, and $50 in compute credits at launch.
            </p>
          </div>

          {formStatus === "success" ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="py-10 text-center"
            >
              <div className="w-16 h-16 rounded-full bg-[#E6F5EE] border border-[#086841]/30 flex items-center justify-center mx-auto mb-4 text-[#086841]">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <h3 className="text-2xl sm:text-3xl font-bold font-pp-mori-semibold text-[#062524]">
                VIP Pass Reserved!
              </h3>
              <p className="text-slate-600 mt-2 text-sm sm:text-base max-w-md mx-auto">
                Thank you, <strong className="text-slate-900">{name}</strong>. Your invitation and
                $50 credit key voucher will be delivered to{" "}
                <strong className="text-[#086841]">{email}</strong> before private beta gates open.
              </p>

              <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3">
                <a
                  href="https://wa.me/918956042145?text=Hi,%20I%20just%20reserved%20a%20VIP%20pass%20for%20the%20Credex%20AI%20Router."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3.5 rounded-xl bg-[#086841] text-white font-pp-mori-semibold text-sm hover:bg-[#075635] transition-colors flex items-center gap-2"
                >
                  <span>Need Immediate Pilot Access? Talk on WhatsApp</span>
                  <ExternalLink className="w-4 h-4" />
                </a>
                <button
                  onClick={() => {
                    setFormStatus("idle");
                    setName("");
                    setEmail("");
                  }}
                  className="text-xs text-slate-500 hover:text-slate-900 underline mt-2 sm:mt-0"
                >
                  Register another team member
                </button>
              </div>
            </motion.div>
          ) : (
            <form onSubmit={handleWaitlistSubmit} className="space-y-6 max-w-2xl mx-auto">
              {/* Role Switcher */}
              <div>
                <label className="block text-xs uppercase tracking-wider font-pp-mori-semibold text-slate-700 mb-2">
                  I Am Building As A:
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                  {[
                    { key: "DEVELOPER", label: "Solo Developer" },
                    { key: "STARTUP", label: "AI Startup Founder" },
                    { key: "AGENCY", label: "Agency Team" },
                    { key: "ENTERPRISE", label: "Enterprise Scale" },
                  ].map((item) => (
                    <button
                      key={item.key}
                      type="button"
                      onClick={() => setRoleType(item.key as typeof roleType)}
                      className={`p-2.5 rounded-xl text-xs font-pp-mori-semibold border transition-all text-center ${
                        roleType === item.key
                          ? "bg-[#E6F5EE] border-[#086841] text-[#086841] shadow-xs"
                          : "bg-white border-slate-200 text-slate-600 hover:text-slate-900"
                      }`}
                    >
                      {item.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Name & Email */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs uppercase tracking-wider font-pp-mori-semibold text-slate-700 mb-1.5">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Sam Altman"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full px-4 py-3.5 rounded-xl bg-white border border-[#D9D9D9] text-slate-900 placeholder:text-slate-400 text-sm focus:outline-none focus:border-[#086841] focus:ring-1 focus:ring-[#086841]"
                  />
                </div>
                <div>
                  <label className="block text-xs uppercase tracking-wider font-pp-mori-semibold text-slate-700 mb-1.5">
                    Work Email *
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="sam@openai.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full px-4 py-3.5 rounded-xl bg-white border border-[#D9D9D9] text-slate-900 placeholder:text-slate-400 text-sm focus:outline-none focus:border-[#086841] focus:ring-1 focus:ring-[#086841]"
                  />
                </div>
              </div>

              {/* Monthly Volume */}
              <div>
                <label className="block text-xs uppercase tracking-wider font-pp-mori-semibold text-slate-700 mb-1.5">
                  Estimated Monthly AI Spend:
                </label>
                <select
                  value={monthlyTokens}
                  onChange={(e) => setMonthlyTokens(e.target.value)}
                  className="w-full px-4 py-3.5 rounded-xl bg-white border border-[#D9D9D9] text-slate-900 text-sm focus:outline-none focus:border-[#086841]"
                >
                  <option value="< $1k / mo">&lt; $1,000 / month (Prototyping)</option>
                  <option value="$1k - $5k / mo">$1,000 - $5,000 / month (Production MVP)</option>
                  <option value="$5k - $20k / mo">$5,000 - $20,000 / month (Scaling AI App)</option>
                  <option value="$20k+ / mo">&gt; $20,000 / month (Enterprise High-Scale)</option>
                </select>
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
                  <span>Securing VIP Pass...</span>
                ) : (
                  <>
                    <span>Get Early Access VIP Pass + $50 Credits</span>
                    <ArrowRight className="w-5 h-5" />
                  </>
                )}
              </button>

              <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-xs text-slate-500 pt-1">
                <span className="flex items-center gap-1">
                  <ShieldCheck className="w-3.5 h-3.5 text-[#086841]" />
                  100% Escrow-Protected
                </span>
                <span className="flex items-center gap-1">
                  <Lock className="w-3.5 h-3.5 text-[#086841]" />
                  Zero Spam Guarantee
                </span>
                <span className="flex items-center gap-1">
                  <DollarSign className="w-3.5 h-3.5 text-[#086841]" />
                  Zero Monthly Seat Fees
                </span>
              </div>
            </form>
          )}
        </div>
      </section>

      {/* ========================================================
          FREQUENTLY ASKED QUESTIONS
         ======================================================== */}
      <section className="px-4 sm:px-6 lg:px-8 py-20 max-w-4xl mx-auto border-t border-slate-200">
        <div className="text-center mb-12">
          <span className="text-xs uppercase tracking-widest text-[#086841] font-pp-mori-semibold bg-[#E6F5EE] px-3 py-1 rounded-full">
            FAQ
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold font-pp-mori-semibold text-[#062524] mt-2">
            Frequently Asked Questions
          </h2>
          <p className="text-slate-600 text-sm mt-2">
            Architecture, pricing, failover, and data privacy details.
          </p>
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
