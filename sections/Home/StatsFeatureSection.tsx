"use client"
import { motion, type Variants } from "motion/react"
import Image from "next/image"
import StatsImg1 from "../../assets/stats1.webp"

const MotionImage = motion(Image);
import OpenAiIMg from "../../assets/openai.png"
import GCPImg from "../../assets/gcp.png"
import AWSImg from "../../assets/aws.png"
import ClaudImg from "../../assets/claud.png"
import AzureImg from "../../assets/azure.png"
import Openailogo from "../../assets/openai_logo.png"
import GeminiImg from "../../assets/gemini.png"
import clsx from "clsx"

function StatsFeatureSection() {

    const images = [
        { src: OpenAiIMg, alt: "Open AI logo" },
        { src: ClaudImg, alt: "Claude logo" },
        { src: AWSImg, alt: "AWS logo" },
        { src: AzureImg, alt: "Azure logo" },
        { src: Openailogo, alt: "OpenAI logo" },
        { src: GCPImg, alt: "GCP logo" },
        { src: GeminiImg, alt: "Gemini logo" }
    ];

    // Animation Variants
    const container = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: {
                staggerChildren: 0.25,
                delayChildren: 0.2,
            },
        },
    }

    const fadeUp: Variants = {
        hidden: { opacity: 0, y: 40 },
        show: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.8, ease: "easeOut" },
        },
    }

    const logoMotion: Variants = {
        hidden: { opacity: 0, scale: 0.8, y: 30 },
        show: {
            opacity: 1,
            scale: 1,
            y: 0,
            transition: { type: "spring", stiffness: 80, damping: 15 },
        },
    }

    return (
        <motion.section
            className="md:grid md:grid-cols-[1.3fr_1fr] max-w-5xl mx-auto md:mt-[160px] gap-6 md:max-h-[570px] px-2 md:px-0 space-y-5 md:space-y-0"
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
        >
            {/* LEFT Large Card */}
            <motion.div
                className="bg-gradient-to-b from-[#19363F] to-[#07313E] rounded-2xl flex flex-col justify-between h-full shadow-[0_0_13px_#ffffff22_inset]"
                variants={fadeUp}
            >
                <div className="p-8 h-[355px]">
                    <motion.p
                        className="text-[#7F7F7F] uppercase tracking-widest text-sm"
                        variants={fadeUp}
                    >
                        tap in
                    </motion.p>
                    <motion.h2
                        className="text-[32px] md:text-4xl font-semibold text-white leading-tight pt-2"
                        variants={fadeUp}
                    >
                        Stop burning the budget on retail priced credits
                    </motion.h2>
                    <motion.p
                        className="text-[16px] md:text-lg text-white/80 pt-4 max-w-md"
                        variants={fadeUp}
                    >
                        We match you with real prepaid credits from verified companies, same APIs but better pricing.
                    </motion.p>
                </div>
                <motion.div className="h-[245px] relative" variants={fadeUp}>
                    <Image
                        src={StatsImg1}
                        alt="Illustration showing comparison of retail vs discounted credits"
                        fill
                        className="rounded-b-2xl object-cover"
                    />
                </motion.div>
            </motion.div>

            {/* RIGHT Stats Cards */}
            <motion.div
                className="flex flex-col justify-between"
                variants={container}
            >
                {/* Top 4 Stat Cards */}
                <motion.div
                    className="grid grid-cols-2 gap-4 h-[50%]"
                    variants={container}
                >
                    {[
                        { value: "$20M+", label: "Credits Traded" },
                        { value: "200+", label: "Customers" },
                        { value: "90%", label: "Repeat Customers" },
                        { value: "$10M+", label: "Savings" },
                    ].map((stat, i) => (
                        <motion.div
                            key={i}
                            className="bg-[#0E2E36] rounded-2xl flex flex-col justify-center items-center py-5"
                            variants={fadeUp}
                            whileHover={{ scale: 1.03 }}
                            transition={{ type: "spring", stiffness: 200, damping: 12 }}
                        >
                            <h3 className="text-white text-[30px] md:text-[40px] font-semibold">
                                {stat.value}
                            </h3>
                            <p className="text-white tracking-wide mt-1 text-[13px] md:text-[16px]">
                                {stat.label}
                            </p>
                        </motion.div>
                    ))}
                </motion.div>

                {/* Logo Cluster + Text */}
                <motion.div
                    className="bg-[#0E2E36] rounded-2xl flex flex-col justify-center items-center h-[47%] mt-4 py-10"
                    variants={fadeUp}
                >
                    <motion.div
                        className="flex items-center justify-center gap-4 flex-wrap opacity-90 bg-white/5 w-[90%] rounded-xl py-8 px-4"
                        variants={container}
                    >
                        {images.map(
                            (img, idx) => (
                                <MotionImage
                                    key={idx}
                                    src={img.src}
                                    alt={img.alt}
                                    className={clsx("w-auto", {
                                        "h-10": idx !== 5,
                                        "h-14": idx === 5
                                    })}
                                    variants={logoMotion}
                                />
                            )
                        )}
                    </motion.div>

                    <motion.p
                        className="text-white text-center mt-6 max-w-sm text-[20px] font-semibold font-pp-mori-semibold"
                        variants={fadeUp}
                    >
                        Same platforms you already use,
                        <br /> no infrastructure changes.
                    </motion.p>
                </motion.div>
            </motion.div>
        </motion.section>
    )
}

export default StatsFeatureSection
