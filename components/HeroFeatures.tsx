
interface IProp {
    labels: string[]
}

const CheckIcon = () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="shrink-0 drop-shadow-sm">
        <circle cx="12" cy="12" r="10" fill="#086841" />
        <path d="M8.5 12L10.8 14.3L15.5 9.7" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
);

function HeroFeatures({ labels }: IProp) {
    const items = [...labels, ...labels, ...labels, ...labels];

    return (
        <div className="relative w-[100vw] mt-8 md:mt-0 overflow-hidden">
            {/* Desktop Marquee */}
            <div className="pt-1 items-center animate-scroll justify-center w-full gap-x-6 hidden md:flex">
                {items.map((item, index) => (
                    <div key={index} className="shrink-0 flex items-center gap-x-2">
                        <CheckIcon />
                        <p className="text-[15px]">{item}</p>
                    </div>
                ))}
            </div>

            {/* Mobile Marquee */}
            <div className="pt-1 flex items-center animate-scroll-mob md:hidden justify-center w-full gap-x-4">
                {items.map((item, index) => (
                    <div key={index} className="shrink-0 flex items-center gap-x-2">
                        <CheckIcon />
                        <p className="text-[14px]">{item}</p>
                    </div>
                ))}
            </div>

            {/* Gradient Mask Overlays */}
            <div className="absolute top-0 right-0 w-24 h-full bg-gradient-to-l from-white to-transparent pointer-events-none z-10" />
            <div className="absolute top-0 left-0 w-24 h-full bg-gradient-to-r from-white to-transparent pointer-events-none z-10" />
        </div>
    );
}

export default HeroFeatures;