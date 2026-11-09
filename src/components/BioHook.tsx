import Link from "next/link";

interface BioHookProps {
  text: string;
  ctaLabel: string;
  ctaHref: string;
}

export default function BioHook({ text, ctaLabel, ctaHref }: BioHookProps) {
  return (
    <section data-bg="dark" className="bg-brand-black py-20 md:py-28 px-6">
      <div className="mx-auto max-w-2xl text-center">
        <p className="text-xl md:text-2xl leading-relaxed text-brand-yellow">
          {text}
        </p>
        <div className="mt-8">
          <Link
            href={ctaHref}
            className="font-display uppercase text-sm tracking-wider text-brand-yellow hover:opacity-75 transition-opacity"
          >
            {ctaLabel}
          </Link>
        </div>
      </div>
    </section>
  );
}
