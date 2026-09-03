'use client'
import { motion } from "motion/react";
import Image from "next/image";

const MotionImage = motion(Image);
import OpenAiIMg from "../../assets/openai.png";
import GCPImg from "../../assets/gcp.png";
import AWSImg from "../../assets/aws.png";
import ClaudImg from "../../assets/claud.png";
import AzureImg from "../../assets/azure.png";
import Openailogo from "../../assets/openai_logo.png";
import GeminiImg from "../../assets/gemini.png";
import ServerImg from "../../assets/server.png";
import GrayEllipseImg from "../../assets/gray-ellipse.png";
import clsx from "clsx";

export default function AcceptedVendors() {
    const logos = [OpenAiIMg, ClaudImg, AWSImg, AzureImg, Openailogo, GCPImg, GeminiImg];

    return (
        <section className="font-pp-mori-regular flex flex-col items-center justify-center py-16 bg-gradient-to-b from-gray-50 to-white text-center overflow-x-hidden px-2 md:px-0">
            {/* TEXT BLOCK */}
            <motion.div
                className="w-full md:w-2xl h-[355px] px-4 bg-[#9A9EB245] p-8 rounded-xl"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, ease: "easeOut" }}
                viewport={{ once: true }}
            >
                <motion.p
                    className="text-xs font-medium uppercase tracking-widest text-[#7F7F7F] mb-2"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 0.1 }}
                    viewport={{ once: true }}
                >
                    What We Accept
                </motion.p>

                <motion.h2
                    className="text-2xl md:text-3xl font-semibold text-gray-900 leading-tight mt-4 font-pp-mori-semibold"
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2, duration: 0.6 }}
                    viewport={{ once: true }}
                >
                    Credits must be legitimately purchased <br className="hidden md:inline" />
                    or granted to your organisation.
                </motion.h2>

                <motion.p
                    className="mt-3"
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3, duration: 0.6 }}
                    viewport={{ once: true }}
                >
                    We verify vendor origin
                    {/* we do not onboard third-party resellers. */}
                </motion.p>

                {/* INNER CARD */}
                <motion.div
                    className="bg-[#0E2E36] rounded-2xl flex flex-col justify-center items-center pt-8 pb-4 md:pb-0 md:py-8 mt-10 md:w-[92%] mx-auto px-5"
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4, duration: 0.7, ease: "easeOut" }}
                    viewport={{ once: true }}
                >
                    <motion.div
                        className="flex items-center justify-center gap-6 flex-wrap opacity-90 bg-white/20 w-full rounded-xl py-4 px-3 md:py-8 md:px-6"
                        initial="hidden"
                        whileInView="visible"
                        variants={{
                            hidden: {},
                            visible: {
                                transition: { staggerChildren: 0.1, delayChildren: 0.2 },
                            },
                        }}
                        viewport={{ once: true }}
                    >
                        {logos.map((logo, idx) => (
                            <MotionImage
                                key={idx}
                                src={logo}
                                alt={`logo-${idx}`}
                                className={clsx("w-auto", {
                                    "h-[30px] md:h-10": idx !== 5,
                                    "h-[30px] md:h-14": idx === 5,
                                })}
                                variants={{
                                    hidden: { opacity: 0, scale: 0.9 },
                                    visible: { opacity: 1, scale: 1 },
                                }}
                                transition={{ duration: 0.4 }}
                            />
                        ))}
                    </motion.div>

                    {/* <motion.p
                        className="text-white text-center mt-6 max-w-sm text-xl hidden md:block"
                        initial={{ opacity: 0, y: 15 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.8, duration: 0.6 }}
                        viewport={{ once: true }}
                    >
                        Same platforms you already use,
                        <br /> no infrastructure changes.
                    </motion.p> */}

                    <motion.p
                        className="rounded-full bg-white/15 text-[12px] mx-auto py-[7.5px] px-[12px] my-6 text-white/80 font-semibold font-pp-mori-semibold"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ delay: 1, duration: 0.5 }}
                        viewport={{ once: true }}
                    >
                        Recommended minimum validity: 180 days
                    </motion.p>
                </motion.div>
            </motion.div>

            {/* SERVER IMAGE SECTION */}
            <motion.div
                className="mt-56 w-full bg-gradient-to-b from-[#FAFBFB] to-[#eaebeb] relative"
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.8, ease: "easeOut" }}
                viewport={{ once: true }}
            >
                <Image src={ServerImg} alt="Server stack visualization for cloud credits" className="w-[220px] mx-auto z-10 relative h-auto" />
                <Image
                    src={GrayEllipseImg}
                    alt=""
                    className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1/2 h-auto"
                />
            </motion.div>
        </section>
    );
}
