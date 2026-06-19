import { fetchEvents } from "@/lib/bandsintown";
import EventList from "./EventList";
import TourSectionParallax from "./TourSectionParallax";

const TRACK_URL =
  "https://www.bandsintown.com/a/15538346?app_id=umg_bigmachinelabelgroup_thejackwharffband&came_from=267&trigger=track&affil_code=umg_us";

export default async function TourSection() {
  const events = await fetchEvents();

  return (
    <TourSectionParallax>
      <div
        className="relative z-[2] mx-auto text-center"
        style={{
          maxWidth: 1400,
          paddingTop: "10vh",
          paddingBottom: "10vh",
          paddingLeft: "5vw",
          paddingRight: "5vw",
        }}
      >
        <h2
          className="uppercase"
          style={{
            fontFamily: "var(--font-display), serif",
            fontSize: "clamp(32px, 4vw, 64px)",
            color: "#EEF0E2",
            letterSpacing: "0.02em",
            marginBottom: 32,
          }}
        >
          Tour
        </h2>

        <a
          href={TRACK_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block uppercase tour-track-cta"
          style={{
            fontFamily: "var(--font-display), serif",
            fontSize: 14,
            letterSpacing: 2,
            color: "#EEF0E2",
            border: "1px solid #EEF0E2",
            padding: "12px 32px",
            marginBottom: 48,
            transition: "opacity 300ms ease",
          }}
        >
          Track on Bandsintown
          <span className="sr-only"> (opens in new tab)</span>
        </a>

        <div className="mx-auto" style={{ maxWidth: 1200 }}>
          <EventList events={events} limit={10} />
        </div>

        <a
          href="/tour"
          className="inline-block uppercase tour-track-cta"
          style={{
            fontFamily: "var(--font-display), serif",
            fontSize: 14,
            letterSpacing: 2,
            color: "#EEF0E2",
            border: "1px solid #EEF0E2",
            padding: "12px 32px",
            marginTop: 48,
            transition: "opacity 300ms ease",
          }}
        >
          See All Dates
        </a>
      </div>
    </TourSectionParallax>
  );
}
