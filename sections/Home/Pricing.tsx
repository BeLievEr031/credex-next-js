import { Check } from "lucide-react";
import Image from "next/image";
import AWSImg from "../../assets/aws.png"
import AnthropicImg from "../../assets/anthropic.png"
import GCPImg from "../../assets/gcp.png"
import OpenAiImg from "../../assets/openai.png"
export default function Pricing() {

    const benefits = [
        "Ownership credentials",
        "Root access",
        "Custom password setup",
        "2FA configuration",
    ];

    return (
        <div className="bg-black text-white mt-26 py-20 px-6 md:px-20">
            {/* Header */}
            <div className="text-center mb-12">
                <p className="text-[#7F7F7F] uppercase tracking-widest mb-2">PRICING</p>
                <h2 className="text-4xl font-semibold mb-2">
                    Smarter Credits at Better Prices
                </h2>
                <p className="text-[#7F7F7F]">
                    Flexible plans and solutions for businesses of all sizes
                </p>
            </div>

            <div className="flex justify-center">
                <table align="center">
                    <tbody>
                        <tr>
                            <td></td>
                            <td className="">
                                <Image src={AWSImg} alt="AWS" className="w-[65px] h-auto" />
                                <button className="bg-[#E2E2E2] rounded-full px-5 py-2 text-black text-sm mt-6">Get Started</button>
                            </td>
                            <td>
                                <Image src={GCPImg} alt="GCP" className="w-[150px] h-auto" />
                                <button className="bg-[#E2E2E2] rounded-full px-5 py-2 text-black text-sm mt-6">Get Started</button>
                            </td>
                            <td>
                                <Image src={OpenAiImg} alt="OpenAI" className="w-[100px] h-auto" />
                                <button className="bg-[#E2E2E2] rounded-full px-5 py-2 text-black text-sm mt-6">Get Started</button>
                            </td>
                            <td>
                                <Image src={AnthropicImg} alt="Anthropic" className="w-[150px] -mx-4 h-auto" />
                                <button className="bg-[#E2E2E2] rounded-full px-5 py-2 text-black text-sm mt-6">Get Started</button>
                            </td>
                        </tr>
                        <tr>
                            <td className="p-7"></td>
                        </tr>
                        <tr className="bg-[#121212]">
                            <td className="w-[250px] py-4 px-5">
                                Credit Packages:
                            </td>
                            <td className="w-[217px]">
                                $5,000 - $25,000
                            </td>
                            <td className="w-[217px]">
                                $5,000 - $30,000
                            </td>
                            <td className="w-[217px]">
                                $5,000 - $10,000
                            </td>
                            <td className="w-[217px]">
                                $25,000
                            </td>
                        </tr>
                        <tr className="">
                            <td className="w-[250px] py-4 px-5">
                                Validity / Rate Limits:
                            </td>
                            <td className="w-[217px]">
                                1 year Tier-5
                            </td>
                            <td className="w-[217px]">
                                1 year Tier-4
                            </td>
                            <td className="w-[217px]">
                                2 years
                            </td>
                            <td className="w-[217px]">
                                2 years
                            </td>
                        </tr>
                        <tr className="bg-[#121212]">
                            <td className="w-[250px] py-6 px-5">
                                Indicative Credex Price (USD):
                            </td>
                            <td className="w-[217px] space-y-1">
                                <p>
                                    $2,750 – $3,000
                                </p>
                                <p>
                                    $13,750 – $15,000
                                </p>
                            </td>
                            <td className="w-[217px] space-y-1">
                                <p>
                                    $2,750 – $3,000
                                </p>
                                <p>
                                    $16,500 – $18,000
                                </p>
                            </td>
                            <td className="w-[217px] space-y-1">
                                <p>$2,750 – $3,000</p>
                                <p>$5,500 – $6,000</p>
                            </td>
                            <td className="w-[217px]">
                                $13,750 – $15,000
                            </td>
                        </tr>
                        <tr>
                            <td className="font-semibold py-4">What You Receive:</td>
                        </tr>
                        <tr>
                            {benefits.map((b) => (
                                <td key={b} className="">
                                    <p className="flex gap-x-1 items-center text-[#7F7F7F]">

                                        <Check size={12} className="text-white mt-1" />
                                        {b}
                                    </p>
                                </td>
                            ))}
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
}
