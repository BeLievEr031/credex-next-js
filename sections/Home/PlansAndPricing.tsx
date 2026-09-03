/* eslint-disable @typescript-eslint/no-unused-vars */
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
"use client";

import PricingCard from '../../components/PricingCard'
import Image from "next/image"
import AwsSrc from "../../assets/aws.png"
import ClaudeSrc from "../../assets/claud.png"
import GCPSrc from "../../assets/logos/solo-gcp.png"
import MongoSrc from "../../assets/logos/mongodb.png"
import SupaSrc from "../../assets/logos/supabase.png"
import PostHogSrc from "../../assets/logos/posthog.svg"
import ElevenLabsSrc from "../../assets/logos/elevenlabs.png"
import DigitalSrc from "../../assets/logos/digitalocean.png"
import AzureSrc from "../../assets/azure.png"
import DeepgramSrc from "../../assets/logos/deepgram.jpeg"
import OpenaiSrc from "../../assets/logos/openai.png"
import CursorSrc from "../../assets/logos/cursor.png"
import LambdaSrc from "../../assets/logos/lambda.png"
import { usePathname } from 'next/navigation'
import { useEffect, useRef, useState } from 'react'
import { motion, AnimatePresence } from 'motion/react'
// import { productApi } from '../../api/api'

interface IPlatform {
    platform: string;
    logo: string;
    credits: string[];
    validity: string;
    rateLimits: string
}

const platforms = [
    {
        "platform": "OpenAI",
        "logo": OpenaiSrc,
        "credits": ["$2.5k", "5k", "$25k"],
        "validity": "1 yr",
        "rateLimits": "Tier 5"
    },
    {
        "platform": "Anthropic/Claude",
        "logo": ClaudeSrc,
        "credits": ["Sold Out"],
        "validity": "1 yr",
        "rateLimits": "Enterprise Rate Limits"
    },
    {
        "platform": "AWS (Claude Models via Bedrock)",
        "logo": AwsSrc,
        "credits": ["$5K", "$10K", "$25K", "$100K"],
        "validity": "2 yr",
        "rateLimits": "Enterprise Support"
    },
    {
        "platform": "GCP/Vertex AI (Gemini Models)",
        "logo": GCPSrc,
        "credits": ["$25K", "$100K"],
        "validity": "1 yr",
        "rateLimits": "Enterprise Support"
    },
    {
        "platform": "Azure OpenAI (GPT Models)",
        "logo": AzureSrc,
        "credits": ["$25K", "$100K"],
        "validity": "1 yr",
        "rateLimits": "Normal Support"
    },
    {
        "platform": "MongoDB",
        "logo": MongoSrc,
        "credits": ["$15k", "$125k"],
        "validity": "1 yr",
        "rateLimits": "Enterprise Support"
    },
    {
        "platform": "Supabase",
        "logo": SupaSrc,
        "credits": ["$25k", "$125k"],
        "validity": "1 yr",
        "rateLimits": "Enterprise Support"
    },
    {
        "platform": "PostHog",
        "logo": PostHogSrc,
        "credits": ["$50k"],
        "validity": "No Expiry",
        "rateLimits": "Enterprise Support"
    },
    {
        "platform": "Eleven Labs",
        "logo": ElevenLabsSrc,
        "credits": ["$5k", "$30k"],
        "validity": "1 yr",
        "rateLimits": "Enterprise Rate Limits"
    },
    {
        "platform": "Digital Ocean",
        "logo": DigitalSrc,
        "credits": ["$5k", "$30k"],
        "validity": "1 yr",
        "rateLimits": "Enterprise Rate Limits"
    },
    {
        "platform": "Deepgram",
        "logo": DeepgramSrc,
        "credits": ["$500k"],
        "validity": "1 yr",
        "rateLimits": "Enterprise Rate Limits"
    },
    {
        "platform": "Cursor",
        "logo": CursorSrc,
        "credits": ["$50k"],
        "validity": "1 yr",
        "rateLimits": "Enterprise Rate Limits"
    },
    {
        "platform": "Lambda (GPUs)",
        "logo": LambdaSrc,
        "credits": ["$100k"],
        "validity": "1 yr",
        "rateLimits": "Enterprise Rate Limits"
    },
]

const sectionVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.08,
            delayChildren: 0.1,
            duration: 0.5,
            ease: "easeOut",
        },
    },
}

const cardVariants = {
    hidden: { opacity: 0, y: 20, scale: 0.98 },
    visible: {
        opacity: 1,
        y: 0,
        scale: 1,
        transition: { duration: 0.35, ease: "easeOut" },
    },
}

