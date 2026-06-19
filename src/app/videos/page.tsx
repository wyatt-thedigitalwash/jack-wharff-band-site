import type { Metadata } from "next";
import VideosPageContent from "@/components/VideosPageContent";

export const metadata: Metadata = {
  title: "Videos",
  description:
    "Watch music videos and live performances from The Jack Wharff Band. Country, bluegrass, and rock from Richmond, Virginia.",
  openGraph: {
    title: "Videos | The Jack Wharff Band",
    description:
      "Watch music videos and live performances from The Jack Wharff Band. Country, bluegrass, and rock from Richmond, Virginia.",
    url: "https://thejackwharffband.com/videos",
    type: "website",
    siteName: "The Jack Wharff Band",
    images: [{ url: "/og-image.png", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Videos | The Jack Wharff Band",
    description:
      "Watch music videos and live performances from The Jack Wharff Band. Country, bluegrass, and rock from Richmond, Virginia.",
    images: ["/og-image.png"],
  },
  alternates: { canonical: "https://thejackwharffband.com/videos" },
};

export default function VideosPage() {
  const breadcrumb = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://thejackwharffband.com" },
      { "@type": "ListItem", position: 2, name: "Videos", item: "https://thejackwharffband.com/videos" },
    ],
  };

  return (
    <main>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />
      <VideosPageContent />
    </main>
  );
}
