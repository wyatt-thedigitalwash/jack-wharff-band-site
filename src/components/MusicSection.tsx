export default function MusicSection() {
  return (
    <section
      className="w-full"
      style={{
        backgroundColor: "var(--brand-black)",
        paddingTop: "12vh",
        paddingBottom: "12vh",
      }}
    >
      {/* TODO: Music section content (Spotify artist embed, streaming platform links, or featured release grid). Pending decision. */}
      <div className="mx-auto px-6 md:px-8 text-center" style={{ maxWidth: 1200 }}>
        <h2
          className="uppercase"
          style={{
            fontFamily: "var(--font-display), serif",
            fontSize: "clamp(40px, 6vw, 72px)",
            color: "var(--brand-yellow)",
            marginBottom: 16,
          }}
        >
          Music
        </h2>
        <p
          style={{
            fontFamily: "var(--font-sans)",
            fontSize: 16,
            color: "rgba(212, 183, 115, 0.7)",
          }}
        >
          Listen on all major streaming platforms
        </p>
      </div>
    </section>
  );
}
