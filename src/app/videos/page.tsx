import type { Metadata } from "next";
import VideosPageContent from "@/components/VideosPageContent";

export const metadata: Metadata = {
  title: "Videos",
  description:
    "Watch music videos and live performances from The Jack Wharff Band.",
};

export default function VideosPage() {
  return (
    <main>
      <VideosPageContent />
    </main>
  );
}
