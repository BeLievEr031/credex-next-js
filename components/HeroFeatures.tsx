
interface IProp {
    labels: string[]
}
function HeroFeatures({ labels }: IProp) {
    return (
        <div className="relative w-[100vw] mt-8 md:mt-0">


            <div className="pt-1 items-center animate-scroll justify-center w-full gap-x-4 hidden md:flex">
                {
                    [...labels, ...labels, ...labels, ...labels, ...labels, ...labels, ...labels, ...labels, ...labels, ...labels, ...labels, ...labels, ...labels, ...labels, ...labels, ...labels, ...labels, ...labels, ...labels, ...labels, ...labels, ...labels].map((item, index) => {
                        return <div key={index} className="shrink-0 flex">
                            <span><svg width="38" height="49" viewBox="0 0 38 49" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <g filter="url(#filter0_ddi_278_1473)">
                                    <path d="M5.37109 14.0001C5.37109 6.62591 11.3491 0.647949 18.7232 0.647949C26.0974 0.647949 32.0754 6.62591 32.0754 14.0001C32.0754 21.3743 26.0974 27.3522 18.7232 27.3522C11.3491 27.3522 5.37109 21.3743 5.37109 14.0001Z" fill="#086841" />
                                    <path d="M18.7236 1.31592C25.7289 1.31613 31.4082 6.99514 31.4082 14.0005C31.408 21.0057 25.7288 26.6848 18.7236 26.6851C11.7183 26.6851 6.03928 21.0058 6.03906 14.0005C6.03906 6.99501 11.7182 1.31592 18.7236 1.31592Z" stroke="white" strokeOpacity="0.2" strokeWidth="1.33521" />
                                    <path d="M14.7168 14L17.3872 16.6704L22.7281 11.3296" stroke="white" strokeWidth="1.33521" strokeLinecap="round" strokeLinejoin="round" />
                                </g>
                                <defs>
                                    <filter id="filter0_ddi_278_1473" x="0.0302362" y="0.647949" width="37.3868" height="48.0675" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                                        <feFlood floodOpacity="0" result="BackgroundImageFix" />
                                        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                                        <feMorphology radius="5.34086" operator="erode" in="SourceAlpha" result="effect1_dropShadow_278_1473" />
                                        <feOffset dy="16.0226" />
                                        <feGaussianBlur stdDeviation="5.34086" />
                                        <feComposite in2="hardAlpha" operator="out" />
                                        <feColorMatrix type="matrix" values="0 0 0 0 0.298039 0 0 0 0 0.752941 0 0 0 0 0.156863 0 0 0 0.15 0" />
                                        <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_278_1473" />
                                        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                                        <feMorphology radius="5.34086" operator="erode" in="SourceAlpha" result="effect2_dropShadow_278_1473" />
                                        <feOffset dy="8.01129" />
                                        <feGaussianBlur stdDeviation="2.67043" />
                                        <feComposite in2="hardAlpha" operator="out" />
                                        <feColorMatrix type="matrix" values="0 0 0 0 0.298039 0 0 0 0 0.752941 0 0 0 0 0.156863 0 0 0 0.15 0" />
                                        <feBlend mode="normal" in2="effect1_dropShadow_278_1473" result="effect2_dropShadow_278_1473" />
                                        <feBlend mode="normal" in="SourceGraphic" in2="effect2_dropShadow_278_1473" result="shape" />
                                        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                                        <feOffset />
                                        <feGaussianBlur stdDeviation="6.67607" />
                                        <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
                                        <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.4 0" />
                                        <feBlend mode="normal" in2="shape" result="effect3_innerShadow_278_1473" />
                                    </filter>
                                </defs>
                            </svg>
                            </span>
                            <p className="pt-[3px]">
                                {item}
                            </p>
                        </div>
                    })
                }


            </div>
            <div className="pt-1 flex items-center animate-scroll-mob md:hidden justify-center w-full gap-x-4 ">
                {
                    [...labels, ...labels, ...labels, ...labels, ...labels, ...labels, ...labels, ...labels, ...labels, ...labels, ...labels, ...labels, ...labels, ...labels, ...labels, ...labels, ...labels, ...labels, ...labels, ...labels, ...labels, ...labels].map((item, index) => {
                        return <div key={index} className="shrink-0 flex">
                            <span><svg width="38" height="49" viewBox="0 0 38 49" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <g filter="url(#filter0_ddi_278_1473)">
                                    <path d="M5.37109 14.0001C5.37109 6.62591 11.3491 0.647949 18.7232 0.647949C26.0974 0.647949 32.0754 6.62591 32.0754 14.0001C32.0754 21.3743 26.0974 27.3522 18.7232 27.3522C11.3491 27.3522 5.37109 21.3743 5.37109 14.0001Z" fill="#086841" />
                                    <path d="M18.7236 1.31592C25.7289 1.31613 31.4082 6.99514 31.4082 14.0005C31.408 21.0057 25.7288 26.6848 18.7236 26.6851C11.7183 26.6851 6.03928 21.0058 6.03906 14.0005C6.03906 6.99501 11.7182 1.31592 18.7236 1.31592Z" stroke="white" strokeOpacity="0.2" strokeWidth="1.33521" />
                                    <path d="M14.7168 14L17.3872 16.6704L22.7281 11.3296" stroke="white" strokeWidth="1.33521" strokeLinecap="round" strokeLinejoin="round" />
                                </g>
                                <defs>
                                    <filter id="filter0_ddi_278_1473" x="0.0302362" y="0.647949" width="37.3868" height="48.0675" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                                        <feFlood floodOpacity="0" result="BackgroundImageFix" />
                                        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                                        <feMorphology radius="5.34086" operator="erode" in="SourceAlpha" result="effect1_dropShadow_278_1473" />
                                        <feOffset dy="16.0226" />
                                        <feGaussianBlur stdDeviation="5.34086" />
                                        <feComposite in2="hardAlpha" operator="out" />
                                        <feColorMatrix type="matrix" values="0 0 0 0 0.298039 0 0 0 0 0.752941 0 0 0 0 0.156863 0 0 0 0.15 0" />
                                        <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_278_1473" />
                                        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                                        <feMorphology radius="5.34086" operator="erode" in="SourceAlpha" result="effect2_dropShadow_278_1473" />
                                        <feOffset dy="8.01129" />
                                        <feGaussianBlur stdDeviation="2.67043" />
                                        <feComposite in2="hardAlpha" operator="out" />
                                        <feColorMatrix type="matrix" values="0 0 0 0 0.298039 0 0 0 0 0.752941 0 0 0 0 0.156863 0 0 0 0.15 0" />
                                        <feBlend mode="normal" in2="effect1_dropShadow_278_1473" result="effect2_dropShadow_278_1473" />
                                        <feBlend mode="normal" in="SourceGraphic" in2="effect2_dropShadow_278_1473" result="shape" />
                                        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                                        <feOffset />
                                        <feGaussianBlur stdDeviation="6.67607" />
                                        <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
                                        <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.4 0" />
                                        <feBlend mode="normal" in2="shape" result="effect3_innerShadow_278_1473" />
                                    </filter>
                                </defs>
                            </svg>
                            </span>
                            <p className="pt-[3px]">
                                {item}
                            </p>
                        </div>
                    })
                }


            </div>

            <div className="absolute -right-16  bottom-5 md:right-0 md:top-0 z-10">
                <BlurredGradientRight />
            </div>

            <div className="absolute bottom-5 -left-16 md:left-0 md:top-0 z-10">
                <BlurredLeftGradient />
            </div>

        </div>
    )
}


