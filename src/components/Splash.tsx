"use client";

import { useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

// Versioned so a new campaign re-shows the splash to everyone automatically.
// Bump the suffix when the release changes. sessionStorage, not localStorage:
// it should come back on a new session, not be dismissed forever.
const SPLASH_KEY = "jw_splash_tornupsweater";
const STREAM_LINK = "https://thejackwharffband.ffm.to/tornupsweater.OWE";

// The photo is the backdrop only, requested small since it is blurred beyond
// recognition anyway. The cover art is the sharp square.
const PHOTO = "/backgrounds/TheJackWharffBand_TornUpSweater_Photo.JPG";
const COVER = "/covers/TheJackWharffBand_TornUpSweater_Cover.jpg";

// Neutral grotesque for this campaign, matching the lowercase lockup on the
// Torn Up Sweater cover. System faces only, so nothing extra loads.
const LOCKUP_FONT = '"Helvetica Neue", Helvetica, Arial, sans-serif';

// Must match the #splash-overlay opacity transition in globals.css.
const EXIT_MS = 800;

export default function Splash() {
  const pathname = usePathname();

  // The pre-paint script in the root layout handles the first paint. This
  // handles client-side navigation, e.g. clicking the Terms link on the splash
  // itself. Someone who deep-links to a legal page is exempt but NOT marked as
  // entered, so reading the Terms is never treated as agreeing to them.
  useEffect(() => {
    const root = document.documentElement;
    if (root.classList.contains("splash-entered")) return;
    root.classList.toggle("splash-exempt", pathname.startsWith("/legal"));
  }, [pathname]);

  const enterSite = () => {
    try {
      sessionStorage.setItem(SPLASH_KEY, "1");
    } catch {
      /* private mode throws -- dismiss regardless */
    }
    const overlay = document.getElementById("splash-overlay");
    if (overlay) {
      // Fade first, then display: none. Flipping the class immediately would
      // hard-cut instead of dissolving.
      overlay.classList.add("is-exiting");
      window.setTimeout(() => {
        document.documentElement.classList.add("splash-entered");
      }, EXIT_MS);
    } else {
      document.documentElement.classList.add("splash-entered");
    }
  };

  return (
    <div
      id="splash-overlay"
      role="dialog"
      aria-modal="true"
      aria-label="Torn Up Sweater. New single from The Jack Wharff Band, out now"
    >
      {/* Decorative backdrop: the Torn Up Sweater photo, blown up, blurred
          and dimmed so the sharp cover art reads as the focal point.
          See the splash-backdrop rules in globals.css. */}
      <div className="splash-backdrop" aria-hidden="true">
        <Image
          src={PHOTO}
          alt=""
          fill
          loading="eager"
          sizes="50vw"
          className="splash-backdrop-photo"
        />
        <div className="splash-grain" />
      </div>

      <div className="splash-ready relative h-full w-full flex items-center justify-center px-6 py-10 md:px-12 overflow-y-auto">
        {/* Desktop: copy on the left, cover art large on the right. Mobile:
            cover stacks on top. The DOM keeps the copy first so screen
            readers hear the title before the image. */}
        <div
          className="flex flex-col-reverse md:flex-row items-center justify-center gap-8 md:gap-[5vw] w-full max-w-6xl text-white"
          style={{ fontFamily: LOCKUP_FONT }}
        >
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <div
              className="splash-rise"
              style={{
                animationDelay: "140ms",
                textShadow: "0 1px 18px rgba(0, 0, 0, 0.35)",
              }}
            >
              <p
                className="font-semibold lowercase leading-none tracking-[-0.015em] whitespace-nowrap"
                style={{ fontSize: "clamp(1.9rem, 3vw, 3.75rem)" }}
              >
                Torn Up Sweater
              </p>
              <p
                className="font-semibold lowercase leading-tight tracking-[-0.01em] mt-1.5"
                style={{ fontSize: "clamp(1rem, 1.35vw, 1.75rem)" }}
              >
                The Jack Wharff Band
              </p>
              <p
                className="font-medium lowercase tracking-[0.02em] mt-5 md:mt-6 opacity-80"
                style={{ fontSize: "clamp(0.85rem, 0.95vw, 1.1rem)" }}
              >
                Out Now
              </p>
            </div>

            <div
              className="splash-rise flex flex-col sm:flex-row gap-3 mt-8 md:mt-10 w-full sm:w-auto"
              style={{ animationDelay: "300ms" }}
            >
              <a
                href={STREAM_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto text-center bg-white text-black font-semibold lowercase text-sm px-10 py-3.5 hover:opacity-80 transition-opacity"
              >
                Listen Now
                <span className="sr-only"> (opens in new tab)</span>
              </a>
              <button
                type="button"
                onClick={enterSite}
                className="w-full sm:w-auto text-center border border-white bg-transparent text-white font-semibold lowercase text-sm px-10 py-3.5 cursor-pointer hover:opacity-70 transition-opacity"
              >
                Enter Site
              </button>
            </div>

            {/* Arbitration / class-action notice, directly under the entry
              buttons so no visitor can claim they had no notice of it. Each
              of the three phrases deep-links to its own section. */}
            <p
              className="splash-rise text-white text-[11px] leading-relaxed mt-8 max-w-[24rem]"
              style={
                {
                  animationDelay: "460ms",
                  "--rise-to": 0.8,
                } as React.CSSProperties
              }
            >
              By entering, you consent to our{" "}
              <Link
                href="/legal/terms"
                className="font-semibold underline underline-offset-2 hover:opacity-70"
              >
                Terms &amp; Conditions
              </Link>
              , including{" "}
              <Link
                href="/legal/terms#section-17"
                className="font-semibold underline underline-offset-2 hover:opacity-70"
              >
                binding arbitration
              </Link>{" "}
              and a{" "}
              <Link
                href="/legal/terms#class-action-waiver"
                className="font-semibold underline underline-offset-2 hover:opacity-70"
              >
                waiver of class action rights
              </Link>
              .
            </p>
          </div>

          {/* Sized off both axes so the art stays as large as possible
              without pushing the copy column off a short laptop screen. */}
          <div
            className="splash-rise relative shrink-0 aspect-square w-[min(72vw,340px)] md:w-[min(40vw,68vh,640px)] shadow-[0_16px_50px_rgba(0,0,0,0.4)]"
            style={{ animationDelay: "0ms" }}
          >
            <Image
              src={COVER}
              alt="Torn Up Sweater cover art: a torn sweater caught on a wire above a dumpster in a sunlit alley"
              fill
              loading="eager"
              sizes="(max-width: 768px) 72vw, 640px"
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
