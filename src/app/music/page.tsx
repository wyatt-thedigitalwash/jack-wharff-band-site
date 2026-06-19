import type { Metadata } from "next";
import MusicPageContent from "@/components/MusicPageContent";

export const metadata: Metadata = {
  title: "Music",
  description:
    "Stream music from The Jack Wharff Band. Listen to Low Life, Strange EP, Saved, and the full catalog on Spotify, Apple Music, and more.",
  openGraph: {
    title: "Music | The Jack Wharff Band",
    description:
      "Stream music from The Jack Wharff Band. Listen to Low Life, Strange EP, Saved, and the full catalog on Spotify, Apple Music, and more.",
    url: "https://thejackwharffband.com/music",
    type: "website",
    siteName: "The Jack Wharff Band",
    images: [{ url: "/og-image.png", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Music | The Jack Wharff Band",
    description:
      "Stream music from The Jack Wharff Band. Listen to Low Life, Strange EP, Saved, and the full catalog on Spotify, Apple Music, and more.",
    images: ["/og-image.png"],
  },
  alternates: { canonical: "https://thejackwharffband.com/music" },
};

export default function MusicPage() {
  const breadcrumb = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://thejackwharffband.com" },
      { "@type": "ListItem", position: 2, name: "Music", item: "https://thejackwharffband.com/music" },
    ],
  };

  return (
    <main>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />
      <MusicPageContent />
    </main>
  );
}
