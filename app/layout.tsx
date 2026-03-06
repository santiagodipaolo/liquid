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
    default: "Liquid | Liquidity Infrastructure — CEX & DEX",
    template: "%s | Liquid",
  },
  description:
    "Algorithmic market making and DEX liquidity management. Deep order books, tight spreads, concentrated liquidity positions, and cross-chain arbitrage for protocols and exchanges.",
  keywords: [
    "crypto market making",
    "algorithmic trading",
    "order book market making",
    "defi liquidity",
    "concentrated liquidity",
    "liquidity provider",
    "token liquidity",
    "multi-chain liquidity",
    "cross-chain arbitrage",
    "CEX market making",
    "DEX liquidity management",
    "liquidity strategy",
  ],
  openGraph: {
    title: "Liquid | Liquidity Infrastructure — CEX & DEX",
    description:
      "Algorithmic market making and DEX liquidity management. Deep order books, tight spreads, every chain.",
    url: "https://liquid.xyz",
    siteName: "Liquid",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Liquid | Liquidity Infrastructure — CEX & DEX",
    description:
      "Algorithmic market making and DEX liquidity management. Deep order books, tight spreads, every chain.",
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
    "Liquidity infrastructure firm providing algorithmic market making on centralized exchanges and active liquidity management across DeFi — deep order books, tight spreads, every chain.",
  sameAs: [],
};

const serviceJsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  provider: {
    "@type": "Organization",
    name: "Liquid",
  },
  serviceType: "Liquidity Infrastructure",
  description:
    "Full-spectrum liquidity services including CEX algorithmic market making, DEX concentrated liquidity management, multi-chain deployment, and cross-chain arbitrage infrastructure.",
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
