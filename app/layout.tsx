import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import JsonLd from "./components/JsonLd";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Liquid | Managed Liquidity Operations — CEX & DEX",
    template: "%s | Liquid",
  },
  description:
    "Managed liquidity operations for token issuers and protocols. We set up and run open-source market making and DEX liquidity software on your own accounts. You keep custody and approve every parameter. Flat retainer.",
  keywords: [
    "market making software",
    "hummingbot operations",
    "open-source market making",
    "managed liquidity operations",
    "defi liquidity",
    "concentrated liquidity",
    "token liquidity",
    "multi-chain liquidity",
    "cross-chain arbitrage",
    "self-custody market making",
    "DEX liquidity management",
    "liquidity strategy",
  ],
  openGraph: {
    title: "Liquid | Managed Liquidity Operations — CEX & DEX",
    description:
      "Open-source liquidity software, run on your accounts. You keep custody. We operate it.",
    url: "https://liquid.xyz",
    siteName: "Liquid",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Liquid | Managed Liquidity Operations — CEX & DEX",
    description:
      "Open-source liquidity software, run on your accounts. You keep custody. We operate it.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
  metadataBase: new URL("https://liquid.xyz"),
};

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Liquid",
  url: "https://liquid.xyz",
  description:
    "Liquidity operations firm. Liquid sets up, operates and monitors open-source market making and DEX liquidity software on accounts owned by its clients. Liquid does not trade for its own account, take token loans or hold client funds.",
  sameAs: [],
};

const serviceJsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  provider: {
    "@type": "Organization",
    name: "Liquid",
  },
  serviceType: "Software operations and technical services",
  description:
    "Setup, operation, monitoring and reporting for open-source liquidity software (CEX order book quoting, DEX concentrated liquidity, multi-chain deployment) running on client-owned accounts under client-approved parameters, for a flat retainer.",
  areaServed: "Worldwide",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} font-sans antialiased`}
      >
        <JsonLd data={organizationJsonLd} />
        <JsonLd data={serviceJsonLd} />
        <Nav />
        <main>{children}</main>
        <Footer />
        <Analytics />
      </body>
    </html>
  );
}
