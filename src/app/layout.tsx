import type { Metadata } from "next";
import { Merriweather } from "next/font/google";
import "./globals.css";
import Providers from "@/libs/Providers";

const merriweather = Merriweather({
  variable: "--font-merriweather",
  weight: ["400", "700"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Bug Bytes",
  description: "This is a tech blog site",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${merriweather.variable} antialiased bg-gradient-to-t from-white/10 via-amber-200/5 to-fuchsia-500/5 min-h-screen`}
      >
        <Providers themeProps={{ attribute: "class", defaultTheme: "dark" }}>
          {children}
        </Providers>
      </body>
    </html>
  );
}
