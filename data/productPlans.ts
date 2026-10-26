import AwsSrc from "@/assets/aws.png";
import ClaudeSrc from "@/assets/claud.png";
import GCPSrc from "@/assets/logos/solo-gcp.png";
import MongoSrc from "@/assets/logos/mongodb.png";
import SupaSrc from "@/assets/logos/supabase.png";
import PostHogSrc from "@/assets/logos/posthog.svg";
import ElevenLabsSrc from "@/assets/logos/elevenlabs.png";
import DigitalSrc from "@/assets/logos/digitalocean.png";
import AzureSrc from "@/assets/azure.png";
import DeepgramSrc from "@/assets/logos/deepgram.jpeg";
import OpenaiSrc from "@/assets/logos/openai.png";
import CursorSrc from "@/assets/logos/cursor.png";
import LambdaSrc from "@/assets/logos/lambda.png";
import { StaticImageData } from "next/image";

export interface PlanGuide {
  title: string;
  url: string;
}

export interface PlanFaq {
  q: string;
  a: string;
}

export interface ProductPlan {
  id: string;
  slug: string;
  product: string;
  shortName: string;
  logo: StaticImageData | string;
  isSoldOut?: boolean;
  soldOutBadgeText?: string;
  soldOutAlternativeText?: string;
  soldOutAlternativeUrl?: string;
  title: string;
  description: string;
  h1: string;
  primaryKeyword: string;
  secondaryKeywords: string[];
  planBox: {
    productName: string;
    validity: string;
    credits: string;
    rateLimits: string;
    discount: string;
  };
  intro: string;
  useCases: string[];
  faqs: PlanFaq[];
  relatedSlugs: string[];
  guides: PlanGuide[];
  sellText: string;
  sellUrl?: string;
  sellBtnUrl: string;
  serviceSchemaName: string;
  serviceSchemaType: string;
  serviceSchemaDesc: string;
}

