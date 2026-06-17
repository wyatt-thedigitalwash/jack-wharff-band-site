"use client";

import Image from "next/image";
import { useParallax } from "@/hooks/useParallax";

interface BandPhotoFullBleedProps {
  imagePath: string;
  imageAlt: string;
  width: number;
  height: number;
  background?: "cream" | "darkgreen" | "ashbrown" | "fullbleed";
}

const BG_MAP = {
  cream: "bg-cream",
  darkgreen: "bg-darkgreen",
  ashbrown: "bg-ashbrown",
  fullbleed: "bg-cream",
} as const;

const DATA_BG_MAP = {
  cream: "light",
  darkgreen: "dark",
  ashbrown: "dark",
  fullbleed: "light",
} as const;

const SHADOW =
  "0 8px 24px -4px rgba(75, 55, 40, 0.18), 0 4px 8px -2px rgba(75, 55, 40, 0.12)";

export default function BandPhotoFullBleed({
  imagePath,
  imageAlt,
  width,
  height,
  background = "cream",
}: BandPhotoFullBleedProps) {
  const parallaxRef = useParallax(0.12);
  const isFullBleed = background === "fullbleed";

  return (
    <section
      data-bg={DATA_BG_MAP[background]}
      className={`${BG_MAP[background]} ${isFullBleed ? "py-0" : "py-16 md:py-24 px-6"}`}
    >
      <div
        ref={parallaxRef}
        className={`overflow-hidden ${isFullBleed ? "" : "mx-auto max-w-5xl"}`}
        style={{ transform: "translateY(var(--parallax-y, 0))" }}
      >
        <Image
          src={imagePath}
          alt={imageAlt}
          width={width}
          height={height}
          className={`w-full h-auto ${isFullBleed ? "" : "rounded-sm"}`}
          style={isFullBleed ? undefined : { boxShadow: SHADOW }}
        />
      </div>
    </section>
  );
}
