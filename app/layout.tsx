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
    default: "Liquid | DeFi Liquidity Infrastructure",
    template: "%s | Liquid",
  },
  description:
    "DeFi-native liquidity infrastructure. Liquidity strategy design, dynamic band management, multi-chain deployment, and cross-chain arbitrage for protocols and tokens.",
  keywords: [
    "defi liquidity",
    "crypto market making",
    "liquidity provider",
    "token liquidity",
    "multi-chain liquidity",
    "cross-chain arbitrage",
    "dynamic liquidity bands",
    "L2 market making",
    "liquidity strategy",
    "protocol liquidity",
  ],
  openGraph: {
    title: "Liquid | DeFi Liquidity Infrastructure",
    description:
      "DeFi-native liquidity infrastructure. Strategy design, dynamic band management, multi-chain deployment, and cross-chain arbitrage.",
    url: "https://liquid.xyz",
    siteName: "Liquid",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Liquid | DeFi Liquidity Infrastructure",
    description:
      "DeFi-native liquidity infrastructure. Strategy design, dynamic bands, multi-chain deployment, and cross-chain arbitrage.",
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
    "DeFi-native liquidity infrastructure firm providing liquidity strategy design, dynamic band management, multi-chain deployment, and cross-chain arbitrage for protocols and tokens.",
  sameAs: [],
};

const serviceJsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  provider: {
    "@type": "Organization",
    name: "Liquid",
  },
  serviceType: "DeFi Liquidity Infrastructure",
  description:
    "End-to-end DeFi liquidity services including strategy design, dynamic band management, multi-chain deployment across L2 networks, and cross-chain arbitrage infrastructure.",
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
