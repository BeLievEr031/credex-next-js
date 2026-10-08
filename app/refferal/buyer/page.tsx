import type { Metadata } from "next";
import RefferalForm from "@/components/RefferalForm";

export const metadata: Metadata = {
  title: "Buyer Referral Program | Credex Partner Network",
  description: "Refer buyers to Credex and earn rewards or discounts on unused AI and cloud credits. Secure and transparent partner dashboard.",
  alternates: {
    canonical: "https://credex.rocks/refferal/buyer",
  },
  openGraph: {
    title: "Buyer Referral Program | Credex Partner Network",
    description: "Refer buyers to Credex and earn rewards or discounts on unused AI and cloud credits. Secure and transparent partner dashboard.",
    url: "https://credex.rocks/refferal/buyer",
    type: "website",
    images: [
      {
        url: "https://credex.rocks/images/credex-social.jpg",
        width: 1200,
        height: 630,
        alt: "Buyer Referral Program | Credex",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Buyer Referral Program | Credex Partner Network",
    description: "Refer buyers to Credex and earn rewards or discounts on unused AI and cloud credits. Secure and transparent partner dashboard.",
    images: ["https://credex.rocks/images/credex-social.jpg"],
  },
};

export default function RefferalBuyerPage() {
    return <RefferalForm />;
}
