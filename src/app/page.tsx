import OpeningShutter from "@/components/OpeningShutter";
import ReleasesGrid from "@/components/ReleasesGrid";
import AboutSection from "@/components/AboutSection";
import TourSection from "@/components/TourSection";
import MusicVideosRow from "@/components/MusicVideosRow";

export default function Home() {
  return (
    <main>
      <h1 className="sr-only">The Jack Wharff Band - Country, Bluegrass, and Rock from Richmond, Virginia</h1>
      <OpeningShutter />
      <ReleasesGrid />
      <AboutSection />
      <TourSection />
      <MusicVideosRow />
    </main>
  );
}
