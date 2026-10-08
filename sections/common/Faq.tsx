'use client'
import clsx from "clsx"
import { motion, type Variants } from "motion/react"
import { useState } from "react"
import dynamic from "next/dynamic"

const ContactForm = dynamic(() => import("@/components/ContactForm"), {
    loading: () => <div className="p-8 text-center text-black/40">Loading contact form...</div>
});

const containerVariants = {
    hidden: {},
    show: {
        transition: {
            staggerChildren: 0.08, // controls sequence delay between FAQs
        },
    },
}

const itemVariants: Variants = {
    hidden: { opacity: 0, y: 40 },
    show: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.5, ease: "easeOut" },
    },
}

interface Quest {
    question: string;
    answer: string;
}

interface IProp {
    faqs: Quest[];
    type?: "SELLER" | "BUYER";
}
export default function Faq({ faqs, type }: IProp) {


    return (
        <section className="py-10 max-w-7xl mx-auto mt-[40px] md:mt-[120px]" id="faq">
            <div className="text-center">
                <motion.h1
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    viewport={{ once: true }}
                    className="text-[22.5px] md:text-[40px] font-pp-mori-semibold font-semibold"
                >
                    Your Questions. Answered.
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
                    viewport={{ once: true }}
                    className="text-[#00000080] text-[12px] md:text-[16px]"
                >
                    Answers to all your questions, quickly and clearly
                </motion.p>
            </div>

            {/* FAQ list */}
            <motion.div
                variants={containerVariants}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.2 }}
                className="pt-10 space-y-3"
            >
                {faqs.map(({ answer, question }, index) => (
                    <motion.div variants={itemVariants} key={index}>
                        <FaqQuestionAndAnswer answer={answer} question={question} />
                    </motion.div>
                ))}
            </motion.div>

            {/* Contact Form Section */}
            <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
                viewport={{ once: true }}
                className="mt-20 md:mt-32 max-w-3xl mx-auto px-4"
                id="contact"
            >
                <div className="text-center mb-10">
                    <h2 className="text-[28px] md:text-[40px] font-pp-mori-semibold font-semibold mb-3">
                        Still have a question?
                    </h2>
                    <p className="text-[#00000080] text-[14px] md:text-[16px]">
                        Fill out the form below and our team will get back to you within 24 hours.
                    </p>
                </div>

                <ContactForm type={type} />
            </motion.div>
        </section>
    )
}

function FaqQuestionAndAnswer({
    question,
    answer,
}: {
    question: string
    answer: string
}) {
    const [open, setOpen] = useState(false)

    return (
        <div
            className={clsx(
                "py-[22px] px-[24px] rounded-xl w-[95%] md:w-[70%] mx-auto cursor-pointer transition-all duration-300",
                {
                    "bg-[#1C1C1C14]": open,
                    "bg-[#12121205]": !open,
                }
            )}
            onClick={() => setOpen(!open)}
        >
            <div className="flex justify-between">
                <p className="font-pp-mori-semibold font-semibold text-[14px] md:text-[16px] md:w-full">{question}</p>
                <div>
                    {open ? (
                        <svg
                            viewBox="0 0 32 32"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            className="size-[32px] md:size-[32px] shrink-0"
                        >
                            <rect
                                x="32"
                                y="32"
                                width="32"
                                height="32"
                                rx="12"
                                transform="rotate(180 32 32)"
                                fill="#242424"
                            />
                            <path
                                d="M15.9992 13.0501C16.1326 13.0501 16.2576 13.0709 16.3742 13.1126C16.4909 13.1543 16.5992 13.2251 16.6992 13.3251L21.2992 17.9251C21.4826 18.1084 21.5742 18.3418 21.5742 18.6251C21.5742 18.9084 21.4826 19.1418 21.2992 19.3251C21.1159 19.5084 20.8826 19.6001 20.5992 19.6001C20.3159 19.6001 20.0826 19.5084 19.8992 19.3251L15.9992 15.4251L12.0992 19.3251C11.9159 19.5084 11.6826 19.6001 11.3992 19.6001C11.1159 19.6001 10.8826 19.5084 10.6992 19.3251C10.5159 19.1418 10.4242 18.9084 10.4242 18.6251C10.4242 18.3418 10.5159 18.1084 10.6992 17.9251L15.2992 13.3251C15.3992 13.2251 15.5076 13.1543 15.6242 13.1126C15.7409 13.0709 15.8659 13.0501 15.9992 13.0501Z"
                                fill="#A0A0A0"
                            />
                        </svg>
                    ) : (
                        <svg
                            width="32"
                            height="32"
                            viewBox="0 0 32 32"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            className="shrink-0"
                        >
                            <rect
                                width="32"
                                height="32"
                                rx="12"
                                fill="#242424"
                                fillOpacity="0.05"
                            />
                            <path
                                d="M16.0008 18.9499C15.8674 18.9499 15.7424 18.9291 15.6258 18.8874C15.5091 18.8457 15.4008 18.7749 15.3008 18.6749L10.7008 14.0749C10.5174 13.8916 10.4258 13.6582 10.4258 13.3749C10.4258 13.0916 10.5174 12.8582 10.7008 12.6749C10.8841 12.4916 11.1174 12.3999 11.4008 12.3999C11.6841 12.3999 11.9174 12.4916 12.1008 12.6749L16.0008 16.5749L19.9008 12.6749C20.0841 12.4916 20.3174 12.3999 20.6008 12.3999C20.8841 12.3999 21.1174 12.4916 21.3008 12.6749C21.4841 12.8582 21.5758 13.0916 21.5758 13.3749C21.5758 13.6582 21.4841 13.8916 21.3008 14.0749L16.7008 18.6749C16.6008 18.7749 16.4924 18.8457 16.3758 18.8874C16.2591 18.9291 16.1341 18.9499 16.0008 18.9499Z"
                                fill="#A0A0A0"
                            />
                        </svg>
                    )}
                </div>
            </div>

            {open && (
                <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    transition={{ duration: 0.4 }}
                    className="text-[#00000080] mt-2 overflow-hidden text-[14px] md:text-[16px]"
                >
                    {answer}
                </motion.div>
            )}
        </div>
    )
}
