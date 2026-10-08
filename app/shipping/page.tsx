import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/sections/common/Footer";

export const metadata: Metadata = {
  title: "Shipping & Delivery Policy | Credex",
  description: "Read about the delivery timelines, transfer verification procedures, and digital delivery confirmation policies at Credex.",
  alternates: {
    canonical: "https://credex.rocks/shipping",
  },
  openGraph: {
    title: "Shipping & Delivery Policy | Credex",
    description: "Read about the delivery timelines, transfer verification procedures, and digital delivery confirmation policies at Credex.",
    url: "https://credex.rocks/shipping",
    type: "website",
    images: [
      {
        url: "https://credex.rocks/images/credex-social.jpg",
        width: 1200,
        height: 630,
        alt: "Shipping & Delivery Policy | Credex",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Shipping & Delivery Policy | Credex",
    description: "Read about the delivery timelines, transfer verification procedures, and digital delivery confirmation policies at Credex.",
    images: ["https://credex.rocks/images/credex-social.jpg"],
  },
};

export default function ShippingDeliveryPolicy() {
    return (
        <main className="min-h-screen pt-[150px] md:pt-[120px] font-pp-mori-regular">
            <Navbar />

            <div className="max-w-4xl mx-auto px-3 md:px-0">
                <header className="mb-8 flex items-start justify-between gap-4 flex-wrap">
                    <div className="text-center mx-auto">
                        <h1 className="text-3xl md:text-4xl font-semibold font-pp-mori-semibold leading-tight">
                            Shipping & Delivery Policy
                        </h1>
                    </div>
                </header>

                <div className="bg-white rounded-2xl pt-2 md:p-8" id="shipping-delivery-content">
                    <p className="font-bold text-lg mb-2">Shipping & Delivery Policy</p>

                    <h2 className="text-xl font-semibold mb-2">1. Delivery Timelines</h2>
                    <p className="mb-4">
                        For digital products, transfers are completed via secure digital means.
                    </p>
                    <p className="mb-4">
                        Ownership or credentials of purchased credits will be transferred to the buyer’s registered
                        email or platform account within 0–7 days of confirmed payment, as per our Terms & Conditions
                        (Section 7).
                    </p>
                    <p className="mb-4">
                        Delivery timelines may vary depending on verification processes, platform policies (e.g., OpenAI,
                        AWS, GCP), and order volume.
                    </p>

                    <h2 className="text-xl font-semibold mb-2">2. Delivery Confirmation</h2>
                    <p className="mb-4">
                        Upon successful transfer, customers will receive a confirmation email and supporting
                        documentation or invoice from Credex.
                    </p>
                    <p className="mb-4">
                        For physical correspondence (if applicable), orders will be shipped through registered courier
                        or postal services, with tracking details shared upon dispatch.
                    </p>

                    <h2 className="text-xl font-semibold mb-2">3. Delays & Liability</h2>
                    <p className="mb-4">
                        Credex ensures timely handover of all digital assets to customers but is not responsible for
                        delays caused by third-party service providers or platform restrictions (used for payments,
                        bills, etc.).
                    </p>
                    <p className="mb-4">
                        Our liability is limited to the value of the purchased order.
                    </p>

                    <h2 className="text-xl font-semibold mb-2">4. Contact Information</h2>
                    <p className="mb-2">
                        For order status, delivery, or refund inquiries, please contact our customer support team:
                    </p>
                    <ul className="list-none pl-0 mb-4">
                        <li>📧 <a href="mailto:help@credex.rocks" className="text-blue-600 underline">help@credex.rocks</a></li>
                        <li>📞 <a href="tel:+918956042145" className="text-blue-600 underline">+91 8956042145</a></li>
                    </ul>
                </div>
            </div>

            <Footer key={"shipping-footer"} />
        </main>
    );
}
