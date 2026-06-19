"use client";

import Image from "next/image";

const RELEASES: {
  title: string;
  displayTitle: string;
  year: string;
  cover: string | null;
  href: string;
}[] = [
  {
    title: "Low Life",
    displayTitle: "low life",
    year: "2026",
    cover: "/covers/TJWB_LowLife_Cover.jpg",
    href: "#", // TODO: replace with smart link
  },
  {
    title: "Strange EP",
    displayTitle: "strange ep",
    year: "2026",
    cover: "/covers/TJWB_StrangeEP_Cover.jpg",
    href: "https://music.apple.com/us/album/strange-ep/1872448390",
  },
  {
    title: "A Month, A Week, A Day",
    displayTitle: "a month, a week, a day",
    year: "2026",
    cover: "/covers/TJWB_AMonthAWeek_Cover.jpg",
    href: "https://music.apple.com/us/album/a-month-a-week-a-day-single/1872724403",
  },
  {
    title: "Saved",
    displayTitle: "saved",
    year: "2025",
    cover: "/covers/TJWB_Saved_Cover.jpg",
    href: "https://music.apple.com/us/album/saved-single/1846230549",
  },
  {
    title: "Ole Virginia",
    displayTitle: "ole virginia",
    year: "2025",
    cover: "/covers/TJWB_OleVirginia_Cover.jpg",
    href: "https://music.apple.com/us/album/ole-virginia-single/1836071697",
  },
  {
    title: "Moonshine Man",
    displayTitle: "moonshine man",
    year: "2025",
    cover: "/covers/TJWB_MoonshineMan_Cover.jpg",
    href: "https://music.apple.com/us/album/moonshine-man-single/1825767418",
  },
  {
    title: "Richmond's Most Wanted EP",
    displayTitle: "richmond's most wanted ep",
    year: "2025",
    cover: "/covers/TJWB_RichmondsMostWantedEP_Cover.jpg",
    href: "https://music.apple.com/us/album/richmonds-most-wanted-ep/1818195046",
  },
  {
    title: "Richmond's Most Wanted",
    displayTitle: "richmond's most wanted",
    year: "2025",
    cover: "/covers/TJWB_RichmondsMostWanted_Cover.jpg",
    href: "https://open.spotify.com/artist/7Hw6prEoT6M58ChR8A1Rlz", // TODO: single link
  },
  {
    title: "Washed",
    displayTitle: "washed",
    year: "2025",
    cover: "/covers/TJWB_Washed_Cover.jpg",
    href: "https://open.spotify.com/track/0bgijbvBSiTi4slIRi1OwC",
  },
  {
    title: "Messed Up Kid",
    displayTitle: "messed up kid",
    year: "2024",
    cover: "/covers/TJWB_MessedUpKid_Cover.jpg",
    href: "https://open.spotify.com/artist/7Hw6prEoT6M58ChR8A1Rlz", // TODO: single link
  },
  {
    title: "Picture Perfect",
    displayTitle: "picture perfect",
    year: "2024",
    cover: "/covers/TJWB_PicturePerfect_Cover.jpg",
    href: "https://open.spotify.com/artist/7Hw6prEoT6M58ChR8A1Rlz", // TODO: single link
  },
  {
    title: "Burnin' It Down",
    displayTitle: "burnin' it down",
    year: "2024",
    cover: "/covers/TJWB_BurninItDown_Cover.jpg",
    href: "https://open.spotify.com/artist/7Hw6prEoT6M58ChR8A1Rlz", // TODO: single link
  },
  {
    title: "Richmond City Jail",
    displayTitle: "richmond city jail",
    year: "2024",
    cover: "/covers/TJWB_RichmondCityJail_Cover.jpg",
    href: "https://music.apple.com/us/album/richmond-city-jail-single/1746722507",
  },
  {
    title: "Tulips & Roses",
    displayTitle: "tulips & roses",
    year: "2023",
    cover: "/covers/TJWB_TulipsRoses_Cover.jpg",
    href: "https://music.apple.com/us/album/stay/1666946750",
  },
  {
    title: "All Mine",
    displayTitle: "all mine",
    year: "2023",
    cover: "/covers/TJWB_AllMine_Cover.jpg",
    href: "https://music.apple.com/us/album/all-mine-single/1708013709",
  },
];

