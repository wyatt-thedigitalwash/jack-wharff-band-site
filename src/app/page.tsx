import OpeningShutter from "@/components/OpeningShutter";
import ReleasesGrid from "@/components/ReleasesGrid";
import AboutSection from "@/components/AboutSection";
import TourSection from "@/components/TourSection";
import MusicVideosRow from "@/components/MusicVideosRow";

export default function Home() {
  return (
    <main>
      <OpeningShutter />
      <ReleasesGrid />
      <AboutSection />
      <TourSection />
      <MusicVideosRow />
    </main>
  );
}
