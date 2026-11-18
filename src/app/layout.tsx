import type { Metadata, Viewport } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AnchorScroll from "@/components/shared/AnchorScroll";
import CookieConsent from "@/components/consent/CookieConsent";
import TermsGate from "@/components/consent/TermsGate";
import RouteTracker from "@/components/consent/RouteTracker";
import Splash from "@/components/Splash";

// Keep in sync with SPLASH_KEY in src/components/Splash.tsx. Read before paint
// so a visitor who already entered this session never sees the splash flash.
const SPLASH_KEY = "jw_splash_cominghome";
const splashScript = `try{var e=document.documentElement;if(sessionStorage.getItem('${SPLASH_KEY}')){e.classList.add('splash-entered')}else if(location.pathname.indexOf('/legal')===0){e.classList.add('splash-exempt')}}catch(err){}`;

// Brand face: Tamil Sangam MN, extracted from the supplied .ttc collection
// (next/font/local does not accept .ttc) and subset to Latin, since the site
// never needs the Tamil glyphs. Roughly 14K per weight.
// Regular carries body copy. Bold is registered as its own family and drives
// --font-display, so headlines get the real bold cut, never a synthesised one.
// The variables are deliberately named differently from the Tailwind theme
// keys (--font-sangam, --font-display) so the theme entries can point at them
// without self-reference.
const sangam = localFont({
  src: "../../public/fonts/TamilSangamMN-Regular.woff2",
  weight: "400",
  style: "normal",
  variable: "--sangam-font",
  display: "swap",
});

const sangamBold = localFont({
  src: "../../public/fonts/TamilSangamMN-Bold.woff2",
  weight: "700",
  style: "normal",
  variable: "--sangam-bold-font",
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
  themeColor: "var(--brand-yellow)",
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
      className={`${sangam.variable} ${sangamBold.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: splashScript }} />

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
                "https://www.youtube.com/@thejackwharffband",
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
        {/* The label GTM container (GTM-M2J3BMQD) is NOT loaded here, and the
            Evidon notice is gone. GTM is injected only after the visitor
            consents, and receives the same "evidonConsentGiven" event Evidon
            used to send -- see components/consent/injectScripts.ts. */}
        <RouteTracker />
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-2 focus:left-2 focus:z-[200] focus:bg-brand-black focus:text-brand-yellow focus:px-4 focus:py-2 focus:text-sm focus:outline-none"
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
