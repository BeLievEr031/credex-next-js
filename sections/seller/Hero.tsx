'use client'
import { motion, type Variants } from "motion/react";
import Image from "next/image";

const MotionImage = motion(Image);
import HeroFeatures from "../../components/HeroFeatures";
import GCPLogo from "../../assets/logos/gcp.webp";
import ClaudeLogo from "../../assets/logos/calud.webp";
import GeminiLogo from "../../assets/logos/gemini.webp";
import ChatgptLogo from "../../assets/logos/chatgpt.webp";
import AWSLogo from "../../assets/logos/aws.webp";
import AzureLogo from "../../assets/logos/azure.webp";

function Hero() {
    const features = [
        "24×7 support",
        "Anonymity",
        "Vendor verification",
        "Ownership audit",
        "Escrow style checks",
    ];

    // Reusable variant for fade & rise
    const fadeUp: Variants = {
        hidden: { opacity: 0, y: 30 },
        visible: (delay = 0) => ({
            opacity: 1,
            y: 0,
            transition: { delay, duration: 0.7, ease: "easeOut" },
        }),
    };

    // Floating logo animation (slight float + fade in)
    const floatLogo: Variants = {
        hidden: { opacity: 0, y: 10 },
        visible: (delay = 0) => ({
            opacity: 1,
            y: [0, -6, 0],
            transition: {
                delay,
                duration: 1.2,
                ease: "easeInOut",
                repeat: Infinity,
                repeatType: "mirror",
            },
        }),
    };

    return (
        <motion.div
            className="min-h-screen flex flex-col justify-center items-center relative overflow-x-hidden px-2 md:px-0"
            initial="hidden"
            animate="visible"
            viewport={{ once: true }}
        >
            <motion.div
                className="shrink-0 w-full md:w-7xl mx-auto min-h-[500px] bg-[#39A9A5] flex flex-col items-center justify-center rounded-2xl mt-20 md:mt-32 relative"
                variants={fadeUp}
                custom={0.1}
            >
                {/* Floating logos with soft motion */}
                <MotionImage
                    src={GCPLogo}
                    alt="GCP"
                    className="absolute left-16 bottom-10 z-10 w-[90px] h-auto hidden md:block"
                    variants={floatLogo}
                    custom={0.4}
                />
                <MotionImage
                    src={ClaudeLogo}
                    alt="Claude"
                    className="absolute left-10 top-[40%] z-10 w-[90px] h-auto hidden md:block"
                    variants={floatLogo}
                    custom={0.5}
                />
                <MotionImage
                    src={GeminiLogo}
                    alt="Gemini"
                    className="absolute left-36 top-10 z-10 w-[90px] h-auto hidden md:block"
                    variants={floatLogo}
                    custom={0.6}
                />
                <MotionImage
                    src={ChatgptLogo}
                    alt="ChatGPT"
                    className="absolute right-16 bottom-10 z-10 w-[90px] h-auto hidden md:block"
                    variants={floatLogo}
                    custom={0.4}
                />
                <MotionImage
                    src={AWSLogo}
                    alt="AWS"
                    className="absolute right-10 top-[40%] z-10 w-[90px] h-auto hidden md:block"
                    variants={floatLogo}
                    custom={0.5}
                />
                <MotionImage
                    src={AzureLogo}
                    alt="Azure"
                    className="absolute right-36 top-10 z-10 w-[90px] h-auto hidden md:block"
                    variants={floatLogo}
                    custom={0.6}
                />

                {/* Hero badge */}
                <motion.div
                    className="border-[1px] border-[#D9D9D9] p-[4px] rounded-full flex items-center gap-x-2 md:pr-3 md:w-fit text-[12px]"
                    variants={fadeUp}
                    custom={0.2}
                >
                    <div className="p-1.5 md:p-2.5 bg-[#118B6126] rounded-full shrink-0 text-[16px]">
                        NO REGRETS
                    </div>
                    <p className="shrink-0 text-[14px] md:text-[16px]">
                        Safe transfer, Anonymous exchange
                    </p>
                </motion.div>


                {/* Hero Heading + Subtitle */}
                <motion.div
                    className="pt-5 text-center px-2"
                    variants={fadeUp}
                    custom={0.3}
                >
                    <motion.h1
                        className="font-semibold text-[44px] md:text-[72px] leading-tight text-center font-pp-mori-semibold"
                        variants={fadeUp}
                        custom={0.3}
                    >
                        <span className="block text-white">
                            Turn idle credits into cash{" "}
                        </span>
                        <span className="block -translate-y-4">
                            privately and fast.
                        </span>
                    </motion.h1>

                    <motion.p
                        className="text-[#FFFFFFCC] mt-2"
                        variants={fadeUp}
                        custom={0.5}
                    >
                        We verify vendor origin, sign a Mutual NDA, and release payout after
                        buyer confirmation
                    </motion.p>

                    <motion.div
                        className="flex justify-center relative z-10 pt-5"
                        variants={fadeUp}

                    >


                        <motion.button
                            className="bg-[#1A1A1A] cursor-pointer p-5 text-white rounded-md text-xl block"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.97 }}
                            onClick={() => { window.location.href = '#contact' }}
                        >
                            Start selling credits
                        </motion.button>

                    </motion.div>
                </motion.div>

                {/* Decorative SVG */}
                <motion.div
                    className="absolute bottom-0 left-0"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 0.8 }}
                    transition={{ delay: 0.8, duration: 1.2 }}
                >
                    <svg
                        width="413"
                        height="396"
                        viewBox="0 0 413 396"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <g opacity="0.5">
                            <path
                                d="M-87.1936 569.051L-87.1936 0.0513306M-15.3954 569.051L-15.3955 0.0513306M56.4027 569.051L56.4027 0.0513306M128.201 569.051L128.201 0.0513306M199.999 569.051L199.999 0.0513306M271.797 569.051L271.797 0.0513306M343.595 569.051L343.595 0.0513306M-156 68.8579H413M-156 140.656H413M-156 212.454H413M-156 284.252H413M-156 356.05H413M-156 427.849H413M-156 499.647H413"
                                stroke="url(#paint0_radial_233_2928)"
                                strokeWidth="0.502207"
                            />
                        </g>
                        <defs>
                            <radialGradient
                                id="paint0_radial_233_2928"
                                cx="0"
                                cy="0"
                                r="1"
                                gradientUnits="userSpaceOnUse"
                                gradientTransform="translate(128.5 284.551) rotate(90) scale(284.5)"
                            >
                                <stop stopColor="#19363F" />
                                <stop offset="1" stopColor="#333333" stopOpacity="0" />
                            </radialGradient>
                        </defs>
                    </svg>
                </motion.div>
            </motion.div>

            {/* Features Section */}
            <motion.div variants={fadeUp} custom={0.7} className="md:pt-5">
                <HeroFeatures labels={features} />
            </motion.div>
        </motion.div>
    );
}

export default Hero;
