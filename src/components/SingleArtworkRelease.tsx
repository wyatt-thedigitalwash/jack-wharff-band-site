"use client";

import Image from "next/image";
import { useParallax } from "@/hooks/useParallax";

interface SingleArtworkReleaseProps {
  artworkPath: string;
  title: string;
  kicker: string;
  ctaLabel: string;
  ctaHref: string;
}

export default function SingleArtworkRelease({
  artworkPath,
  title,
  kicker,
  ctaLabel,
  ctaHref,
}: SingleArtworkReleaseProps) {
  const parallaxRef = useParallax(0.1);

  return (
    <section data-bg="dark" className="bg-darkgreen text-cream py-20 md:py-32 px-6">
      <div className="mx-auto max-w-xl flex flex-col items-center text-center">
        <p className="text-xs uppercase tracking-[0.2em] text-olive mb-6">
          {kicker}
        </p>
        <div
          ref={parallaxRef}
          className="w-[80%] md:w-[480px] lg:w-[540px]"
          style={{ transform: "translateY(var(--parallax-y, 0))" }}
        >
          <Image
            src={artworkPath}
            alt={`${title} cover art`}
            width={560}
            height={560}
            className="w-full h-auto"
          />
        </div>
        <h2 className="font-display text-4xl md:text-6xl uppercase tracking-wide mt-8">
          {title}
        </h2>
        <a
          href={ctaHref}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-6 inline-block bg-russet text-cream font-display uppercase text-sm tracking-wider px-8 py-3.5 transition-opacity hover:opacity-85"
        >
          {ctaLabel}
        </a>
      </div>
    </section>
  );
}
