"use client";

import { useRef, useEffect, useState } from "react";
import { useScroll, useTransform, motion } from "framer-motion";
import OpeningShutter from "@/components/OpeningShutter";

interface Release {
  title: string;
  desktopBanner: string;
  mobileBanner: string;
  href: string;
}

const RELEASES: Release[] = [
  {
    title: "Low Life",
    desktopBanner: "/new/banners/TJWB_LowLife_DesktopBanner.jpg",
    mobileBanner: "/new/banners/TJWB_LowLife_MobileBanner.jpg",
    // TODO: Replace with Low Life smart link once available from BMLG
    href: "#",
  },
  {
    title: "Strange EP",
    desktopBanner: "/new/banners/TJWB_StrangeEP_DesktopBanner.jpg",
    mobileBanner: "/new/banners/TJWB_StrangeEP_MobileBanner.jpg",
    href: "https://jackwharff.lnk.to/strangeEPWE",
  },
  {
    title: "Saved",
    desktopBanner: "/new/banners/TJWB_Saved_DesktopBanner.jpg",
    mobileBanner: "/new/banners/TJWB_Saved_MobileBanner.jpg",
    href: "https://jackwharff.lnk.to/savedWE",
  },
];

function SlideImage({ release }: { release: Release }) {
  return (
    <picture>
      <source media="(max-width: 767px)" srcSet={release.mobileBanner} />
      <source media="(min-width: 768px)" srcSet={release.desktopBanner} />
      <img
        src={release.desktopBanner}
        alt={`${release.title} release banner`}
        className="absolute inset-0 w-full h-full object-cover"
      />
    </picture>
  );
}

function PinnedIntro() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const slide1Y = useTransform(scrollYProgress, [0, 0.33], ["100%", "0%"]);
  const slide2Y = useTransform(scrollYProgress, [0.33, 0.66], ["100%", "0%"]);
  const slide3Y = useTransform(scrollYProgress, [0.66, 1], ["100%", "0%"]);

  return (
    <div ref={containerRef} className="relative" style={{ height: "300vh" }}>
      <div className="sticky top-0 h-screen w-full overflow-hidden">
        {/* Layer 0 - Opening Shutter (base layer) */}
        <OpeningShutter />

        {/* Layer 1 - Low Life slides up to cover shutter */}
        <motion.a
          href={RELEASES[0].href}
          target="_blank"
          rel="noopener noreferrer"
          className="absolute inset-0 cursor-pointer release-slide-link z-20"
          aria-label={`Listen to ${RELEASES[0].title}`}
          style={{ y: slide1Y, backgroundColor: "#181912" }}
        >
          <SlideImage release={RELEASES[0]} />
        </motion.a>

        {/* Layer 2 - Strange EP slides up to cover Low Life */}
        <motion.a
          href={RELEASES[1].href}
          target="_blank"
          rel="noopener noreferrer"
          className="absolute inset-0 cursor-pointer release-slide-link z-30"
          aria-label={`Listen to ${RELEASES[1].title}`}
          style={{ y: slide2Y, backgroundColor: "#181912" }}
        >
          <SlideImage release={RELEASES[1]} />
        </motion.a>

        {/* Layer 3 - Saved slides up to cover Strange EP */}
        <motion.a
          href={RELEASES[2].href}
          target="_blank"
          rel="noopener noreferrer"
          className="absolute inset-0 cursor-pointer release-slide-link z-40"
          aria-label={`Listen to ${RELEASES[2].title}`}
          style={{ y: slide3Y, backgroundColor: "#181912" }}
        >
          <SlideImage release={RELEASES[2]} />
        </motion.a>
      </div>
    </div>
  );
}

function StaticIntro() {
  return (
    <>
      {/* Shutter as its own 100vh section */}
      <div className="relative w-full" style={{ height: "100vh" }}>
        <OpeningShutter />
      </div>

      {/* 3 slides as separate stacked 100vh sections */}
      {RELEASES.map((release) => (
        <a
          key={release.title}
          href={release.href}
          target="_blank"
          rel="noopener noreferrer"
          className="relative block w-full cursor-pointer release-slide-link"
          style={{ height: "100vh" }}
          aria-label={`Listen to ${release.title}`}
        >
          <SlideImage release={release} />
        </a>
      ))}
    </>
  );
}

export default function ReleaseSlideStack() {
  const [reducedMotion, setReducedMotion] = useState(false);

  useEffect(() => {
    const motionQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReducedMotion(motionQuery.matches);
  }, []);

  return (
    <section>
      <style>{`
        @media (hover: hover) and (pointer: fine) {
          .release-slide-link:hover {
            opacity: 0.95;
            transition: opacity 300ms ease;
          }
          .release-slide-link {
            transition: opacity 300ms ease;
          }
        }
      `}</style>
      {reducedMotion ? <StaticIntro /> : <PinnedIntro />}
    </section>
  );
}
