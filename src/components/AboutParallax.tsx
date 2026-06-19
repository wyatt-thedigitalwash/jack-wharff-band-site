"use client";

import { useRef, useEffect, useState } from "react";
import { useScroll, useTransform, motion } from "framer-motion";
import Image from "next/image";

function ParallaxContent() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const photoY = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"]);

  return (
    <section
      ref={sectionRef}
      className="relative w-full overflow-hidden flex items-center justify-center"
      style={{ minHeight: "100vh" }}
    >
      {/* Background photo with parallax */}
      <motion.div className="absolute inset-0 z-0" style={{ y: photoY }}>
        <Image
          src="/other/TJWB_Photo2.webp"
          alt="The Jack Wharff Band in a hallway"
          fill
          sizes="100vw"
          className="object-cover"
          style={{ scale: 1.2 }}
        />
      </motion.div>

      {/* Dark overlay */}
      <div
        className="absolute inset-0 z-[1]"
        style={{ backgroundColor: "rgba(24, 25, 18, 0.5)" }}
      />

      {/* Foreground content */}
      <div className="relative z-[2] mx-auto px-6 md:px-8 py-[12vh]" style={{ maxWidth: 720 }}>
        <Heading />
        <BodyText />
      </div>
    </section>
  );
}

function StaticContent() {
  return (
    <section
      className="relative w-full overflow-hidden flex items-center justify-center"
      style={{ minHeight: "100vh" }}
    >
      {/* Background photo (no parallax) */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/other/TJWB_Photo2.webp"
          alt="The Jack Wharff Band in a hallway"
          fill
          sizes="100vw"
          className="object-cover"
        />
      </div>

      {/* Dark overlay */}
      <div
        className="absolute inset-0 z-[1]"
        style={{ backgroundColor: "rgba(24, 25, 18, 0.5)" }}
      />

      {/* Foreground content */}
      <div className="relative z-[2] mx-auto px-6 md:px-8 py-[12vh]" style={{ maxWidth: 720 }}>
        <Heading />
        <BodyText />
      </div>
    </section>
  );
}

function Heading() {
  return (
    <h2
      className="uppercase text-center"
      style={{
        fontFamily: "var(--font-display), serif",
        fontSize: "clamp(32px, 5vw, 56px)",
        color: "#EEF0E2",
        marginBottom: 32,
      }}
    >
      <span style={{ fontSize: "clamp(18px, 3vw, 28px)", display: "block" }}>
        About
      </span>
      <span style={{ fontSize: "clamp(32px, 5vw, 56px)", display: "block" }}>
        The Jack Wharff Band
      </span>
    </h2>
  );
}

function BodyText() {
  return (
    <p
      className="text-center"
      style={{
        fontFamily: "Arial, Helvetica, sans-serif",
        fontSize: "clamp(16px, 1.5vw, 18px)",
        lineHeight: 1.6,
        color: "#EEF0E2",
      }}
    >
      Hailing from Richmond, Virginia, The Jack Wharff Band play a strikingly unique blend of bluegrass, Country and rock. Known for their electric live performances, masterful instrumentation, and their ability to make music that consistently defies the confines of genre, the young band burst onto the scene last year with snippets of jaw-dropping original songs posted to TikTok and Reels. Comprised of vocalist/frontman Jack Wharff, drummer Garrett Howell, bassist Ryan Atchison and guitarist Evan Novoa, the salt of the earth four-piece have quickly captivated audiences with their infectious energy and unrelenting passion for the craft. The band has taken everything that has come their way in stride – viral videos of their original songs, a record deal with Big Machine Records, a move to Music City and more – earning a loyal following along the way. With an unparalleled ability to command an audience with vibrant stage presence far beyond their years and toe-tapping anthems that beg to be sung along to, it's clear that this is just the beginning for The Jack Wharff Band.
    </p>
  );
}

export default function AboutParallax() {
  const [reducedMotion, setReducedMotion] = useState(false);

  useEffect(() => {
    const motionQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReducedMotion(motionQuery.matches);
  }, []);

  return reducedMotion ? <StaticContent /> : <ParallaxContent />;
}
