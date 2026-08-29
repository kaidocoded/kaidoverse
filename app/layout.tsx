import type { Metadata } from "next";
import { Instrument_Serif, Inter } from "next/font/google";
import { Header } from "@/components/header";
import { MobileNav } from "@/components/mobile-nav";
import { NavOverlay } from "@/components/nav-overlay";
import { SiteShell } from "@/components/site-shell";
import { site } from "@/content/site";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const instrument = Instrument_Serif({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-instrument",
  display: "swap",
});

export const metadata: Metadata = {
  title: site.title,
  description: site.description,
  metadataBase: new URL("https://kaidoverse.com"),
  openGraph: {
    title: site.title,
    description: site.description,
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${instrument.variable} h-full antialiased`}
    >
      <body className="min-h-full bg-ink font-sans text-primary">
        <SiteShell>
          <Header />
          <MobileNav />
          <NavOverlay />
          {children}
        </SiteShell>
      </body>
    </html>
  );
}
