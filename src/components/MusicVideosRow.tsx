import Link from "next/link";

const CARDS = [
  { title: "Music", subtitle: "the catalog", href: "/music", video: "/videos/TJWB_Videos.m4v" },
  { title: "Videos", subtitle: "the live cuts", href: "/videos", video: "/videos/TJWB_Music.m4v" },
];

export default function MusicVideosRow() {
  return (
    <section
      className="w-full"
      style={{
        backgroundColor: "#EEF0E2",
        padding: "clamp(20px, 4vw, 36px)",
        paddingTop: "clamp(20px, 4vw, 36px)",
      }}
    >
      <div
        className="grid grid-cols-1 md:grid-cols-2"
        style={{ gap: "clamp(20px, 4vw, 36px)" }}
      >
        {CARDS.map((card) => (
          <Link
            key={card.title}
            href={card.href}
            className="relative block cursor-pointer overflow-hidden music-videos-card"
            style={{ aspectRatio: "1 / 1" }}
          >
            <video
              src={card.video}
              autoPlay
              muted
              loop
              playsInline
              className="absolute inset-0 w-full h-full object-cover pointer-events-none"
            />
            <div
              className="music-videos-card-overlay absolute inset-0 z-[1]"
              style={{
                backgroundColor: "rgba(0, 0, 0, 0.35)",
                transition: "background-color 300ms ease",
              }}
            />
            <div className="absolute inset-0 z-[2] flex flex-col items-center justify-center">
              <span
                className="uppercase text-center"
                style={{
                  fontFamily: "var(--font-display), serif",
                  fontSize: "clamp(32px, 4vw, 64px)",
                  letterSpacing: 2,
                  color: "#EEF0E2",
                }}
              >
                {card.title}
              </span>
              <span
                className="text-center"
                style={{
                  fontFamily: "var(--font-serif-italic), serif",
                  fontStyle: "italic",
                  fontWeight: 400,
                  fontSize: "clamp(16px, 1.4vw, 22px)",
                  color: "#EEF0E2",
                  marginTop: 12,
                }}
              >
                {card.subtitle}
              </span>
            </div>
          </Link>
        ))}
      </div>
      <style>{`
        @media (hover: hover) and (pointer: fine) {
          .music-videos-card:hover .music-videos-card-overlay {
            background-color: rgba(0, 0, 0, 0.5) !important;
          }
        }
      `}</style>
    </section>
  );
}
