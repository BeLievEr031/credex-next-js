import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/sections/common/Footer";

export const metadata: Metadata = {
  title: "Terms and Conditions | Credex",
  description: "Read the Terms and Conditions governing your access and use of Credex marketplace services for unused cloud and AI credits.",
  alternates: {
    canonical: "https://credex.rocks/term-condition",
  },
  openGraph: {
    title: "Terms and Conditions | Credex",
    description: "Read the Terms and Conditions governing your access and use of Credex marketplace services for unused cloud and AI credits.",
    url: "https://credex.rocks/term-condition",
    type: "website",
    images: [
      {
        url: "https://credex.rocks/images/credex-social.jpg",
        width: 1200,
        height: 630,
        alt: "Terms and Conditions | Credex",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Terms and Conditions | Credex",
    description: "Read the Terms and Conditions governing your access and use of Credex marketplace services for unused cloud and AI credits.",
    images: ["https://credex.rocks/images/credex-social.jpg"],
  },
};

export default function TermsAndConditionsPage() {
    return (
        <main className="min-h-screen pt-[120px] font-pp-mori-regular">
            <Navbar />
            <div className="max-w-4xl mx-auto px-3 md:px-0">
                <header className="mb-8 flex items-start justify-between gap-4 flex-wrap">
                    <div className="mx-auto text-center">
                        <h1 className="text-3xl md:text-4xl font-extrabold leading-tight">Terms and Conditions</h1>
                    </div>
                </header>

                <div className="bg-white rounded-2xl" id="terms-content">
                    <p className="font-bold text-lg mb-2">Terms and Conditions</p>
                    <p className="text-slate-700 mb-6">
                        Welcome to Credex! These Terms and Conditions ("Agreement") govern your access to and use of our services,
                        including the purchase and transfer of unused cloud, AI Model credits and other SaaS platforms (e.g., OpenAI,
                        Claude, AWS, GCP) from verified sources. By using our website and services, you agree to be bound by these terms.
                    </p>

                    <h2 className="text-xl font-semibold mb-2">1. Acceptance of Terms</h2>
                    <p className="mb-4">
                        By accessing or using the Credex website and services, you ("User", "Customer", "Buyer", or "Seller") agree to comply with
                        these Terms and Conditions. If you do not agree with any part of these terms, do not use the services.
                    </p>

                    <h2 className="text-xl font-semibold mb-2">2. Services Provided</h2>
                    <p>Credex operates as a verified marketplace for unused cloud, AI Model credits and other SaaS
                        platforms. We facilitate the transfer of unused, verified credits from sellers to buyers at a discounted
                        rate. Our services include:</p>
                    <ul className="list-disc list-inside mb-4 pl-6">
                        <li>Buying unused credits from verified companies and startups.</li>
                        <li>Selling verified credits at discounted rates.</li>
                        <li>Transferring ownership or credentials for the purchased credits.</li>
                    </ul>

                    <h2 className="text-xl font-semibold mb-2">3. Eligibility</h2>
                    <p className="mb-4">You must be at least 18 years old and legally capable of entering into binding contracts to use our services.</p>

                    <h2 className="text-xl font-semibold mb-2">4. Account Ownership and Transfer</h2>
                    <ul className="list-disc list-inside mb-4 pl-6">
                        <li><strong>Ownership Transfer:</strong> The account associated with the credits will be transferred to the email address or admin account specified by you.</li>
                        <li><strong>Credential Transfer:</strong> Once ownership is transferred, you can change passwords and set up two-factor authentication (2FA) for additional security.</li>
                    </ul>
                    <p className="mb-4 pl-6">Credex ensures the legitimacy of the credits being transferred but is not liable for any misuses post-transfer.</p>

                    <h2 className="text-xl font-semibold mb-2">5. Data Access and Confidentiality</h2>
                    <ul className="list-disc list-inside mb-4 pl-6">
                        <li><strong>No Data Collection Post-Transfer:</strong> Credex does not retain any rights to or access to data within transferred accounts once ownership transfer is complete.</li>
                        <li><strong>Confidential Data:</strong> After ownership transfer, all data is solely under your control and responsibility.</li>
                        <li><strong>Confidentiality:</strong> Credex agrees to maintain confidentiality of proprietary information as outlined in the NDA.</li>
                    </ul>

                    <h2 className="text-xl font-semibold mb-2">6. Pricing and Payment</h2>
                    <ul className="list-disc list-inside mb-4 pl-6">
                        <li><strong>Prices:</strong> Prices vary depending on the type and quantity of credits. They may change without prior notice.</li>
                        <li><strong>Payment:</strong> Payments are made through available payment methods. Users must ensure payment details are correct and up to date.</li>
                    </ul>

                    <h2 className="text-xl font-semibold mb-2">7. Delivery and Timelines</h2>
                    <ul className="list-disc list-inside mb-4 pl-6">
                        <li><strong>Delivery:</strong> Ownership of credits will be transferred within one week after payment and paperwork completion.</li>
                        <li><strong>Refund and Replacement:</strong> If credits become inaccessible, Credex will replace or refund the unused portion with valid proof.</li>
                    </ul>

                    <h2 className="text-xl font-semibold mb-2">8. User Responsibilities</h2>
                    <p className="mb-4">
                        Once the ownership of the credits has been transferred, the user assumes full responsibility for the
                        credits, including:
                    </p>

                    <ul className="list-disc list-inside mb-4 pl-6">
                        <li>Ensuring the proper use of credits in accordance with the terms of the respective credit
                            providers (e.g., OpenAI, AWS)</li>
                        <li>Securing their accounts, including passwords and 2FA settings.</li>
                    </ul>

                    <h2 className="text-xl font-semibold mb-2">9. Limitation of Liability</h2>
                    <p className="mb-4">
                        Credex is not liable for:
                    </p>

                    <ul className="list-disc list-inside mb-4 pl-6">
                        <li>Any loss or damage caused by the use or inability to use the credits.</li>
                        <li>Any third-party claims or issues arising from the use of credits.</li>
                        <li>Any unauthorized access to accounts or breaches of security after the transfer</li>
                    </ul>
                    <p className="mb-4 pl-6">Credex's liability is limited to the amount paid for the credits.</p>

                    <h2 className="text-xl font-semibold mb-2">10. Indemnification</h2>
                    <p className="mb-4">
                        Users agree to indemnify and hold harmless Credex, its affiliates, directors, officers, and employees from any claims, damages, or liabilities arising from their use of services or violation of these Terms.
                    </p>

                    <h2 className="text-xl font-semibold mb-2">11. Governing Law and Dispute Resolution</h2>
                    <p className="mb-4">
                        This Agreement will be governed by the laws of <strong>
                            the Dubai International Financial Centre (DIFC).
                        </strong>
                        Any disputes will be resolved through binding arbitration under the rules of
                        <strong>
                            the Dubai International Arbitration Centre (DIAC) Rules 2022,
                        </strong>
                        with venue and seat in
                        <strong>
                            DIFC, Dubai, United Arab Emirates.
                        </strong>
                    </p>

                    <h2 className="text-xl font-semibold mb-2">12. Changes to Terms</h2>
                    <p className="mb-4">
                        Credex reserves the right to modify or amend these Terms at any time. Updates will be posted on this page, and it is your responsibility to review them periodically.
                    </p>

                    <h2 className="text-xl font-semibold mb-2">13. Termination</h2>
                    <p className="mb-4">
                        Credex reserves the right to suspend or terminate access to its services for any user who violates these Terms and Conditions.
                    </p>
                </div>
            </div>
            <Footer key="term-condition-footer" />
        </main>
    );
}
