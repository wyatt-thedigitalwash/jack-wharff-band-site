import type { Metadata } from "next";
import AboutPageContent from "@/components/AboutPageContent";

export const metadata: Metadata = {
  title: "About",
  description:
    "The story of The Jack Wharff Band, a four-piece country, bluegrass, and rock band from Richmond, Virginia.",
};

export default function AboutPage() {
  return (
    <main>
      <AboutPageContent />
    </main>
  );
}
