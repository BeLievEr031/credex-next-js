import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import ThankYouClient from "./ThankYouClient";
import Footer from "@/sections/common/Footer";


export const metadata: Metadata = {
    title: "Thank You | Credex",
    description: "Your inquiry has been received. The Credex team will be in touch shortly.",
    robots: {
        index: false,
        follow: false,
    },
};

export default function ThankYou() {
    return (
        <>
            <Navbar />
            <ThankYouClient />
            <Footer />
        </>
    );
}