export const productPlans: ProductPlan[] = [
  {
    id: "openai",
    slug: "buy-openai-credits",
    product: "OpenAI",
    shortName: "OpenAI",
    logo: OpenaiSrc,
    title: "Buy OpenAI API Credits at Up to 50% Off (Tier 5) | Credex",
    description: "Buy discounted OpenAI API credits with Tier 5 rate limits. $2.5K, $5K and $25K packs, valid 1 year. Escrow-protected, zero code changes.",
    h1: "Buy Discounted OpenAI API Credits",
    primaryKeyword: "buy OpenAI credits",
    secondaryKeywords: [
      "discounted OpenAI API credits",
      "OpenAI Tier 5 credits",
      "GPT API credits",
      "reduce OpenAI API costs",
    ],
    planBox: {
      productName: "OpenAI API",
      validity: "1 year",
      credits: "$30K",
      rateLimits: "Tier 5",
      discount: "Up to 50% off",
    },
    intro: "Pay less for GPT models without touching your code. Credex sells verified OpenAI API credits with Tier 5 rate limits in $2.5K, $5K and $25K packs, valid for one year. You get full control of the account, and every deal is protected by escrow until access is confirmed.",
    useCases: [
      "AI startups running GPT models in production",
      "Agencies building chatbots and assistants for clients",
      "Teams hitting rate limits on lower OpenAI tiers",
    ],
    faqs: [
      {
        q: "Do these OpenAI credits include Tier 5 rate limits?",
        a: "Yes. Every OpenAI pack on Credex comes with Tier 5 rate limits.",
      },
      {
        q: "Will my existing code and SDK work?",
        a: "Yes. Your code and OpenAI SDK stay the same; you only use the new account's API key.",
      },
      {
        q: "How long are the credits valid?",
        a: "One year from transfer.",
      },
      {
        q: "Is it safe to buy OpenAI credits on Credex?",
        a: "Yes. Every deal runs through escrow. Sellers verify ownership and balance first, the buyer's payment is held until access is transferred and confirmed, and both sides sign a double-blind NDA.",
      },
    ],
    relatedSlugs: ["buy-azure-credits", "buy-claude-credits", "buy-gcp-credits"],
    guides: [
      {
        title: "Buy Discounted OpenAI Credits: How to Get $500K in Tier 5 API Credits at 50% Off",
        url: "/blog/buy-discounted-openai-credits-how-to-get-500k-in-tier-5-api-credits-at-50-percent-off",
      },
      {
        title: "Reduce OpenAI Costs by 45%: How OpenClaw Runs Cheaper with the Credex LLM Router",
        url: "/blog/reduce-openai-costs-by-45-percent-how-openclaw-runs-cheaper-with-the-credex-llm-router",
      },
    ],
    sellText: "Have unused OpenAI credits?",
    sellUrl: "/blog/resell-your-unused-openai-credits-before-they-expire-and-hit-zero",
    sellBtnUrl: "/seller",
    serviceSchemaName: "Discounted OpenAI API Credits",
    serviceSchemaType: "AI API credits",
    serviceSchemaDesc: "Verified OpenAI API credits with Tier 5 rate limits in $2.5K, $5K and $25K packs, valid for 1 year.",
  },
  {
    id: "claude",
    slug: "buy-claude-credits",
    product: "Anthropic / Claude",
    shortName: "Claude",
    logo: ClaudeSrc,
    isSoldOut: true,
    // soldOutBadgeText: "Sold Out",
    soldOutAlternativeText: "Need Claude now? Get Claude models through AWS Bedrock",
    soldOutAlternativeUrl: "/buy-aws-credits",
    title: "Buy Anthropic Claude API Credits at a Discount | Credex",
    description: "Discounted Anthropic Claude API credits with enterprise rate limits, valid 1 year. Sold out now: join the waitlist or get Claude via AWS Bedrock.",
    h1: "Buy Discounted Claude API Credits",
    primaryKeyword: "buy Claude credits",
    secondaryKeywords: [
      "Anthropic API credits",
      "Claude API credits discount",
      "Claude Opus credits",
      "Anthropic credits for startups",
    ],
    planBox: {
      productName: "Anthropic Claude API",
      validity: "1 year",
      credits: "10K/100K",
      rateLimits: "Enterprise Rate Limits",
      discount: "Up to 50% off",
    },
    intro: "Run Claude models for less. Credex sells verified Anthropic API credits with enterprise rate limits, valid for one year. Direct Claude credits are sold out right now. Join the waitlist to hear first when new stock arrives, or use Claude today through discounted AWS Bedrock credits.",
    useCases: [
      "Coding agents and developer tools built on Claude",
      "Long-document analysis and research workflows",
      "Customer support assistants that need high rate limits",
    ],
    faqs: [
      {
        q: "When will Claude credits be back in stock?",
        a: "Stock depends on verified sellers. Join the waitlist and we'll email you as soon as a pack is available.",
      },
      {
        q: "Can I use Claude another way in the meantime?",
        a: "Yes. Our AWS credits let you run Claude models on Amazon Bedrock and are valid for two years.",
      },
      {
        q: "Do Claude credits include enterprise rate limits?",
        a: "Yes, every Claude pack comes with enterprise rate limits.",
      },
      {
        q: "Is it safe to buy Claude credits on Credex?",
        a: "Yes. Every deal runs through escrow. Sellers verify ownership and balance first, the buyer's payment is held until access is transferred and confirmed, and both sides sign a double-blind NDA.",
      },
    ],
    relatedSlugs: ["buy-aws-credits", "buy-openai-credits", "buy-gcp-credits"],
    guides: [
      {
        title: "Buy Discounted Claude Opus Credits: How AI Startups Avoid Burning $300K a Year on API Costs",
        url: "/blog/buy-discounted-claude-opus-credits-how-ai-startups-avoid-burning-300k-a-year-on-api-costs",
      },
      {
        title: "Buy Claude Credits for Enterprise AI",
        url: "/blog/buy-claude-credits-for-enterprise-ai-why-anthropic-is-redefining-the-space-in-202",
      },
    ],
    sellText: "Have unused Claude credits? We have buyers waiting.",
    sellBtnUrl: "/seller",
    serviceSchemaName: "Discounted Claude API Credits",
    serviceSchemaType: "AI API credits",
    serviceSchemaDesc: "Verified Anthropic Claude API credits with enterprise rate limits, valid for 1 year.",
  },
  {
    id: "aws",
    slug: "buy-aws-credits",
    product: "AWS (Claude via Bedrock)",
    shortName: "AWS Bedrock",
    logo: AwsSrc,
    title: "Buy AWS Credits at a Discount | Claude on Bedrock | Credex",
    description: "Buy discounted AWS credits to run Claude models on Amazon Bedrock. $5K to $100K packs, valid 2 years, with enterprise support. Escrow-protected.",
    h1: "Buy Discounted AWS Credits for Amazon Bedrock",
    primaryKeyword: "buy AWS credits",
    secondaryKeywords: [
      "AWS Bedrock credits",
      "Claude on AWS Bedrock",
      "discounted AWS credits",
      "AWS credits for startups",
    ],
    planBox: {
      productName: "Amazon Web Services (AWS)",
      validity: "2 years",
      credits: "$5K / $10K / $25K / $100K",
      rateLimits: "Enterprise Support",
      discount: "Up to 50% off",
    },
    intro: "Use Claude models on Amazon Bedrock and pay less for them. Credex sells verified AWS credits in $5K, $10K, $25K and $100K packs, valid for two years with enterprise support. The longest validity on Credex gives you room to plan, and escrow protects every deal.",
    useCases: [
      "Teams that need Claude inside their own AWS account for security or compliance",
      "Startups already running their stack on AWS",
      "Companies trying to lower a growing AWS bill",
    ],
    faqs: [
      {
        q: "Can I use Claude models with these AWS credits?",
        a: "Yes. You can run Claude models on Amazon Bedrock in the regions where AWS offers them.",
      },
      {
        q: "How long are the AWS credits valid?",
        a: "Two years.",
      },
      {
        q: "Can the credits be used on other AWS services?",
        a: "Yes. The credits apply to standard eligible Amazon Web Services cloud infrastructure across compute, storage, databases, and AI services on the account.",
      },
      {
        q: "Is it safe to buy AWS credits on Credex?",
        a: "Yes. Every deal runs through escrow. Sellers verify ownership and balance first, the buyer's payment is held until access is transferred and confirmed, and both sides sign a double-blind NDA.",
      },
    ],
    relatedSlugs: ["buy-claude-credits", "buy-gcp-credits", "buy-azure-credits"],
    guides: [
      {
        title: "Buy Discounted AWS Credits and Cut Your Cloud Bill by Up to 50%",
        url: "/blog/buy-discounted-aws-credits-and-cut-your-cloud-bill-by-up-to-50-percent",
      },
      {
        title: "Lower AWS Costs by 50% in 2 Weeks: The Credit Strategy That Saved Our Series C",
        url: "/blog/lower-aws-costs-by-50-percent-in-2-weeks-the-credit-strategy-that-saved-our-series-c",
      },
      {
        title: "AWS Bill Too High? How a $287K AWS Bill Nearly Killed a $50M Exit",
        url: "/blog/aws-bill-too-high-how-a-287k-aws-bill-nearly-killed-a-50m-exit",
      },
    ],
    sellText: "Have unused AWS credits?",
    sellUrl: "/blog/sell-unused-aws-credits-in-5-days-before-they-expire-and-lose-all-value",
    sellBtnUrl: "/seller",
    serviceSchemaName: "Discounted AWS Credits",
    serviceSchemaType: "Cloud infrastructure credits",
    serviceSchemaDesc: "Verified AWS credits for Amazon Bedrock and cloud services in $5K to $100K packs, valid for 2 years.",
  },
  {
    id: "gcp",
    slug: "buy-gcp-credits",
    product: "GCP / Vertex AI (Gemini)",
    shortName: "GCP Vertex AI",
    logo: GCPSrc,
    title: "Buy GCP Credits for Vertex AI & Gemini | Up to 50% Off",
    description: "Buy discounted Google Cloud credits for Vertex AI and Gemini models. $25K and $100K packs, valid 1 year, with enterprise support. Escrow-protected.",
    h1: "Buy Discounted GCP Credits for Vertex AI and Gemini",
    primaryKeyword: "buy GCP credits",
    secondaryKeywords: [
      "Google Cloud credits",
      "Vertex AI credits",
      "Gemini API credits",
      "discounted GCP credits",
    ],
    planBox: {
      productName: "Google Cloud Platform (GCP)",
      validity: "1 year",
      credits: "$25K / $100K",
      rateLimits: "Enterprise Support",
      discount: "Up to 50% off",
    },
    intro: "Build with Gemini on Google Cloud for less. Credex sells verified GCP credits in $25K and $100K packs for Vertex AI, valid for one year with enterprise support. Keep your existing Google Cloud setup and let escrow handle the risk.",
    useCases: [
      "Apps built on Gemini models through Vertex AI",
      "Data teams running BigQuery and ML pipelines on GCP",
      "Startups whose Google for Startups credits ran out",
    ],
    faqs: [
      {
        q: "Can I use Gemini models with these GCP credits?",
        a: "Yes, through Vertex AI on the Google Cloud account you receive.",
      },
      {
        q: "What pack sizes are available?",
        a: "$25K and $100K.",
      },
      {
        q: "What support level is included?",
        a: "Enterprise support.",
      },
      {
        q: "Is it safe to buy GCP credits on Credex?",
        a: "Yes. Every deal runs through escrow. Sellers verify ownership and balance first, the buyer's payment is held until access is transferred and confirmed, and both sides sign a double-blind NDA.",
      },
    ],
    relatedSlugs: ["buy-aws-credits", "buy-azure-credits", "buy-lambda-gpu-credits"],
    guides: [
      {
        title: "Buy Discounted GCP Credits Before Your Next BigQuery Bill or TPU Waitlist Costs You More",
        url: "/blog/buy-discounted-gcp-credits-before-your-next-bigquery-bill-or-tpu-waitlist-costs-you-more",
      },
      {
        title: "Buy Discounted Gemini API Credits: How We Scaled Gemini 1.5 Pro to 50K Users",
        url: "/blog/buy-discounted-gemini-api-credits-how-we-scaled-gemini-1-5-pro-to-50k-users-without-going-bankrupt",
      },
    ],
    sellText: "Have unused GCP credits?",
    sellUrl: "/blog/sell-unused-gcp-credits-for-cash-before-they-expire-in-5-days",
    sellBtnUrl: "/seller",
    serviceSchemaName: "Discounted GCP Credits",
    serviceSchemaType: "Cloud & AI credits",
    serviceSchemaDesc: "Verified Google Cloud credits for Vertex AI and Gemini models in $25K and $100K packs, valid for 1 year.",
  },
  {
    id: "azure",
    slug: "buy-azure-credits",
    product: "Azure OpenAI (GPT)",
    shortName: "Azure OpenAI",
    logo: AzureSrc,
    title: "Buy Azure OpenAI Credits for GPT Models | Up to 50% Off",
    description: "Buy discounted Azure credits to run GPT models on Azure OpenAI. $25K and $100K packs, valid 1 year. Escrow-protected, no code rewrite.",
    h1: "Buy Discounted Azure OpenAI Credits",
    primaryKeyword: "buy Azure credits",
    secondaryKeywords: [
      "Azure OpenAI credits",
      "Azure credits discount",
      "GPT on Azure",
      "Microsoft Azure credits for startups",
    ],
    planBox: {
      productName: "Azure OpenAI",
      validity: "1 year",
      credits: "$25K / $100K",
      rateLimits: "Normal Support",
      discount: "Up to 50% off",
    },
    intro: "Run GPT models inside Microsoft Azure at a lower cost. Credex sells verified Azure credits for Azure OpenAI in $25K and $100K packs, valid for one year. It suits teams that already use Azure or need Microsoft's compliance and data residency.",
    useCases: [
      "Enterprises that must keep AI workloads inside Azure",
      "Teams already running apps and data on Azure",
      "Companies that need GPT with regional data residency",
    ],
    faqs: [
      {
        q: "How are Azure OpenAI credits different from OpenAI credits?",
        a: "Both run GPT models. Azure OpenAI runs them inside Microsoft Azure, which helps if you already use Azure or need its compliance features. For direct OpenAI access, see our OpenAI credits.",
      },
      {
        q: "What support level is included?",
        a: "Normal Azure support.",
      },
      {
        q: "How long are the credits valid?",
        a: "One year.",
      },
      {
        q: "Is it safe to buy Azure credits on Credex?",
        a: "Yes. Every deal runs through escrow. Sellers verify ownership and balance first, the buyer's payment is held until access is transferred and confirmed, and both sides sign a double-blind NDA.",
      },
    ],
    relatedSlugs: ["buy-openai-credits", "buy-aws-credits", "buy-gcp-credits"],
    guides: [
      {
        title: "Buy Discounted Azure Credits: Cut Your Cloud Bill Up to 50% Before the Next Cost Spike",
        url: "/blog/buy-discounted-azure-credits-cut-your-cloud-bill-up-to-50-percent-before-the-next-cost-spike",
      },
    ],
    sellText: "Have unused Azure credits?",
    sellUrl: "/blog/sell-unused-azure-credits-before-that-forgotten-balance-expires-for-nothing",
    sellBtnUrl: "/seller",
    serviceSchemaName: "Discounted Azure OpenAI Credits",
    serviceSchemaType: "Cloud & AI credits",
    serviceSchemaDesc: "Verified Azure credits for Azure OpenAI in $25K and $100K packs, valid for 1 year.",
  },
  {
    id: "mongodb",
    slug: "buy-mongodb-credits",
    product: "MongoDB",
    shortName: "MongoDB Atlas",
    logo: MongoSrc,
    title: "Buy MongoDB Atlas Credits at Up to 50% Off | Credex",
    description: "Buy discounted MongoDB Atlas credits in $15K and $125K packs, valid 1 year, with enterprise support. Lower your database bill with escrow protection.",
    h1: "Buy Discounted MongoDB Atlas Credits",
    primaryKeyword: "buy MongoDB credits",
    secondaryKeywords: [
      "MongoDB Atlas credits",
      "MongoDB Atlas discount",
      "reduce MongoDB Atlas bill",
    ],
    planBox: {
      productName: "MongoDB Atlas",
      validity: "1 year",
      credits: "$15K / $125K",
      rateLimits: "Enterprise Support",
      discount: "Up to 50% off",
    },
    intro: "Keep your database growing without the bill growing as fast. Credex sells verified MongoDB Atlas credits in $15K and $125K packs, valid for one year with enterprise support. Your clusters, drivers and connection strings stay the same.",
    useCases: [
      "SaaS products whose Atlas bill jumped as usage grew",
      "AI apps using Atlas Vector Search",
      "Teams moving from shared to dedicated clusters",
    ],
    faqs: [
      {
        q: "Do the credits work on MongoDB Atlas clusters?",
        a: "Yes, they apply to Atlas usage on the account you receive.",
      },
      {
        q: "What pack sizes are available?",
        a: "$15K and $125K.",
      },
      {
        q: "How long are the credits valid?",
        a: "One year, with enterprise support.",
      },
      {
        q: "Is it safe to buy MongoDB credits on Credex?",
        a: "Yes. Every deal runs through escrow. Sellers verify ownership and balance first, the buyer's payment is held until access is transferred and confirmed, and both sides sign a double-blind NDA.",
      },
    ],
    relatedSlugs: ["buy-supabase-credits", "buy-digitalocean-credits", "buy-posthog-credits"],
    guides: [
      {
        title: "Buy MongoDB Credits at Up to 50% Off: How to Fix an Atlas Bill That Tripled Overnight",
        url: "/blog/buy-mongodb-credits-at-up-to-50-percent-off-how-to-fix-an-atlas-bill-that-tripled-overnight",
      },
    ],
    sellText: "Have unused MongoDB credits?",
    sellUrl: "/blog/sell-unused-mongodb-credits-before-your-atlas-account-expires-and-loses-all-its-value",
    sellBtnUrl: "/seller",
    serviceSchemaName: "Discounted MongoDB Atlas Credits",
    serviceSchemaType: "Database credits",
    serviceSchemaDesc: "Verified MongoDB Atlas credits in $15K and $125K packs, valid for 1 year with enterprise support.",
  },
  {
    id: "supabase",
    slug: "buy-supabase-credits",
    product: "Supabase",
    shortName: "Supabase",
    logo: SupaSrc,
    title: "Buy Supabase Credits at Up to 50% Off | Credex",
    description: "Buy discounted Supabase credits in $25K and $125K packs, valid 1 year, with enterprise support. Cut your Postgres, auth and storage bill.",
    h1: "Buy Discounted Supabase Credits",
    primaryKeyword: "buy Supabase credits",
    secondaryKeywords: [
      "Supabase credits discount",
      "reduce Supabase costs",
      "Supabase enterprise plan",
    ],
    planBox: {
      productName: "Supabase",
      validity: "1 year",
      credits: "$25K",
      rateLimits: "Enterprise Support",
      discount: "Up to 50% off",
    },
    intro: "Scale your Supabase backend before the next bill arrives. Credex sells verified Supabase credits in $25K and $125K packs, valid for one year with enterprise support, covering your Postgres database, auth and storage. No migration and no code changes.",
    useCases: [
      "Apps with fast-growing monthly active users",
      "AI products storing embeddings with pgvector",
      "Startups using Supabase as their full backend",
    ],
    faqs: [
      {
        q: "What do Supabase credits cover?",
        a: "Your Supabase usage on the account you receive, including compute, auth, storage, database egress, and realtime subscriptions.",
      },
      {
        q: "Do I need to migrate my project?",
        a: "No. You keep your setup; only the billing account changes.",
      },
      {
        q: "How long are the credits valid?",
        a: "One year.",
      },
      {
        q: "Is it safe to buy Supabase credits on Credex?",
        a: "Yes. Every deal runs through escrow. Sellers verify ownership and balance first, the buyer's payment is held until access is transferred and confirmed, and both sides sign a double-blind NDA.",
      },
    ],
    relatedSlugs: ["buy-mongodb-credits", "buy-posthog-credits", "buy-digitalocean-credits"],
    guides: [
      {
        title: "Buy Supabase Credits at a Discount: Save Up to 50% Before Your Next MAU Bill Hits",
        url: "/blog/buy-supabase-credits-at-a-discount-save-up-to-50-percent-before-your-next-mau-bill-or-connection-limit-hits",
      },
    ],
    sellText: "Have unused Supabase credits?",
    sellUrl: "/blog/sell-unused-supabase-credits-before-they-expire-monetize-supabase-credits-into-cash-in-5-days",
    sellBtnUrl: "/seller",
    serviceSchemaName: "Discounted Supabase Credits",
    serviceSchemaType: "Backend & Database credits",
    serviceSchemaDesc: "Verified Supabase credits in $25K and $125K packs, valid for 1 year with enterprise support.",
  },
  {
    id: "posthog",
    slug: "buy-posthog-credits",
    product: "PostHog",
    shortName: "PostHog",
    logo: PostHogSrc,
    title: "Buy PostHog Credits with No Expiry | Up to 50% Off",
    description: "Buy discounted PostHog credits: $50K pack, no expiry date, with enterprise support. Cut your product analytics and session replay bill.",
    h1: "Buy Discounted PostHog Credits That Never Expire",
    primaryKeyword: "buy PostHog credits",
    secondaryKeywords: [
      "PostHog credits discount",
      "reduce PostHog bill",
      "PostHog enterprise",
    ],
    planBox: {
      productName: "PostHog Analytics",
      validity: "No expiry",
      credits: "$50K",
      rateLimits: "Enterprise Support",
      discount: "Up to 50% off",
    },
    intro: "Get PostHog credits you never have to rush to use. Credex sells a verified $50K PostHog credit pack with no expiry date and enterprise support. Use it for product analytics, session replay and feature flags at your own pace.",
    useCases: [
      "Product teams tracking large event volumes",
      "Apps that rely heavily on session replay",
      "Teams running feature flags and A/B tests",
    ],
    faqs: [
      {
        q: "Do PostHog credits from Credex expire?",
        a: "No. This pack has no expiry date.",
      },
      {
        q: "Which PostHog products can I use the credits on?",
        a: "You can use credits across all PostHog products: event analytics, session recordings, feature flags, experiments, surveys, and data pipelines.",
      },
      {
        q: "What support is included?",
        a: "Enterprise support.",
      },
      {
        q: "Is it safe to buy PostHog credits on Credex?",
        a: "Yes. Every deal runs through escrow. Sellers verify ownership and balance first, the buyer's payment is held until access is transferred and confirmed, and both sides sign a double-blind NDA.",
      },
    ],
    relatedSlugs: ["buy-supabase-credits", "buy-mongodb-credits", "buy-cursor-credits"],
    guides: [
      {
        title: "Discounted PostHog Credits at Up to 50% Off: Cut Your PostHog Bill Before the Next Billing Cycle",
        url: "/blog/discounted-posthog-credits-at-up-to-50-off-cut-your-posthog-bill-before-the-next-billing-cycle",
      },
    ],
    sellText: "Have unused PostHog credits?",
    sellUrl: "/blog/sell-unused-posthog-credits-monetize-posthog-credits-before-they-expire",
    sellBtnUrl: "/seller",
    serviceSchemaName: "Discounted PostHog Credits",
    serviceSchemaType: "Product Analytics credits",
    serviceSchemaDesc: "Verified $50K PostHog credit pack with no expiry date and enterprise support.",
  },
  {
    id: "elevenlabs",
    slug: "buy-elevenlabs-credits",
    product: "ElevenLabs",
    shortName: "ElevenLabs",
    logo: ElevenLabsSrc,
    title: "Buy ElevenLabs Credits at Up to 50% Off | Credex",
    description: "Buy discounted ElevenLabs credits for text-to-speech and voice AI. $5K and $30K packs, valid 1 year, with enterprise rate limits.",
    h1: "Buy Discounted ElevenLabs Credits",
    primaryKeyword: "buy ElevenLabs credits",
    secondaryKeywords: [
      "ElevenLabs API credits",
      "text to speech API credits",
      "voice AI credits",
    ],
    planBox: {
      productName: "ElevenLabs Voice AI",
      validity: "1 year",
      credits: "$5K / $30K",
      rateLimits: "Enterprise Rate Limits",
      discount: "Up to 50% off",
    },
    intro: "Generate more voice for less. Credex sells verified ElevenLabs credits in $5K and $30K packs, valid for one year with enterprise rate limits. Use them for text-to-speech, voice agents and dubbing through the same ElevenLabs API you already use.",
    useCases: [
      "Voice agents and AI phone assistants",
      "Audiobook and podcast generation",
      "Video dubbing and localization",
    ],
    faqs: [
      {
        q: "Can I use the credits through the ElevenLabs API?",
        a: "Yes. Use the API key from the account you receive.",
      },
      {
        q: "What rate limits come with the pack?",
        a: "Enterprise rate limits.",
      },
      {
        q: "How long are the credits valid?",
        a: "One year.",
      },
      {
        q: "Is it safe to buy ElevenLabs credits on Credex?",
        a: "Yes. Every deal runs through escrow. Sellers verify ownership and balance first, the buyer's payment is held until access is transferred and confirmed, and both sides sign a double-blind NDA.",
      },
    ],
    relatedSlugs: ["buy-deepgram-credits", "buy-openai-credits", "buy-cursor-credits"],
    guides: [
      {
        title: "Cloud Cost Optimization for AI Teams: How to Build AI Products Without Burning Dev Budget",
        url: "/blog/cloud-cost-optimization-for-ai-teams-how-to-build-ai-products-without-burning-your-dev-budget",
      },
    ],
    sellText: "Have unused ElevenLabs credits?",
    sellBtnUrl: "/seller",
    serviceSchemaName: "Discounted ElevenLabs Credits",
    serviceSchemaType: "Voice AI credits",
    serviceSchemaDesc: "Verified ElevenLabs API credits for text-to-speech and voice AI in $5K and $30K packs, valid for 1 year.",
  },
  {
    id: "digitalocean",
    slug: "buy-digitalocean-credits",
    product: "DigitalOcean",
    shortName: "DigitalOcean",
    logo: DigitalSrc,
    title: "Buy DigitalOcean Credits at Up to 50% Off | Credex",
    description: "Buy discounted DigitalOcean credits for Droplets, managed databases and Kubernetes. $5K and $30K packs, valid 1 year. Escrow-protected.",
    h1: "Buy Discounted DigitalOcean Credits",
    primaryKeyword: "buy DigitalOcean credits",
    secondaryKeywords: [
      "DigitalOcean credits",
      "cheap cloud hosting credits",
      "DigitalOcean credits for startups",
    ],
    planBox: {
      productName: "DigitalOcean Cloud",
      validity: "1 year",
      credits: "$5K / $30K",
      rateLimits: "Enterprise Rate Limits",
      discount: "Up to 50% off",
    },
    intro: "Host your apps on DigitalOcean for less. Credex sells verified DigitalOcean credits in $5K and $30K packs, valid for one year. Use them on Droplets, managed databases and Kubernetes with the same simple setup you already know.",
    useCases: [
      "Startups and indie teams hosting web apps",
      "Agencies running many client sites",
      "Side projects that outgrew free credits",
    ],
    faqs: [
      {
        q: "Which DigitalOcean products do the credits cover?",
        a: "The credits cover Droplets (compute), managed databases, Kubernetes clusters, Spaces object storage, container registry, and load balancers.",
      },
      {
        q: "What pack sizes are available?",
        a: "$5K and $30K.",
      },
      {
        q: "How long are the credits valid?",
        a: "One year.",
      },
      {
        q: "Is it safe to buy DigitalOcean credits on Credex?",
        a: "Yes. Every deal runs through escrow. Sellers verify ownership and balance first, the buyer's payment is held until access is transferred and confirmed, and both sides sign a double-blind NDA.",
      },
    ],
    relatedSlugs: ["buy-aws-credits", "buy-supabase-credits", "buy-lambda-gpu-credits"],
    guides: [
      {
        title: "Cloud Cost Optimization for Startups: How We Bootstrapped a Fintech to $2M ARR",
        url: "/blog/cloud-cost-optimization-for-startups-how-we-bootstrapped-a-fintech-to-2m-arr-with-smart-ai-infrastructure",
      },
    ],
    sellText: "Have unused DigitalOcean credits?",
    sellBtnUrl: "/seller",
    serviceSchemaName: "Discounted DigitalOcean Credits",
    serviceSchemaType: "Cloud hosting credits",
    serviceSchemaDesc: "Verified DigitalOcean credits for Droplets, managed databases and Kubernetes in $5K and $30K packs, valid 1 year.",
  },
  {
    id: "deepgram",
    slug: "buy-deepgram-credits",
    product: "Deepgram",
    shortName: "Deepgram",
    logo: DeepgramSrc,
    title: "Buy Deepgram Credits: $500K Speech-to-Text Pack | Credex",
    description: "Buy discounted Deepgram credits for speech-to-text and voice AI. $500K pack, valid 1 year, with enterprise rate limits. Escrow-protected.",
    h1: "Buy Discounted Deepgram Credits",
    primaryKeyword: "buy Deepgram credits",
    secondaryKeywords: [
      "Deepgram API credits",
      "speech to text API credits",
      "transcription API credits",
    ],
    planBox: {
      productName: "Deepgram Voice AI",
      validity: "1 year",
      credits: "$500K",
      rateLimits: "Enterprise Rate Limits",
      discount: "Up to 50% off",
    },
    intro: "Transcribe at scale for a fraction of the list price. Credex sells a verified $500K Deepgram credit pack, valid for one year with enterprise rate limits. It's built for voice AI companies that process large volumes of audio every day.",
    useCases: [
      "Voice agents that need fast speech-to-text",
      "Call center transcription and analytics",
      "Meeting notes and media transcription tools",
    ],
    faqs: [
      {
        q: "Is there a smaller Deepgram pack?",
        a: "Right now we offer a $500K pack. Custom enterprise tiers and allocations can be discussed directly with our sales team.",
      },
      {
        q: "What rate limits are included?",
        a: "Enterprise rate limits.",
      },
      {
        q: "Will my Deepgram integration change?",
        a: "No. Use the API key from the account you receive.",
      },
      {
        q: "Is it safe to buy Deepgram credits on Credex?",
        a: "Yes. Every deal runs through escrow. Sellers verify ownership and balance first, the buyer's payment is held until access is transferred and confirmed, and both sides sign a double-blind NDA.",
      },
    ],
    relatedSlugs: ["buy-elevenlabs-credits", "buy-openai-credits", "buy-claude-credits"],
    guides: [
      {
        title: "Buy Discounted Deepgram Credits: Build Voice AI with $500K in API Credits at 50% Off",
        url: "/blog/buy-discounted-deepgram-credits-build-voice-ai-with-500k-in-api-credits-at-50-percent-off",
      },
    ],
    sellText: "Have unused Deepgram credits?",
    sellBtnUrl: "/seller",
    serviceSchemaName: "Discounted Deepgram Credits",
    serviceSchemaType: "Speech-to-Text & Voice AI credits",
    serviceSchemaDesc: "Verified $500K Deepgram credit pack for speech-to-text and voice AI, valid 1 year with enterprise rate limits.",
  },
  {
    id: "cursor",
    slug: "buy-cursor-credits",
    product: "Cursor",
    shortName: "Cursor",
    logo: CursorSrc,
    title: "Buy Cursor Credits for Teams at Up to 50% Off | Credex",
    description: "Buy discounted Cursor credits for your engineering team. $50K pack, valid 1 year, with enterprise rate limits. Escrow-protected.",
    h1: "Buy Discounted Cursor Credits for Your Team",
    primaryKeyword: "buy Cursor credits",
    secondaryKeywords: [
      "Cursor AI credits",
      "Cursor for teams",
      "Cursor business plan discount",
    ],
    planBox: {
      productName: "Cursor for Teams",
      validity: "1 year",
      credits: "$50K",
      rateLimits: "Enterprise Rate Limits",
      discount: "Up to 50% off",
    },
    intro: "Give your whole engineering team Cursor without the full price. Credex sells a verified $50K Cursor credit pack, valid for one year with enterprise rate limits. Your developers keep working in the same editor, with more room for AI requests.",
    useCases: [
      "Engineering teams rolling Cursor out to every developer",
      "Agencies with many developers across client projects",
      "Heavy users who hit usage limits every month",
    ],
    faqs: [
      {
        q: "How are Cursor credits applied to my team?",
        a: "Credits apply at the organization level to cover team member seats, fast model usage, and background agent tasks across the workspace.",
      },
      {
        q: "What rate limits are included?",
        a: "Enterprise rate limits.",
      },
      {
        q: "How long are the credits valid?",
        a: "One year.",
      },
      {
        q: "Is it safe to buy Cursor credits on Credex?",
        a: "Yes. Every deal runs through escrow. Sellers verify ownership and balance first, the buyer's payment is held until access is transferred and confirmed, and both sides sign a double-blind NDA.",
      },
    ],
    relatedSlugs: ["buy-openai-credits", "buy-claude-credits", "buy-posthog-credits"],
    guides: [
      {
        title: "Cloud Cost Optimization for AI Teams: How to Build AI Products Without Burning Dev Budget",
        url: "/blog/cloud-cost-optimization-for-ai-teams-how-to-build-ai-products-without-burning-your-dev-budget",
      },
    ],
    sellText: "Have unused Cursor credits?",
    sellBtnUrl: "/seller",
    serviceSchemaName: "Discounted Cursor Credits",
    serviceSchemaType: "Developer AI tooling credits",
    serviceSchemaDesc: "Verified $50K Cursor credit pack for engineering teams, valid for 1 year with enterprise rate limits.",
  },
  {
    id: "lambda",
    slug: "buy-lambda-gpu-credits",
    product: "Lambda (GPUs)",
    shortName: "Lambda Cloud",
    logo: LambdaSrc,
    title: "Buy Lambda GPU Cloud Credits at Up to 50% Off | Credex",
    description: "Buy discounted Lambda GPU cloud credits for AI training and inference. $100K pack, valid 1 year, with enterprise rate limits. Escrow-protected.",
    h1: "Buy Discounted Lambda GPU Credits",
    primaryKeyword: "buy GPU credits",
    secondaryKeywords: [
      "Lambda Labs credits",
      "Lambda GPU cloud credits",
      "GPU cloud credits for AI training",
    ],
    planBox: {
      productName: "Lambda GPU Cloud",
      validity: "1 year",
      credits: "$100K",
      rateLimits: "Enterprise Rate Limits",
      discount: "Up to 50% off",
    },
    intro: "Train and serve models on Lambda's GPU cloud for less. Credex sells a verified $100K Lambda credit pack, valid for one year with enterprise rate limits. It's a fast way to get serious GPU capacity without a long procurement cycle.",
    useCases: [
      "Training and fine-tuning foundation models",
      "Running inference for open-source models",
      "Research teams that need GPUs for a fixed project",
    ],
    faqs: [
      {
        q: "Which GPUs can I use with Lambda credits?",
        a: "Credits can be used on Lambda Cloud GPU instances including NVIDIA H100, A100, GH200, and other clusters based on Lambda on-demand availability.",
      },
      {
        q: "What pack size is available?",
        a: "$100K.",
      },
      {
        q: "How long are the credits valid?",
        a: "One year.",
      },
      {
        q: "Is it safe to buy GPU credits on Credex?",
        a: "Yes. Every deal runs through escrow. Sellers verify ownership and balance first, the buyer's payment is held until access is transferred and confirmed, and both sides sign a double-blind NDA.",
      },
    ],
    relatedSlugs: ["buy-gcp-credits", "buy-aws-credits", "buy-digitalocean-credits"],
    guides: [
      {
        title: "Buy GPU Credits and Skip the Waitlist: How to Train Foundation Models Without Delay",
        url: "/blog/buy-gpu-credits-and-skip-the-waitlist-how-to-train-foundation-models-without-delay",
      },
    ],
    sellText: "Have unused Lambda credits?",
    sellBtnUrl: "/seller",
    serviceSchemaName: "Discounted Lambda GPU Credits",
    serviceSchemaType: "GPU cloud compute credits",
    serviceSchemaDesc: "Verified $100K Lambda GPU cloud credits for AI training and inference, valid 1 year with enterprise rate limits.",
  },
];

export function getAllProductPlans(): ProductPlan[] {
  return productPlans;
}

export function getProductPlanBySlug(slug: string): ProductPlan | undefined {
  return productPlans.find((p) => p.slug === slug);
}

export function getAllProductSlugs(): string[] {
  return productPlans.map((p) => p.slug);
}