function PlansAndPricing() {
    const pathname = usePathname();
    const [showModal, setShowModal] = useState(false);
    // const [platforms, setPlatforms] = useState<IPlatform[]>([])
    const [loading] = useState(false)

    // useEffect(() => {
    //     async function fetchData() {
    //         try {
    //             const res = await productApi.getProducts({ active: true });
    //             console.log(res.data)
    //             setPlatforms(res.data.products.map((item) => {
    //                 return {
    //                     platform: item.product,
    //                     logo: item.productImgUrl,
    //                     credits: item.credits,
    //                     validity: item.validity,
    //                     rateLimits: item.rateLimit,
    //                 }
    //             }))
    //         } catch (error) {
    //             console.log(error)
    //         } finally {
    //             setLoading(false)
    //         }
    //     }

    //     fetchData();
    // }, [])

    const displayPlatforms = platforms.length > 0 ? platforms : [];

    useEffect(() => {
        if (window.location.hash) {
            const el = document.querySelector(window.location.hash);
            if (el) {
                el.scrollIntoView({ behavior: "smooth" });
            }
        }
    }, [pathname]);
    // const doubled = [...platforms, ...platforms];
    const trackRef = useRef(null);
    const posRef = useRef(0);
    const rafRef = useRef(null);
    const [paused, setPaused] = useState(false);

    useEffect(() => {
        const track = trackRef.current;
        if (!track) return;
        const halfWidth = track.scrollWidth / 2;

        const animate = () => {
            if (!paused) {
                posRef.current -= 0.8; // adjust speed here
                if (Math.abs(posRef.current) >= halfWidth) posRef.current = 0;
                track.style.transform = `translateX(${posRef.current}px)`;
            }
            rafRef.current = requestAnimationFrame(animate);
        };

        rafRef.current = requestAnimationFrame(animate);
        return () => cancelAnimationFrame(rafRef.current);
    }, [paused]);
    return (
        <motion.div
            className='mt-10 rounded-2xl mx-auto relative overflow-hidden md:px-32'
            id="plan-pricing"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1, margin: "0px 0px -100px 0px" }} // Trigger slightly before it enters
            variants={sectionVariants}
        >

            <div className='md:pt-10 overflow-hidden'>

                <div className='flex md:flex-row justify-between md:px-0 px-5 mt-14'>
                    <div>
                        <p className='uppercase font-pp-mori-regular text-[#747373] tracking-widest'>Credit plans</p>
                        <p className='font-semibold font-pp-mori-semibold text-2xl md:text-3xl'>Explore our plans</p>
                    </div>
                    <button className='bg-[#1A1A1A] px-[20px] rounded-xl text-white font-pp-mori-regular cursor-pointer md:mt-0 py-4 md:py-0'
                        onClick={() => setShowModal(true)}
                    >View all plans</button>
                </div>
                <motion.div className='grid grid-cols-1 md:grid-cols-3 pt-10 gap-5' variants={sectionVariants}>
                    {loading && displayPlatforms === platforms ? (
                        <div className="col-span-full py-10 text-center">Loading plans...</div>
                    ) : (
                        displayPlatforms.map((p, i) => (
                            <motion.div
                                key={`${p.platform}-${i}`}
                                variants={cardVariants}
                            >
                                <PricingCard
                                    logo={p.logo}
                                    product={p.platform}
                                    credits={p.credits.join(" / ")}
                                    validity={p.validity}
                                    rateLimits={p.rateLimits}
                                />
                            </motion.div>
                        ))
                    )}
                </motion.div>
            </div>
            <AnimatePresence>
                {showModal && (
                    <motion.div
                        className="fixed inset-0 z-50 flex items-center justify-center"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.25 }}
                    >
                        {/* Overlay */}
                        <motion.div
                            className="absolute inset-0 bg-black/50 backdrop-blur-sm"
                            onClick={() => setShowModal(false)}
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                        />

                        {/* Modal Content */}
                        <motion.div
                            className="relative bg-white rounded-2xl max-h-[85vh] overflow-y-auto shadow-xl hide-scrollbar"
                            initial={{ scale: 0.92, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.96, opacity: 0 }}
                            transition={{ duration: 0.25, ease: "easeOut" }}
                        >
                            <div className="flex justify-end items-center mb-4">

                                <button
                                    onClick={() => setShowModal(false)}
                                    className="text-gray-500 hover:text-black text-xl p-2 px-4"
                                >
                                    ✕
                                </button>
                            </div>
                            {/* Header */}

                            <h2 className="text-4xl font-semibold font-pp-mori-semibold text-center pb-7 ">Pricing Plans</h2>
                            {/* Table */}
                            <div className='px-7 pb-7 w-[90vw] md:w-[50vw]'>

                                <CreditsTable platforms={displayPlatforms} />
                            </div>
                        </motion.div>
                    </motion.div >
                )}
            </AnimatePresence >
        </motion.div >
    )
}

