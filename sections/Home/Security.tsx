'use client'
import SecurityImg from "../../assets/security.webp";
import { motion } from "motion/react";
import Image from "next/image";

const MotionImage = motion(Image);
import ProofSection from "../common/Proof";

function Security() {
    const container = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: {
                staggerChildren: 0.25,
                delayChildren: 0.10,
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

    const imageVariant = {
        hidden: { opacity: 0, x: -60 },
        show: {
            opacity: 1,
            x: 0,
            transition: {
                type: "spring" as const,
                stiffness: 80,
                damping: 14,
            },
        },
    };


    const descriptionVariant = {
        hidden: { opacity: 0, y: 25 },
        show: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.3, ease: "easeOut" as const },
        },
    };


    return (
        <motion.section
            className="max-w-7xl mx-auto items-center mt-[70px] md:mt-[150px] px-2 md:px-0"
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.20 }}
            variants={container}
            id="guarantee"
        >
            {/* TOP SECTION */}
            <motion.div
                className="w-full md:grid md:grid-cols-2 gap-x-10 bg-[#19363F05] px-0 md:p-6"
                variants={container}
            >
                {/* LEFT — Image + Description */}
                <motion.div variants={fadeUp}>
                    <MotionImage
                        src={SecurityImg}
                        alt="Security illustration"
                        className="mx-auto w-[490px] h-auto"
                        variants={imageVariant}
                    />
                    <motion.div
                        className="mt-4 text-center"
                        variants={fadeUp}
                    >
                        <p className="font-pp-mori-semibold font-semibold text-[#19363F] text-[17px] md:text-2xl">
                            Safety and Guarantee
                        </p>
                        <p className="text-[#19363F] px-5 md:px-0 md:w-[73%] mx-auto text-center text-[18px] md:text-2xl font-pp-mori-semibold font-semibold mt-2">
                            If access becomes unavailable within the validity period,
                            <span className="text-green-700 mx-1">
                                Credex will replace credits or refund the unused balance after verification.
                            </span>
                        </p>
                    </motion.div>
                </motion.div>

                {/* RIGHT — Security Descriptions */}
                <motion.div className="p-4" variants={fadeUp}>
                    <p className="text-2xl md:text-3xl font-pp-mori-semibold font-semibold md:w-[55%] leading-tight mt-8 md:mt-10">
                        Security, compliance & guarantees
                    </p>
                    <motion.div
                        className="pt-2"
                        variants={container}
                    >
                        <motion.div variants={descriptionVariant}>
                            <SecurityDescription description="We onboard only verified companies" />
                        </motion.div>
                        <motion.div variants={descriptionVariant}>
                            <SecurityDescription description="We audit ownership & account history." />
                        </motion.div>
                        <motion.div variants={descriptionVariant}>
                            <SecurityDescription description="Transfer via ownership change or root credentials" />
                        </motion.div>
                        <motion.div variants={descriptionVariant}>
                            <SecurityDescription description="Mutual NDA available, identities remain confidential." />
                        </motion.div>
                    </motion.div>
                </motion.div>
            </motion.div>

            {/* BOTTOM SECTION */}
            <ProofSection />
        </motion.section>
    );
}

function SecurityDescription({ description }: { description: string }) {
    return (
        <div className="flex gap-x-4 my-8 border-b-1 pb-4 border-[#19363F1A] shadow-[0px_0px_6.59px_0px_#19363F0A_inset]">
            <svg
                width="27"
                height="28"
                viewBox="0 0 27 28"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                <path
                    d="M0.0214844 14.1358C0.0214844 6.76165 5.99944 0.783691 13.3736 0.783691C20.7478 0.783691 26.7258 6.76165 26.7258 14.1358C26.7258 21.51 20.7478 27.488 13.3736 27.488C5.99944 27.488 0.0214844 21.51 0.0214844 14.1358Z"
                    fill="#9A9EB2"
                    fillOpacity="0.2"
                />
                <path
                    d="M13.374 1.45166C20.3793 1.45187 26.0586 7.13089 26.0586 14.1362C26.0584 21.1414 20.3792 26.8206 13.374 26.8208C6.36868 26.8208 0.689667 21.1415 0.689453 14.1362C0.689453 7.13075 6.36855 1.45166 13.374 1.45166Z"
                    stroke="white"
                    strokeOpacity="0.2"
                    strokeWidth="1.33521"
                />
                <path
                    d="M9.36719 14.1358L12.0376 16.8062L17.3785 11.4653"
                    stroke="#6C7082"
                    strokeWidth="1.33521"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                />
            </svg>
            <p className="text-black/80 text-[15px] md:text-xl font-pp-mori-semibold font-semibold">
                {description}
            </p>
        </div>
    );
}

export default Security;
