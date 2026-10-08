'use client'
import { motion } from "motion/react";
import Image from "next/image";
import ProcessStepImg from "../../assets/transaction.png";
import clsx from "clsx";

export function CheckIconGray() {
    return (
        <svg width="27" height="27" viewBox="0 0 27 27" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
                d="M0.0214844 13.4879C0.0214844 6.1137 5.99944 0.135742 13.3736 0.135742C20.7478 0.135742 26.7258 6.1137 26.7258 13.4879C26.7258 20.8621 20.7478 26.84 13.3736 26.84C5.99944 26.84 0.0214844 20.8621 0.0214844 13.4879Z"
                fill="#9A9EB2"
                fillOpacity="0.2"
            />
            <path
                d="M13.374 0.803711C20.3793 0.803924 26.0586 6.48294 26.0586 13.4883C26.0584 20.4934 20.3792 26.1726 13.374 26.1729C6.36868 26.1729 0.689667 20.4936 0.689453 13.4883C0.689453 6.48281 6.36855 0.803711 13.374 0.803711Z"
                stroke="white"
                strokeOpacity="0.2"
                strokeWidth="1.33521"
            />
            <path
                d="M9.36719 13.4878L12.0376 16.1582L17.3785 10.8174"
                stroke="#6C7082"
                strokeWidth="1.33521"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>
    );
}

function ProcessStep() {
    return (
        <section
            className="md:grid md:grid-cols-2 py-20 max-w-7xl mx-auto gap-x-10 items-center hide-scrollbar px-2 md:px-0"
            id="how-it-works"
        >
            {/* LEFT SIDE */}
            <div className="hide-scrollbar">
                <motion.p
                    className="text-[30px] md:text-[40px] font-pp-mori-semibold font-semibold tracking-tight md:w-[75%] line-clamp-6 leading-tight"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    viewport={{ once: true }}
                >
                    From intake to payout
                </motion.p>

                <motion.div
                    className="relative overflow-x-hidden mt-3 md:mt-6 hide-scrollbar"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 0.3, duration: 0.8 }}
                    viewport={{ once: true }}
                >
                    <div className="h-[600px] overflow-y-scroll relative overflow-x-hidden pt-10 space-y-3 hide-scrollbar">
                        {[
                            "Submit provider, amount, validity and proof of origin.",
                            "Sign Mutual NDA we verify vendor origin and audit ownership.",
                            "Buyer validates via screenshots/read-only access.",
                            "Buyer pays",
                            "Secure transfer (ownership or root credentials buyer resets password & 2FA).",
                            "Payout released after buyer confirms usage",
                        ].map((step, index) => (
                            <motion.div
                                key={index}
                                className="flex gap-x-3 items-center border-b-2 border-[#19363F1A] pb-4"
                                initial={{ opacity: 0, y: 15 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.1 * index + 0.4, duration: 0.5 }}
                                viewport={{ once: true }}
                            >
                                <div
                                    className={clsx(
                                        "size-8 rounded-full text-center flex justify-center items-center pt-[2px] text-[15px] shrink-0",
                                        "bg-[#19363F] text-white shadow-[inset_0px_0px_13.35px_0px_#FFFFFF66,0px_16.02px_10.68px_-5.34px_#19363F26]"
                                    )}
                                >
                                    {"0" + (index + 1)}
                                </div>
                                <p className="text-[16px] md:text-[20px] font-pp-mori-semibold font-semibold">{step}</p>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </div>

            {/* RIGHT SIDE */}
            <div>
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    viewport={{ once: true }}
                >
                    <Image src={ProcessStepImg} alt="Transaction steps" className="w-[242px] md:w-[323px] mx-auto h-auto" />
                </motion.div>

                <motion.div className="pt-20"
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3, duration: 0.7, ease: "easeOut" }}
                    viewport={{ once: true }}>
                    <button className="w-full md:w-[480px] px-[30px] md:px-[40px] py-[24px] md:py-[32px] flex justify-between items-center rounded-3xl md:rounded-2xl mx-auto bg-[#19363F] cursor-pointer"
                        onClick={() => { window.location.href = '#contact' }}
                    >
                        <p className="text-[#FBD008] text-[18px] md:text-2xl font-semibold md:w-[65%] w-[75%] shrink-0 text-left">
                            Start Saving Money On Cloud Credits Now!
                        </p>
                        <p className="size-[50px] shrink-0 md:size-[66px] rounded-full bg-white/10 flex items-center justify-center text-xl text-white font-bold">
                            <svg
                                width="13"
                                height="22"
                                viewBox="0 0 13 22"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M12.6518 10.9999C12.6518 11.2554 12.6119 11.495 12.532 11.7186C12.4522 11.9422 12.3164 12.1499 12.1247 12.3416L3.30807 21.1582C2.95668 21.5096 2.50946 21.6853 1.96641 21.6853C1.42335 21.6853 0.976128 21.5096 0.62474 21.1582C0.273351 20.8068 0.0976562 20.3596 0.0976562 19.8166C0.0976561 19.2735 0.273351 18.8263 0.624739 18.4749L8.09974 10.9999L0.624739 3.52489C0.27335 3.1735 0.0976554 2.72627 0.0976554 2.18322C0.0976554 1.64016 0.27335 1.19294 0.624739 0.841551C0.976128 0.490162 1.42335 0.314468 1.96641 0.314468C2.50946 0.314468 2.95668 0.490162 3.30807 0.841551L12.1247 9.65822C12.3164 9.84988 12.4522 10.0575 12.532 10.2811C12.6119 10.5047 12.6518 10.7443 12.6518 10.9999Z"
                                    fill="#A0A0A0"
                                />
                            </svg>
                        </p>
                    </button>
                </motion.div>
            </div>
        </section>
    );
}

export default ProcessStep;
