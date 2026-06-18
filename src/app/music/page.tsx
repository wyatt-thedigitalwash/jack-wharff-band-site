import type { Metadata } from "next";
import MusicPageContent from "@/components/MusicPageContent";

export const metadata: Metadata = {
  title: "Music",
  description:
    "Listen to music from The Jack Wharff Band. Stream Low Life, the Strange EP, Saved, and more.",
};

export default function MusicPage() {
  return (
    <main>
      <MusicPageContent />
    </main>
  );
}
