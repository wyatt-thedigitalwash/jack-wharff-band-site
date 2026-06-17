import OpeningShutter from "@/components/OpeningShutter";
import ReleasesGrid from "@/components/ReleasesGrid";
import ParallaxVideoInterlude from "@/components/ParallaxVideoInterlude";
import TourSection from "@/components/TourSection";
import AboutSection from "@/components/AboutSection";
import MusicVideo from "@/components/MusicVideo";
import MusicSection from "@/components/MusicSection";

export default function Home() {
  return (
    <main>
      <OpeningShutter />
      <ReleasesGrid />
      <ParallaxVideoInterlude />
      <AboutSection />
      <TourSection />
      <MusicVideo />
      <MusicSection />
    </main>
  );
}
