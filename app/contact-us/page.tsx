import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/sections/common/Footer";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Contact Us | Credex - Buy & Sell Cloud & AI Credits",
  description: "Have questions about buying or reselling unused cloud or AI credits? Contact the Credex team. We typically respond within 24 hours.",
  alternates: {
    canonical: "https://credex.rocks/contact-us",
  },
  openGraph: {
    title: "Contact Us | Credex - Buy & Sell Cloud & AI Credits",
    description: "Have questions about buying or reselling unused cloud or AI credits? Contact the Credex team. We typically respond within 24 hours.",
    url: "https://credex.rocks/contact-us",
    type: "website",
    images: [
      {
        url: "https://credex.rocks/images/credex-social.jpg",
        width: 1200,
        height: 630,
        alt: "Contact Credex",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact Us | Credex - Buy & Sell Cloud & AI Credits",
    description: "Have questions about buying or reselling unused cloud or AI credits? Contact the Credex team. We typically respond within 24 hours.",
    images: ["https://credex.rocks/images/credex-social.jpg"],
  },
};

export default function ContactUsPage() {
  return (
    <main className="min-h-screen pt-[150px] md:pt-[120px] font-pp-mori-regular bg-[#fafafa]">
      <Navbar />

      <div className="max-w-3xl mx-auto px-4 md:px-0">
        <div className="text-center mb-10">
          <h1 className="text-[32px] md:text-[48px] font-pp-mori-semibold font-semibold mb-3">
            Contact Us
          </h1>
          <p className="text-[#00000080] text-[14px] md:text-[16px]">
            Have a question? Fill out the form below and our team will get back to you within 24 hours.
          </p>
        </div>

        <div className="bg-white rounded-3xl p-6 md:p-12 shadow-sm border border-neutral-100 mb-20">
          <ContactForm type="BUYER" />
        </div>
      </div>

      <Footer key="contact-footer" />
    </main>
  );
}
