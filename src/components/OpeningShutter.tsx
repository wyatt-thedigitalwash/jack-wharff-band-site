import Image from "next/image";
import Wordmark from "./Wordmark";

export default function OpeningShutter() {
  return (
    <section
      className="relative w-full overflow-hidden"
      style={{ height: "100vh", backgroundColor: "var(--brand-black)" }}
    >
      {/* Poster frames (shown until the video starts) */}
      <Image
        src="/backgrounds/TJWB_TornUpSweater_HeroPoster_Horizontal.jpg"
        alt=""
        fill
        sizes="100vw"
        className="object-cover hidden md:block"
        priority
      />
      <Image
        src="/backgrounds/TJWB_TornUpSweater_HeroPoster_Vertical.jpg"
        alt=""
        fill
        sizes="100vw"
        className="object-cover md:hidden"
        priority
      />

      {/* Video: one element, so each device only downloads its own cut */}
      {/* The horizontal cut is a 4:3 picture pillarboxed inside a 16:9 frame
          (bars at x 0-240 and 1680-1920). On desktop the element is sized so
          that 4:3 picture covers the viewport exactly, which pushes the baked-in
          bars off screen with the least extra crop:
            picture width = max(100vw, 133.33vh) (4:3 cover)
            element width = picture width * 4/3, height = picture width * 3/4
          Mobile plays the vertical cut, which has no bars, so it uses plain cover. */}
      <video
        autoPlay
        muted
        loop
        playsInline
        aria-label="Torn Up Sweater visualizer"
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full object-cover md:max-w-none md:w-[max(133.334vw,177.778vh)] md:h-[max(75vw,100vh)]"
      >
        <source
          media="(min-width: 768px)"
          src="https://media.thedigitalwash.com/the-jack-wharff-band/TheJackWharffBand_V_TornUpSweater_VisualizerOp1_Horizontal_FNL.mp4"
          type="video/mp4"
        />
        <source
          src="https://media.thedigitalwash.com/the-jack-wharff-band/TheJackWharffBand_V_TornUpSweater_VisualizerOp1_Vertical_FNL.mp4"
          type="video/mp4"
        />
      </video>

      {/* Wordmark + campaign CTAs */}
      <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none z-10 px-6">
        <Wordmark
          className="w-[86vw] md:w-[58vw] max-w-[1100px] h-auto text-brand-white"
          style={{ filter: "drop-shadow(0 2px 12px rgba(35, 31, 32, 0.6))" }}
        />

        {/* Same smart links as the release grid and splash: update all three
            together when the campaign moves on. Once Coming Home is out, drop
            the pre-save and point the primary button at the album. */}
        <div className="pointer-events-auto mt-10 md:mt-12 flex flex-col md:flex-row items-stretch md:items-center gap-3 md:gap-4 w-full max-w-[280px] md:w-auto md:max-w-none">
          <a
            href="https://thejackwharffband.ffm.to/tornupsweater.OWE"
            target="_blank"
            rel="noopener noreferrer"
            className="hero-cta hero-cta-primary"
          >
            Listen to Torn Up Sweater
            <span className="sr-only"> (opens in new tab)</span>
          </a>
          <a
            href="https://thejackwharffband.ffm.to/cominghome.OWE"
            target="_blank"
            rel="noopener noreferrer"
            className="hero-cta hero-cta-secondary"
          >
            Pre-save Coming Home
            <span className="sr-only"> (opens in new tab)</span>
          </a>
        </div>
      </div>
    </section>
  );
}
