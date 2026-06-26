"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

export default function OpeningShutter() {
  const [scaled, setScaled] = useState(false);
  const [logoVisible, setLogoVisible] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [reducedMotion, setReducedMotion] = useState(false);

  useEffect(() => {
    setIsMobile(window.innerWidth < 768);

    const motionQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReducedMotion(motionQuery.matches);

    if (motionQuery.matches) {
      setScaled(true);
      setLogoVisible(true);
      return;
    }

    // Start the scale-up after a brief delay so the initial state is painted
    const scaleTimer = setTimeout(() => setScaled(true), 100);

    // Logo fades in after the scale animation completes
    const logoTimer = setTimeout(() => setLogoVisible(true), 1600);

    return () => {
      clearTimeout(scaleTimer);
      clearTimeout(logoTimer);
    };
  }, []);

  return (
    <section
      className="relative w-full overflow-hidden"
      style={{ height: "100vh", backgroundColor: "#0a0a0a" }}
    >
      {/* Media container — scales from 85% to 100% */}
      <div
        className="absolute inset-0"
        style={{
          transform: scaled ? "scale(1)" : "scale(0.85)",
          transition: reducedMotion
            ? "none"
            : "transform 1500ms cubic-bezier(0.33, 1, 0.68, 1)",
        }}
      >
        {/* Desktop: static image */}
        <div className="hidden md:block absolute inset-0">
          <Image
            src="/backgrounds/TJWB_HomeHero.jpg"
            alt="The Jack Wharff Band"
            fill
            sizes="100vw"
            className="object-cover"
            priority
          />
        </div>

        {/* Mobile: video */}
        <div className="block md:hidden absolute inset-0">
          <video
            autoPlay
            muted
            loop
            playsInline
            className="absolute inset-0 w-full h-full object-cover"
            poster="/backgrounds/TJWB_AboutHeader.webp"
          >
            <source
              src="https://res.cloudinary.com/dgbiatexy/video/upload/v1782481528/TJWB_MobileHero_hbhucz.mp4"
              type="video/mp4"
            />
          </video>
        </div>
      </div>

      {/* Logo overlay */}
      <div
        className="absolute inset-0 flex items-center justify-center pointer-events-none z-10"
        style={{
          opacity: logoVisible ? 1 : 0,
          transition: reducedMotion ? "none" : "opacity 700ms ease-in-out",
        }}
      >
        <div
          className="relative w-[55vw] md:w-[35vw]"
          style={{ aspectRatio: "1 / 1" }}
        >
          <Image
            src="/branding/TJWB_LogoWhite.png"
            alt="The Jack Wharff Band logo"
            fill
            sizes="(max-width: 768px) 55vw, 35vw"
            className="object-contain"
          />
        </div>
      </div>
    </section>
  );
}
