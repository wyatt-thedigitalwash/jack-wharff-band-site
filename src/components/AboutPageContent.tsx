import Image from "next/image";

const MEMBERS = [
  { name: "Jack Wharff", role: "Vocals" },
  { name: "Garrett Howell", role: "Drums" },
  { name: "Ryan Atchison", role: "Bass" },
  { name: "Evan Novoa", role: "Guitar" },
];

export default function AboutPageContent() {
  return (
    <div style={{ backgroundColor: "#EEF0E2", minHeight: "100vh" }}>
      {/* Hero image */}
      <div className="relative w-full" style={{ height: "70vh", minHeight: 400 }}>
        <Image
          src="/backgrounds/TJWB_AboutHeader.jpg"
          alt="The Jack Wharff Band"
          fill
          sizes="100vw"
          className="object-cover"
          priority
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to bottom, rgba(24, 25, 18, 0.3) 0%, rgba(24, 25, 18, 0) 40%, rgba(24, 25, 18, 0.4) 100%)",
          }}
        />
      </div>

      {/* Bio section */}
      <div
        className="mx-auto px-6 md:px-8"
        style={{
          maxWidth: 900,
          paddingTop: "8vh",
          paddingBottom: "6vh",
        }}
      >
        <h1
          className="uppercase text-center"
          style={{
            fontFamily: "var(--font-display), serif",
            fontSize: "clamp(32px, 5vw, 64px)",
            color: "#4B3728",
            letterSpacing: "0.02em",
            marginBottom: 40,
          }}
        >
          The Jack Wharff Band
        </h1>

        <p
          className="text-center"
          style={{
            fontFamily: "Arial, Helvetica, sans-serif",
            fontSize: "clamp(16px, 1.4vw, 18px)",
            lineHeight: 1.7,
            color: "#4B3728",
          }}
        >
          Hailing from Richmond, Virginia, The Jack Wharff Band play a strikingly unique blend of bluegrass, Country and rock. Known for their electric live performances, masterful instrumentation, and their ability to make music that consistently defies the confines of genre, the young band burst onto the scene last year with snippets of jaw-dropping original songs posted to TikTok and Reels. Comprised of vocalist/frontman Jack Wharff, drummer Garrett Howell, bassist Ryan Atchison and guitarist Evan Novoa, the salt of the earth four-piece have quickly captivated audiences with their infectious energy and unrelenting passion for the craft. The band has taken everything that has come their way in stride – viral videos of their original songs, a record deal with Big Machine Records, a move to Music City and more – earning a loyal following along the way. With an unparalleled ability to command an audience with vibrant stage presence far beyond their years and toe-tapping anthems that beg to be sung along to, it's clear that this is just the beginning for The Jack Wharff Band.
        </p>
      </div>

      {/* Members */}
      <div
        className="mx-auto px-6 md:px-8"
        style={{
          maxWidth: 900,
          paddingBottom: "10vh",
        }}
      >
        <h2
          className="uppercase text-center"
          style={{
            fontFamily: "var(--font-display), serif",
            fontSize: "clamp(20px, 3vw, 32px)",
            color: "#4B3728",
            letterSpacing: "0.02em",
            marginBottom: 32,
          }}
        >
          The Band
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {MEMBERS.map((member) => (
            <div key={member.name} className="text-center">
              <p
                className="uppercase"
                style={{
                  fontFamily: "var(--font-display), serif",
                  fontSize: "clamp(14px, 1.4vw, 18px)",
                  color: "#4B3728",
                  marginBottom: 4,
                }}
              >
                {member.name}
              </p>
              <p
                style={{
                  fontFamily: "var(--font-serif-italic), serif",
                  fontStyle: "italic",
                  fontSize: "clamp(13px, 1.2vw, 16px)",
                  color: "#797D68",
                }}
              >
                {member.role}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
