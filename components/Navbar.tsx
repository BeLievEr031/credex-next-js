// import clsx from "clsx";
// import { Link, useLocation } from "react-router-dom";
// import { useState, useEffect } from "react";

// interface IProp {
//     links: { lable: string; link: string }[]
// }
// function Navbar({ links }: IProp) {
//     const location = useLocation();
//     const [isVisible, setIsVisible] = useState(true);
//     const [lastScrollY, setLastScrollY] = useState(0);

//     // 👇 Scroll listener
//     useEffect(() => {
//         const handleScroll = () => {
//             const currentScrollY = window.scrollY;

//             // Hide on scroll down, show on scroll up
//             if (currentScrollY > lastScrollY && currentScrollY > 100) {
//                 setIsVisible(false);
//             } else {
//                 setIsVisible(true);
//             }

//             setLastScrollY(currentScrollY);
//         };

//         window.addEventListener("scroll", handleScroll);
//         return () => window.removeEventListener("scroll", handleScroll);
//     }, [lastScrollY]);

//     return (
//         <header
//             className={clsx(
//                 "transition-all duration-500 w-[90%] md:w-7xl mx-auto border border-[#D9D9D9] rounded-full fixed top-4 left-1/2 -translate-x-1/2 flex items-center px-8 py-2 md:py-1 justify-between z-50 bg-white/80 backdrop-blur-md shadow-sm font-pp-mori-semibold",
//                 {
//                     "opacity-0 -translate-y-10 pointer-events-none": !isVisible,
//                     "opacity-100 translate-y-0": isVisible,
//                 }
//             )}
//         >
//             {/* Logo */}
//             <Link to="/" className="flex gap-[8px] items-center -translate-y-1">
//                 <svg
//                     width="36"
//                     height="37"
//                     viewBox="0 0 36 37"
//                     fill="none"
//                     xmlns="http://www.w3.org/2000/svg"
//                     className="mt-2.5"
//                 >
//                     <path
//                         d="M29.1273 9.94472C31.5201 11.5758 32.3367 14.4527 32.1936 17.2658C32.0483 20.1199 30.928 23.2817 28.9699 26.1543C27.0117 29.027 24.4777 31.226 21.8741 32.4045C19.3079 33.5658 16.3315 33.8572 13.9388 32.2262C11.5461 30.5952 10.7294 27.7182 10.8725 24.9051C11.0178 22.0509 12.1385 18.8885 14.0967 16.0158C16.055 13.1432 18.5885 10.9449 21.192 9.76646C23.7582 8.60497 26.7345 8.31367 29.1273 9.94472Z"
//                         stroke="#086841"
//                         strokeWidth="4"
//                     />
//                     <path
//                         d="M27.0331 4.86983C33.5605 9.31935 33.8542 18.9905 28.9713 26.154C24.0882 33.3176 14.9783 36.5796 8.45079 32.13C1.92339 27.6804 1.63001 18.0085 6.51312 10.845C11.3963 3.68178 20.5057 0.420458 27.0331 4.86983Z"
//                         stroke="#086841"
//                         strokeWidth="4"
//                     />
//                 </svg>

//                 <p className="text-[#086841] text-[43px] font-semibold font-pp-mori-semibold mt-2">credex</p>
//             </Link>

//             {/* Switch Tabs */}
//             <div className="md:flex gap-x-2 bg-[#D0D5CE33] px-2 py-2 rounded-full items-center hidden">
//                 <Link
//                     to={"/"}
//                     className={clsx("rounded-full p-[12px]", {
//                         "border border-[#086841] bg-[#0FF39557]":
//                             !location.pathname.includes("/seller"),
//                         "text-[#00000099] bg-transparent":
//                             location.pathname.includes("/seller"),
//                     })}
//                 >
//                     Buy Credits
//                 </Link>
//                 <Link
//                     to={"/seller"}
//                     className={clsx("rounded-full p-[12px]", {
//                         "border border-[#086841] bg-[#0FF39557]":
//                             location.pathname.includes("/seller"),
//                         "text-[#00000099]": !location.pathname.includes("/seller"),
//                     })}
//                 >
//                     Sell Credits
//                 </Link>
//             </div>

