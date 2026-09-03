import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Thank You | Credex",
  robots: {
    index: false,
    follow: false,
  },
};

export default function ThankYou() {
    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
            <Navbar />
            <div className="text-center max-w-md">
                <h1 className="text-4xl font-semibold font-pp-mori-semibold text-green-900 mb-3">
                    Thank You!
                </h1>

                <p className="text-gray-600 mb-2">
                    Your form has been submitted successfully.
                </p>

                <p className="text-gray-600 mb-6">
                    We’ll get back to you shortly.
                </p>

                <Link
                    href="/"
                    className="bg-green-900 text-white font-pp-mori-semibold font-semibold px-6 py-4 rounded-xl cursor-pointer inline-block"
                >
                    Go to Home Page
                </Link>
            </div>
        </div>
    );
}