const BlurredLeftGradient = () => {
    return (
        <svg
            width="98"
            height="42"
            viewBox="0 0 98 42"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <foreignObject
                x="-47.1775"
                y="-3.03384"
                width="148.209"
                height="48.0677"
            >
                <div
                    style={{
                        backdropFilter: "blur(2px)",
                        WebkitBackdropFilter: "blur(2px)",
                        clipPath: "url(#bgblur_0_121_15734_clip_path)",
                        height: "100%",
                        width: "100%",
                    }}
                ></div>
            </foreignObject>

            <rect
                data-figma-bg-blur-radius="4.00564"
                x="-43.1719"
                y="0.971802"
                width="140.198"
                height="40.0564"
                fill="url(#paint0_linear_121_15734)"
            />

            <defs>
                <clipPath
                    id="bgblur_0_121_15734_clip_path"
                    transform="translate(47.1775 3.03384)"
                >
                    <rect x="-43.1719" y="0.971802" width="140.198" height="40.0564" />
                </clipPath>

                <linearGradient
                    id="paint0_linear_121_15734"
                    x1="97.0256"
                    y1="21"
                    x2="-43.1719"
                    y2="21"
                    gradientUnits="userSpaceOnUse"
                >
                    <stop stopColor="white" stopOpacity="0" />
                    <stop offset="1" stopColor="white" />
                </linearGradient>
            </defs>
        </svg>
    );
};


const BlurredGradientRight = () => {
    return (
        <svg
            width="103"
            height="42"
            viewBox="0 0 103 42"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <foreignObject
                x="-3.87478"
                y="-3.03384"
                width="148.209"
                height="48.0677"
            >
                <div
                    style={{
                        backdropFilter: "blur(2px)",
                        WebkitBackdropFilter: "blur(2px)",
                        clipPath: "url(#bgblur_0_121_15735_clip_path)",
                        height: "100%",
                        width: "100%",
                    }}
                ></div>
            </foreignObject>

            <rect
                data-figma-bg-blur-radius="4.00564"
                width="140.198"
                height="40.0564"
                transform="matrix(-1 0 0 1 140.328 0.971802)"
                fill="url(#paint0_linear_121_15735)"
            />

            <defs>
                <clipPath
                    id="bgblur_0_121_15735_clip_path"
                    transform="translate(3.87478 3.03384)"
                >
                    <rect
                        width="140.198"
                        height="40.0564"
                        transform="matrix(-1 0 0 1 140.328 0.971802)"
                    />
                </clipPath>

                <linearGradient
                    id="paint0_linear_121_15735"
                    x1="140.198"
                    y1="20.0282"
                    x2="0"
                    y2="20.0282"
                    gradientUnits="userSpaceOnUse"
                >
                    <stop stopColor="white" stopOpacity="0" />
                    <stop offset="1" stopColor="white" />
                </linearGradient>
            </defs>
        </svg>
    );
};


export default HeroFeatures