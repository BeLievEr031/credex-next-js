'use client'
import HeroFeatures from "../../components/HeroFeatures";
import { GradientLine, Ellipse2 } from "../../components/Svg";
import GCPLogo from "../../assets/logos/gcp.webp";
import ClaudeLogo from "../../assets/logos/calud.webp";
import GeminiLogo from "../../assets/logos/gemini.webp";
import ChatgptLogo from "../../assets/logos/chatgpt.webp";
import AWSLogo from "../../assets/logos/aws.webp";
import AzureLogo from "../../assets/logos/azure.webp";
import { motion, type Variants } from "motion/react"; // ✅ use framer-motion directly
import Image from "next/image";

const MotionImage = motion(Image);


function Hero() {

    const features = [
        "Verified vendors",
        "Ownership auditing",
        "Escrow style checks",
        "24×7 support",
        "Guarantee",
        "Transfer ≤ 24h post-payment",
    ];

    // Container for staggered text fade-in + upward motion
    const container = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: {
                staggerChildren: 0.15,
                delayChildren: 0.1,
            },
        },
    };

    const floatLogo: Variants = {
        hidden: { opacity: 0, scale: 0.95 },
        show: (delay = 0) => ({
            opacity: 1,
            scale: 1,
            transition: {
                delay,
                duration: 0.6,
                ease: "easeOut",
            },
        }),
    };


    // Text items animation (fade in + smooth upward glide)
    const item: Variants = {
        hidden: { opacity: 0, y: 30 },
        show: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.7,
                ease: [0.215, 0.61, 0.355, 1]
            }
        },
    };

    return (
        <div className="h-screen relative flex justify-center items-center flex-col md:pt-0">
            {/* LEFT Logos */}
            <MotionImage
                src={GCPLogo}
                alt="GCP"
                className="absolute left-20 bottom-16 z-10 w-[120px] h-auto hidden md:block animate-float"
                style={{ animationDelay: "0s" }}
                variants={floatLogo}
                custom={0.3}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
            />

            <MotionImage
                src={ClaudeLogo}
                alt="Claude"
                className="absolute left-10 top-[45%] z-10 w-[120px] h-auto hidden md:block animate-float"
                style={{ animationDelay: "0.4s" }}
                variants={floatLogo}
                custom={0.4}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
            />

            <MotionImage
                src={GeminiLogo}
                alt="Gemini"
                className="absolute left-36 top-32 z-10 w-[120px] h-auto hidden md:block animate-float"
                style={{ animationDelay: "0.8s" }}
                variants={floatLogo}
                custom={0.5}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
            />

            {/* RIGHT Logos */}
            <MotionImage
                src={ChatgptLogo}
                alt="ChatGPT"
                className="absolute right-20 bottom-16 z-10 w-[120px] h-auto hidden md:block animate-float"
                style={{ animationDelay: "0.2s" }}
                variants={floatLogo}
                custom={0.3}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
            />

            <MotionImage
                src={AWSLogo}
                alt="AWS"
                className="absolute right-10 top-[45%] z-10 w-[120px] h-auto hidden md:block animate-float"
                style={{ animationDelay: "0.6s" }}
                variants={floatLogo}
                custom={0.4}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
            />

            <MotionImage
                src={AzureLogo}
                alt="Azure"
                className="absolute right-36 top-32 z-10 w-[120px] h-auto hidden md:block animate-float"
                style={{ animationDelay: "1s" }}
                variants={floatLogo}
                custom={0.5}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
            />


            {/* Gradient Lines */}
            <div>
                <div className="absolute -top-[200px] md:-top-[205px] h-1/2 left-1/2 -translate-x-1/2">
                    <GradientLine />
                </div>
            </div>

            {/* Main Text */}
            <div className="relative z-10 md:mt-[50px] md:pt-[1px] md:h-[554px] flex flex-col justify-center items-center">
                <motion.div
                    className="border-[1px] border-[#D9D9D9] p-[4px] rounded-full flex items-center gap-x-2 w-[95%] md:w-fit md:pr-3 mx-auto text-[14px] md:text-[16px]"
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <div className="p-2.5 bg-[#118B6126] rounded-full shrink-0">NO REGRETS</div>
                    <p className="shrink-0">Safe transfer, Anonymous exchange</p>
                </motion.div>

                {/* H1 renders instantly in HTML (opacity:1 SSR) for LCP, CSS keyframe handles the animation */}
                <h1 className="text-[48px] md:text-[72px] text-center leading-[50px] md:pt-[32px] font-semibold font-pp-mori-semibold">
                    <span className="bg-gradient-to-r from-[#0FF395] to-[#086841] bg-clip-text text-transparent py-5 block hero-line-1">
                        Save Up To 60%
                    </span>

                    <span className="mx-auto leading-tight text-[24px] md:text-[72px] px-2 md:px-0 mt-2 md:mt-0 block hero-line-2">
                        On AI Models & Cloud Credits
                    </span>
                </h1>

                <motion.div
                    className="text-[18px] md:text-[20px] text-center md:mt-0 px-1 leading-tight pt-4"
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                >
                    <p>
                        Buy verified OpenAI, Claude, AWS, Azure and GCP credits from
                        trusted sellers
                    </p>
                </motion.div>

                {/* Button */}
                <motion.div
                    className="flex justify-center relative z-10 mt-8"
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                >
                    <motion.button
                        className="bg-[#1A1A1A] p-5 text-white rounded-md text-xl block mt-5 md:mt-0"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.97 }}
                        // eslint-disable-next-line @next/next/no-location-assign-relative-destination
                        onClick={() => { window.location.href = '#contact' }}
                    >
                        Start buying credits
                    </motion.button>
                </motion.div>
            </div>




            {/* Ellipse Background */}
            <div className="absolute -z-10 top-[65%] left-1/2 -translate-x-1/2">
                <Ellipse2 />
            </div>

            {/* Features */}

            <motion.div
                // variants={item}
                variants={container}
                initial="hidden"
                animate="show"
                className="pt-10"
            >

                <motion.div
                    variants={item}
                >

                    <HeroFeatures labels={features} />
                </motion.div>
            </motion.div>
        </div>
    );
}

export default Hero;
