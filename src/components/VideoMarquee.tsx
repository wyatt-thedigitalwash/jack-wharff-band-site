"use client";

import { useEffect, useRef, useState } from "react";

export default function VideoMarquee() {
  const [isMobile, setIsMobile] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [ready, setReady] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const mql = window.matchMedia("(max-width: 767px)");
    setIsMobile(mql.matches);
    setMounted(true);

    function onChange(e: MediaQueryListEvent) {
      setIsMobile(e.matches);
    }
    mql.addEventListener("change", onChange);
    return () => mql.removeEventListener("change", onChange);
  }, []);

  // Restart playback when source changes
  useEffect(() => {
    if (mounted && videoRef.current) {
      setReady(false);
      videoRef.current.load();
      videoRef.current.play().catch(() => {});
    }
  }, [isMobile, mounted]);

  const src = isMobile
    ? "/videos/JackWharff_BannerMobile.m4v"
    : "/videos/JackWharff_BannerDesktop.m4v";

  return (
    <section data-bg="light">
      <video
        ref={videoRef}
        className={`w-full h-auto block ${ready ? "video-entrance" : ""}`}
        style={{
          opacity: ready ? undefined : 0,
          aspectRatio: mounted ? undefined : "3.56 / 1",
        }}
        autoPlay
        muted
        loop
        playsInline
        onCanPlay={() => setReady(true)}
      >
        {mounted && <source src={src} type="video/mp4" />}
      </video>
    </section>
  );
}
