"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";

const DESKTOP_PHOTOS = [
  "/new/shutter/TJWB_DesktopHeroShutter_1.jpg",
  "/new/shutter/TJWB_DesktopHeroShutter_2.jpg",
  "/new/shutter/TJWB_DesktopHeroShutter_3.jpg",
  "/new/shutter/TJWB_DesktopHeroShutter_4.jpg",
];

const MOBILE_PHOTOS = [
  "/new/shutter/TJWB_MobileHeroShutter_1.jpg",
  "/new/shutter/TJWB_MobileHeroShutter_2.jpg",
  "/new/shutter/TJWB_MobileHeroShutter_3.jpg",
  "/new/shutter/TJWB_MobileHeroShutter_4.jpg",
];

const SIZES = ["30%", "50%", "72%", "92%"];

export default function OpeningShutter() {
  const [photoOpacities, setPhotoOpacities] = useState([0, 0, 0, 0]);
  const [logoOpacity, setLogoOpacity] = useState(0);
  const [photo4Expanded, setPhoto4Expanded] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [reducedMotion, setReducedMotion] = useState(false);
  const timeoutsRef = useRef<NodeJS.Timeout[]>([]);

  useEffect(() => {
    setIsMobile(window.innerWidth < 768);

    const motionQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReducedMotion(motionQuery.matches);

    if (motionQuery.matches) {
      setPhotoOpacities([0, 0, 0, 1]);
      setPhoto4Expanded(true);
      setLogoOpacity(1);
      return;
    }

    const timers: NodeJS.Timeout[] = [];

    // Photo 1 fades in at 0ms
    timers.push(setTimeout(() => {
      setPhotoOpacities([1, 0, 0, 0]);
    }, 0));

    // Photo 2 fades in at 350ms, Photo 1 fades out
    timers.push(setTimeout(() => {
      setPhotoOpacities([0, 1, 0, 0]);
    }, 350));

    // Photo 3 fades in at 700ms, Photo 2 fades out
    timers.push(setTimeout(() => {
      setPhotoOpacities([0, 0, 1, 0]);
    }, 700));

    // Photo 4 fades in at 1050ms, Photo 3 fades out
    timers.push(setTimeout(() => {
      setPhotoOpacities([0, 0, 0, 1]);
    }, 1050));

    // 1650ms: Photo 4 expands to 100% + logo fades in simultaneously
    timers.push(setTimeout(() => {
      setPhoto4Expanded(true);
      setLogoOpacity(1);
    }, 1650));

    timeoutsRef.current = timers;

    return () => {
      timers.forEach(clearTimeout);
    };
  }, []);

  const photos = isMobile ? MOBILE_PHOTOS : DESKTOP_PHOTOS;

  return (
    <section
      className="relative w-full overflow-hidden"
      style={{ height: "100vh", backgroundColor: "#EEF0E2" }}
    >
      {photos.map((src, i) => {
        const isPhoto4 = i === 3;
        const size = isPhoto4 && photo4Expanded ? "100%" : SIZES[i];

        return (
          <div
            key={i}
            className="absolute inset-0 flex items-center justify-center"
            style={{
              opacity: photoOpacities[i],
              transition: reducedMotion
                ? "none"
                : i === 0
                  ? "opacity 50ms ease"
                  : "opacity 80ms ease",
            }}
          >
            <div
              className="relative overflow-hidden"
              style={{
                width: size,
                height: size,
                transition:
                  isPhoto4 && !reducedMotion
                    ? "width 700ms cubic-bezier(0.33, 1, 0.68, 1), height 700ms cubic-bezier(0.33, 1, 0.68, 1)"
                    : "none",
              }}
            >
              <Image
                src={src}
                alt="The Jack Wharff Band"
                fill
                sizes="100vw"
                className="object-cover"
                priority={i === 0}
                loading={i === 0 ? "eager" : "lazy"}
              />
            </div>
          </div>
        );
      })}

      {/* Logo overlay — centered on viewport, sized relative to viewport width */}
      <div
        className="absolute inset-0 flex items-center justify-center pointer-events-none z-10"
        style={{
          opacity: logoOpacity,
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