const STREAMING = [
  { label: "Spotify", href: "https://open.spotify.com/artist/7Hw6prEoT6M58ChR8A1Rlz" },
  { label: "Apple Music", href: "https://music.apple.com/us/artist/jack-wharff/1627355124" },
  { label: "Amazon Music", href: "https://music.amazon.com/artists/B0B31QWLLY/jack-wharff" },
  { label: "Pandora", href: "https://pandora.app.link/rmPezVCuFOb" },
];

function ReleaseCard({ release }: { release: (typeof RELEASES)[number] }) {
  return (
    <a
      href={release.href}
      target="_blank"
      rel="noopener noreferrer"
      className="group block"
    >
      <div
        className="relative w-full overflow-hidden"
        style={{ aspectRatio: "1 / 1" }}
      >
        {release.cover ? (
          <Image
            src={release.cover}
            alt={`${release.title} cover art`}
            fill
            sizes="(max-width: 768px) 50vw, 25vw"
            className="object-cover transition-transform duration-300 group-hover:scale-105"
          />
        ) : (
          <div
            className="absolute inset-0 flex items-center justify-center p-6"
            style={{ backgroundColor: "#5B310D" }}
          >
            <p
              className="text-center uppercase"
              style={{
                fontFamily: "var(--font-display), serif",
                fontSize: "clamp(14px, 1.8vw, 20px)",
                color: "#EEF0E2",
                letterSpacing: "0.08em",
                lineHeight: 1.2,
              }}
            >
              {release.title}
            </p>
          </div>
        )}
      </div>
      <div className="mt-3 text-center">
        <p
          style={{
            fontFamily: "var(--font-serif-italic), serif",
            fontStyle: "italic",
            fontSize: "clamp(14px, 1.4vw, 18px)",
            color: "#EEF0E2",
            marginBottom: 2,
          }}
        >
          {release.displayTitle}
        </p>
        <p
          style={{
            fontFamily: "Arial, Helvetica, sans-serif",
            fontSize: "clamp(11px, 1vw, 13px)",
            color: "rgba(238, 240, 226, 0.5)",
          }}
        >
          {release.year}
        </p>
      </div>
    </a>
  );
}

