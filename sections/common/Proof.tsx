"use client";

import { motion } from "motion/react";
import Image from "next/image";
import FolderImg from "../../assets/grouped-folder.webp";

export default function ProofSection() {
    return (
        <div className="px-2 md:px-0">
            <motion.div
                className="w-full md:max-w-6xl mx-auto bg-[#E7FFFF] rounded-xl md:rounded-3xl p-4 md:p-10 md:flex items-center relative mt-18 md:mt-36 h-[489px] md:h-auto"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                viewport={{ once: true, amount: 0.3 }}
            >
                <div className="p-2.5 w-full">
                    <motion.p
                        className="font-pp-mori-semibold font-semibold text-[22px] md:text-[32px] md:w-[50%] leading-tight"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1, duration: 0.6, ease: "easeOut" }}
                        viewport={{ once: true }}
                    >
                        Get more than infra credits, get documented proof.
                    </motion.p>

                    <motion.p
                        className="text-[15px] md:text-[20px] text-[#19363FB2] md:w-[50%] pt-4"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3, duration: 0.6, ease: "easeOut" }}
                        viewport={{ once: true }}
                    >
                        Each purchase includes a Certificate of Ownership that officially marks the transfer to you.
                    </motion.p>

                    <motion.div
                        className="w-fit mt-5 relative z-10"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.5, duration: 0.6, ease: "easeOut" }}
                        viewport={{ once: true }}
                    >
                        <motion.button
                            className="bg-[#1A1A1A] p-4 text-white rounded-md text-[18px] md:text-xl block cursor-pointer"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.97 }}
                            onClick={() => { window.location.href = '#contact' }}
                        >
                            Start buying credits
                        </motion.button>
                    </motion.div>
                </div>

                <motion.div
                    className="absolute w-[300px] mx-auto md:w-[386px] md:right-0 bottom-0  -translate-x-1/2 md:translate-x-0 z-10 hidden md:block"
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.4, duration: 0.8, ease: "easeOut" }}
                    viewport={{ once: true }}
                >
                    <Image src={FolderImg} alt="Folder proof" className="w-full h-auto" />
                </motion.div>

                <motion.div
                    className="absolute w-[300px] mx-auto md:w-[386px] md:right-0 bottom-0  left-1/2 -translate-x-1/2 md:translate-x-0 z-10 block md:hidden"
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.4, duration: 0.8, ease: "easeOut" }}
                    viewport={{ once: true }}
                >
                    <Image src={FolderImg} alt="Folder proof" className="w-full h-auto" />
                </motion.div>

                <motion.div
                    className="absolute top-1/2 -translate-y-1/2 md:translate-y-0 right-0 md:right-10 md:top-10 md:scale-125"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 0.6, duration: 1 }}
                    viewport={{ once: true }}
                >
                    <svg width="305" height="280" viewBox="0 0 305 266" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M55.2628 288.136L55.2628 -168.864M112.928 288.136L112.928 -168.864M170.594 288.136L170.594 -168.864M228.26 288.136L228.26 -168.864M285.925 288.136L285.925 -168.864M343.591 288.136L343.591 -168.864M401.257 288.136L401.257 -168.864M1.51234e-05 -113.601H457M1.26028e-05 -55.9357H457M1.00823e-05 1.72991H457M7.5617e-06 59.3955H457M5.04114e-06 117.061H457M2.52057e-06 174.727H457M0 232.392H457"
                            stroke="url(#paint0_radial_278_1985)"
                            strokeWidth="0.403354"
                        />
                        <defs>
                            <radialGradient
                                id="paint0_radial_278_1985"
                                cx="0"
                                cy="0"
                                r="1"
                                gradientUnits="userSpaceOnUse"
                                gradientTransform="translate(228.5 59.6357) rotate(90) scale(228.5)"
                            >
                                <stop stopColor="#24D600" />
                                <stop offset="1" stopColor="#333333" stopOpacity="0" />
                            </radialGradient>
                        </defs>
                    </svg>
                </motion.div>

                <div className="absolute md:hidden bottom-0 right-0">
                    <svg width="234" height="149" viewBox="0 0 234 149" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g filter="url(#filter0_f_431_3296)">
                            <ellipse cx="174" cy="120.727" rx="99.75" ry="46.125" fill="#E2F89C" />
                        </g>
                        <defs>
                            <filter
                                id="filter0_f_431_3296"
                                x="0.0749969"
                                y="0.426559"
                                width="347.85"
                                height="240.6"
                                filterUnits="userSpaceOnUse"
                                colorInterpolationFilters="sRGB"
                            >
                                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                                <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                                <feGaussianBlur stdDeviation="37.0875" result="effect1_foregroundBlur_431_3296" />
                            </filter>
                        </defs>
                    </svg>
                </div>
            </motion.div>
        </div>
    );
}
