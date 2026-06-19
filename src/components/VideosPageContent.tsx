"use client";

import { useRef } from "react";
import { useScroll, useTransform, motion } from "framer-motion";

const VIDEOS = [
  { embedId: "m2sfsBC82ic" },
  { embedId: "SxB1zpzQFdE" },
  { embedId: "0UvUX39wsRo" },
  { embedId: "kZPapJmq3XY" },
  { embedId: "mgoLUHzTr8A" },
  { embedId: "w8_qgBDQ7tY" },
  { embedId: "eSqWjbOBjCo" },
  { embedId: "RmdO7n2gs1A" },
  { embedId: "9nWvtSzJZBU" },
  { embedId: "yvtj1-3N818" },
  { embedId: "yg8e8GyMgKY" },
  { embedId: "vSmwRrgA8lM" },
  { embedId: "kXs5sT6d5Sw" },
];

function ScaleVideo({ embedId }: { embedId: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  // Scale: small at edges (0.92), full size in center (1.0)
  const scale = useTransform(
    scrollYProgress,
    [0, 0.5, 1],
    [0.92, 1, 0.92]
  );

  return (
    <motion.div
      ref={ref}
      className="relative w-full origin-center"
      style={{ aspectRatio: "16 / 9", scale }}
    >
      <iframe
        src={`https://www.youtube-nocookie.com/embed/${embedId}`}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
        loading="lazy"
        title="The Jack Wharff Band video"
        className="absolute inset-0 w-full h-full border-0"
      />
    </motion.div>
  );
}

export default function VideosPageContent() {
  return (
    <div style={{ backgroundColor: "#EEF0E2", minHeight: "100vh" }}>
      {/* Videos grid */}
      <div
        className="mx-auto px-6 md:px-8"
        style={{
          maxWidth: 1200,
          paddingTop: "clamp(100px, 14vh, 160px)",
          paddingBottom: "8vh",
        }}
      >
        <h1
          className="uppercase text-center"
          style={{
            fontFamily: "var(--font-display), serif",
            fontSize: "clamp(32px, 4vw, 64px)",
            color: "#4B3728",
            letterSpacing: "0.02em",
            marginBottom: 48,
          }}
        >
          Videos
        </h1>

        <div className="flex flex-col gap-12">
          {VIDEOS.map((video) => (
            <ScaleVideo key={video.embedId} embedId={video.embedId} />
          ))}
        </div>
      </div>
    </div>
  );
}
