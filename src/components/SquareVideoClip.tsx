"use client";

import { useParallax } from "@/hooks/useParallax";

interface SquareVideoClipProps {
  videoPath: string;
  background?: "cream" | "darkgreen";
}

const SHADOW =
  "0 8px 24px -4px rgba(75, 55, 40, 0.18), 0 4px 8px -2px rgba(75, 55, 40, 0.12)";

export default function SquareVideoClip({
  videoPath,
  background = "cream",
}: SquareVideoClipProps) {
  const parallaxRef = useParallax(0.1);
  const isDark = background === "darkgreen";

  return (
    <section
      data-bg={isDark ? "dark" : "light"}
      className={`${isDark ? "bg-darkgreen" : "bg-cream"} py-16 md:py-24 px-6`}
    >
      <div
        ref={parallaxRef}
        className="mx-auto w-[88%] md:w-[70%] max-w-3xl"
        style={{ transform: "translateY(var(--parallax-y, 0))" }}
      >
        <video
          className="w-full h-auto block rounded-sm"
          style={{ boxShadow: SHADOW }}
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
        >
          <source src={videoPath} type="video/mp4" />
        </video>
      </div>
    </section>
  );
}
