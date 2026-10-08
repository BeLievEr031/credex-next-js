import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/sections/common/Footer";

export const metadata: Metadata = {
  title: "Cancellation & Refund Policy | Credex",
  description: "Review the refund, cancellation, and replacement guarantees for purchasing and transferring unused cloud or AI credits on Credex.",
  alternates: {
    canonical: "https://credex.rocks/cancellation-refunds",
  },
  openGraph: {
    title: "Cancellation & Refund Policy | Credex",
    description: "Review the refund, cancellation, and replacement guarantees for purchasing and transferring unused cloud or AI credits on Credex.",
    url: "https://credex.rocks/cancellation-refunds",
    type: "website",
    images: [
      {
        url: "https://credex.rocks/images/credex-social.jpg",
        width: 1200,
        height: 630,
        alt: "Cancellation & Refund Policy | Credex",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Cancellation & Refund Policy | Credex",
    description: "Review the refund, cancellation, and replacement guarantees for purchasing and transferring unused cloud or AI credits on Credex.",
    images: ["https://credex.rocks/images/credex-social.jpg"],
  },
};

export default function CancellationRefundPolicy() {
    return (
        <main className="min-h-screen pt-[150px] md:pt-[120px] font-pp-mori-regular">
            <Navbar />

            <div className="max-w-4xl mx-auto px-3 md:px-0">
                <header className="mb-8 flex items-start justify-between gap-4 flex-wrap">
                    <div className="text-center mx-auto">
                        <h1 className="text-3xl md:text-4xl font-semibold font-pp-mori-semibold leading-tight">
                            Cancellation & Refund Policy
                        </h1>
                    </div>
                </header>

                <div className="bg-white rounded-2xl pt-2 md:p-8" id="refund-policy-content">
                    <p className="font-bold text-lg mb-2">Cancellation & Refund Policy</p>
                    <p className="text-slate-700 mb-6">
                        Credex believes in helping its customers as much as possible and follows a transparent
                        and fair cancellation and refund policy.
                    </p>

                    <h2 className="text-xl font-semibold mb-2">1. Order Cancellation</h2>
                    <p className="mb-4">
                        Cancellation requests will be accepted within 7 days of placing the order,
                        provided the transfer or processing has not yet begun.
                    </p>
                    <p className="mb-4">
                        Once the ownership transfer of credits or accounts has been initiated (as per Section 4
                        of our Terms & Conditions), cancellation requests cannot be accommodated.
                    </p>
                    <p className="mb-4">
                        For digital products or services such as cloud credits, AI model credits, or SaaS platform
                        access, cancellations are not applicable once the transfer has been completed due to the
                        nature of digital ownership.
                    </p>

                    <h2 className="text-xl font-semibold mb-2">2. Refunds</h2>
                    <p className="mb-4">Refunds may be issued in the following cases:</p>
                    <ul className="list-disc list-inside mb-4 pl-6">
                        <li>If the purchased credits become inaccessible or invalid within the validity period.</li>
                        <li>If there is a technical failure during transfer that cannot be resolved.</li>
                        <li>
                            If the customer provides verifiable proof that the delivered credits do not match the
                            description or are defective in nature.
                        </li>
                    </ul>
                    <p className="mb-4">
                        Refund or replacement requests must be submitted to{" "}
                        <a href="mailto:help@credex.rocks" className="text-blue-600 underline">
                            help@credex.rocks
                        </a>{" "}
                        within 7 days of delivery.
                    </p>
                    <p className="mb-4">
                        Once approved, refunds will be processed within 12–15 working days and credited to the
                        original payment method.
                    </p>
                    <p className="mb-4">
                        No refunds will be issued for services already utilized, partially consumed credits, or in
                        cases of user negligence post-transfer.
                    </p>

                    <h2 className="text-xl font-semibold mb-2">3. Non-Refundable Items</h2>
                    <ul className="list-disc list-inside mb-4 pl-6">
                        <li>
                            Orders involving customized offers, discounted credits, or limited-time promotions are
                            non-refundable.
                        </li>
                        <li>
                            Refunds are not applicable to perishable or time-sensitive digital services that have
                            been activated or transferred.
                        </li>
                    </ul>

                    <h2 className="text-xl font-semibold mb-2">4. Disputes</h2>
                    <p className="mb-4">
                        In case of disputes related to refunds, the decision of Credex FZCO will be final, in
                        accordance with applicable DIFC and DIAC arbitration rules.
                    </p>
                </div>
            </div>

            <Footer key={"cancellation-footer"} />
        </main>
    );
}
