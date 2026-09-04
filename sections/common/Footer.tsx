"use client";
import FTLogo from "../../assets/ft-logo.png"
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Mail } from "lucide-react";

interface IProp {
    title?: string;
    actionBtn1Text?: string;
    actionBtn2Text?: string;
    actionBtnLink?: string;
}
function Footer({ actionBtn1Text = "Get credits", actionBtn2Text = "Talk to sales", title = "Ready to boost margins with lower AI & cloud spends?",
    actionBtnLink = "https://wa.me/918956042145?text=Hi,%20I%27m%20a%20Buyer"
}: IProp) {

    const pathname = usePathname();
    console.log(pathname)
    return (
        <footer className="mt-[50px] md:mt-24 overflow-x-hidden">
            <div className="px-2 md:px-0">

                {(!pathname || !pathname.includes("blog") || (pathname.includes("blog") && pathname.split("blog")[1].length <= 0)) && <div className="w-full md:max-w-3xl h-[273px] bg-[#062524] mx-auto flex flex-col items-center justify-center relative">
                    <p className="text-[27px] md:text-4xl text-center leading-tight font-pp-mori-semibold font-semibold text-white px-5">
                        {
                            title.split("-").map((item, index) => {
                                return <span className="block" key={index}>{item}</span>
                            })
                        }
                    </p>
                    <div className="pt-4 flex gap-x-2.5">
                        <button onClick={() => {
                            window.location.href = (pathname === "/" || pathname === "/seller") ? "#contact" : "/#contact"
                        }} className="py-[12px] px-[15px] md:py-[16px] text-[15px] md:px-[20px] bg-[#0FF395] rounded-md block font-semibold font-pp-mori-semibold md:text-xl cursor-pointer relative z-10">{actionBtn1Text}</button>
                        <a href={actionBtnLink} target="_blank" className="py-[12px] px-[15px] md:py-[16px] text-[15px] md:px-[20px] bg-[#0FF39533] rounded-md text-white block font-semibold font-pp-mori-semibold md:text-xl">{actionBtn2Text}</a>
                    </div>

                    <div className="absolute -bottom-5 left-1/2 -translate-x-1/2 -z-10">
                        <svg width="669" height="164" viewBox="0 0 669 164" fill="none" xmlns="http://www.w3.org/2000/svg" className="hidden md:block">
                            <path d="M0 0H669V164L334.5 155L0 164V0Z" fill="#F15A42" />
                        </svg>

                        <svg width="314" height="124" viewBox="0 0 314 124" fill="none" xmlns="http://www.w3.org/2000/svg" className="block md:hidden">
                            <path d="M0.875 0.875H313.875V123.875L157.375 117.125L0.875 123.875V0.875Z" fill="#F15A42" />
                        </svg>


                    </div>
                </div>}
            </div>

            <div className="mt-32 md:mt-14 relative h-[305px] md:flex md:justify-end md:px-28">
                <div className="w-full mx-auto md:flex md:justify-between items-end px-4 md:px-0">
                    <div className="pt-16 md:pt-0">
                        <p><svg width="176" height="45" viewBox="0 0 176 45" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M29.1273 13.9447C31.5201 15.5758 32.3367 18.4527 32.1936 21.2658C32.0483 24.1199 30.928 27.2817 28.9699 30.1543C27.0117 33.027 24.4777 35.226 21.8741 36.4045C19.3079 37.5658 16.3315 37.8572 13.9388 36.2262C11.5461 34.5952 10.7294 31.7182 10.8725 28.9051C11.0178 26.0509 12.1385 22.8885 14.0967 20.0158C16.055 17.1432 18.5885 14.9449 21.192 13.7665C23.7582 12.605 26.7345 12.3137 29.1273 13.9447Z" stroke="#086841" strokeWidth="4" />
                            <path d="M27.0331 8.86983C33.5605 13.3194 33.8542 22.9905 28.9713 30.154C24.0882 37.3176 14.9783 40.5796 8.45079 36.13C1.92339 31.6804 1.63001 22.0085 6.51312 14.845C11.3963 7.68178 20.5057 4.42046 27.0331 8.86983Z" stroke="#086841" strokeWidth="4" />
                            <path d="M56.6638 34.6448C49.2274 34.6448 44.8859 29.3146 44.8859 22.437C44.8859 14.9576 49.9152 10.5301 56.5349 10.5301C62.7677 10.5301 66.9803 14.3558 67.4101 20.0298H62.4238C61.951 16.8919 59.7158 14.8716 56.4919 14.8716C52.6232 14.8716 50.0441 17.7946 50.0441 22.437C50.0441 27.4233 52.8812 30.3033 56.6638 30.3033C59.7588 30.3033 61.908 28.326 62.4238 25.0591H67.4101C66.8083 30.9481 62.7247 34.6448 56.6638 34.6448ZM74.7129 34H69.6406V11.2179H73.7242L74.326 15.6884C75.7875 12.5934 78.4526 10.96 82.2353 10.96H83.095V15.9033H82.2353C77.5069 15.9033 74.7129 18.4394 74.7129 22.7379V34ZM94.614 34.6448C87.6504 34.6448 82.879 29.6585 82.879 22.6949C82.879 15.1725 87.8223 10.5301 94.1841 10.5301C100.632 10.5301 104.93 15.0436 105.059 22.437V23.6406H87.9513C88.2951 27.6382 90.7883 30.3463 94.6569 30.3463C97.279 30.3463 99.2563 29.0567 100.03 26.7785H104.973C103.813 31.6788 99.9871 34.6448 94.614 34.6448ZM88.1662 20.0728H99.8151C99.1704 16.806 97.1501 14.8287 94.1841 14.8287C91.1751 14.8287 88.9399 16.806 88.1662 20.0728ZM116.669 34.6448C110.522 34.6448 106.094 29.6585 106.094 22.48C106.094 15.4304 110.436 10.5301 116.497 10.5301C119.721 10.5301 122.386 11.8627 123.976 14.0119V1.76119H129.048V34H124.965L124.492 29.9594C123.202 32.8394 120.365 34.6448 116.669 34.6448ZM117.614 30.3463C121.354 30.3463 123.976 27.0794 123.976 22.437C123.976 17.9236 121.397 14.7857 117.7 14.7857C113.918 14.7857 111.296 17.9666 111.296 22.523C111.296 27.1224 113.875 30.3463 117.614 30.3463ZM143.101 34.6448C136.138 34.6448 131.367 29.6585 131.367 22.6949C131.367 15.1725 136.31 10.5301 142.672 10.5301C149.119 10.5301 153.418 15.0436 153.547 22.437V23.6406H136.439C136.783 27.6382 139.276 30.3463 143.144 30.3463C145.767 30.3463 147.744 29.0567 148.518 26.7785H153.461C152.3 31.6788 148.475 34.6448 143.101 34.6448ZM136.654 20.0728H148.303C147.658 16.806 145.638 14.8287 142.672 14.8287C139.663 14.8287 137.427 16.806 136.654 20.0728ZM158.311 34H152.594L160.804 22.609L152.723 11.2179H158.397L163.684 18.8263L168.928 11.2179H174.602L166.521 22.609L174.731 34H169.014L163.684 26.1337L158.311 34Z" fill="#086841" />
                        </svg>
                        </p>
                        <div className="text-[#5B677C] pt-4 pb-2 flex gap-x-10 flex-wrap">

                            <div>

                                <p className="text-black font-semibold font-pp-mori-semibold">UAE</p>
                                <p>
                                    DSO-IFZA, IFZA Properties,
                                </p>
                                <p>
                                    Dubai Silicon Oasis,
                                </p>
                                <p>
                                    Dubai
                                </p>
                            </div>


                            <div className="mt-2 md:mt-0">

                                <p className="text-black font-semibold font-pp-mori-semibold">India </p>

                                <p>
                                    We Work, DLF Forum,
                                </p>
                                <p>
                                    Cyber City Phase-III,
                                </p>
                                <p>
                                    Gurgaon - 122002
                                </p>
                            </div>
                        </div>

                        <a href="mailto:team@credex.rocks" className="pt-2 underline cursor-pointer z-[10] relative flex text-xl items-center gap-x-1">
                            <Mail className="" size={20} /> team@credex.rocks
                        </a>


                    </div>
                    {/* <div className="mt-10 md:mt-0 w-[85%] md:w-[25%] text-justify text-[#5B677C]">
                        Credex is independent and not affiliated with the vendors listed; names/logos are used for identification only.
                    </div> */}
                </div>
                <div className="absolute -top-14 left-1/2 -translate-x-1/2 md:w-fit w-full">
                    <svg className="hidden md:block" width="1425" height="362" viewBox="0 0 1425 362" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g opacity="0.15">
                            <path d="M128.529 96.5C162.75 96.5 191.462 107.004 212.213 125.331C232.966 143.66 245.725 169.785 248.087 200.962L248.128 201.5H192.569L192.506 201.074C189.933 183.999 182.57 169.993 171.493 160.258C160.418 150.523 145.598 145.029 128.059 145.029C107.017 145.029 89.5127 152.975 77.2617 167.209C65.0046 181.451 57.9708 202.031 57.9707 227.353C57.9707 254.553 65.7079 275.956 78.5518 290.552C91.3916 305.143 109.369 312.971 129.941 312.971C146.771 312.971 161 307.597 171.722 297.808C182.446 288.015 189.697 273.773 192.506 255.98L192.572 255.559H248.142L248.086 256.109C244.781 288.45 231.909 314.807 211.51 333.078C191.11 351.349 163.221 361.5 129.941 361.5C89.1089 361.5 56.7354 346.862 34.5732 322.75C12.4161 298.643 0.5 265.103 0.5 227.353C0.500089 186.295 14.3066 153.572 37.2383 131.113C60.1677 108.657 92.1818 96.5 128.529 96.5ZM922.886 0.5V354.441H877.235L877.184 353.999L872.213 311.529C857.677 342.313 826.805 361.5 786.856 361.5C719.225 361.5 670.592 306.623 670.592 227.823C670.592 150.436 718.285 96.5 784.975 96.5C819.808 96.5001 848.745 110.657 866.356 133.624V0.5H922.886ZM419.802 101.206V156.323H409.89C384.093 156.323 363.638 163.241 349.638 175.958C335.644 188.669 328.037 207.231 328.037 230.647V354.441H271.508V104.029H317.15L317.209 104.463L323.574 151.751C331.564 135.468 342.676 122.956 356.809 114.454C371.371 105.693 389.111 101.206 409.89 101.206H419.802ZM1243.95 104.029L1244.09 104.244L1301.56 186.944L1358.57 104.246L1358.71 104.029H1422.06L1421.5 104.818L1333.24 229.232L1422.91 353.648L1423.48 354.441H1359.65L1359.5 354.222L1301.56 268.711L1243.16 354.224L1243.01 354.441H1179.18L1179.75 353.648L1269.42 229.232L1181.16 104.818L1180.6 104.029H1243.95ZM798.15 144.088C777.596 144.088 760.208 152.726 747.948 167.554C735.683 182.389 728.533 203.446 728.533 228.294C728.533 253.38 735.566 274.675 747.657 289.687C759.742 304.69 776.895 313.441 797.209 313.441C837.778 313.441 866.356 278.007 866.356 227.353C866.356 202.739 859.324 181.917 847.294 167.259C835.269 152.607 818.232 144.088 798.15 144.088ZM1071.53 144.559C1039.05 144.559 1014.84 165.758 1006.28 200.971H1132.56C1129.01 183.443 1121.8 169.402 1111.54 159.717C1101.17 149.928 1087.65 144.559 1071.53 144.559ZM540.702 144.559C508.223 144.559 484.018 165.758 475.457 200.971H601.736C598.179 183.443 590.973 169.402 580.712 159.717C570.34 149.928 556.819 144.559 540.702 144.559ZM660.261 241.029H473.015C474.97 262.58 482.671 280.62 495.06 293.298C507.546 306.077 524.826 313.441 545.879 313.441C574.402 313.441 595.836 299.431 604.229 274.722L604.344 274.383H659.452L659.307 274.998C652.93 301.922 639.224 323.556 619.712 338.456C600.201 353.355 574.913 361.5 545.408 361.5C507.167 361.5 474.916 347.806 452.227 324.525C429.538 301.246 416.438 268.41 416.438 230.177C416.438 188.888 430.006 155.464 452.343 132.358C474.679 109.253 505.754 96.5 540.702 96.5C576.119 96.5 605.67 108.9 626.54 131.484C647.406 154.064 659.553 186.78 660.261 227.344V241.029ZM1191.09 241.029H1003.84C1005.8 262.58 1013.5 280.62 1025.89 293.298C1038.37 306.076 1055.65 313.441 1076.71 313.441C1105.23 313.441 1126.66 299.431 1135.06 274.722L1135.17 274.383H1190.28L1190.13 274.998C1183.76 301.922 1170.05 323.556 1150.54 338.456C1131.03 353.355 1105.74 361.5 1076.24 361.5C1037.99 361.5 1005.74 347.806 983.054 324.525C960.365 301.246 947.265 268.41 947.265 230.177C947.265 188.888 960.833 155.464 983.17 132.358C1005.51 109.254 1036.58 96.5 1071.53 96.5C1106.95 96.5 1136.5 108.9 1157.37 131.484C1178.23 154.064 1190.38 186.78 1191.09 227.344V241.029Z" fill="url(#paint0_linear_278_2654)" fillOpacity="0.4" stroke="url(#paint1_linear_278_2654)" />
                        </g>
                        <defs>
                            <linearGradient id="paint0_linear_278_2654" x1="708.184" y1="-22.6544" x2="708.184" y2="471.388" gradientUnits="userSpaceOnUse">
                                <stop stopColor="#333333" />
                                <stop offset="1" stopColor="#333333" stopOpacity="0" />
                            </linearGradient>
                            <linearGradient id="paint1_linear_278_2654" x1="711.754" y1="1" x2="711.754" y2="361" gradientUnits="userSpaceOnUse">
                                <stop />
                                <stop offset="1" stopColor="#666666" stopOpacity="0" />
                            </linearGradient>
                        </defs>
                    </svg>



                    <Image src={FTLogo} alt="FT Logo" className="w-full h-[120px] md:hidden opacity-50 mt-5" />

                </div>
            </div>
            <div className="py-5 px-4 md:px-0">
                <div className="h-px w-full md:w-[99%] mx-auto bg-[#242424] mt-12 md:mt-0"></div>
                <div className="flex md:px-28 gap-x-5 text-[#5B677C] py-4 flex-wrap items-center justify-between ">
                    <div className="flex flex-wrap items-center gap-x-5">

                        <p>© 2026 Dreadnought Technology Private Limited</p>
                        <div className="flex items-center gap-x-1 shrink-0">
                            <span className="text-3xl">
                                •
                            </span>
                            <Link href={"/about-us"}>
                                About Us
                            </Link>
                        </div>
                        <div className="flex items-center gap-x-1 shrink-0">
                            <span className="text-3xl">
                                •
                            </span>
                            <Link href={'/term-condition'}>
                                Terms & Condition
                            </Link>
                        </div>
                        <div className="flex items-center gap-x-1">
                            <span className="text-3xl">
                                •
                            </span>
                            <Link href={"/privacy"} className="md:mt-0">
                                Privacy
                            </Link>
                        </div>
                        <div className="flex items-center gap-x-1">
                            <span className="text-3xl">
                                •
                            </span>
                            <Link href={"/shipping"} className="md:mt-0">
                                Shipping Policy
                            </Link>
                        </div>
                        <div className="flex items-center gap-x-1">
                            <span className="text-3xl">
                                •
                            </span>
                            <Link href={"/cancellation-refunds"} className="md:mt-0">
                                Refund Policy
                            </Link>
                        </div>
                    </div>

                    <a href="https://www.linkedin.com/company/credexmarketplace/" target="_blank" rel="noopener noreferrer" aria-label="Credex on LinkedIn" className="pt-2 relative z-[10] block">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide cursor-pointer lucide-linkedin-icon lucide-linkedin" aria-hidden="true" focusable="false"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" /><rect width="4" height="12" x="2" y="9" /><circle cx="4" cy="4" r="2" /></svg>
                    </a>
                </div>
            </div>
        </footer >
    )
}

export default Footer