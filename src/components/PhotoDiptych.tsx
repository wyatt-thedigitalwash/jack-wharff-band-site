"use client";

import Image from "next/image";
import { useParallax } from "@/hooks/useParallax";

interface PhotoDiptychProps {
  image1Path: string;
  image1Alt: string;
  image1Width: number;
  image1Height: number;
  image2Path: string;
  image2Alt: string;
  image2Width: number;
  image2Height: number;
}

const SHADOW =
  "0 8px 24px -4px rgba(75, 55, 40, 0.18), 0 4px 8px -2px rgba(75, 55, 40, 0.12)";

export default function PhotoDiptych({
  image1Path,
  image1Alt,
  image1Width,
  image1Height,
  image2Path,
  image2Alt,
  image2Width,
  image2Height,
}: PhotoDiptychProps) {
  const ref1 = useParallax(0.08);
  const ref2 = useParallax(0.14);

  return (
    <section data-bg="light" className="bg-cream py-16 md:py-24 px-6">
      {/* Desktop: side by side */}
      <div className="hidden md:flex items-start justify-center gap-8 lg:gap-10 mx-auto max-w-5xl">
        <div
          ref={ref1}
          className="w-[45%]"
          style={{ transform: "translateY(var(--parallax-y, 0))" }}
        >
          <Image
            src={image1Path}
            alt={image1Alt}
            width={image1Width}
            height={image1Height}
            className="w-full h-auto rounded-sm"
            style={{ boxShadow: SHADOW }}
          />
        </div>
        <div
          ref={ref2}
          className="w-[45%]"
          style={{ transform: "translateY(var(--parallax-y, 0))" }}
        >
          <Image
            src={image2Path}
            alt={image2Alt}
            width={image2Width}
            height={image2Height}
            className="w-full h-auto rounded-sm"
            style={{ boxShadow: SHADOW }}
          />
        </div>
      </div>

      {/* Mobile: stacked */}
      <div className="md:hidden flex flex-col items-center gap-6 mx-auto">
        <div className="w-[90%]">
          <Image
            src={image1Path}
            alt={image1Alt}
            width={image1Width}
            height={image1Height}
            className="w-full h-auto rounded-sm"
            style={{ boxShadow: SHADOW }}
          />
        </div>
        <div className="w-[90%]">
          <Image
            src={image2Path}
            alt={image2Alt}
            width={image2Width}
            height={image2Height}
            className="w-full h-auto rounded-sm"
            style={{ boxShadow: SHADOW }}
          />
        </div>
      </div>
    </section>
  );
}
