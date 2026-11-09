"use client";

import { useEffect, useRef } from "react";

export default function TourWidget() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Load the Bandsintown widget script dynamically so it initializes
    // after the container element is in the DOM
    const existing = document.querySelector(
      'script[src="https://widgetv3.bandsintown.com/main.min.js"]'
    );
    if (!existing) {
      const script = document.createElement("script");
      script.src = "https://widgetv3.bandsintown.com/main.min.js";
      script.charset = "utf-8";
      script.async = true;
      document.body.appendChild(script);
    }
  }, []);

  return (
    <div ref={containerRef} className="tour-widget-wrapper">
      {/* Bandsintown widget anchor — the script finds this by class */}
      {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
      <a
        className="bit-widget-initializer"
        data-artist-name="id_15538346"
        data-app-id="umg_bigmachinelabelgroup_thejackwharffband"
        data-affil-code="umg_us"
        data-background-color="rgba(0,0,0,0)"
        data-separator-color="rgba(212, 183, 115,0.3)"
        data-text-color="var(--brand-yellow)"
        data-link-color="var(--brand-yellow)"
        data-link-text-color="var(--brand-yellow)"
        data-popup-background-color="rgba(35, 31, 32,0.95)"
        data-font="Arial"
        data-auto-style="false"
        data-display-local-dates="false"
        data-display-past-dates="false"
        data-display-start-time="true"
        data-display-lineup="false"
        data-display-play-my-city="true"
        data-display-logo="false"
        data-display-track-button="true"
        data-display-limit="15"
        data-language="en"
      />
    </div>
  );
}
