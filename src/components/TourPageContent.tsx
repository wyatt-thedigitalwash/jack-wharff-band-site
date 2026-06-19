"use client";

const TRACK_URL =
  "https://www.bandsintown.com/a/15538346?app_id=umg_bigmachinelabelgroup_thejackwharffband&came_from=267&trigger=track&affil_code=umg_us";

export default function TourPageContent() {
  return (
    <>
      <style>{`
        .tour-page .bit-widget {
          background: transparent !important;
          font-family: var(--font-display), serif !important;
        }
        .tour-page .bit-event {
          border-bottom: 1px solid rgba(238, 240, 226, 0.3) !important;
          padding: 16px 0 !important;
        }
        .tour-page .bit-event:last-child {
          border-bottom: none !important;
        }
        .tour-page .bit-date,
        .tour-page .bit-event .bit-date {
          font-family: var(--font-display), serif !important;
          color: #EEF0E2 !important;
          text-transform: uppercase !important;
          letter-spacing: 1px !important;
        }
        .tour-page .bit-venue,
        .tour-page .bit-event .bit-venue {
          font-family: var(--font-display), serif !important;
          color: #EEF0E2 !important;
          text-transform: uppercase !important;
          letter-spacing: 1px !important;
        }
        .tour-page .bit-location,
        .tour-page .bit-event .bit-location {
          font-family: var(--font-display), serif !important;
          color: rgba(238, 240, 226, 0.7) !important;
          text-transform: uppercase !important;
          letter-spacing: 1px !important;
        }
        .tour-page .bit-offers,
        .tour-page .bit-event .bit-offers,
        .tour-page .bit-event-buttons,
        .tour-page .bit-event .bit-event-buttons {
          display: flex !important;
          justify-content: center !important;
          gap: 8px !important;
          margin: 0 !important;
        }
        .tour-page .bit-button,
        .tour-page .bit-offers a,
        .tour-page .bit-event-buttons a,
        .tour-page .buy-btn,
        .tour-page .bit-event a[class*="ticket"],
        .tour-page a.bit-evt-btn {
          background-color: #EEF0E2 !important;
          color: #4B3728 !important;
          font-family: var(--font-display), serif !important;
          text-transform: uppercase !important;
          letter-spacing: 1px !important;
          border-radius: 0 !important;
          border: 1px solid #EEF0E2 !important;
          padding: 2px 16px !important;
          font-size: 14px !important;
          box-sizing: border-box !important;
          transition: opacity 0.2s ease !important;
        }
        .tour-page .bit-button:hover,
        .tour-page .buy-btn:hover,
        .tour-page a.bit-evt-btn:hover {
          opacity: 0.85 !important;
        }
        .tour-page .rsvp-btn,
        .tour-page a.bit-rsvp {
          background-color: transparent !important;
          color: #EEF0E2 !important;
          font-family: var(--font-display), serif !important;
          text-transform: uppercase !important;
          letter-spacing: 1px !important;
          border-radius: 0 !important;
          border: 1px solid #EEF0E2 !important;
          padding: 2px 16px !important;
          font-size: 14px !important;
          box-sizing: border-box !important;
        }
        .tour-page .bit-no-dates,
        .tour-page .bit-no-events {
          color: rgba(238, 240, 226, 0.6) !important;
          font-family: var(--font-display), serif !important;
          text-transform: uppercase !important;
          letter-spacing: 1px !important;
        }
        .tour-page .bit-track,
        .tour-page .bit-follow,
        .tour-page .track-link,
        .tour-page .bit-widget-footer {
          color: rgba(238, 240, 226, 0.5) !important;
        }
        .tour-page .bit-track svg,
        .tour-page .bit-follow svg {
          fill: rgba(238, 240, 226, 0.5) !important;
        }
        .tour-page .bit-show-more,
        .tour-page .bit-show-fewer,
        .tour-page .bit-see-more {
          background-color: #D2CEB2 !important;
          color: #4B3728 !important;
          font-family: var(--font-display), serif !important;
          text-transform: uppercase !important;
          letter-spacing: 1px !important;
          border-radius: 0 !important;
          border: none !important;
          font-size: 14px !important;
        }
        .tour-page .bit-play-my-city a {
          color: rgba(238, 240, 226, 0.5) !important;
          font-family: var(--font-display), serif !important;
        }
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
            </a>

            <div className="w-full" style={{ maxWidth: 600 }}>
              <a
                className="bit-widget-initializer"
                data-artist-name="The Jack Wharff Band"
                data-display-local-dates="false"
                data-display-past-dates="false"
                data-auto-style="false"
                data-text-color="#EEF0E2"
                data-link-color="#EEF0E2"
                data-background-color="transparent"
                data-display-limit="all"
                data-display-lineup="false"
                data-display-start-time="false"
                data-link-text-color="#4B3728"
                data-display-play-my-city="false"
                data-separator-color="rgba(238, 240, 226, 0.3)"
                data-app-id="umg_bigmachinelabelgroup_thejackwharffband"
                data-affil-code="umg_us"
                data-came-from="267"
                data-display-track-button="false"
                data-track-button-bg-color="#D2CEB2"
                data-track-button-text-color="#4B3728"
                data-display-rsvp-on-dates="true"
                data-display-similar-artists="false"
              ></a>
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
            </a>

            <div className="w-full">
              <a
                className="bit-widget-initializer"
                data-artist-name="The Jack Wharff Band"
                data-display-local-dates="false"
                data-display-past-dates="false"
                data-auto-style="false"
                data-text-color="#EEF0E2"
                data-link-color="#EEF0E2"
                data-background-color="transparent"
                data-display-limit="all"
                data-display-lineup="false"
                data-display-start-time="false"
                data-link-text-color="#4B3728"
                data-display-play-my-city="false"
                data-separator-color="rgba(238, 240, 226, 0.3)"
                data-app-id="umg_bigmachinelabelgroup_thejackwharffband"
                data-affil-code="umg_us"
                data-came-from="267"
                data-display-track-button="false"
                data-track-button-bg-color="#D2CEB2"
                data-track-button-text-color="#4B3728"
                data-display-rsvp-on-dates="true"
                data-display-similar-artists="false"
              ></a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
