'use client'
import { useEffect, useRef, useState } from "react";
// import { testimonialApi } from "../../api/api";
import clsx from "clsx";
import { motion } from "motion/react"
import Image, { StaticImageData } from "next/image";

interface IProp {
    reviews: { name: string; designation: string; review: string, img: string | StaticImageData }[],
    description?: string;
    type?: "SELLER" | "BUYER";
}

function Testimonial({ reviews, }: IProp) {
    const [testimonialList] = useState<{ name: string; designation: string; review: string, img: string | StaticImageData }[]>(reviews || [])
    const [loading] = useState(false);
    const [paused, setPaused] = useState(false);
    const trackRef = useRef<HTMLDivElement>(null);
    const posRef = useRef(0);
    const rafRef = useRef<number | null>(null);


    const [isInView, setIsInView] = useState(false);
    const sectionRef = useRef<HTMLElement>(null);

    const displayReviews = testimonialList.length > 0 ? testimonialList : reviews;

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                setIsInView(entry.isIntersecting);
            },
            { threshold: 0.1 }
        );

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        return () => observer.disconnect();
    }, []);

    useEffect(() => {
        const track = trackRef.current;
        if (!track || loading || displayReviews.length === 0 || !isInView) return;

        const halfWidth = track.scrollWidth / 2;

        const animate = () => {
            if (!paused) {
                posRef.current -= 0.6; // Speed adjustment
                if (Math.abs(posRef.current) >= halfWidth) {
                    posRef.current = 0;
                }
                track.style.transform = `translateX(${posRef.current}px)`;
            }
            rafRef.current = requestAnimationFrame(animate);
        };

        rafRef.current = requestAnimationFrame(animate);
        return () => {
            if (rafRef.current) cancelAnimationFrame(rafRef.current);
        };
    }, [paused, loading, displayReviews.length, isInView]);

    return (
        <section ref={sectionRef} className="py-10 mx-auto mt-[50px] md:mt-[120px] font-pp-mori-regular overflow-x-hidden px-2 md:px-0">
            <div className="text-center space-y-2">
                <motion.p
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    viewport={{ once: true }}
                    className="text-[#7F7F7F] uppercase tracking-widest text-[10.5px] md:text-sm">Testimonials</motion.p>
                <motion.h1 className="text-[30px] md:text-[40px] font-pp-mori-semibold font-semibold"
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    viewport={{ once: true }}
                >Our customer reviews</motion.h1>
                <motion.p
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
                    viewport={{ once: true }}
                    className="text-[#00000080] text-[12px] md:text-[16px] md:w-[65%] mx-auto">
                    See what other clients are saying about their experience with Credex
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
                    viewport={{ once: true }}
                    className="text-[#00000080] text-[10px] md:text-[14px]">
                    <p>
                        (<b>Note</b>: Names, photos, and company names are representative due to NDA. Results are real, identities are anonymized.)
                    </p>
                </motion.div>
            </div>

            <div className="overflow-hidden w-full relative">
                <div
                    ref={trackRef}
                    className="pt-12 md:pt-24 flex gap-x-2 w-max"
                    style={{ willChange: "transform" }}
                    onMouseEnter={() => setPaused(true)}
                    onMouseLeave={() => setPaused(false)}
                >
                    {loading ? (
                        <p className="text-center w-screen py-10">Loading testimonials...</p>
                    ) : (
                        <>
                            {[...displayReviews, ...displayReviews].map(({ designation, name, review, img }, i) => (
                                <ReviewCard key={`rc-${i}`} designation={designation} name={name} review={review} imgSrc={img} />
                            ))}
                        </>
                    )}
                </div>
            </div>
        </section>
    )
}

function ReviewCard({ designation, name, review, imgSrc }: { name: string; designation: string; review: string, imgSrc: string | StaticImageData }) {
    return (
        <div className="rounded-2xl border-1 border-[#19363F73] bg-[#19363F0D] w-[185px] h-[300px] md:w-[330px] md:h-[420px] p-[18px] md:p-8 flex flex-col justify-between shrink-0">
            <p className={clsx("text-[12px] md:text-[16px]")}>“{review}”</p>
            <div className="flex gap-x-2 md:gap-x-4 mt-4 items-center">
                <div className="shrink-0 rounded-full overflow-hidden border border-gray-200 size-[25px] md:size-[50px] relative">
                    <Image src={imgSrc} alt={`Profile photo of ${name}`} fill loading="lazy" sizes="50px" unoptimized className="scale-125 object-cover object-top" />
                </div>
                <div className="">
                    <p className="text-[#1A1A1A] font-medium text-[9px] md:text-[16px]">{name}</p>
                    <p className="text-[#7F7F7F] text-[7px] md:text-sm">{designation}</p>
                </div>
            </div>
        </div>
    )
}

export default Testimonial
