import Image from "next/image";

export default function AboutSection() {
  return (
    <section
      className="w-full"
      style={{
        backgroundColor: "#EEF0E2",
        padding: "clamp(20px, 4vw, 36px)",
        paddingTop: 0,
      }}
    >
      <div
        className="grid grid-cols-1 md:grid-cols-2"
        style={{ gap: "clamp(20px, 4vw, 36px)" }}
      >
        {/* Left — text content */}
        <div
          className="flex flex-col justify-center text-center md:text-left"
          style={{
            aspectRatio: "1 / 1",
            padding: "clamp(24px, 4vw, 48px)",
          }}
        >
          <h2
            className="uppercase"
            style={{
              fontFamily: "var(--font-display), serif",
              fontSize: "clamp(28px, 3.5vw, 48px)",
              color: "#4B3728",
              marginBottom: 24,
            }}
          >
            The Jack Wharff Band
          </h2>
          <p
            style={{
              fontFamily: "Arial, Helvetica, sans-serif",
              fontSize: "clamp(14px, 1.2vw, 17px)",
              lineHeight: 1.6,
              color: "#4B3728",
            }}
          >
            Hailing from Richmond, Virginia, The Jack Wharff Band play a strikingly unique blend of bluegrass, Country and rock. Known for their electric live performances, masterful instrumentation, and their ability to make music that consistently defies the confines of genre, the young band burst onto the scene last year with snippets of jaw-dropping original songs posted to TikTok and Reels. Comprised of vocalist/frontman Jack Wharff, drummer Garrett Howell, bassist Ryan Atchison and guitarist Evan Novoa, the salt of the earth four-piece have quickly captivated audiences with their infectious energy and unrelenting passion for the craft. The band has taken everything that has come their way in stride – viral videos of their original songs, a record deal with Big Machine Records, a move to Music City and more – earning a loyal following along the way. With an unparalleled ability to command an audience with vibrant stage presence far beyond their years and toe-tapping anthems that beg to be sung along to, it's clear that this is just the beginning for The Jack Wharff Band.
          </p>
        </div>

        {/* Right — image */}
        <div className="relative" style={{ aspectRatio: "1 / 1" }}>
          <Image
            src="/other/TJWB_About.jpg"
            alt="The Jack Wharff Band"
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            className="object-cover"
          />
        </div>
      </div>
    </section>
  );
}
