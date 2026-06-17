export default function AboutTeaser() {
  return (
    <section
      className="w-full"
      style={{
        backgroundColor: "#EEF0E2",
        paddingTop: "10vh",
        paddingBottom: "10vh",
      }}
    >
      <div className="mx-auto px-6 md:px-8" style={{ maxWidth: 720 }}>
        <h2
          className="uppercase text-center"
          style={{
            fontFamily: "var(--font-display), serif",
            color: "#4B3728",
            marginBottom: 32,
          }}
        >
          <span style={{ fontSize: "clamp(18px, 3vw, 28px)", display: "block" }}>
            About
          </span>
          <span style={{ fontSize: "clamp(32px, 5vw, 56px)", display: "block" }}>
            The Jack Wharff Band
          </span>
        </h2>
        <p
          className="text-center"
          style={{
            fontFamily: "Arial, Helvetica, sans-serif",
            fontSize: "clamp(16px, 1.5vw, 18px)",
            lineHeight: 1.6,
            color: "#4B3728",
          }}
        >
          Hailing from Richmond, Virginia, The Jack Wharff Band play a strikingly unique blend of bluegrass, Country and rock. Known for their electric live performances, masterful instrumentation, and their ability to make music that consistently defies the confines of genre, the young band burst onto the scene last year with snippets of jaw-dropping original songs posted to TikTok and Reels. Comprised of vocalist/frontman Jack Wharff, drummer Garrett Howell, bassist Ryan Atchison and guitarist Evan Novoa, the salt of the earth four-piece have quickly captivated audiences with their infectious energy and unrelenting passion for the craft. The band has taken everything that has come their way in stride – viral videos of their original songs, a record deal with Big Machine Records, a move to Music City and more – earning a loyal following along the way. With an unparalleled ability to command an audience with vibrant stage presence far beyond their years and toe-tapping anthems that beg to be sung along to, it's clear that this is just the beginning for The Jack Wharff Band.
        </p>
      </div>
    </section>
  );
}
