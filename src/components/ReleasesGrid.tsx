import Image from "next/image";

// Leads with the current release, which is also what the splash promotes. Keep
// these two in step: if the campaign moves on, the splash and this grid should
// change together rather than pointing at different releases.
const RELEASES: {
  title: string;
  subtitle: string;
  cover: string;
  href: string;
  cta?: string;
}[] = [
  {
    title: "Coming Home",
    subtitle: "coming home",
    cover: "/covers/TheJackWharffBand_ComingHome_Cover.jpg",
    href: "https://thejackwharffband.ffm.to/cominghome.OWE",
    cta: "Pre-Save",
  },
  {
    title: "Torn Up Sweater",
    subtitle: "torn up sweater",
    cover: "/covers/TheJackWharffBand_TornUpSweater_Cover.jpg",
    href: "https://thejackwharffband.ffm.to/tornupsweater.OWE",
  },
  {
    title: "Small Town Heart",
    subtitle: "small town heart",
    cover: "/covers/TheJackWharffBand_SmallTownHeart_Cover.jpg",
    href: "https://jackwharffband.ffm.to/smalltownheart.OWE",
  },
];

export default function ReleasesGrid() {
  return (
    <section
      aria-label="Latest releases"
      className="w-full"
      style={{
        backgroundColor: "var(--brand-black)",
        padding: "clamp(20px, 4vw, 36px)",
      }}
    >
      <style>{`
        @media (hover: hover) and (pointer: fine) {
          .release-card:hover .release-card-overlay {
            background-color: rgba(0, 0, 0, 0.5) !important;
          }
        }
        /* Mobile: match MusicVideosRow card title size (both are full-width squares) */
        @media (max-width: 767px) {
          .release-card-title {
            font-size: 32px !important;
          }
        }
      `}</style>
      <div
        className="grid grid-cols-1 md:grid-cols-3"
        style={{ gap: "clamp(20px, 4vw, 36px)" }}
      >
        {RELEASES.map((release) => (
          <a
            key={release.title}
            href={release.href}
            target="_blank"
            rel="noopener noreferrer"
            className="release-card relative block cursor-pointer"
            style={{ aspectRatio: "1 / 1" }}
          >
            <Image
              src={release.cover}
              alt={`${release.title} cover art`}
              fill
              sizes="(max-width: 768px) 100vw, 33vw"
              className="object-cover"
            />
            <div
              className="release-card-overlay absolute inset-0 z-[1]"
              style={{
                backgroundColor: "rgba(0, 0, 0, 0.35)",
                transition: "background-color 300ms ease",
              }}
            />
            <div className="absolute inset-0 z-[2] flex flex-col items-center justify-center">
              <span
                className="release-card-title uppercase text-center"
                style={{
                  fontFamily: "var(--font-display), serif",
                  fontSize: "clamp(20px, 2.5vw, 36px)",
                  letterSpacing: 2,
                  color: "var(--brand-white)",
                }}
              >
                {release.cta ?? "Listen Now"}
              </span>
              <span
                style={{
                  fontFamily: "var(--font-serif-italic), serif",
                  fontWeight: 400,
                  fontSize: "clamp(16px, 1.4vw, 22px)",
                  color: "var(--brand-yellow)",
                  marginTop: 6,
                }}
              >
                {release.subtitle}
              </span>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}
