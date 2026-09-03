"use client";

import { Check } from "lucide-react";
import { motion } from "motion/react";

export default function AgencySavings() {

    const container = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: {
                staggerChildren: 0.25,
                delayChildren: 0.15,
            },
        },
    };

    const fadeUp = {
        hidden: { opacity: 0, y: 40 },
        show: {
            opacity: 1,
            y: 0,
            transition: {
                type: "spring" as const,
                stiffness: 70,
                damping: 15,
            },
        },
    };

    const rightSlide = {
        hidden: { opacity: 0, x: 60 },
        show: {
            opacity: 1,
            x: 0,
            transition: {
                type: "spring" as const,
                stiffness: 80,
                damping: 18,
            },
        },
    };


    return (
        <motion.section
            className="bg-[#062524] text-white mt-26 p-10 rounded-2xl max-w-7xl mx-auto relative overflow-hidden px-4 md:px-10"
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
            variants={container}
        >
            <motion.div
                className="md:grid md:grid-cols-2 md:py-10 md:px-10 px-5 py-5 md:items-center"
                variants={container}
            >
                {/* LEFT SIDE */}
                <motion.div variants={fadeUp}>
                    <motion.p
                        className="text-[#7F7F7F] uppercase tracking-widest text-xs md:text-sm"
                        variants={fadeUp}
                    >
                        Our results speak for themselves
                    </motion.p>

                    <motion.p
                        className="text-[30px] md:text-[40px] md:w-[85%] font-semibold tracking-tight leading-tight pt-4"
                        variants={fadeUp}
                    >
                        Enterprise cuts LLM spend by up to 50% with
                        <span className="text-[#F15A42] mx-2 underline">
                            zero code changes
                        </span>
                    </motion.p>

                    <motion.p
                        className="text-[15px] font-semibold font-pp-mori-semibold md:text-xl text-white/80 md:w-[75%] pt-6"
                        variants={fadeUp}
                    >
                        A fast scaling enterprise running 20+ AI tools switched
                        to surplus GPT-5 & Claude credits via Credex.
                    </motion.p>
                </motion.div>

                {/* RIGHT SIDE */}
                <motion.div
                    className="md:flex md:flex-col md:items-end md:gap-y-4 md:pr-20 relative z-10 space-y-4 md:space-y-0 mt-10 md:mt-0"
                    variants={container}>

                    <motion.div variants={rightSlide} className="w-full md:w-[65%]">
                        <Feature text="Full API compatibility" />
                    </motion.div>
                    <motion.div variants={rightSlide} className="w-full md:w-[65%]">
                        <Feature text="Predictable pricing" />
                    </motion.div>
                    <motion.div variants={rightSlide} className="w-full md:w-[65%]">
                        <Feature text="Margin Improvement" />
                    </motion.div>


                </motion.div>
            </motion.div>

            {/* BACKGROUND GRID SVG */}
            <motion.div
                className="absolute -bottom-10 right-1/4 hidden md:block"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{
                    opacity: 0.5,
                    y: 0,
                    transition: { duration: 1.2, ease: "easeOut" },
                }}
                viewport={{ once: true }}
            >
                <svg
                    width="473"
                    height="462"
                    viewBox="0 0 473 462"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <g opacity="0.5">
                        <path
                            d="M73.0388 604.416L73.0388 0.415527M149.253 604.416L149.253 0.415527M225.468 604.416L225.468 0.415527M301.682 604.416L301.682 0.415527M377.897 604.416L377.897 0.415527M454.112 604.416L454.111 0.415527M530.326 604.416L530.326 0.415527M1.9988e-05 73.4545H604M1.66567e-05 149.669H604M1.33254e-05 225.884H604M9.99402e-06 302.098H604M6.66268e-06 378.313H604M3.33134e-06 454.527H604M0 530.742H604"
                            stroke="url(#paint0_radial_121_5431)"
                            strokeWidth="0.533098"
                        />
                    </g>
                    <defs>
                        <radialGradient
                            id="paint0_radial_121_5431"
                            cx="0"
                            cy="0"
                            r="1"
                            gradientUnits="userSpaceOnUse"
                            gradientTransform="translate(302 302.416) rotate(90) scale(302)"
                        >
                            <stop stopColor="#24D600" />
                            <stop offset="1" stopColor="#333333" stopOpacity="0" />
                        </radialGradient>
                    </defs>
                </svg>
            </motion.div>
        </motion.section>
    );
}

// ✅ Animated Feature Item
function Feature({ text }: { text: string }) {
    return (
        <motion.div
            className="flex p-8 md:pl-12 items-center md:text-xl bg-white/5 rounded-full py-5 md:px-8 gap-x-2 w-full"
            whileHover={{ scale: 1.03, backgroundColor: "rgba(255,255,255,0.08)" }}
            transition={{ type: "spring", stiffness: 120, damping: 10 }}
        >
            <motion.div
                className="rounded-full bg-[#157C01] p-1 [box-shadow:inset_0px_0px_13.35px_#FFFFFF66,0px_16.02px_10.68px_-5.34px_#4CC02826,0px_8.01px_5.34px_-5.34px_#4CC02826]"
                whileHover={{ rotate: 10, scale: 1.1 }}
                transition={{ type: "spring", stiffness: 200, damping: 12 }}
            >
                <Check size={13} />
            </motion.div>
            <p>{text}</p>
        </motion.div>
    );
}
