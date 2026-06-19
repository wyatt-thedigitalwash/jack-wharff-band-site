import type { Metadata, Viewport } from "next";
import { Fraunces, Cormorant_Garamond, Lora } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const fraunces = Fraunces({
  subsets: ["latin"],
  axes: ["opsz", "SOFT", "WONK"],
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

const SITE_URL = "https://thejackwharffband.com";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "The Jack Wharff Band | Country, Bluegrass & Rock from Richmond, VA",
    template: "%s | The Jack Wharff Band",
  },
  description:
    "Official site of The Jack Wharff Band. Country, bluegrass, and rock from Richmond, Virginia. Tour dates, music, videos, and more.",
  robots: { index: true, follow: true },
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
  manifest: "/site.webmanifest",
  openGraph: {
    siteName: "The Jack Wharff Band",
    title: "The Jack Wharff Band | Country, Bluegrass & Rock from Richmond, VA",
    description:
      "Official site of The Jack Wharff Band. Country, bluegrass, and rock from Richmond, Virginia. Tour dates, music, videos, and more.",
    url: SITE_URL,
    images: [{ url: "/og-image.png", width: 1200, height: 630 }],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "The Jack Wharff Band | Country, Bluegrass & Rock from Richmond, VA",
    description:
      "Official site of The Jack Wharff Band. Country, bluegrass, and rock from Richmond, Virginia. Tour dates, music, videos, and more.",
    images: ["/og-image.png"],
  },
  alternates: {
    canonical: SITE_URL,
  },
};

export const viewport: Viewport = {
  themeColor: "#181912",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${fraunces.variable} ${cormorant.variable} ${lora.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "MusicGroup",
              name: "The Jack Wharff Band",
              description:
                "Country, bluegrass, and rock band from Richmond, Virginia, signed to Big Machine Records.",
              url: "https://thejackwharffband.com",
              email: "jackwharffbooking@gmail.com",
              genre: ["Country", "Bluegrass", "Rock"],
              foundingLocation: {
                "@type": "Place",
                name: "Richmond, Virginia",
              },
              sameAs: [
                "https://open.spotify.com/artist/7Hw6prEoT6M58ChR8A1Rlz",
                "https://music.apple.com/us/artist/jack-wharff/1627355124",
                "https://www.youtube.com/@JackWharff",
                "https://www.instagram.com/jackwharffband/",
                "https://www.tiktok.com/@jackwharffband",
                "https://www.facebook.com/TheJackWharffBand/",
              ],
              member: [
                { "@type": "Person", name: "Jack Wharff", roleName: "Vocals" },
                { "@type": "Person", name: "Garrett Howell", roleName: "Drums" },
                { "@type": "Person", name: "Ryan Atchison", roleName: "Bass" },
                { "@type": "Person", name: "Evan Novoa", roleName: "Guitar" },
              ],
            }),
          }}
        />
        {/* UMG Google Tag Manager — loads before widget so umgAAL.track is defined */}
        <Script
          src="https://www.googletagmanager.com/gtm.js?id=GTM-M2J3BMQD"
          strategy="afterInteractive"
        />
        <Script
          src="https://widget.bandsintown.com/main.min.js"
          strategy="lazyOnload"
        />
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-2 focus:left-2 focus:z-[200] focus:bg-darkgreen focus:text-cream focus:px-4 focus:py-2 focus:text-sm focus:outline-none"
        >
          Skip to main content
        </a>
        <Header />
        <div id="main-content" className="flex-1">{children}</div>
        <Footer />
      </body>
    </html>
  );
}
