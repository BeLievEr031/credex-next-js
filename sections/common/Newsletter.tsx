"use client";

import React, { useState } from "react";
import { motion } from "motion/react";
import { newsletterApi } from "../../api/api";
import { Mail, CheckCircle, AlertCircle } from "lucide-react";

export default function Newsletter() {
    const [email, setEmail] = useState("");
    const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
    const [message, setMessage] = useState("");

    const handleSubscribe = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!email) return;

        setStatus("loading");
        try {
            await newsletterApi.subscribe({ email });
            setStatus("success");
            setMessage("Thank you for subscribing! You're now on our list.");
            setEmail("");

            // eslint-disable-next-line @typescript-eslint/no-explicit-any
        } catch (error: any) {
            setStatus("error");
            setMessage(error?.response?.data?.message || "Something went wrong. Please try again.");
        }
    };

    return (
        <section className="py-20 px-4 md:px-0 bg-white font-pp-mori-regular">
            <div className="max-w-6xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="bg-[#062524] rounded-3xl p-8 md:p-16 relative overflow-hidden flex flex-col md:flex-row items-center justify-between gap-10 shadow-2xl"
                >
                    {/* Decorative Elements */}
                    <div className="absolute top-0 right-0 w-64 h-64 bg-[#0FF395] opacity-5 blur-[100px] -mr-32 -mt-32 rounded-full"></div>
                    <div className="absolute bottom-0 left-0 w-48 h-48 bg-[#F15A42] opacity-5 blur-[80px] -ml-24 -mb-24 rounded-full"></div>

                    <div className="flex-1 text-center md:text-left relative z-10">
                        <h2 className="text-3xl md:text-4xl font-pp-mori-semibold font-semibold text-white mb-4">
                            Stay Updated
                        </h2>
                        <p className="text-[#0FF395] font-medium tracking-wide uppercase text-sm mb-4">
                            Newsletter Subscription
                        </p>
                        <p className="text-gray-300 text-lg md:max-w-md">
                            Get the latest deals on AI & Cloud credits delivered straight to your inbox. No spam, only value.
                        </p>
                    </div>

                    <div className="flex-1 w-full max-w-md relative z-10">
                        <form onSubmit={handleSubscribe} className="relative">
                            <div className="relative flex flex-col sm:flex-row gap-3">
                                <div className="relative flex-1">
                                    <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
                                    <input
                                        type="email"
                                        placeholder="Enter your work email"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        className="w-full bg-white/10 border border-white/20 text-white pl-12 pr-4 py-4 rounded-xl focus:outline-none focus:border-[#0FF395] transition-colors placeholder:text-gray-500"
                                        required
                                    />
                                </div>
                                <button
                                    type="submit"
                                    disabled={status === "loading"}
                                    className="bg-[#0FF395] hover:bg-[#0ddb86] text-black font-semibold px-8 py-4 rounded-xl transition-all active:scale-95 disabled:opacity-50 disabled:active:scale-100 whitespace-nowrap"
                                >
                                    {status === "loading" ? "Subscribing..." : "Join Now"}
                                </button>
                            </div>

                            {status === "success" && (
                                <motion.div
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    className="absolute -bottom-12 left-0 flex items-center gap-2 text-[#0FF395] font-medium"
                                >
                                    <CheckCircle size={18} />
                                    <span>{message}</span>
                                </motion.div>
                            )}

                            {status === "error" && (
                                <motion.div
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    className="absolute -bottom-12 left-0 flex items-center gap-2 text-[#F15A42] font-medium"
                                >
                                    <AlertCircle size={18} />
                                    <span>{message}</span>
                                </motion.div>
                            )}
                        </form>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
