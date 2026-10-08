'use client'
import { useRef, useState, useEffect } from "react";
import Image from "next/image";
import ProcessStepImg from "../../assets/processing.webp";
import clsx from "clsx";
import { motion } from "motion/react";

function ProcessStep() {
    const [isScrollable, setIsScrollable] = useState(false);
    const scrollableRef = useRef<HTMLDivElement>(null);
    const sectionRef = useRef<HTMLElement>(null);

    const steps = [
        {
            title: "Choose Provider & Amount",
            description: "Tell us the provider & amount (OpenAI, Claude, Azure, AWS, GCP)."
        },
        {
            title: "Match & Verify Inventory",
            description: "We match verified inventory and share screenshots optional read only access for test keys."
        },
        {
            title: "Paperwork & Invoice",
            description: "Paperwork & invoice (entity + tax IDs)."
        },
        {
            title: "Secure Payment",
            description: "Complete secure payment."
        },
        {
            title: "Transfer Credentials",
            description: "Ownership/credentials transferred within 24 hours post-payment."
        },
        {
            title: "Start Using Credits",
            description: "Start using credits right away 24×7 support available."
        }
    ];

    // Check if inner div is scrolled to bottom
    const checkIfAtBottom = () => {
        const scrollableDiv = scrollableRef.current;
        if (!scrollableDiv) return false;

        const scrollHeight = scrollableDiv.scrollHeight;
        const clientHeight = scrollableDiv.clientHeight;
        const scrollTop = scrollableDiv.scrollTop;

        return Math.abs(scrollHeight - clientHeight - scrollTop) < 1;
    };

    // Check if section is in viewport
    const isSectionInViewport = () => {
        const section = sectionRef.current;
        if (!section) return false;

        const rect = section.getBoundingClientRect();
        return rect.top <= 0 && rect.bottom >= window.innerHeight;
    };

    useEffect(() => {
        let scrollPrevented = false;

        // Handle mouse wheel
        const handleWheel = (e: WheelEvent) => {
            if (!isSectionInViewport() || isScrollable) return;

            const scrollableDiv = scrollableRef.current;
            if (!scrollableDiv) return;

            e.preventDefault();
            scrollableDiv.scrollTop += e.deltaY;

            if (checkIfAtBottom() && e.deltaY > 0) {
                setIsScrollable(true);
            }
        };

        // Handle keyboard navigation (Arrow keys, Page Up/Down, Space, Home, End)
        const handleKeyDown = (e: KeyboardEvent) => {
            if (!isSectionInViewport() || isScrollable) return;

            const scrollableDiv = scrollableRef.current;
            if (!scrollableDiv) return;

            const keys = ['ArrowDown', 'ArrowUp', 'PageDown', 'PageUp', 'Space', 'Home', 'End'];

            if (keys.includes(e.key) || e.key === ' ') {
                e.preventDefault();
                scrollPrevented = true;

                let scrollAmount = 0;

                switch (e.key) {
                    case 'ArrowDown':
                        scrollAmount = 40;
                        break;
                    case 'ArrowUp':
                        scrollAmount = -40;
                        break;
                    case 'PageDown':
                    case ' ':
                    case 'Space':
                        scrollAmount = scrollableDiv.clientHeight * 0.8;
                        break;
                    case 'PageUp':
                        scrollAmount = -scrollableDiv.clientHeight * 0.8;
                        break;
                    case 'End':
                        scrollableDiv.scrollTop = scrollableDiv.scrollHeight;
                        if (checkIfAtBottom()) {
                            setIsScrollable(true);
                        }
                        return;
                    case 'Home':
                        scrollableDiv.scrollTop = 0;
                        return;
                }

                scrollableDiv.scrollTop += scrollAmount;

                if (checkIfAtBottom() && scrollAmount > 0) {
                    setIsScrollable(true);
                }
            }
        };

        // Handle scroll event (for scrollbar dragging)
        const handleScroll = () => {
            if (!isSectionInViewport() || isScrollable) return;

            // Prevent page scroll only when section is in viewport and not unlocked
            if (scrollPrevented) {
                window.scrollTo({
                    top: sectionRef.current?.offsetTop || 0,
                    behavior: 'auto'
                });
            }

            const scrollableDiv = scrollableRef.current;
            if (scrollableDiv && checkIfAtBottom()) {
                setIsScrollable(true);
            }
        };

        // Monitor inner div scroll to check if bottom reached
        const handleInnerScroll = () => {
            if (isScrollable) return;

            if (checkIfAtBottom()) {
                setIsScrollable(true);
                scrollPrevented = false;
            }
        };

        // Attach listeners
        window.addEventListener('wheel', handleWheel, { passive: false });
        window.addEventListener('keydown', handleKeyDown, { passive: false });
        window.addEventListener('scroll', handleScroll, { passive: true });

        const scrollableDiv = scrollableRef.current;
        if (scrollableDiv) {
            scrollableDiv.addEventListener('scroll', handleInnerScroll, { passive: true });
        }

        return () => {
            window.removeEventListener('wheel', handleWheel);
            window.removeEventListener('keydown', handleKeyDown);
            window.removeEventListener('scroll', handleScroll);

            if (scrollableDiv) {
                scrollableDiv.removeEventListener('scroll', handleInnerScroll);
            }
        };
    }, [isScrollable]);

    // Container + item variants
    const container = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: { staggerChildren: 0.25, delayChildren: 0.2 }
        }
    };

    const item = {
        hidden: { opacity: 0, y: 50 },
        show: {
            opacity: 1,
            y: 0,
            transition: {
                type: "spring" as const,
                stiffness: 80,
                damping: 15,
                duration: 0.6
            }
        }
    };

    const imageVariant = {
        hidden: { opacity: 0, x: 60 },
        show: {
            opacity: 1,
            x: 0,
            transition: {
                type: "spring" as const,
                stiffness: 70,
                damping: 14
            }
        }
    };

    const cardVariant = {
        hidden: { opacity: 0, y: 40 },
        show: {
            opacity: 1,
            y: 0,
            transition: { delay: 0.3, duration: 0.7, ease: "easeOut" as const }
        }
    };

    return (
        <motion.section
            ref={sectionRef}
            className="md:grid md:grid-cols-2 max-w-6xl mx-auto gap-x-28 items-center mt-[40px] md:mt-[120px] px-2 md:px-0 sticky top-0"
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
            id="how-it-works"
        >
            {/* LEFT SIDE — Text & Steps */}
            <motion.div variants={container}>
                <motion.p
                    className="text-[30px] md:text-[40px] font-semibold tracking-tight md:w-[95%] line-clamp-6 leading-tight"
                    variants={item}
                >
                    A simple,
                    <span className="mx-2 bg-gradient-to-r from-[#20B801] to-[rgb(12,66,1)] bg-clip-text text-transparent">
                        secure 6 step process
                    </span>
                    to get your infra credits in hours,
                    <span className="mx-2 line-through text-red-700">
                        not days
                    </span>
                </motion.p>


                <motion.div
                    className="relative overflow-x-hidden mt-6 hide-scrollbar"
                    variants={container}
                >
                    <div className="absolute w-full -top-[5px] left-0 h-10 bg-gradient-to-r from-white to-white/60 z-10 blur-xs scale-125"></div>

                    <motion.div
                        ref={scrollableRef}
                        className="h-auto md:h-[600px] overflow-y-scroll relative overflow-x-hidden pt-10 space-y-6 hide-scrollbar"
                        variants={container}
                    >
                        {steps.map(({ description, title }, index) => (
                            <motion.div key={index} variants={item}>
                                <ProcesstepRow
                                    descrption={description}
                                    title={title}
                                    step={"0" + (index + 1)}
                                    stepClass="bg-[#19363F] text-white shadow-[inset_0px_0px_13.35px_0px_#FFFFFF66,0px_16.02px_10.68px_-5.34px_#19363F26]"
                                />
                            </motion.div>
                        ))}


                    </motion.div>
                </motion.div>
            </motion.div>

            {/* RIGHT SIDE — Image & CTA Card */}
            <motion.div className="mt-20 md:mt-32" variants={container}>
                <motion.div variants={imageVariant}>
                    <Image src={ProcessStepImg} alt="Process steps" className="w-[298px] md:w-[470px] mx-auto h-auto" />
                </motion.div>

                <motion.div className="pt-20" variants={cardVariant}>
                    <button
                        className="w-full md:w-[480px] px-[30px] md:px-[40px] py-[24px] md:py-[32px] flex justify-between items-center rounded-3xl md:rounded-2xl mx-auto bg-[#19363F] cursor-pointer"
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
            </motion.div>
        </motion.section>
    );
}

export const ProcesstepRow = ({
    stepClass = "text-white shadow-[inset_0px_0px_13.35px_0px_#FFFFFF66,0px_16.02px_10.68px_-5.34px_#19363F26]",
    descrption,
    step,
    title
}: {
    stepClass?: string;
    step: string;
    title: string;
    descrption: string;
}) => {
    return (
        <div className={clsx({ "mt-10": step !== "01" })}>
            <div
                className={clsx(
                    "size-10 rounded-full text-center flex justify-center items-center pt-[2.5px]",
                    stepClass
                )}
            >
                {step}
            </div>
            <div className="mt-2">
                <p className="font-semibold text-[17px] md:text-[24px] font-pp-mori-semibold">{title}</p>
                <p className="text-black font-pp-mori-regular">{descrption}</p>
            </div>
        </div>
    );
};

export default ProcessStep;