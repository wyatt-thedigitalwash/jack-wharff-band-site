"use client";

import { useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

// Versioned so a new campaign re-shows the splash to everyone automatically.
// Bump the suffix when the release changes. sessionStorage, not localStorage:
// it should come back on a new session, not be dismissed forever.
const SPLASH_KEY = "jw_splash_smalltownheart";
const STREAM_LINK = "https://jackwharffband.ffm.to/smalltownheart.OWE";

// Official-video cutdowns hosted on Cloudinary: a vertical 15s loop for
// phones, the wide trailer for desktop. Both are the NoCTA "Web" encodes.
const VIDEO_DESKTOP =
  "https://res.cloudinary.com/dgbiatexy/video/upload/v1786645019/TheJackWharffBand_V_SmallTownHeart_OfficialVideo_YoutubeTrailer_Wide_17_NoCTA_V1_FNL_Web_tjx5ha.mp4";
const VIDEO_MOBILE =
  "https://res.cloudinary.com/dgbiatexy/video/upload/v1786645019/TheJackWharffBand_V_SmallTownHeart_OfficialVideo_Cutdowns_Vertical_15_NoCta_V1_FNL_Web_kbkqlv.mp4";

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
      aria-label="Small Town Heart. New single from The Jack Wharff Band"
    >
      {/* Decorative backdrop: the Small Town Heart video, muted and looping.
          Two encodes swapped by breakpoint, hidden with CSS rather than
          rendered conditionally so the server markup is right on first paint
          (a window check would flash the wrong one before hydration). See the
          splash-backdrop rules in globals.css. */}
      <div className="splash-backdrop" aria-hidden="true">
        <video
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          className="splash-backdrop-video hidden md:block"
        >
          <source src={VIDEO_DESKTOP} type="video/mp4" />
        </video>
        <video
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          className="splash-backdrop-video block md:hidden"
        >
          <source src={VIDEO_MOBILE} type="video/mp4" />
        </video>
        <div className="splash-grain" />
        <div className="splash-vignette" />
      </div>

      {/* splash-ready is static now: with no cover art to wait on, the rise
          cascade starts on load while the video streams in over the dark
          base. */}
      <div className="splash-ready relative h-full w-full flex items-center justify-center px-6 py-10 overflow-y-auto">
        {/* Single centred column: the video is the artwork now, so the copy
            sits alone over it at every breakpoint. */}
        <div className="flex flex-col items-center text-center w-full max-w-5xl">
          <div className="flex flex-col items-center">
            {/* Band logo as the eyebrow: brand mark above, release title
                below. The white PNG is used as a mask over a cream fill so
                the mark matches the title color exactly; no cream variant of
                the logo exists in /branding. */}
            <div
              className="splash-rise w-44 sm:w-52 md:w-60"
              style={{ animationDelay: "0ms" }}
            >
              <div
                role="img"
                aria-label="The Jack Wharff Band"
                className="w-full bg-cream"
                style={{
                  aspectRatio: "2419 / 686",
                  WebkitMaskImage:
                    "url(/branding/TJWB_LogoWhite_Horizontal.png)",
                  maskImage: "url(/branding/TJWB_LogoWhite_Horizontal.png)",
                  WebkitMaskSize: "contain",
                  maskSize: "contain",
                  WebkitMaskRepeat: "no-repeat",
                  maskRepeat: "no-repeat",
                  WebkitMaskPosition: "center",
                  maskPosition: "center",
                }}
              />
            </div>

            {/* Athelas roman, echoing the letterspaced serif on the cover
                itself rather than the typewriter display face. Sized to own
                the frame now that it carries the splash alone; the soft
                shadow keeps it separated from bright passages in the video. */}
            <p
              className="splash-rise font-athelas text-cream tracking-[0.08em] leading-[1.05] mt-4"
              style={
                {
                  animationDelay: "140ms",
                  fontSize: "clamp(3.25rem, 9vw, 7rem)",
                  textShadow: "0 2px 28px rgba(8, 8, 8, 0.55)",
                } as React.CSSProperties
              }
            >
              Small Town Heart
            </p>

            <div
              className="splash-rise flex flex-col sm:flex-row gap-3 mt-10 w-full sm:w-auto"
              style={{ animationDelay: "300ms" }}
            >
              <a
                href={STREAM_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto text-center bg-russet text-cream font-athelas uppercase tracking-[0.2em] text-xs px-10 py-4 hover:opacity-80 transition-opacity"
              >
                Listen Now
                <span className="sr-only"> (opens in new tab)</span>
              </a>
              <button
                type="button"
                onClick={enterSite}
                className="w-full sm:w-auto text-center border border-cream bg-transparent text-cream font-athelas uppercase tracking-[0.2em] text-xs px-10 py-4 cursor-pointer hover:opacity-70 transition-opacity"
              >
                Enter Site
              </button>
            </div>

            {/* Arbitration / class-action notice, directly under the entry
                buttons so no visitor can claim they had no notice of it. Each
                of the three phrases deep-links to its own section. */}
            <p
              className="splash-rise font-athelas text-cream text-[11px] leading-relaxed mt-8 max-w-[26rem]"
              style={
                {
                  animationDelay: "460ms",
                  "--rise-to": 0.7,
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
        </div>
      </div>
    </div>
  );
}
