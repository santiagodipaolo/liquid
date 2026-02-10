import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
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
    default: "Liquid | Institutional Crypto Market Making",
    template: "%s | Liquid",
  },
  description:
    "Institutional-grade market making for digital assets. 24/7 algorithmic liquidity across centralized and decentralized exchanges.",
  keywords: [
    "crypto market maker",
    "crypto market making",
    "liquidity provider",
    "token liquidity",
    "OTC crypto trading",
    "institutional market making",
    "crypto liquidity",
    "digital asset market making",
  ],
  openGraph: {
    title: "Liquid | Institutional Crypto Market Making",
    description:
      "Institutional-grade market making for digital assets. 24/7 algorithmic liquidity across centralized and decentralized exchanges.",
    url: "https://liquid.xyz",
    siteName: "Liquid",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Liquid | Institutional Crypto Market Making",
    description:
      "Institutional-grade market making for digital assets. 24/7 algorithmic liquidity.",
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
    "Institutional-grade crypto market making firm providing 24/7 algorithmic liquidity across centralized and decentralized exchanges.",
  sameAs: [],
};

const serviceJsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  provider: {
    "@type": "Organization",
    name: "Liquid",
  },
  serviceType: "Crypto Market Making",
  description:
    "Professional market making services including algorithmic liquidity provision, token launch support, and OTC trading for digital assets.",
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
      </body>
    </html>
  );
}
