import type { Metadata, Viewport } from "next";
import { Cormorant_Garamond } from "next/font/google";
import localFont from "next/font/local";
import Script from "next/script";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AnchorScroll from "@/components/shared/AnchorScroll";
import CookieConsent from "@/components/consent/CookieConsent";
import TermsGate from "@/components/consent/TermsGate";
import Splash from "@/components/Splash";

// Keep in sync with SPLASH_KEY in src/components/Splash.tsx. Read before paint
// so a visitor who already entered this session never sees the splash flash.
const SPLASH_KEY = "jw_splash_smalltownheart";
const splashScript = `try{var e=document.documentElement;if(sessionStorage.getItem('${SPLASH_KEY}')){e.classList.add('splash-entered')}else if(location.pathname.indexOf('/legal')===0){e.classList.add('splash-exempt')}}catch(err){}`;

const momsTypewriter = localFont({
  src: "../../public/fonts/MomsTypewriter.ttf",
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

// Splash-only face. Extracted from the supplied Athelas.ttc collection and
// converted to woff2 -- next/font/local does not accept .ttc, and this single
// face is 128K against the collection's 3.1MB.
// Regular only, by request. Anything asking for bold or italic on the splash
// is therefore synthesised by the browser rather than loaded, so prefer real
// weight/style changes here over `font-semibold` or `italic` utilities.
// The variable is deliberately named differently from the Tailwind theme key
// (--font-athelas) so the theme entry can point at it without self-reference.
const athelas = localFont({
  src: "../../public/fonts/Athelas-Regular.woff2",
  weight: "400",
  style: "normal",
  variable: "--athelas-font",
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
    // suppressHydrationWarning: the splash script below mutates the class list
    // before React hydrates, so server and client markup intentionally differ.
    <html
      lang="en"
      className={`${momsTypewriter.variable} ${cormorant.variable} ${athelas.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: splashScript }} />
        <link rel="preconnect" href="https://use.typekit.net" crossOrigin="anonymous" />
        <link rel="stylesheet" href="https://use.typekit.net/xek3xzy.css" />

        {/* Evidon (Crownpeak) consent management — account 7155. Scripts are
            rendered via next/script below; preconnect stays here. */}
        <link rel="preconnect" href="https://c.evidon.com" crossOrigin="anonymous" />
      </head>
      <body className="min-h-full flex flex-col">
        {/* Splash must be an early child of <body> so it exists on first
            paint. Shown once per browser session; never on /legal routes. */}
        <Splash />
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
        {/* Evidon (Crownpeak) consent management — account 7155. Loads before GTM so
            consent governs downstream tags. Order mirrors the label's WordPress setup;
            all config lives server-side. strategy=beforeInteractive dedupes by id. */}
        <Script id="evidon-settings" strategy="beforeInteractive" src="https://c.evidon.com/sitenotice/7155/thejackwharffband/settings.js" />
        <Script id="evidon-themes" strategy="beforeInteractive" src="https://c.evidon.com/sitenotice/7155/snthemes.js" />
        <Script id="evidon-location" strategy="beforeInteractive" src="https://c.evidon.com/geo/country.js" />
        <Script id="evidon-notice" strategy="beforeInteractive" src="https://c.evidon.com/sitenotice/evidon-sitenotice-tag.js" />

        {/* Google Tag Manager (GTM-M2J3BMQD) — master container; fires the label's
            analytics tags. Full official bootstrap so dataLayer initializes. */}
        <Script id="gtm-bootstrap" strategy="afterInteractive">
          {`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-M2J3BMQD');`}
        </Script>
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-M2J3BMQD"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
            title="Google Tag Manager"
          />
        </noscript>
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-2 focus:left-2 focus:z-[200] focus:bg-darkgreen focus:text-cream focus:px-4 focus:py-2 focus:text-sm focus:outline-none"
        >
          Skip to main content
        </a>
        <AnchorScroll />
        <Header />
        <div id="main-content" className="flex-1">{children}</div>
        <Footer />
        {/* Cookie consent banner. Shows once per new visitor, persisted in
            localStorage; injects nothing before consent is granted. */}
        <CookieConsent />
        {/* Arbitration / class-action notice, shown once right after the cookie
            decision so it is never buried only in the footer. */}
        <TermsGate />
      </body>
    </html>
  );
}