export default PlansAndPricing



// const data = [
//     {
//         platform: "Amazon Web Services",
//         icon: "https://upload.wikimedia.org/wikipedia/commons/9/93/Amazon_Web_Services_Logo.svg",
//         credits: "$5k, $25k",
//         validity: "1 yr",
//         rate: "Tier 5",
//     },
//     {
//         platform: "Anthropic/Claude",
//         icon: "https://upload.wikimedia.org/wikipedia/commons/7/78/Anthropic_logo.svg",
//         credits: "$5k, $30k",
//         validity: "1 yr",
//         rate: "Enterprise Rate Limits",
//     },
//     {
//         platform: "Amazon Web Services",
//         icon: "https://upload.wikimedia.org/wikipedia/commons/9/93/Amazon_Web_Services_Logo.svg",
//         credits: "$100k",
//         validity: "2 yr",
//         rate: "Enterprise Support",
//     },
//     {
//         platform: "Google Cloud Platform",
//         icon: "https://upload.wikimedia.org/wikipedia/commons/5/51/Google_Cloud_logo.svg",
//         credits: "$25k",
//         validity: "1 yr",
//         rate: "Enterprise Support",
//     },
// ];

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const TableRow = ({ item, highlight }: { item: any, highlight: boolean }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.35, ease: "easeOut" }}
            className={`${highlight ? "bg-gray-100" : "bg-white"}`}
        >
            {/* ── Desktop row (md+) ── */}
            <div
                className="hidden md:grid grid-cols-4 items-center px-6 py-4"
            >
                <div className="flex flex-col gap-3">
                    <Image src={item.logo} alt={item.platform} width={32} height={32} className="w-8 h-8 object-contain" />
                    <div className="text-gray-800 font-medium">{item.platform}</div>
                </div>
                <div className="text-gray-700 font-medium">{item.credits.join(" / ")}</div>
                <div className="text-gray-700">{item.validity}</div>
                <div className="text-gray-700">{item.rateLimits}</div>
            </div>

            {/* ── Mobile card (below md) ── */}
            <div
                className={`md:hidden px-4 py-5 flex flex-col gap-3 ${highlight ? "bg-gray-100" : "bg-white"
                    }`}
            >
                {/* Platform header */}
                <div className="flex items-center gap-3 mb-1">
                    <Image src={item.logo} alt={item.platform} width={32} height={32} className="w-8 h-8 object-contain" />
                    <span className="text-gray-900 font-semibold text-base">{item.platform}</span>
                </div>

                {/* Key-value rows */}
                <div className="flex justify-between gap-2">
                    <span className="text-gray-500 text-sm shrink-0">Credits</span>
                    <span className="text-gray-800 text-sm font-medium text-right">{item.credits.join(" / ")}</span>
                </div>
                <div className="flex justify-between gap-2">
                    <span className="text-gray-500 text-sm shrink-0">Validity</span>
                    <span className="text-gray-800 text-sm font-medium text-right">{item.validity}</span>
                </div>
                <div className="flex justify-between gap-2">
                    <span className="text-gray-500 text-sm shrink-0">Rate Limits</span>
                    <span className="text-gray-800 text-sm font-medium text-right">{item.rateLimits}</span>
                </div>
            </div>
        </motion.div>
    );
};

function CreditsTable({ platforms }: { platforms: IPlatform[] }) {
    return (
        <div className="w-full mx-auto border border-gray-200 rounded-lg overflow-hidden shadow-sm">
            {/* Header — hidden on mobile since cards are self-labelled */}
            <div className="hidden md:grid grid-cols-4 bg-black text-white px-6 py-4 text-sm font-semibold">
                <div>Platform</div>
                <div>Credits</div>
                <div>Validity</div>
                <div>Rate Limits</div>
            </div>

            {/* Mobile-only header bar */}
            <div className="md:hidden bg-black text-center text-white px-4 py-3 text-sm font-semibold">
                Platforms
            </div>

            {/* Rows */}
            {platforms.map((item, index) => (
                <TableRow
                    key={index}
                    item={item}
                    highlight={index % 2 === 1}
                />
            ))}
        </div>
    );
}