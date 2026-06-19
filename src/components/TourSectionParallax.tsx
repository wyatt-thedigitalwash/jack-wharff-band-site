"use client";

import { useRef, useEffect, useState } from "react";
import { useScroll, useTransform, motion } from "framer-motion";
import Image from "next/image";

function TourWithParallax({ children }: { children: React.ReactNode }) {
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
          src="/backgrounds/TheJackWharffBand_P_20260217_DPiersaul_BMLGowns_DSC05211_RetJFv1_FNL.webp"
          alt="The Jack Wharff Band"
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

      {children}
    </section>
  );
}

function TourStatic({ children }: { children: React.ReactNode }) {
  return (
    <section className="relative w-full overflow-hidden" style={{ minHeight: "100vh" }}>
      <div className="absolute inset-0 z-0">
        <Image
          src="/backgrounds/TheJackWharffBand_P_20260217_DPiersaul_BMLGowns_DSC05211_RetJFv1_FNL.webp"
          alt="The Jack Wharff Band"
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

      {children}
    </section>
  );
}

export default function TourSectionParallax({ children }: { children: React.ReactNode }) {
  const [reducedMotion, setReducedMotion] = useState(false);

  useEffect(() => {
    const motionQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReducedMotion(motionQuery.matches);
  }, []);

  return (
    <>
      <style>{`
        @media (hover: hover) and (pointer: fine) {
          .tour-track-cta:hover {
            opacity: 0.8;
          }
        }
      `}</style>
      <div className="tour-section">
        {reducedMotion ? (
          <TourStatic>{children}</TourStatic>
        ) : (
          <TourWithParallax>{children}</TourWithParallax>
        )}
      </div>
    </>
  );
}
