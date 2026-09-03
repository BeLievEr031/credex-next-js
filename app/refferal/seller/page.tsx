import type { Metadata } from "next";
import RefferalForm from "@/components/RefferalForm";

export const metadata: Metadata = {
  title: "Seller Referral Program | Credex Partner Network",
  description: "Refer companies with unused AI/cloud credits to Credex and earn rewards. Secure and transparent partner dashboard.",
  alternates: {
    canonical: "https://credex.rocks/refferal/seller",
  },
  openGraph: {
    title: "Seller Referral Program | Credex Partner Network",
    description: "Refer companies with unused AI/cloud credits to Credex and earn rewards. Secure and transparent partner dashboard.",
    url: "https://credex.rocks/refferal/seller",
    type: "website",
    images: [
      {
        url: "https://credex.rocks/images/credex-social.jpg",
        width: 1200,
        height: 630,
        alt: "Seller Referral Program | Credex",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Seller Referral Program | Credex Partner Network",
    description: "Refer companies with unused AI/cloud credits to Credex and earn rewards. Secure and transparent partner dashboard.",
    images: ["https://credex.rocks/images/credex-social.jpg"],
  },
};

export default function RefferalSellerPage() {
    return <RefferalForm />;
}
