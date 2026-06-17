export default function MusicSection() {
  return (
    <section
      className="w-full"
      style={{
        backgroundColor: "#181912",
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
            color: "#EEF0E2",
            marginBottom: 16,
          }}
        >
          Music
        </h2>
        <p
          style={{
            fontFamily: "Arial, Helvetica, sans-serif",
            fontSize: 16,
            color: "#797D68",
          }}
        >
          Listen on all major streaming platforms
        </p>
      </div>
    </section>
  );
}
