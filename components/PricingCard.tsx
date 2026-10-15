import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

type PricingCardProps = {
    logo: any;
    product: string;
    validity: string;
    credits: string;
    rateLimits: string;
    slug?: string;
};

export default function PricingCard({
    logo,
    product,
    validity,
    credits,
    rateLimits,
    slug,
}: PricingCardProps) {
    const cardContent = (
        <div className="w-[90%] md:w-full shrink-0 rounded-2xl border border-gray-200 bg-white p-7 shadow-[0_8px_30px_rgb(0,0,0,0.06)] hover:shadow-[0_12px_36px_rgb(0,0,0,0.12)] hover:border-[#086841]/50 transition-all duration-300 flex flex-col justify-between h-full group">
            <div>
                {/* Logo - centered on mobile, left on desktop */}
                <div className="mb-7 flex justify-center md:justify-start">
                    <Image
                        src={logo}
                        alt={`${product} logo`}
                        width={100}
                        height={40}
                        className="h-10 md:h-8 object-contain w-auto group-hover:scale-105 transition-transform duration-200"
                    />
                </div>

                <div className="space-y-4">
                    {/* Each row: col on mobile, row on desktop */}
                    <div className="flex flex-col md:flex-row items-center md:justify-between gap-1 md:gap-4 text-sm">
                        <span className="text-gray-500 shrink-0">Product</span>
                        <span className="text-gray-900 font-medium md:text-right">{product}</span>
                    </div>
                    <div className="flex flex-col md:flex-row items-center md:justify-between gap-1 md:gap-4 text-sm">
                        <span className="text-gray-500 shrink-0">Validity</span>
                        <span className="text-gray-900 font-medium md:text-right">{validity}</span>
                    </div>
                    <div className="flex flex-col md:flex-row items-center md:justify-between gap-1 md:gap-4 text-sm">
                        <span className="text-gray-500 shrink-0">Credits</span>
                        <span className="text-gray-900 font-medium md:text-right">{credits.toUpperCase()}</span>
                    </div>
                    <div className="flex flex-col md:flex-row items-center md:justify-between gap-1 md:gap-4 text-sm">
                        <span className="text-gray-500 shrink-0">Rate Limits / Support</span>
                        <span className="text-gray-900 font-medium md:text-right">{rateLimits}</span>
                    </div>
                </div>
            </div>

            <div className="mt-6 pt-5 border-t border-gray-100 flex items-center justify-between text-xs font-semibold text-[#086841] group-hover:text-[#065032]">
                <span>View plan details</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform" />
            </div>
        </div>
    );

    if (slug) {
        return (
            <Link href={`/${slug}`} className="flex items-center justify-center shrink-0 cursor-pointer h-full">
                {cardContent}
            </Link>
        );
    }

    return (
        <div className="flex items-center justify-center shrink-0 cursor-pointer h-full" onClick={() => { window.location.href = '#contact' }}>
            {cardContent}
        </div>
    );
}