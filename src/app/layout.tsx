import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { GoogleTagManager } from "@next/third-parties/google";

import "./globals.css";

import { MainHeader } from "@/features/shared/ui/MainHeader";
import { BannerBox } from "@/features/shared/ui/boxes/BannerBox";
import { MainFooter } from "@/features/shared/ui/MainFooter";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "About Flavio Silva - Full-Stack Software Engineer",
  description:
    "I'm a Brazilian Full-Stack Software Engineer with 20 years of professional industry experience. Check out my website to learn more about my work.",
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL || "https://www.flsilva.com"
  ),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full">
      <GoogleTagManager gtmId={process.env.NEXT_PUBLIC_GTM_ID || ""} />
      <body
        className={`flex flex-col h-full ${geistSans.variable} ${geistMono.variable} font-geist-sans antialiased`}
      >
        <div className="flex flex-col flex-1 w-full bg-primary-bg">
          <div className="flex flex-row justify-center mb-28">
            <div className="flex flex-col box-border w-full px-4 md:px-8 lg:w-5xl">
              <MainHeader />
              <BannerBox className="mt-8" />
              <main>
                <article>{children}</article>
              </main>
            </div>
          </div>
        </div>
        <MainFooter />
      </body>
    </html>
  );
}
