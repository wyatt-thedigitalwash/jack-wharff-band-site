"use client";

import Image from "next/image";

interface JukeboxStripProps {
  code: string;
  title: string;
  subtitle: string;
  coverSrc: string;
  href: string;
  isNew?: boolean;
}

function ChevronRight({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <path d="m9 18 6-6-6-6" />
    </svg>
  );
}

export default function JukeboxStrip({
  code,
  title,
  subtitle,
  coverSrc,
  href,
  isNew,
}: JukeboxStripProps) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="group relative flex items-center gap-4 md:gap-5 p-4 rounded-[3px] transition-all duration-250 ease-out hover:-translate-y-0.5"
      style={{
        backgroundColor: "#5E4838",
        boxShadow: "0 4px 12px -2px rgba(0, 0, 0, 0.35)",
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.boxShadow = "0 8px 20px -2px rgba(0, 0, 0, 0.5)";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.boxShadow = "0 4px 12px -2px rgba(0, 0, 0, 0.35)";
      }}
    >
      {/* NEW badge */}
      {isNew && (
        <span
          className="absolute font-display uppercase text-cream text-sm tracking-wider px-3 py-1 rounded-[2px]"
          style={{
            top: -8,
            right: -8,
            backgroundColor: "#5B310D",
            transform: "rotate(5deg)",
            boxShadow: "0 2px 6px rgba(0, 0, 0, 0.4)",
            zIndex: 10,
          }}
        >
          New
        </span>
      )}

      {/* Code chip */}
      <span
        className="shrink-0 flex items-center justify-center bg-russet text-cream font-display rounded-[3px] w-[50px] h-[50px] text-2xl md:w-[60px] md:h-[60px] md:text-[30px] transition-all duration-250 group-hover:brightness-85"
      >
        {code}
      </span>

      {/* Cover thumbnail */}
      <div
        className="shrink-0 w-20 h-20 md:w-24 md:h-24 rounded-[2px] overflow-hidden"
        style={{
          boxShadow: "inset 0 2px 6px rgba(0, 0, 0, 0.3)",
        }}
      >
        <Image
          src={coverSrc}
          alt={`${title} cover art`}
          width={96}
          height={96}
          className="w-full h-full object-cover"
        />
      </div>

      {/* Title stack */}
      <div className="flex-1 min-w-0">
        <p className="font-display text-[22px] md:text-[28px] uppercase tracking-wide text-cream truncate leading-tight">
          {title}
        </p>
        <p className="text-[13px] md:text-sm text-olive mt-0.5 truncate">
          {subtitle}
        </p>
      </div>

      {/* Selection arrow */}
      <ChevronRight className="shrink-0 w-[22px] h-[22px] text-olive transition-colors duration-250 group-hover:text-russet" />
    </a>
  );
}
