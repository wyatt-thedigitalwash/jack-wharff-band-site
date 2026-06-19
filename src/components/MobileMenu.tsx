"use client";

import { useEffect, useRef, useCallback } from "react";
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
  const menuRef = useRef<HTMLDivElement>(null);

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

  // Close on Escape
  useEffect(() => {
    if (!open) return;
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", handleKey);
    return () => document.removeEventListener("keydown", handleKey);
  }, [open, onClose]);

  // Focus trap
  const handleKeyDown = useCallback(
    (e: React.KeyboardEvent) => {
      if (e.key !== "Tab" || !menuRef.current) return;

      const focusable = menuRef.current.querySelectorAll<HTMLElement>(
        'a[href], button, input, select, textarea, [tabindex]:not([tabindex="-1"])'
      );
      if (focusable.length === 0) return;

      const first = focusable[0];
      const last = focusable[focusable.length - 1];

      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault();
        first.focus();
      }
    },
    []
  );

  // Auto-focus close button when menu opens
  useEffect(() => {
    if (open && menuRef.current) {
      const closeBtn = menuRef.current.querySelector<HTMLElement>("button");
      closeBtn?.focus();
    }
  }, [open]);

  return (
    <div
      ref={menuRef}
      role="dialog"
      aria-modal="true"
      aria-label="Mobile menu"
      className={`fixed inset-0 z-[100] bg-darkgreen transition-opacity duration-300 ${
        open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
      }`}
      aria-hidden={!open}
      onKeyDown={handleKeyDown}
    >
      <div className="flex flex-col h-full px-6 py-4">
        {/* Close button */}
        <div className="flex justify-end">
          <button
            type="button"
            onClick={onClose}
            className="text-cream p-3"
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
        <nav aria-label="Mobile navigation" className="flex flex-col items-center gap-5 mt-10">
          {navLinks.map(({ href, label, external }) =>
            external ? (
              <a
                key={href}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                onClick={onClose}
                className="display-heading text-2xl uppercase tracking-wider text-cream hover:text-russet transition-colors"
              >
                {label}
                <span className="sr-only"> (opens in new tab)</span>
              </a>
            ) : (
              <Link
                key={href}
                href={href}
                onClick={onClose}
                className={`display-heading text-2xl uppercase tracking-wider transition-colors ${
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
              aria-label={`${label} (opens in new tab)`}
              className="text-cream transition-colors hover:text-russet p-2"
            >
              <Icon className="w-5 h-5" aria-hidden="true" />
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