//             {/* Right Links */}
//             <div className="hidden md:flex items-center gap-x-8 text-[#000000CC] pr-2">

//                 {
//                     links.map(({ lable, link }) => {
//                         return <a href={link}>{lable}</a>
//                     })
//                 }
//             </div>

//             <div className="block md:hidden">
//                 <svg width="41" height="41" viewBox="0 0 41 41" fill="none" xmlns="http://www.w3.org/2000/svg">
//                     <rect x="0.482422" y="0.5" width="40" height="40" rx="20" fill="#525866" fillOpacity="0.24" />
//                     <path d="M12.3828 13.3H28.5828V15.1H12.3828V13.3ZM12.3828 19.6H28.5828V21.4H12.3828V19.6ZM12.3828 25.9H28.5828V27.7H12.3828V25.9Z" fill="#525866" />
//                 </svg>

//             </div>
//         </header>
//     );
// }

// export default Navbar;
"use client";
import clsx from "clsx";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { ChevronDown } from "lucide-react";

interface IProp {
    links?: { lable: string; link: string }[];
}

const productNavItems = [
    { name: "OpenAI Credits", href: "/buy-openai-credits", badge: "Tier 5" },
    { name: "Claude Credits", href: "/buy-claude-credits", badge: "Waitlist" },
    { name: "AWS Bedrock", href: "/buy-aws-credits", badge: "2 Yrs" },
    { name: "GCP Vertex AI", href: "/buy-gcp-credits" },
    { name: "Azure OpenAI", href: "/buy-azure-credits" },
    { name: "MongoDB Atlas", href: "/buy-mongodb-credits" },
    { name: "Supabase", href: "/buy-supabase-credits" },
    { name: "PostHog", href: "/buy-posthog-credits", badge: "No Expiry" },
    { name: "ElevenLabs", href: "/buy-elevenlabs-credits" },
    { name: "DigitalOcean", href: "/buy-digitalocean-credits" },
    { name: "Deepgram", href: "/buy-deepgram-credits" },
    { name: "Cursor AI", href: "/buy-cursor-credits" },
    { name: "Lambda GPUs", href: "/buy-lambda-gpu-credits" },
];

const defaultHeaderLinks = [
    { lable: "Plans", link: "/plans-pricing" },
    { lable: "Blog", link: "/blog" },
];

