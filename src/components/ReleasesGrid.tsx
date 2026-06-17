import Image from "next/image";

const RELEASES = [
  {
    title: "Low Life",
    cover: "/covers/TJWB_LowLife_Cover.jpg",
    // TODO: Replace with Low Life smart link once available from BMLG
    href: "#",
  },
  {
    title: "Strange EP",
    cover: "/covers/TJWB_StrangeEP_Cover.jpg",
    href: "https://jackwharff.lnk.to/strangeEPWE",
  },
  {
    title: "Saved",
    cover: "/covers/TJWB_Saved_Cover.jpg",
    href: "https://jackwharff.lnk.to/savedWE",
  },
];

export default function ReleasesGrid() {
  return (
    <section
      className="w-full"
      style={{
        backgroundColor: "#EEF0E2",
        padding: "clamp(20px, 4vw, 60px)",
      }}
    >
      <style>{`
        @media (hover: hover) and (pointer: fine) {
          .release-card:hover .release-card-overlay {
            background-color: rgba(0, 0, 0, 0.5);
          }
        }
      `}</style>
      <div
        className="grid grid-cols-1 md:grid-cols-3"
        style={{ gap: "clamp(20px, 4vw, 60px)" }}
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
            <div className="absolute inset-0 z-[2] flex items-center justify-center">
              <span
                className="uppercase text-center"
                style={{
                  fontFamily: "var(--font-display), serif",
                  fontSize: "clamp(20px, 2.5vw, 36px)",
                  letterSpacing: 2,
                  color: "#EEF0E2",
                }}
              >
                Listen Now
              </span>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}
