import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/sections/common/Footer";
import AboutUsClient from "@/components/AboutUsClient";

export const metadata: Metadata = {
  title: "About Us | Credex - Secure Cloud & AI Credit Exchange",
  description: "Learn about the Credex mission to eliminate digital waste in cloud and AI computing. We securely connect buyers and sellers of unused credits.",
  alternates: {
    canonical: "https://credex.rocks/about-us",
  },
  openGraph: {
    title: "About Us | Credex - Secure Cloud & AI Credit Exchange",
    description: "Learn about the Credex mission to eliminate digital waste in cloud and AI computing. We securely connect buyers and sellers of unused credits.",
    url: "https://credex.rocks/about-us",
    type: "website",
    images: [
      {
        url: "https://credex.rocks/images/credex-social.jpg",
        width: 1200,
        height: 630,
        alt: "About Credex",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "About Us | Credex - Secure Cloud & AI Credit Exchange",
    description: "Learn about the Credex mission to eliminate digital waste in cloud and AI computing. We securely connect buyers and sellers of unused credits.",
    images: ["https://credex.rocks/images/credex-social.jpg"],
  },
};

export default function AboutUsPage() {
  return (
    <main className="min-h-screen pt-[120px] md:pt-[80px] font-pp-mori-regular overflow-x-hidden">
      <Navbar />
      <AboutUsClient />
      <Footer key="about-footer" />
    </main>
  );
}
