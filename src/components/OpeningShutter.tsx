import Image from "next/image";

export default function OpeningShutter() {
  return (
    <section
      className="relative w-full overflow-hidden"
      style={{ height: "100vh", backgroundColor: "#0a0a0a" }}
    >
      {/* Desktop: static image */}
      <div className="hidden md:block absolute inset-0">
        <Image
          src="/backgrounds/TJWB_HomeHero.jpg"
          alt="The Jack Wharff Band"
          fill
          sizes="100vw"
          className="object-cover"
          priority
        />
      </div>

      {/* Mobile: video */}
      <div className="block md:hidden absolute inset-0">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
          poster="/backgrounds/TJWB_AboutHeader.webp"
        >
          <source
            src="https://media.thedigitalwash.com/the-jack-wharff-band/TJWB_MobileHero_hbhucz.mp4"
            type="video/mp4"
          />
        </video>
      </div>

      {/* Logo overlay */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-10">
        <div
          className="relative w-[55vw] md:w-[35vw]"
          style={{ aspectRatio: "1 / 1" }}
        >
          <Image
            src="/branding/TJWB_LogoWhite.png"
            alt="The Jack Wharff Band logo"
            fill
            sizes="(max-width: 768px) 55vw, 35vw"
            className="object-contain"
          />
        </div>
      </div>
    </section>
  );
}
