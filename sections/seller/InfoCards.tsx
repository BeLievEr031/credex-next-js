"use client"
import { motion, type Variants } from "motion/react";
import Image from "next/image";

const MotionImage = motion(Image);
import { CheckCircle2 } from "lucide-react";
import VerificationCardImg from "../../assets/verification-img.png";
import PayoutCardImg from "../../assets/payoutcard-img.png";

export default function InfoCards() {
    // Fade-up variant (reusable)
    const fadeUp: Variants = {
        hidden: { opacity: 0, y: 30 },
        visible: (delay = 0) => ({
            opacity: 1,
            y: 0,
            transition: { delay, duration: 0.7, ease: "easeOut" },
        }),
    };

    return (
        <motion.section
            className="px-2 md:px-0 mt-16 md:mt-0"
            id="guarantee"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
        >
            <div className="flex flex-col items-center justify-center md:py-16 bg-gradient-to-b from-[#FAFBFB] to-transparent">
                <div className="space-y-8 md:h-[100vh] relative flex flex-col items-center">

                    {/* Payout & Timeline Card */}
                    <motion.div
                        className="rounded-3xl md:h-[60vh] bg-[#EAF3F3] p-8 md:p-12 gap-8 md:sticky top-1/4 md:w-6xl shrink-0 relative overflow-hidden"
                    // variants={fadeUp}
                    // custom={0.1}
                    >
                        <motion.div
                            className=""
                        // variants={fadeUp}
                        // custom={0.2}
                        >
                            <h2 className="text-[28px] md:text-[40px] font-pp-mori-semibold font-semibold leading-tight">
                                Payout & timeline
                            </h2>

                            <motion.ul className="space-y-6 mt-8 md:w-[80%]"
                            // variants={fadeUp} custom={0.3}
                            >
                                {[
                                    "Paperwork typically completes within a week.",
                                    "After buyer payment, transfer completes within 24 hours.",
                                    "Payout is released after buyer confirmation.",
                                ].map((text, i) => (
                                    <li key={i} className="flex items-start gap-3 border-b border-gray-200 pb-4">
                                        <CheckCircle2 className="text-gray-400 mt-1 size-6 md:h-5 md:w-5 shrink-0" />
                                        <span className="text-[16px] md:text-[20px] font-pp-mori-semibold font-semibold text-base">
                                            {text}
                                        </span>
                                    </li>
                                ))}
                            </motion.ul>
                        </motion.div>


                        <MotionImage
                            src={PayoutCardImg}
                            alt="Payout card"
                            className="w-[200px] md:w-[245px] shrink-0 md:absolute md:right-28 md:bottom-24 mt-6 md:mt-0 h-auto"
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            transition={{ delay: 0.3 }}
                        />


                        {/* Decorative SVG Grid */}
                        <motion.div
                            className="absolute -right-5 top-0 hidden md:block"
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 0.6 }}
                            transition={{ delay: 0.3, duration: 1 }}
                        >
                            <svg width="569" height="458" viewBox="0 0 569 458" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <g opacity="0.5">
                                    <path d="M68.8064 457.875L68.8064 -111.125M140.605 457.875L140.605 -111.125M212.403 457.875L212.403 -111.125M284.201 457.875L284.201 -111.125M355.999 457.875L355.999 -111.125M427.797 457.875L427.797 -111.125M499.595 457.875L499.595 -111.125M1.88298e-05 -42.3185H569M1.56915e-05 29.4797H569M1.25532e-05 101.278H569M9.4149e-06 173.076H569M6.2766e-06 244.874H569M3.1383e-06 316.672H569M0 388.47H569" stroke="url(#paint0_radial_235_8841)" strokeWidth="0.502207" />
                                </g>
                                <defs>
                                    <radialGradient id="paint0_radial_235_8841" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(284.5 173.375) rotate(90) scale(284.5)">
                                        <stop stopColor="#19363F" />
                                        <stop offset="1" stopColor="#333333" stopOpacity="0" />
                                    </radialGradient>
                                </defs>
                            </svg>

                        </motion.div>

                        {/* Floating image */}

                    </motion.div>

                    {/* Verification & Privacy Card */}
                    <motion.div
                        className="bg-[#EAEFF3] rounded-3xl border border-gray-100 p-8 md:p-12 mt-4 md:w-[1200px] shrink-0 md:h-[50vh] xl:[55vh] 2xl:h-[60vh] [box-shadow:0px_-8px_4.2px_0px_#0000000D] md:sticky top-[75%] relative overflow-hidden"
                        variants={fadeUp}
                        custom={0.4}
                    >
                        <motion.div
                            variants={fadeUp}
                            custom={0.5}
                        >

                            <h2 className="text-[28px] md:text-[40px] font-pp-mori-semibold font-semibold leading-tight">
                                Verification & privacy
                            </h2>

                            <motion.ul className="space-y-6 mt-6 md:w-[45%]" variants={fadeUp} custom={0.6}>
                                {[
                                    "Mutual NDA keeps both parties anonymous.",
                                    "Proof of origin: invoice/grant or billing portal statement (PII can be masked).",
                                    "Account screenshots: credits, validity and any rate-limit tier.",
                                ].map((text, i) => (
                                    <li key={i} className="flex items-start gap-3 border-b border-gray-200 pb-4">
                                        <CheckCircle2 className="text-gray-400 mt-1 size-6 md:h-5 md:w-5 shrink-0" />
                                        <span className="text-[16px] md:text-[20px] font-pp-mori-semibold font-semibold text-base">
                                            {text}
                                        </span>
                                    </li>
                                ))}
                            </motion.ul>
                        </motion.div>

                        {/* Decorative SVG */}
                        <motion.div
                            className="absolute -right-5 top-0 hidden md:block"
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 0.6 }}
                            transition={{ delay: 0.3, duration: 1 }}
                        >
                            <svg width="569" height="458" viewBox="0 0 569 458" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <g opacity="0.5">
                                    <path d="M68.8064 457.875L68.8064 -111.125M140.605 457.875L140.605 -111.125M212.403 457.875L212.403 -111.125M284.201 457.875L284.201 -111.125M355.999 457.875L355.999 -111.125M427.797 457.875L427.797 -111.125M499.595 457.875L499.595 -111.125M1.88298e-05 -42.3185H569M1.56915e-05 29.4797H569M1.25532e-05 101.278H569M9.4149e-06 173.076H569M6.2766e-06 244.874H569M3.1383e-06 316.672H569M0 388.47H569" stroke="url(#paint0_radial_235_8841)" strokeWidth="0.502207" />
                                </g>
                                <defs>
                                    <radialGradient id="paint0_radial_235_8841" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(284.5 173.375) rotate(90) scale(284.5)">
                                        <stop stopColor="#19363F" />
                                        <stop offset="1" stopColor="#333333" stopOpacity="0" />
                                    </radialGradient>
                                </defs>
                            </svg>

                        </motion.div>

                        {/* Floating image */}
                        <MotionImage
                            src={VerificationCardImg}
                            alt="Verification card"
                            className="w-[200px] md:w-[200px] shrink-0 md:absolute md:right-44 md:bottom-24 mt-6 md:mt-0 h-auto"
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            transition={{ delay: 0.4 }}
                        />
                    </motion.div>
                </div>
            </div>
        </motion.section>
    );
}
