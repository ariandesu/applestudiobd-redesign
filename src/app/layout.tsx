import type { Metadata } from "next";
import { Playfair_Display, Italiana, Inter } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const italiana = Italiana({
  variable: "--font-italiana",
  subsets: ["latin"],
  weight: ["400"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Apple Studio BD — Transparent Apple Price List & Verified Pre-Owned Macs",
  description: "Bangladesh's most transparent Apple price list. 56+ verified pre-owned MacBooks, iMacs, Mac Minis, iPads, and accessories with 10-Day Replacement Guarantee and 2-Year Service Warranty.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${playfair.variable} ${italiana.variable} ${inter.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col bg-cream text-charcoal">{children}</body>
    </html>
  );
}