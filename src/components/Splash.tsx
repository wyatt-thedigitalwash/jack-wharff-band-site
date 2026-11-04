"use client";

import { useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

// Versioned so a new campaign re-shows the splash to everyone automatically.
// Bump the suffix when the release changes. sessionStorage, not localStorage:
// it should come back on a new session, not be dismissed forever.
const SPLASH_KEY = "jw_splash_cominghome";
const PRESAVE_LINK = "https://thejackwharffband.ffm.to/cominghome.OWE";

// The album cover photo without its type. The lockup is laid over it
// separately so it stays sharp at any size and the photo can crop freely.
const PHOTO = "/backgrounds/TheJackWharffBand_ComingHome_Photo.jpg";
const LOCKUP = "/branding/TheJackWharffBand_ComingHome_Lockup.png";

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
      aria-label="Coming Home. New album from The Jack Wharff Band, out December 4"
    >
      <div className="splash-backdrop" aria-hidden="true">
        <Image
          src={PHOTO}
          alt=""
          fill
          loading="eager"
          sizes="100vw"
          className="splash-backdrop-photo"
        />
      </div>

      {/* Lockup and date over the roofline, sitting right of centre as on
          the cover; pre-save and entry at the foot. On phones the photo is
          always cropped to full height, so the roof sits at a fixed point and
          the lockup is pinned just below it. Wider screens split the free
          height 2:1 instead. Either way the column scrolls rather than
          overlapping on short screens. */}
      <div className="splash-ready relative h-full w-full overflow-y-auto">
        <div className="min-h-full flex flex-col items-center px-6 pb-[4vh] text-white font-sangam">
          <div className="shrink-0 h-[48svh] md:h-auto md:shrink md:flex-[2] md:min-h-16" />

          {/* Lockup and release date move as one, so the date stays centred
              under the lockup's offset rather than the screen. */}
          <div className="flex flex-col items-center w-[64vw] md:w-[min(41vw,900px)] translate-x-[10vw] md:translate-x-[6.5vw]">
            <div
              className="splash-rise relative w-full"
              style={{ aspectRatio: "3262 / 606", animationDelay: "0ms" }}
            >
              <Image
                src={LOCKUP}
                alt="Coming Home, The Jack Wharff Band"
                fill
                loading="eager"
                sizes="(max-width: 768px) 64vw, 41vw"
                className="object-contain"
              />
            </div>
            <p
              className="splash-rise mt-4 md:mt-[1.6vw]"
              style={{
                animationDelay: "160ms",
                fontSize: "clamp(16px, 1.5vw, 28px)",
                textShadow: "0 1px 14px rgba(0, 0, 0, 0.5)",
              }}
            >
              out december 4
            </p>
          </div>

          <div className="flex-1 min-h-10" />

          <div className="flex flex-col items-center text-center">
            <div
              className="splash-rise flex flex-col sm:flex-row gap-3 w-full sm:w-auto"
              style={{ animationDelay: "300ms" }}
            >
              <a
                href={PRESAVE_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto text-center bg-white text-black border border-white text-sm tracking-[0.04em] px-8 py-3 hover:opacity-80 transition-opacity"
              >
                pre-save/pre-order now
                <span className="sr-only"> (opens in new tab)</span>
              </a>
              <button
                type="button"
                onClick={enterSite}
                className="w-full sm:w-auto text-center border border-white/70 text-sm tracking-[0.04em] px-8 py-3 cursor-pointer hover:bg-white hover:text-black transition-colors"
              >
                enter site
              </button>
            </div>

            {/* Arbitration / class-action notice, directly under the entry
                button so no visitor can claim they had no notice of it. Each
                of the three phrases deep-links to its own section. */}
            <p
              className="splash-rise text-[11px] leading-relaxed mt-5 max-w-[24rem]"
              style={
                {
                  animationDelay: "440ms",
                  "--rise-to": 0.8,
                } as React.CSSProperties
              }
            >
              By entering, you consent to our{" "}
              <Link
                href="/legal/terms"
                className="underline underline-offset-2 hover:opacity-70"
              >
                Terms &amp; Conditions
              </Link>
              , including{" "}
              <Link
                href="/legal/terms#section-17"
                className="underline underline-offset-2 hover:opacity-70"
              >
                binding arbitration
              </Link>{" "}
              and a{" "}
              <Link
                href="/legal/terms#class-action-waiver"
                className="underline underline-offset-2 hover:opacity-70"
              >
                waiver of class action rights
              </Link>
              .
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
