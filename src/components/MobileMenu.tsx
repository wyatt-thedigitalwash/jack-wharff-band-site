"use client";

import { useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

interface NavLink {
  href: string;
  label: string;
  external?: boolean;
}

interface Social {
  href: string;
  label: string;
  Icon: React.ComponentType<{ className?: string }>;
}

interface MobileMenuProps {
  open: boolean;
  onClose: () => void;
  pathname: string;
  navLinks: NavLink[];
  socials: Social[];
}

export default function MobileMenu({
  open,
  onClose,
  pathname,
  navLinks,
  socials,
}: MobileMenuProps) {
  // Lock body scroll when open
  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <div
      className={`fixed inset-0 z-[100] bg-darkgreen transition-opacity duration-300 ${
        open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
      }`}
      aria-hidden={!open}
    >
      <div className="flex flex-col h-full px-6 py-4">
        {/* Close button */}
        <div className="flex justify-end">
          <button
            type="button"
            onClick={onClose}
            className="text-cream p-1"
            aria-label="Close menu"
          >
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              className="w-6 h-6"
              aria-hidden="true"
            >
              <path d="M18 6L6 18M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Stacked logo */}
        <div className="flex justify-center mt-4">
          <Image
            src="/branding/TJWB_LogoWhite.png"
            alt="The Jack Wharff Band"
            width={200}
            height={200}
            className="h-40 w-auto"
          />
        </div>

        {/* Nav links */}
        <nav className="flex flex-col items-center gap-5 mt-10">
          {navLinks.map(({ href, label, external }) =>
            external ? (
              <a
                key={href}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                onClick={onClose}
                className="font-display text-2xl uppercase tracking-wider text-cream hover:text-russet transition-colors"
              >
                {label}
              </a>
            ) : (
              <Link
                key={href}
                href={href}
                onClick={onClose}
                className={`font-display text-2xl uppercase tracking-wider transition-colors ${
                  pathname === href ? "text-russet" : "text-cream hover:text-russet"
                }`}
              >
                {label}
              </Link>
            )
          )}
        </nav>

        {/* Social row */}
        <div className="mt-auto pb-8 flex justify-center gap-5">
          {socials.map(({ href, label, Icon }) => (
            <a
              key={href}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              className="text-cream transition-colors hover:text-russet"
            >
              <Icon className="w-5 h-5" />
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
