"use client";

import { useRef, useEffect, useState } from "react";
import { useScroll, useTransform, motion } from "framer-motion";
import Image from "next/image";

const TRACK_URL =
  "https://www.bandsintown.com/a/15538346?app_id=umg_bigmachinelabelgroup_thejackwharffband&came_from=267&trigger=track&affil_code=umg_us";

function TourContent() {
  return (
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
          fontSize: "clamp(48px, 7vw, 96px)",
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
      </a>

      <div className="mx-auto" style={{ maxWidth: 1200 }}>
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
  );
}

function TourWithParallax() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });
  const photoY = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"]);

  return (
    <section
      ref={sectionRef}
      className="relative w-full overflow-hidden"
      style={{ minHeight: "100vh" }}
    >
      <motion.div className="absolute inset-0 z-0" style={{ y: photoY }}>
        <Image
          src="/other/TJWB_Photo1.png"
          alt="The Jack Wharff Band in the Rock-Ola room"
          fill
          sizes="100vw"
          className="object-cover"
          style={{ scale: 1.2 }}
        />
      </motion.div>

      <div
        className="absolute inset-0 z-[1]"
        style={{
          backgroundColor: "rgba(91, 49, 13, 0.55)",
          mixBlendMode: "multiply",
        }}
      />

      <TourContent />
    </section>
  );
}

function TourStatic() {
  return (
    <section className="relative w-full overflow-hidden" style={{ minHeight: "100vh" }}>
      <div className="absolute inset-0 z-0">
        <Image
          src="/other/TJWB_Photo1.png"
          alt="The Jack Wharff Band in the Rock-Ola room"
          fill
          sizes="100vw"
          className="object-cover"
        />
      </div>

      <div
        className="absolute inset-0 z-[1]"
        style={{
          backgroundColor: "rgba(91, 49, 13, 0.55)",
          mixBlendMode: "multiply",
        }}
      />

      <TourContent />
    </section>
  );
}

export default function TourSection() {
  const [reducedMotion, setReducedMotion] = useState(false);

  useEffect(() => {
    const motionQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReducedMotion(motionQuery.matches);
  }, []);

  return (
    <>
      <style>{`
        .tour-section .bit-widget {
          background: transparent !important;
          font-family: var(--font-display), serif !important;
        }
        .tour-section .bit-event {
          border-bottom: 1px solid rgba(238, 240, 226, 0.3) !important;
          padding: 16px 0 !important;
        }
        .tour-section .bit-event:last-child {
          border-bottom: none !important;
        }
        .tour-section .bit-date,
        .tour-section .bit-event .bit-date {
          font-family: var(--font-display), serif !important;
          color: #EEF0E2 !important;
          text-transform: uppercase !important;
          letter-spacing: 1px !important;
        }
        .tour-section .bit-venue,
        .tour-section .bit-event .bit-venue {
          font-family: var(--font-display), serif !important;
          color: #EEF0E2 !important;
          text-transform: uppercase !important;
          letter-spacing: 1px !important;
        }
        .tour-section .bit-location,
        .tour-section .bit-event .bit-location {
          font-family: var(--font-display), serif !important;
          color: rgba(238, 240, 226, 0.7) !important;
          text-transform: uppercase !important;
          letter-spacing: 1px !important;
        }
        .tour-section .bit-offers,
        .tour-section .bit-event .bit-offers,
        .tour-section .bit-event-buttons,
        .tour-section .bit-event .bit-event-buttons {
          display: flex !important;
          justify-content: center !important;
          gap: 8px !important;
          margin: 0 !important;
        }

        .tour-section .bit-button,
        .tour-section .bit-offers a,
        .tour-section .bit-event-buttons a,
        .tour-section .buy-btn,
        .tour-section .bit-event a[class*="ticket"],
        .tour-section a.bit-evt-btn {
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
        .tour-section .bit-button:hover,
        .tour-section .buy-btn:hover,
        .tour-section a.bit-evt-btn:hover {
          opacity: 0.85 !important;
        }
        .tour-section .rsvp-btn,
        .tour-section a.bit-rsvp {
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
        .tour-section .bit-no-dates,
        .tour-section .bit-no-events {
          color: rgba(238, 240, 226, 0.6) !important;
          font-family: var(--font-display), serif !important;
          text-transform: uppercase !important;
          letter-spacing: 1px !important;
        }
        .tour-section .bit-track,
        .tour-section .bit-follow,
        .tour-section .track-link,
        .tour-section .bit-widget-footer {
          color: rgba(238, 240, 226, 0.5) !important;
        }
        .tour-section .bit-track svg,
        .tour-section .bit-follow svg {
          fill: rgba(238, 240, 226, 0.5) !important;
        }
        .tour-section .bit-show-more,
        .tour-section .bit-show-fewer,
        .tour-section .bit-see-more {
          background-color: #D2CEB2 !important;
          color: #4B3728 !important;
          font-family: var(--font-display), serif !important;
          text-transform: uppercase !important;
          letter-spacing: 1px !important;
          border-radius: 0 !important;
          border: none !important;
          font-size: 14px !important;
        }
        .tour-section .bit-play-my-city a {
          color: rgba(238, 240, 226, 0.5) !important;
          font-family: var(--font-display), serif !important;
        }
        @media (hover: hover) and (pointer: fine) {
          .tour-track-cta:hover {
            opacity: 0.8;
          }
        }
      `}</style>
      <div className="tour-section">
        {reducedMotion ? <TourStatic /> : <TourWithParallax />}
      </div>
    </>
  );
}
