import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";

export const metadata: Metadata = {
  title: "Credex Buy & Sell Unused AI and Cloud Credits (OpenAI, AWS, GCP & More)",
  description: "Credex is the trusted marketplace for reselling unused AI and cloud credits from OpenAI, Claude, Gemini, Anthropic, AWS, GCP, and more securely and at minimal cost.",
  keywords: "OpenAI credits, AWS credits, GCP credits, sell AI credits, buy cloud credits, Claude credits, Anthropic credits, Gemini credits, resell unused credits, cloud marketplace, AI tools discount",
  authors: [{ name: "Credex" }],
  robots: "index, follow",
  alternates: {
    canonical: "https://credex.rocks/",
  },
  openGraph: {
    title: "Credex Resell Unused AI & Cloud Credits Easily",
    description: "Turn unused OpenAI, Claude, AWS, GCP, and other credits into cash. Credex connects buyers and sellers for AI and cloud credits securely and affordably.",
    url: "https://credex.rocks/",
    type: "website",
    images: [
      {
        url: "https://credex.rocks/images/credex-social.jpg",
        width: 1200,
        height: 630,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Credex Resell Unused AI & Cloud Credits Easily",
    description: "Buy or sell OpenAI, Claude, AWS, GCP, Gemini, and Anthropic credits securely through Credex the trusted credit exchange platform.",
    creator: "@credex",
    images: ["https://credex.rocks/images/credex-social.jpg"],
  },
  icons: {
    icon: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="h-full antialiased">
      <head>
        <link
          rel="preload"
          href="/fonts/PPMori-SemiBold.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />
        {/* Google Tag Manager */}
        <Script id="gtm-script" strategy="afterInteractive">
          {`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
          new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
          j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
          'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
          })(window,document,'script','dataLayer','GTM-WDXZJG9N');`}
        </Script>
      </head>
      <body className="min-h-full flex flex-col">
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-WDXZJG9N"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>
        {children}
      </body>
    </html>
  );
}
