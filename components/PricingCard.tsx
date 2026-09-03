import Image from "next/image";

type PricingCardProps = {
    logo: any;
    product: string;
    validity: string;
    credits: string;
    rateLimits: string;
};

export default function PricingCard({
    logo,
    product,
    validity,
    credits,
    rateLimits,
}: PricingCardProps) {

    return (
        <div className="flex items-center justify-center shrink-0 cursor-pointer h-full" onClick={() => { window.location.href = '#contact' }}>
            <div className="w-[90%] md:w-full shrink-0 rounded-2xl border border-gray-200 bg-white p-8 shadow-[0_8px_30px_rgb(0,0,0,0.06)] hover:shadow-[0_8px_30px_rgb(0,0,0,0.12)] transition-shadow duration-300">

                {/* Logo - centered on mobile, left on desktop */}
                <div className="mb-8 flex justify-center md:justify-start">
                    <Image src={logo} alt={product} width={100} height={40} className="h-10 md:h-8 object-contain w-auto" />
                </div>

                <div className="space-y-5">
                    {/* Each row: col on mobile, row on desktop */}
                    <div className="flex flex-col md:flex-row items-center md:justify-between gap-1 md:gap-4">
                        <span className="text-gray-500 shrink-0">Product</span>
                        <span className="text-gray-900 font-medium md:text-right">{product}</span>
                    </div>
                    <div className="flex flex-col md:flex-row items-center md:justify-between gap-1 md:gap-4">
                        <span className="text-gray-500 shrink-0">Validity</span>
                        <span className="text-gray-900 font-medium md:text-right">{validity}</span>
                    </div>
                    <div className="flex flex-col md:flex-row items-center md:justify-between gap-1 md:gap-4">
                        <span className="text-gray-500 shrink-0">Credits</span>
                        <span className="text-gray-900 font-medium md:text-right">{credits.toUpperCase()}</span>
                    </div>
                    <div className="flex flex-col md:flex-row items-center md:justify-between gap-1 md:gap-4">
                        <span className="text-gray-500 shrink-0">Rate Limits / Support</span>
                        <span className="text-gray-900 font-medium md:text-right">{rateLimits}</span>
                    </div>
                </div>

            </div>
        </div>
    );
}