interface PullQuoteProps {
  quote: string;
  attribution: string;
  style?: "italic-serif" | "display";
}

export default function PullQuote({
  quote,
  attribution,
  style = "italic-serif",
}: PullQuoteProps) {
  const isSerif = style === "italic-serif";

  return (
    <section data-bg="light" className="bg-cream py-20 md:py-32 px-6">
      <div className="mx-auto max-w-3xl text-center">
        <blockquote
          className={
            isSerif
              ? "font-serif italic text-ashbrown leading-snug"
              : "font-display uppercase tracking-wide text-ashbrown leading-snug"
          }
          style={{ fontSize: isSerif ? "clamp(28px, 4vw, 48px)" : "clamp(26px, 3.5vw, 44px)" }}
        >
          &ldquo;{quote}&rdquo;
        </blockquote>
        <p className="text-sm text-olive mt-6 tracking-wide">
          {attribution}
        </p>
      </div>
    </section>
  );
}
