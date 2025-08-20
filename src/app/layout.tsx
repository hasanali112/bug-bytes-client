import type { Metadata } from "next";
import { Saira_Semi_Condensed } from "next/font/google";
import "./globals.css";
import Providers from "@/libs/Providers";

const sairaSemiCondensed = Saira_Semi_Condensed({
  weight: ["400", "700"],
  subsets: ["latin"],
  display: "swap", // Recommended for better performance
});

export const metadata: Metadata = {
  title:
    "TechGhor - Your Ultimate Tech Solution Hub | Gadget Reviews & How-To Guides",
  description:
    "Get instant tech answers! Smartphone troubleshooting, laptop buying guides, software tutorials, and the latest tech news in Bangladesh. TechGhor solves your tech problems in simple steps.",
  keywords: [
    "Bangladesh tech blog",
    "gadget reviews BD",
    "tech troubleshooting",
    "smartphone buying guide",
    "Bangladesh tech news",
    "computer tips",
    "budget gadgets Bangladesh",
  ],
  openGraph: {
    title: "TechGhor - Straight Answers to Your Tech Questions",
    description:
      "One-stop solution for all tech queries - device reviews, tutorials, and problem-solving guides for Bangladeshi users",
    type: "website",
    url: "https://techghor.com",
    images: [
      {
        url: "https://techghor.com/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "TechGhor - Your Tech Problem Solver",
      },
    ],
    locale: "en_BD",
  },
  twitter: {
    card: "summary_large_image",
    title: "TechGhor - Your Trusted Tech Guide for Bangladesh",
    description:
      "Tech made simple for Bangladeshi users - gadget reviews, buying guides and troubleshooting tips",
    images: ["https://techghor.com/twitter-card.jpg"],
    site: "@TechGhor",
  },
  alternates: {
    canonical: "https://techghor.com",
    languages: {
      en: "https://techghor.com/en",
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={sairaSemiCondensed.className}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
