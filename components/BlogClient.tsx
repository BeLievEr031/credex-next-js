"use client";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/sections/common/Footer";
import { newsletterApi } from "@/api/api";
import { Loader2 } from "lucide-react";

interface BlogItem {
    _id?: string;
    slug: string;
    title: string;
    bannerImgUrl: string;
    createdAt?: string;
    date?: string;
    isHardcoded?: boolean;
}

const formatDate = (dateString: string) => {
    try {
        const date = new Date(dateString);
        const day = date.getDate();

        let suffix = "th";
        if (day === 1 || day === 21 || day === 31) suffix = "st";
        else if (day === 2 || day === 22) suffix = "nd";
        else if (day === 3 || day === 23) suffix = "rd";

        const month = date.toLocaleDateString("en-US", { month: "long" });
        const year = date.getFullYear();

        return `${day}${suffix} ${month}, ${year}`;
    } catch {
        return dateString;
    }
};

export default function BlogClient({ initialBlogs }: { initialBlogs: BlogItem[] }) {
    const router = useRouter();
    const [email, setEmail] = useState("");
    const [loading, setLoading] = useState(false);
    const [status, setStatus] = useState<{ type: "success" | "error"; message: string } | null>(null);

    const blogs = initialBlogs;
    const loadingBlogs = false;

    // Merge dynamic blogs and hardcoded blogs, avoiding duplicate slugs
    const allBlogs: BlogItem[] = [...blogs];
    // const dynamicSlugs = new Set(blogs.map(b => b.slug));

    // HARDCODED_BLOGS.forEach(hb => {
    //     if (!dynamicSlugs.has(hb.slug)) {
    //         allBlogs.push(hb);
    //     }
    // });

    const handleSubscribe = async () => {
        if (!email) {
            setStatus({ type: "error", message: "Please enter your email." });
            return;
        }
        if (!/\S+@\S+\.\S+/.test(email)) {
            setStatus({ type: "error", message: "Please enter a valid email." });
            return;
        }

        setLoading(true);
        setStatus(null);
        try {
            await newsletterApi.subscribe({ email });
            setStatus({ type: "success", message: "Successfully subscribed!" });
            setEmail("");
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
        } catch (error: any) {
            setStatus({ type: "error", message: error.response?.data?.message || "Failed to subscribe. Please try again." });
        } finally {
            setLoading(false);
        }
    };

    const heroBlog = allBlogs[0];
    const remainingBlogs = allBlogs;

    return (
        <main className="pt-40 md:pt-48 font-pp-mori-regular">
            <Navbar />
            <section className="px-3 md:px-24">
                <div className="grid md:grid-cols-2 gap-8">
                    <div className="flex flex-col justify-between">
                        <div>
                            <p className="uppercase font-pp-mori-regular tracking-wider text-[#747373] font-normal md:text-left text-center">Insights & Ideas</p>
                            <h1 className="font-pp-mori-semibold text-[36px] leading-tight mt-4 font-semibold">
                                <span className="block">Latest blog posts</span>
                                <span className="block">from our team</span>
                            </h1>
                        </div>
                        <div className="mt-8 md:mt-0">
                            <p className="text-[#747373]">Get updates, news straight to your inbox.</p>
                            <div className="flex flex-col md:flex-row gap-2 pt-3 w-12/13">
                                <input
                                    type="email"
                                    className="bg-[#121212] px-4 py-2 rounded-full outline-none text-[#E2E2E2] flex-grow"
                                    placeholder="team@credex.rocks"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    disabled={loading}
                                />
                                <button
                                    onClick={handleSubscribe}
                                    disabled={loading}
                                    className="bg-[#E2E2E2] px-6 py-2 rounded-full font-semibold flex items-center justify-center gap-2 hover:bg-white transition-colors disabled:opacity-50"
                                >
                                    {loading ? <Loader2 className="animate-spin" size={18} /> : "Subscribe"}
                                </button>
                            </div>
                            {status && (
                                <p className={`text-xs mt-2 ${status.type === "success" ? "text-green-500" : "text-red-500"}`}>
                                    {status.message}
                                </p>
                            )}
                        </div>
                    </div>

                    {heroBlog && (
                        <div
                            className="hidden md:block py-12 md:py-3 bg-[#1212120A] md:px-4 rounded-xl space-y-2 cursor-pointer"
                            onClick={() => router.push(`/blog/${heroBlog.slug}`)}
                        >
                            <h2 className="text-2xl font-semibold font-pp-mori-semibold w-[75%] line-clamp-2">
                                {heroBlog.title}
                            </h2>
                            <div className="text-sm text-[#19363FB2]">
                                <p>Credex - {heroBlog.isHardcoded ? heroBlog.date : formatDate(heroBlog.createdAt!)}</p>
                            </div>
                            <div className="w-full md:w-[520px] h-[230px] md:h-[281px] bg-[#1C1C1C] rounded-xl mt-6 overflow-hidden relative">
                                <Image
                                    src={heroBlog.bannerImgUrl}
                                    alt={heroBlog.title}
                                    fill
                                    unoptimized
                                    className="object-cover object-top"
                                />
                            </div>
                        </div>
                    )}
                </div>

                {loadingBlogs ? (
                    <div className="flex justify-center items-center py-24">
                        <Loader2 className="animate-spin text-[#0FF395]" size={36} />
                    </div>
                ) : (
                    <div className="grid md:grid-cols-3 3xl:grid-cols-4 pt-8 md:pt-24 gap-x-5 gap-y-5">
                        {/* On mobile, we also render the hero blog in the grid list since it's hidden in the hero section */}
                        <div className="block md:hidden col-span-1">
                            {heroBlog && <BlogCard blog={heroBlog} />}
                        </div>
                        {remainingBlogs.map(blog => (
                            <BlogCard blog={blog} key={blog.slug} />
                        ))}
                    </div>
                )}
            </section>
            <Footer key={"blog-client-footer"} />
        </main>
    );
}

const BlogCard = ({ blog }: { blog: BlogItem }) => {
    const router = useRouter();
    return (
        <div
            className="cursor-pointer w-full max-w-[378px]"
            onClick={() => router.push(`/blog/${blog.slug}`)}
        >
            <div className="bg-[#121212] w-full h-[200px] sm:h-[220px] md:h-[230px] rounded-[20px] overflow-hidden relative">
                <Image
                    src={blog.bannerImgUrl}
                    alt={blog.title}
                    fill
                    unoptimized
                    className="object-cover object-top"
                />
            </div>

            <h3 className="text-lg sm:text-xl md:text-2xl font-semibold pt-4 w-full font-pp-mori-semibold leading-snug line-clamp-2">
                {blog.title}
            </h3>

            <div className="flex items-center gap-2 text-sm text-[#19363FB2] pt-2">
                <p>Credex • {blog.isHardcoded ? blog.date : formatDate(blog.createdAt!)}</p>
            </div>
        </div>
    );
};
