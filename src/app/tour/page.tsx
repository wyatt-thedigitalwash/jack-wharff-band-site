import type { Metadata } from "next";
import TourPageContent from "@/components/TourPageContent";

export const metadata: Metadata = {
  title: "Tour",
  description:
    "See all upcoming tour dates and buy tickets for The Jack Wharff Band. Country, bluegrass, and rock live from Richmond, Virginia.",
  openGraph: {
    title: "Tour | The Jack Wharff Band",
    description:
      "See all upcoming tour dates and buy tickets for The Jack Wharff Band. Country, bluegrass, and rock live from Richmond, Virginia.",
    url: "https://thejackwharffband.com/tour",
    type: "website",
    siteName: "The Jack Wharff Band",
    images: [{ url: "/og-image.png", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Tour | The Jack Wharff Band",
    description:
      "See all upcoming tour dates and buy tickets for The Jack Wharff Band. Country, bluegrass, and rock live from Richmond, Virginia.",
    images: ["/og-image.png"],
  },
  alternates: { canonical: "https://thejackwharffband.com/tour" },
};

export default function TourPage() {
  const breadcrumb = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://thejackwharffband.com" },
      { "@type": "ListItem", position: 2, name: "Tour", item: "https://thejackwharffband.com/tour" },
    ],
  };

  return (
    <main>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />
      <TourPageContent />
    </main>
  );
}
