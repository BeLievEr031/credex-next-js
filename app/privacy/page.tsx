import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/sections/common/Footer";

export const metadata: Metadata = {
  title: "Privacy Policy | Credex",
  description: "Read the Credex Privacy Policy to understand how we collect, use, and protect your personal and company information.",
  alternates: {
    canonical: "https://credex.rocks/privacy",
  },
  openGraph: {
    title: "Privacy Policy | Credex",
    description: "Read the Credex Privacy Policy to understand how we collect, use, and protect your personal and company information.",
    url: "https://credex.rocks/privacy",
    type: "website",
    images: [
      {
        url: "https://credex.rocks/images/credex-social.jpg",
        width: 1200,
        height: 630,
        alt: "Privacy Policy | Credex",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Privacy Policy | Credex",
    description: "Read the Credex Privacy Policy to understand how we collect, use, and protect your personal and company information.",
    images: ["https://credex.rocks/images/credex-social.jpg"],
  },
};

export default function PrivacyPolicyPage() {
    return (
        <main className="min-h-screen pt-[150px] md:pt-[120px] font-pp-mori-regular">
            <Navbar />

            <div className="max-w-4xl mx-auto px-3 md:px-0">
                <header className="mb-8 flex items-start justify-between gap-4 flex-wrap">
                    <div className="text-center mx-auto">
                        <h1 className="text-3xl md:text-4xl font-semibold font-pp-mori-semibold leading-tight">Privacy Policy</h1>
                    </div>
                </header>

                <div className="bg-white rounded-2xl pt-2 md:p-8" id="privacy-content">
                    <p className="font-bold text-lg mb-2">Privacy Policy</p>
                    <p className="text-slate-700 mb-6">
                        At Credex, we are committed to protecting your privacy and ensuring that your personal information
                        is handled in a safe and responsible manner. This Privacy Policy explains how we collect, use, and
                        safeguard your personal data when you use our website and services.
                    </p>

                    <h2 className="text-xl font-semibold mb-2">1. Information We Collect</h2>
                    <p>We collect two types of information:</p>
                    <ul className="list-disc list-inside mb-4 pl-6">
                        <li>
                            <strong>Personal Information:</strong> When you sign up for our services or make a purchase, we collect
                            personal details such as name, email address, company name, billing information, and transaction details.
                        </li>
                        <li>
                            <strong>Non-Personal Information:</strong> We also collect information about how you interact with our website,
                            such as IP addresses, browser type, and browsing activity.
                        </li>
                    </ul>

                    <h2 className="text-xl font-semibold mb-2">2. How We Use Your Information</h2>
                    <p>We use your information for the following purposes:</p>
                    <ul className="list-disc list-inside mb-4 pl-6">
                        <li>To facilitate credit purchases, transfers, and account management.</li>
                        <li>To communicate with you regarding your transactions, account status, and any customer support inquiries.</li>
                        <li>To send you marketing communications (only if you have opted in).</li>
                    </ul>

                    <h2 className="text-xl font-semibold mb-2">3. Sharing Your Information</h2>
                    <p>We do not sell your personal information. We may share your data with:</p>
                    <ul className="list-disc list-inside mb-4 pl-6">
                        <li><strong>Service Providers:</strong> Third-party companies that assist in processing payments or providing customer support.</li>
                        <li><strong>Legal Obligations:</strong> We may disclose your information to comply with legal obligations or protect our rights.</li>
                    </ul>

                    <h2 className="text-xl font-semibold mb-2">4. Data Security</h2>
                    <p className="mb-4">
                        We employ industry-standard security measures, such as encryption and secure servers, to protect your personal
                        information. However, no method of transmission over the internet is 100% secure, and we cannot guarantee absolute
                        security.
                    </p>

                    <h2 className="text-xl font-semibold mb-2">5. Cookies</h2>
                    <p className="mb-4">
                        Our website uses cookies to enhance your user experience. Cookies are small data files stored on your device that
                        help us remember your preferences and track your usage patterns.
                    </p>

                    <h2 className="text-xl font-semibold mb-2">6. Your Rights</h2>
                    <p>You have the right to:</p>
                    <ul className="list-disc list-inside mb-4 pl-6">
                        <li>Access, correct, or delete your personal information.</li>
                        <li>Opt out of receiving marketing communications from us.</li>
                        <li>Request data portability, where applicable.</li>
                    </ul>
                    <p className="mb-4 pl-6">To exercise any of these rights, please contact us at <a href="mailto:legal@credex.rocks" className="text-blue-600 underline">legal@credex.rocks</a></p>

                    <h2 className="text-xl font-semibold mb-2">7. Data Retention</h2>
                    <p className="mb-4">
                        We will retain your personal data only for as long as necessary for the purposes outlined in this Privacy Policy, or as required by law.
                    </p>

                    <h2 className="text-xl font-semibold mb-2">8. Changes to This Policy</h2>
                    <p className="mb-4">
                        Credex reserves the right to update or modify this Privacy Policy at any time. We will notify you of any significant
                        changes by posting an updated version on our website.
                    </p>

                    <h2 className="text-xl font-semibold mb-2">9. Contact Information</h2>
                    <p>If you have any questions or concerns about this Privacy Policy or how your data is handled, please contact us at <a href="mailto:legal@credex.rocks" className="text-blue-600 underline">legal@credex.rocks</a></p>
                </div>
            </div>

            <Footer key={"privacy-footer"} />
        </main>
    );
}
