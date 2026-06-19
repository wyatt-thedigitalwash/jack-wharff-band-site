"use client";

import Image from "next/image";
import { useInView } from "@/hooks/useInView";

const PHOTOS = [
  { src: "/other/TJWB_Photo1.webp", width: 678, height: 444 },
  { src: "/other/TJWB_Photo3.webp", width: 918, height: 602 },
  { src: "/other/TJWB_Photo2.webp", width: 634, height: 796 },
  { src: "/other/TJWB_Photo4.webp", width: 974, height: 656 },
  { src: "/other/TJWB_Photo5.webp", width: 1020, height: 718 },
];

const SHADOW =
  "0 8px 24px -4px rgba(75, 55, 40, 0.18), 0 4px 8px -2px rgba(75, 55, 40, 0.12)";

/* Stagger delays in ms — indexed by gallery position A–E */
/* Stagger delays — anchors land together, others overlap while anchors still settling */
const DELAYS = [0, 150, 500, 750, 1000];

export default function PhotoGallery() {
  const { ref, inView } = useInView(0.25);

  return (
    <section data-bg="light" className="bg-cream pt-0 pb-20 md:py-28 px-0 md:px-6">
      {/* Desktop: asymmetric scatter */}
      <div
        ref={ref}
        className="hidden md:block mx-auto max-w-6xl relative"
        style={{ height: "clamp(700px, 60vw, 920px)" }}
      >
        {/* Photo A — top-left, hero group shot */}
        <div
          className={inView ? "photo-enter" : "photo-hidden"}
          style={{
            position: "absolute",
            top: 50,
            left: "calc(-1 * (100vw - 100%) / 2 + 50px)",
            width: "64%",
            animationDelay: `${DELAYS[0]}ms`,
          }}
        >
          <Image
            src={PHOTOS[0].src}
            alt="The Jack Wharff Band"
            width={PHOTOS[0].width}
            height={PHOTOS[0].height}
            className="w-full h-auto rounded-sm"
            style={{ boxShadow: SHADOW }}
          />
        </div>

        {/* Photo B — top-right, offset lower */}
        <div
          className={inView ? "photo-enter" : "photo-hidden"}
          style={{
            position: "absolute",
            top: 20,
            right: "calc(-1 * (100vw - 100%) / 2 + 20px)",
            width: "76%",
            animationDelay: `${DELAYS[1]}ms`,
          }}
        >
          <Image
            src={PHOTOS[1].src}
            alt="The Jack Wharff Band"
            width={PHOTOS[1].width}
            height={PHOTOS[1].height}
            className="w-full h-auto rounded-sm"
            style={{ boxShadow: SHADOW }}
          />
        </div>

        {/* Photo C — middle-left, cool tones */}
        <div
          className={inView ? "photo-enter" : "photo-hidden"}
          style={{
            position: "absolute",
            top: "38%",
            left: "26%",
            width: "30%",
            animationDelay: `${DELAYS[2]}ms`,
          }}
        >
          <Image
            src={PHOTOS[2].src}
            alt="The Jack Wharff Band"
            width={PHOTOS[2].width}
            height={PHOTOS[2].height}
            className="w-full h-auto rounded-sm"
            style={{ boxShadow: SHADOW }}
          />
        </div>

        {/* Photo D — right, below B (pushed down for 32px+ breathing room) */}
        <div
          className={inView ? "photo-enter" : "photo-hidden"}
          style={{
            position: "absolute",
            top: "74%",
            right: "2%",
            width: "30%",
            animationDelay: `${DELAYS[3]}ms`,
          }}
        >
          <Image
            src={PHOTOS[3].src}
            alt="The Jack Wharff Band"
            width={PHOTOS[3].width}
            height={PHOTOS[3].height}
            className="w-full h-auto rounded-sm"
            style={{ boxShadow: SHADOW }}
          />
        </div>

        {/* Photo E — bottom-left, intimate portrait */}
        <div
          className={inView ? "photo-enter" : "photo-hidden"}
          style={{
            position: "absolute",
            top: "62%",
            left: "4%",
            width: "30%",
            animationDelay: `${DELAYS[4]}ms`,
          }}
        >
          <Image
            src={PHOTOS[4].src}
            alt="The Jack Wharff Band"
            width={PHOTOS[4].width}
            height={PHOTOS[4].height}
            className="w-full h-auto rounded-sm"
            style={{ boxShadow: SHADOW }}
          />
        </div>
      </div>

      {/* Mobile: stacked with alternating alignment */}
      <div className="md:hidden flex flex-col gap-8">
        <div className="self-start w-[80%] ml-[10px] mt-[10px]">
          <Image
            src={PHOTOS[0].src}
            alt="The Jack Wharff Band"
            width={PHOTOS[0].width}
            height={PHOTOS[0].height}
            className="w-full h-auto rounded-sm"
            style={{ boxShadow: SHADOW }}
          />
        </div>
        <div className="self-end w-[85%]">
          <Image
            src={PHOTOS[1].src}
            alt="The Jack Wharff Band"
            width={PHOTOS[1].width}
            height={PHOTOS[1].height}
            className="w-full h-auto rounded-sm"
            style={{ boxShadow: SHADOW }}
          />
        </div>
        <div className="self-start pl-3 w-[75%]">
          <Image
            src={PHOTOS[2].src}
            alt="The Jack Wharff Band"
            width={PHOTOS[2].width}
            height={PHOTOS[2].height}
            className="w-full h-auto rounded-sm"
            style={{ boxShadow: SHADOW }}
          />
        </div>
        <div className="self-end pr-3 w-[78%] -mt-16 relative z-10">
          <Image
            src={PHOTOS[3].src}
            alt="The Jack Wharff Band"
            width={PHOTOS[3].width}
            height={PHOTOS[3].height}
            className="w-full h-auto rounded-sm"
            style={{ boxShadow: SHADOW }}
          />
        </div>
        <div className="self-start w-[52%] -mt-4">
          <Image
            src={PHOTOS[4].src}
            alt="The Jack Wharff Band"
            width={PHOTOS[4].width}
            height={PHOTOS[4].height}
            className="w-full h-auto rounded-sm"
            style={{ boxShadow: SHADOW }}
          />
        </div>
      </div>
    </section>
  );
}
