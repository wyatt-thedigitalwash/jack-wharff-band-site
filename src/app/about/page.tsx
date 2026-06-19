import type { Metadata } from "next";
import AboutPageContent from "@/components/AboutPageContent";

export const metadata: Metadata = {
  title: "About",
  description:
    "Meet The Jack Wharff Band, a four-piece country, bluegrass, and rock band from Richmond, Virginia, signed to Big Machine Records.",
  openGraph: {
    title: "About | The Jack Wharff Band",
    description:
      "Meet The Jack Wharff Band, a four-piece country, bluegrass, and rock band from Richmond, Virginia, signed to Big Machine Records.",
    url: "https://thejackwharffband.com/about",
    type: "website",
    siteName: "The Jack Wharff Band",
    images: [{ url: "/og-image.png", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "About | The Jack Wharff Band",
    description:
      "Meet The Jack Wharff Band, a four-piece country, bluegrass, and rock band from Richmond, Virginia, signed to Big Machine Records.",
    images: ["/og-image.png"],
  },
  alternates: { canonical: "https://thejackwharffband.com/about" },
};

export default function AboutPage() {
  const breadcrumb = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://thejackwharffband.com" },
      { "@type": "ListItem", position: 2, name: "About", item: "https://thejackwharffband.com/about" },
    ],
  };

  return (
    <main>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />
      <AboutPageContent />
    </main>
  );
}
