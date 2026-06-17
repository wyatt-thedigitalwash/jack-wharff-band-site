import type { Metadata } from "next";
// Placeholder for Bookends — swap to local @font-face when the real font file arrives
import { Rye, Cormorant_Garamond, Lora } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const rye = Rye({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
});

const cormorant = Cormorant_Garamond({
  weight: "400",
  style: "italic",
  subsets: ["latin"],
  variable: "--font-serif",
  display: "swap",
});

const lora = Lora({
  subsets: ["latin"],
  style: ["italic"],
  weight: ["400"],
  variable: "--font-serif-italic",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "The Jack Wharff Band",
    template: "%s | The Jack Wharff Band",
  },
  description:
    "Official site of The Jack Wharff Band, country, bluegrass, and rock from Richmond, Virginia.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${rye.variable} ${cormorant.variable} ${lora.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col">
        {/* UMG Google Tag Manager — loads before widget so umgAAL.track is defined */}
        <Script
          src="https://www.googletagmanager.com/gtm.js?id=GTM-M2J3BMQD"
          strategy="afterInteractive"
        />
        <Script
          src="https://widget.bandsintown.com/main.min.js"
          strategy="afterInteractive"
        />
        <Header />
        <div className="flex-1">{children}</div>
        <Footer />
      </body>
    </html>
  );
}
