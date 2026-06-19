"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import MobileMenu from "./MobileMenu";
import {
  FaInstagram,
  FaTiktok,
  FaFacebookF,
  FaYoutube,
  FaSpotify,
  FaItunes,
  FaAmazon,
} from "react-icons/fa";
import { SiPandora } from "react-icons/si";

const NAV_LINKS = [
  { href: "/music", label: "Music" },
  { href: "/tour", label: "Tour" },
  { href: "/videos", label: "Videos" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
  { href: "https://gma20w-t4.myshopify.com/", label: "Merch", external: true },
];

const HEADER_SOCIALS = [
  { href: "https://www.instagram.com/jackwharffband/", label: "Instagram", Icon: FaInstagram },
  { href: "https://www.tiktok.com/@jackwharffband", label: "TikTok", Icon: FaTiktok },
  { href: "https://www.facebook.com/jackwharffband", label: "Facebook", Icon: FaFacebookF },
  { href: "https://www.youtube.com/@JackWharff", label: "YouTube", Icon: FaYoutube },
  { href: "https://open.spotify.com/artist/7Hw6prEoT6M58ChR8A1Rlz", label: "Spotify", Icon: FaSpotify },
  { href: "https://music.apple.com/us/artist/jack-wharff-band/1555651498", label: "Apple Music", Icon: FaItunes },
  { href: "https://music.amazon.com/artists/B08ZYRHWJT/jack-wharff-band", label: "Amazon Music", Icon: FaAmazon },
  { href: "https://www.pandora.com/artist/jack-wharff-band/ARhwJbblqhVbpq4", label: "Pandora", Icon: SiPandora },
];

export default function Header() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const alwaysBg = pathname === "/contact" || pathname === "/videos";
  const scrollBg = pathname === "/about";
  const [logoVisible, setLogoVisible] = useState(pathname !== "/");
  const [scrolledPastHero, setScrolledPastHero] = useState(false);

  useEffect(() => {
    if (pathname !== "/") {
      setLogoVisible(true);
    }

    if (pathname === "/") {
      const onScroll = () => {
        setLogoVisible(window.scrollY > window.innerHeight * 0.8);
      };
      onScroll();
      window.addEventListener("scroll", onScroll, { passive: true });
      return () => window.removeEventListener("scroll", onScroll);
    }

    if (scrollBg) {
      const onScroll = () => {
        const hero = document.querySelector("[data-about-hero]");
        if (hero) {
          setScrolledPastHero(window.scrollY > hero.clientHeight - 60);
        }
      };
      onScroll();
      window.addEventListener("scroll", onScroll, { passive: true });
      return () => window.removeEventListener("scroll", onScroll);
    }
  }, [pathname, scrollBg]);

  const showBg = alwaysBg || (scrollBg && scrolledPastHero);

  return (
    <>
      <header
        className="fixed top-0 left-0 right-0 z-50"
        style={{
          backgroundColor: showBg ? "#181912" : "transparent",
          transition: "background-color 300ms ease",
        }}
      >
        <div className="mx-auto flex items-center justify-between px-4 py-3 md:px-6 lg:px-8">
          {/* Logo */}
          <Link
            href="/"
            aria-label="The Jack Wharff Band - Home"
            className="shrink-0 transition-opacity duration-300"
            style={{ opacity: logoVisible ? 1 : 0, pointerEvents: logoVisible ? "auto" : "none" }}
          >
            <Image
              src="/branding/TJWB_LogoWhite_Horizontal.png"
              alt="The Jack Wharff Band"
              width={160}
              height={40}
              className="h-9 md:h-10 w-auto"
              priority
            />
          </Link>

          {/* Desktop nav — right-aligned */}
          <nav aria-label="Main navigation" className="hidden md:flex items-center gap-6 lg:gap-8 ml-auto">
            {NAV_LINKS.map(({ href, label, external }) =>
              external ? (
                <a
                  key={href}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="display-heading text-xs lg:text-sm uppercase tracking-widest text-cream hover:text-russet transition-colors"
                >
                  {label}
                  <span className="sr-only"> (opens in new tab)</span>
                </a>
              ) : (
                <Link
                  key={href}
                  href={href}
                  className={`display-heading text-xs lg:text-sm uppercase tracking-widest text-cream ${
                    pathname === href ? "underline underline-offset-4" : ""
                  }`}
                >
                  {label}
                </Link>
              )
            )}
          </nav>

          {/* Mobile hamburger */}
          <button
            type="button"
            onClick={() => setMenuOpen(true)}
            className="md:hidden text-cream p-3"
            aria-label="Open menu"
            aria-expanded={menuOpen}
          >
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              className="w-6 h-6"
              aria-hidden="true"
            >
              <path d="M3 6h18M3 12h18M3 18h18" />
            </svg>
          </button>
        </div>
      </header>

      <MobileMenu
        open={menuOpen}
        onClose={() => setMenuOpen(false)}
        pathname={pathname}
        navLinks={NAV_LINKS}
        socials={HEADER_SOCIALS}
      />
    </>
  );
}