function Navbar({ links = defaultHeaderLinks }: IProp) {
    const pathname = usePathname();
    const [isVisible, setIsVisible] = useState(true);
    const [lastScrollY, setLastScrollY] = useState(0);
    const [isMenuOpen, setIsMenuOpen] = useState(false); // for mobile menu toggle
    const [isMobilePlansOpen, setIsMobilePlansOpen] = useState(false);
    // Scroll listener
    useEffect(() => {
        const handleScroll = () => {
            const currentScrollY = window.scrollY;
            if (currentScrollY > lastScrollY && currentScrollY > 100) {
                setIsVisible(false);
            } else {
                setIsVisible(true);
            }
            setLastScrollY(currentScrollY);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, [lastScrollY]);

    return (
        <header
            suppressHydrationWarning
            className={clsx(
                "transition-all duration-500 w-[90%] md:w-7xl mx-auto border border-[#D9D9D9] rounded-full fixed top-4 left-1/2 -translate-x-1/2 flex items-center px-8 py-2 md:py-1 justify-between z-50 bg-white/80 backdrop-blur-md shadow-sm font-pp-mori-semibold",
                {
                    "opacity-0 -translate-y-10 pointer-events-none": !isVisible,
                    "opacity-100 translate-y-0": isVisible,
                }
            )}
        >
            {/* Logo */}
            <Link href="/" className="flex gap-[8px] items-center -translate-y-1">
                <svg
                    width="36"
                    height="37"
                    viewBox="0 0 36 37"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="mt-2.5"
                >
                    <path
                        d="M29.1273 9.94472C31.5201 11.5758 32.3367 14.4527 32.1936 17.2658C32.0483 20.1199 30.928 23.2817 28.9699 26.1543C27.0117 29.027 24.4777 31.226 21.8741 32.4045C19.3079 33.5658 16.3315 33.8572 13.9388 32.2262C11.5461 30.5952 10.7294 27.7182 10.8725 24.9051C11.0178 22.0509 12.1385 18.8885 14.0967 16.0158C16.055 13.1432 18.5885 10.9449 21.192 9.76646C23.7582 8.60497 26.7345 8.31367 29.1273 9.94472Z"
                        stroke="#086841"
                        strokeWidth="4"
                    />
                    <path
                        d="M27.0331 4.86983C33.5605 9.31935 33.8542 18.9905 28.9713 26.154C24.0882 33.3176 14.9783 36.5796 8.45079 32.13C1.92339 27.6804 1.63001 18.0085 6.51312 10.845C11.3963 3.68178 20.5057 0.420458 27.0331 4.86983Z"
                        stroke="#086841"
                        strokeWidth="4"
                    />
                </svg>
                <p className="text-[#086841] text-[43px] font-semibold font-pp-mori-semibold mt-2">
                    credex
                </p>
            </Link>

            {/* Switch Tabs */}
            <div className={clsx("md:flex gap-x-2 bg-[#D0D5CE33] px-2 py-2 rounded-full items-center hidden ", {
                "translate-x-1/4": links.length > 0
            })}>
                <Link
                    href={"/"}
                    suppressHydrationWarning
                    className={clsx("rounded-full p-[12px]", {
                        "border border-[#086841] bg-[#0FF39557]":
                            !pathname || !pathname.includes("/seller"),
                        "text-[#00000099] bg-transparent":
                            pathname ? pathname.includes("/seller") : false,
                    })}
                >
                    Buy Credits
                </Link>
                <Link
                    href={"/seller"}
                    suppressHydrationWarning
                    className={clsx("rounded-full p-[12px]", {
                        "border border-[#086841] bg-[#0FF39557]":
                            pathname ? pathname.includes("/seller") : false,
                        "text-[#00000099]": !pathname || !pathname.includes("/seller"),
                    })}
                >
                    Sell Credits
                </Link>
            </div>

            {/* Right Links */}
            {links.length > 0 && <div className="hidden md:flex items-center gap-x-8 text-[#000000CC] pr-2">
                {links.map(({ lable, link }) => {
                    const isPlans = link === "/plans-pricing" || lable.toLowerCase().includes("plan") || lable.toLowerCase().includes("pricing");

                    if (isPlans) {
                        return (
                            <div key={lable} className="relative group py-2">
                                <Link
                                    href="/plans-pricing"
                                    className="hover:text-[#086841] transition-colors flex items-center gap-1 cursor-pointer"
                                >
                                    <span>{lable}</span>
                                    <ChevronDown className="w-3.5 h-3.5 text-gray-500 group-hover:rotate-180 transition-transform duration-200" />
                                </Link>

                                {/* Dropdown Menu */}
                                <div className="absolute top-full -left-28 pt-3 hidden group-hover:block transition-all z-50 pointer-events-auto">
                                    <div className="w-[430px] bg-white/95 backdrop-blur-md rounded-2xl shadow-xl border border-gray-200 p-4">
                                        <div className="flex items-center justify-between pb-3 mb-2 border-b border-gray-100">
                                            <span className="text-[11px] uppercase font-semibold text-[#086841] tracking-wider">
                                                Credit Plans by Provider
                                            </span>
                                            <span className="text-[10px] font-semibold px-2 py-0.5 rounded-full bg-[#0FF395]/20 text-[#086841]">
                                                Up to 50% off
                                            </span>
                                        </div>
                                        <div className="grid grid-cols-2 gap-1.5">
                                            {productNavItems.map((prod) => (
                                                <Link
                                                    key={prod.name}
                                                    href={prod.href}
                                                    className="px-2.5 py-1.5 rounded-lg hover:bg-gray-50 hover:text-[#086841] text-xs font-medium text-[#19363F] flex items-center justify-between transition-colors group/item"
                                                >
                                                    <span className="truncate pr-1">{prod.name}</span>
                                                    {prod.badge && (
                                                        <span className="text-[9px] px-1.5 py-0.5 rounded bg-gray-100 text-gray-600 group-hover/item:bg-[#086841]/10 group-hover/item:text-[#086841] shrink-0 font-medium">
                                                            {prod.badge}
                                                        </span>
                                                    )}
                                                </Link>
                                            ))}
                                        </div>
                                        <div className="mt-3 pt-2.5 border-t border-gray-100 text-center">
                                            <Link
                                                href="/plans-pricing"
                                                className="text-xs font-semibold text-[#086841] hover:text-[#065032] inline-flex items-center gap-1"
                                            >
                                                View all 13 credit plans & pricing →
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        );
                    }

                    if (link.startsWith("/")) {
                        return (
                            <Link key={lable} href={link} className="hover:text-[#086841] transition-colors">
                                {lable}
                            </Link>
                        );
                    } else if (link.startsWith("#")) {
                        return (
                            <a key={lable} href={link} className="hover:text-[#086841] transition-colors">
                                {lable}
                            </a>
                        );
                    } else {
                        return (
                            <button key={lable} className="cursor-pointer hover:text-[#086841] transition-colors" onClick={() => { window.location.href = link }}>
                                {lable}
                            </button>
                        );
                    }
                })}
            </div>}

            {/* Mobile Hamburger */}
            <div className="block md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
                <svg width="41" height="41" viewBox="0 0 41 41" fill="none">
                    <rect x="0.482422" y="0.5" width="40" height="40" rx="20" fill="#525866" fillOpacity="0.24" />
                    <path
                        d="M12.3828 13.3H28.5828V15.1H12.3828V13.3ZM12.3828 19.6H28.5828V21.4H12.3828V19.6ZM12.3828 25.9H28.5828V27.7H12.3828V25.9Z"
                        fill="#525866"
                    />
                </svg>
            </div>


            {/* Mobile Menu */}
            <div
                className={clsx(
                    "absolute -top-4 left-0 w-full bg-white shadow-md rounded-3xl flex flex-col gap-4 py-6 transition-all duration-500 overflow-hidden md:hidden ",
                    {
                        "max-h-0 opacity-0 pointer-events-none": !isMenuOpen,
                        "max-h-[85vh] overflow-y-auto opacity-100": isMenuOpen,
                    }
                )}
            >

                <div className="flex justify-between px-6 items-center">
                    {/* Logo */}
                    <Link href="/" className="flex gap-[8px] items-center -translate-y-1">
                        <svg
                            width="36"
                            height="37"
                            viewBox="0 0 36 37"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            className="mt-2.5"
                        >
                            <path
                                d="M29.1273 9.94472C31.5201 11.5758 32.3367 14.4527 32.1936 17.2658C32.0483 20.1199 30.928 23.2817 28.9699 26.1543C27.0117 29.027 24.4777 31.226 21.8741 32.4045C19.3079 33.5658 16.3315 33.8572 13.9388 32.2262C11.5461 30.5952 10.7294 27.7182 10.8725 24.9051C11.0178 22.0509 12.1385 18.8885 14.0967 16.0158C16.055 13.1432 18.5885 10.9449 21.192 9.76646C23.7582 8.60497 26.7345 8.31367 29.1273 9.94472Z"
                                stroke="#086841"
                                strokeWidth="4"
                            />
                            <path
                                d="M27.0331 4.86983C33.5605 9.31935 33.8542 18.9905 28.9713 26.154C24.0882 33.3176 14.9783 36.5796 8.45079 32.13C1.92339 27.6804 1.63001 18.0085 6.51312 10.845C11.3963 3.68178 20.5057 0.420458 27.0331 4.86983Z"
                                stroke="#086841"
                                strokeWidth="4"
                            />
                        </svg>
                        <p className="text-[#086841] text-[43px] font-semibold font-pp-mori-semibold mt-2">
                            credex
                        </p>
                    </Link>

                    {/* close icon */}
                    <div className="" onClick={() => setIsMenuOpen(!isMenuOpen)}>
                        <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" className="rounded-full">
                            <path d="M0 0H36C42.6274 0 48 5.37258 48 12V36C48 42.6274 42.6274 48 36 48H0V0Z" fill="#F9FAFB" />
                            <path d="M24.0001 22.3032L29.9401 16.3632L31.6369 18.06L25.6969 24L31.6369 29.94L29.9401 31.6368L24.0001 25.6968L18.0601 31.6368L16.3633 29.94L22.3033 24L16.3633 18.06L18.0601 16.3632L24.0001 22.3032Z" fill="#FF6A00" />
                        </svg>

                    </div>
                </div>

                <div className="w-[100%] flex justify-center bg-[#D0D5CE33 px-2 py-2 rounded-full items-center">
                    <Link
                        href={"/"}
                        suppressHydrationWarning
                        className={clsx("rounded-full px-[35px] py-[18px]", {
                            "border border-[#086841] bg-[#0FF39557]":
                                !pathname || !pathname.includes("/seller"),
                            "text-[#00000099] bg-transparent":
                                pathname ? pathname.includes("/seller") : false,
                        })}
                        onClick={() => setIsMenuOpen(false)}
                    >
                        Buy Credits
                    </Link>
                    <Link
                        href={"/seller"}
                        suppressHydrationWarning
                        className={clsx("rounded-full px-[40px] py-[8px] ", {
                            "border border-[#086841] bg-[#0FF39557]":
                                pathname ? pathname.includes("/seller") : false,
                            "text-[#00000099]": !pathname || !pathname.includes("/seller"),
                        })}
                        onClick={() => setIsMenuOpen(false)}
                    >
                        Sell Credits
                    </Link>
                </div>

                <div className="flex flex-col items-start gap-y-2 px-6 w-full">

                    {links.map(({ lable, link }) => {
                        const isPlans = link === "/plans-pricing" || lable.toLowerCase().includes("plan") || lable.toLowerCase().includes("pricing");

                        if (isPlans) {
                            return (
                                <div key={lable} className="w-full py-1">
                                    <div
                                        onClick={() => setIsMobilePlansOpen(!isMobilePlansOpen)}
                                        className="flex items-center justify-between cursor-pointer hover:text-[#086841] py-1 font-semibold"
                                    >
                                        <span>{lable}</span>
                                        <ChevronDown className={clsx("w-4 h-4 transition-transform", { "rotate-180": isMobilePlansOpen })} />
                                    </div>
                                    {isMobilePlansOpen && (
                                        <div className="pl-3 py-2 flex flex-col gap-2 border-l-2 border-[#0FF395]/40 my-1 max-h-56 overflow-y-auto">
                                            <Link
                                                href="/plans-pricing"
                                                onClick={() => setIsMenuOpen(false)}
                                                className="text-xs font-semibold text-[#086841] py-1"
                                            >
                                                Overview: All Plans & Pricing →
                                            </Link>
                                            {productNavItems.map((prod) => (
                                                <Link
                                                    key={prod.name}
                                                    href={prod.href}
                                                    onClick={() => setIsMenuOpen(false)}
                                                    className="text-xs text-gray-700 hover:text-[#086841] py-0.5 flex items-center justify-between pr-2"
                                                >
                                                    <span>{prod.name}</span>
                                                    {prod.badge && (
                                                        <span className="text-[9px] px-1.5 py-0.2 rounded bg-gray-100 text-gray-500 font-medium">
                                                            {prod.badge}
                                                        </span>
                                                    )}
                                                </Link>
                                            ))}
                                        </div>
                                    )}
                                </div>
                            );
                        }

                        if (link.startsWith("/")) {
                            return (
                                <Link key={lable} href={link} onClick={() => setIsMenuOpen(false)} className="hover:text-[#086841] transition-colors py-1">
                                    {lable}
                                </Link>
                            );
                        } else if (link.startsWith("#")) {
                            return (
                                <a key={lable} href={link} onClick={() => setIsMenuOpen(false)} className="hover:text-[#086841] transition-colors py-1">
                                    {lable}
                                </a>
                            );
                        } else {
                            return (
                                <button key={lable} className="cursor-pointer hover:text-[#086841] transition-colors py-1" onClick={() => { setIsMenuOpen(false); window.location.href = link; }}>
                                    {lable}
                                </button>
                            );
                        }
                    })}
                </div>

            </div>
        </header >
    );
}

export default Navbar;
