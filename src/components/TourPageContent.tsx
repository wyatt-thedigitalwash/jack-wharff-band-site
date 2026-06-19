import { fetchEvents } from "@/lib/bandsintown";
import EventList from "./EventList";

const TRACK_URL =
  "https://www.bandsintown.com/a/15538346?app_id=umg_bigmachinelabelgroup_thejackwharffband&came_from=267&trigger=track&affil_code=umg_us";

export default async function TourPageContent() {
  const events = await fetchEvents();

  return (
    <>
      <style>{`
        @media (hover: hover) and (pointer: fine) {
          .tour-page .tour-track-cta:hover {
            opacity: 0.8;
          }
        }
      `}</style>

      <div className="tour-page" style={{ backgroundColor: "#181912" }}>
        {/* Desktop: side-by-side sticky video + scrolling dates */}
        <div className="hidden md:flex" style={{ minHeight: "100vh" }}>
          {/* Left: tour content */}
          <div
            className="w-1/2 flex flex-col items-center text-center"
            style={{
              paddingTop: "14vh",
              paddingBottom: "10vh",
              paddingLeft: "4vw",
              paddingRight: "4vw",
            }}
          >
            <h1
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
            </h1>

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

            <div className="w-full" style={{ maxWidth: 600 }}>
              <EventList events={events} compact />
            </div>
          </div>

          {/* Right: sticky video */}
          <div className="w-1/2 relative">
            <div className="sticky top-0 h-screen overflow-hidden">
              <video
                src="https://res.cloudinary.com/dgbiatexy/video/upload/f_auto,q_auto/v1781871954/TJWB_Videos_sy3ubl.mp4"
                autoPlay
                muted
                loop
                playsInline
                preload="metadata"
                className="absolute inset-0 w-full h-full object-cover"
              />
            </div>
          </div>
        </div>

        {/* Mobile: stacked layout */}
        <div className="md:hidden">
          {/* Video hero */}
          <div className="relative w-full" style={{ aspectRatio: "1 / 1" }}>
            <video
              src="https://res.cloudinary.com/dgbiatexy/video/upload/f_auto,q_auto/v1781871954/TJWB_Videos_sy3ubl.mp4"
              autoPlay
              muted
              loop
              playsInline
              preload="metadata"
              className="absolute inset-0 w-full h-full object-cover"
            />
          </div>

          {/* Tour content */}
          <div
            className="text-center"
            style={{
              paddingTop: "8vh",
              paddingBottom: "8vh",
              paddingLeft: "6vw",
              paddingRight: "6vw",
            }}
          >
            <h1
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
            </h1>

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

            <div className="w-full">
              <EventList events={events} compact />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
