export default function MusicVideo() {
  return (
    <section
      className="w-full"
      style={{
        backgroundColor: "#EEF0E2",
        paddingTop: "8vh",
        paddingBottom: "8vh",
      }}
    >
      <div
        className="mx-auto w-[92%] md:w-[85%]"
        style={{
          maxWidth: 1200,
          aspectRatio: "16 / 9",
          boxShadow: "0 20px 60px rgba(75, 55, 40, 0.25)",
          position: "relative",
        }}
      >
        <iframe
          src="https://www.youtube-nocookie.com/embed/SxB1zpzQFdE"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
          loading="lazy"
          title="The Jack Wharff Band music video"
          className="absolute inset-0 w-full h-full border-0"
        />
      </div>
    </section>
  );
}
