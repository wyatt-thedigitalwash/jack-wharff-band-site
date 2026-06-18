import type { Metadata } from "next";
import TourPageContent from "@/components/TourPageContent";

export const metadata: Metadata = {
  title: "Tour",
  description:
    "See all upcoming tour dates for The Jack Wharff Band. Tickets and RSVP available.",
};

export default function TourPage() {
  return (
    <main>
      <TourPageContent />
    </main>
  );
}
