export default function ParallaxVideoInterlude() {
  return (
    <section
      className="w-full"
      style={{
        backgroundColor: "#EEF0E2",
        paddingLeft: "clamp(20px, 4vw, 60px)",
        paddingRight: "clamp(20px, 4vw, 60px)",
        paddingBottom: "clamp(20px, 4vw, 60px)",
      }}
    >
      <video
        src="/videos/JackWharff_BannerDesktop.m4v"
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        className="w-full h-auto"
      />
    </section>
  );
}
