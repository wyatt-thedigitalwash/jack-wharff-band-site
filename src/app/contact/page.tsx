import type { Metadata } from "next";
import ContactPageContent from "@/components/ContactPageContent";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contact The Jack Wharff Band for booking, management, and press inquiries. Booking by UTA, management by Playdate Media.",
  openGraph: {
    title: "Contact | The Jack Wharff Band",
    description:
      "Contact The Jack Wharff Band for booking, management, and press inquiries. Booking by UTA, management by Playdate Media.",
    url: "https://thejackwharffband.com/contact",
    type: "website",
    siteName: "The Jack Wharff Band",
    images: [{ url: "/og-image.png", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact | The Jack Wharff Band",
    description:
      "Contact The Jack Wharff Band for booking, management, and press inquiries. Booking by UTA, management by Playdate Media.",
    images: ["/og-image.png"],
  },
  alternates: { canonical: "https://thejackwharffband.com/contact" },
};

export default function ContactPage() {
  const breadcrumb = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://thejackwharffband.com" },
      { "@type": "ListItem", position: 2, name: "Contact", item: "https://thejackwharffband.com/contact" },
    ],
  };

  return (
    <main>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />
      <ContactPageContent />
    </main>
  );
}