export default function MusicPageContent() {
  return (
    <div style={{ backgroundColor: "#181912" }}>
      {/* Desktop: sticky video left + scrolling content right */}
      <div className="hidden md:flex" style={{ minHeight: "100vh" }}>
        {/* Left: music content */}
        <div
          className="w-1/2"
          style={{
            paddingTop: "14vh",
            paddingBottom: "10vh",
            paddingLeft: "4vw",
            paddingRight: "4vw",
          }}
        >
          <h1
            className="uppercase text-center"
            style={{
              fontFamily: "var(--font-display), serif",
              fontSize: "clamp(32px, 4vw, 64px)",
              color: "#EEF0E2",
              letterSpacing: "0.02em",
              marginBottom: 16,
            }}
          >
            Music
          </h1>

          <p
            className="text-center"
            style={{
              fontFamily: "var(--font-serif-italic), serif",
              fontStyle: "italic",
              fontSize: "clamp(16px, 1.4vw, 20px)",
              color: "rgba(238, 240, 226, 0.5)",
              marginBottom: 48,
            }}
          >
            the catalog
          </p>

          <div
            className="grid grid-cols-2"
            style={{ gap: "clamp(16px, 2vw, 24px)", marginBottom: 64 }}
          >
            {RELEASES.map((release) => (
              <ReleaseCard key={release.title} release={release} />
            ))}
          </div>

          {/* Streaming links */}
          <div className="text-center">
            <h2
              className="uppercase"
              style={{
                fontFamily: "var(--font-display), serif",
                fontSize: "clamp(18px, 2.5vw, 28px)",
                color: "#EEF0E2",
                letterSpacing: "0.02em",
                marginBottom: 24,
              }}
            >
              Stream Everywhere
            </h2>

            <div className="flex flex-wrap justify-center gap-4">
              {STREAMING.map((platform) => (
                <a
                  key={platform.label}
                  href={platform.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="music-stream-btn"
                  style={{
                    fontFamily: "var(--font-display), serif",
                    fontSize: 14,
                    letterSpacing: 2,
                    color: "#EEF0E2",
                    border: "1px solid #EEF0E2",
                    padding: "10px 24px",
                    textTransform: "uppercase",
                    transition: "background-color 300ms ease, color 300ms ease",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = "#EEF0E2";
                    e.currentTarget.style.color = "#181912";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = "transparent";
                    e.currentTarget.style.color = "#EEF0E2";
                  }}
                >
                  {platform.label}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Right: sticky video */}
        <div className="w-1/2 relative">
          <div className="sticky top-0 h-screen overflow-hidden">
            <video
              src="https://res.cloudinary.com/dgbiatexy/video/upload/f_auto,q_auto/v1781871953/TJWB_Music_hpts7g.mp4"
              autoPlay
              muted
              loop
              playsInline
              preload="metadata"
              className="absolute inset-0 w-full h-full object-cover"
            />
          </div>
        </div>
      </div>

      {/* Mobile: stacked layout */}
      <div className="md:hidden">
        {/* Video hero */}
        <div className="relative w-full" style={{ aspectRatio: "1 / 1" }}>
          <video
            src="https://res.cloudinary.com/dgbiatexy/video/upload/f_auto,q_auto/v1781871953/TJWB_Music_hpts7g.mp4"
            autoPlay
            muted
            loop
            playsInline
            className="absolute inset-0 w-full h-full object-cover"
          />
        </div>

        {/* Content */}
        <div
          style={{
            paddingTop: "8vh",
            paddingBottom: "8vh",
            paddingLeft: "6vw",
            paddingRight: "6vw",
          }}
        >
          <h1
            className="uppercase text-center"
            style={{
              fontFamily: "var(--font-display), serif",
              fontSize: "clamp(32px, 8vw, 64px)",
              color: "#EEF0E2",
              letterSpacing: "0.02em",
              marginBottom: 16,
            }}
          >
            Music
          </h1>

          <p
            className="text-center"
            style={{
              fontFamily: "var(--font-serif-italic), serif",
              fontStyle: "italic",
              fontSize: 16,
              color: "rgba(238, 240, 226, 0.5)",
              marginBottom: 40,
            }}
          >
            the catalog
          </p>

          <div
            className="grid grid-cols-2"
            style={{ gap: 16, marginBottom: 48 }}
          >
            {RELEASES.map((release) => (
              <ReleaseCard key={release.title} release={release} />
            ))}
          </div>

          {/* Streaming links */}
          <div className="text-center">
            <h2
              className="uppercase"
              style={{
                fontFamily: "var(--font-display), serif",
                fontSize: "clamp(18px, 5vw, 28px)",
                color: "#EEF0E2",
                letterSpacing: "0.02em",
                marginBottom: 24,
              }}
            >
              Stream Everywhere
            </h2>

            <div className="flex flex-wrap justify-center gap-3">
              {STREAMING.map((platform) => (
                <a
                  key={platform.label}
                  href={platform.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    fontFamily: "var(--font-display), serif",
                    fontSize: 13,
                    letterSpacing: 2,
                    color: "#EEF0E2",
                    border: "1px solid #EEF0E2",
                    padding: "8px 20px",
                    textTransform: "uppercase",
                  }}
                >
                  {platform.label}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
