import Link from "next/link";
import SubscribeForm from "./SubscribeForm";
import CookieChoicesLink from "@/components/legal/CookieChoicesLink";
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
import Wordmark from "./Wordmark";

const FOOTER_SOCIALS = [
  { href: "https://open.spotify.com/artist/7Hw6prEoT6M58ChR8A1Rlz", label: "Spotify", Icon: FaSpotify },
  { href: "https://music.apple.com/us/artist/jack-wharff/1627355124", label: "Apple Music", Icon: FaItunes },
  { href: "https://music.amazon.com/artists/B0B31QWLLY/jack-wharff", label: "Amazon Music", Icon: FaAmazon },
  { href: "https://pandora.app.link/rmPezVCuFOb", label: "Pandora", Icon: SiPandora },
  { href: "https://www.youtube.com/@thejackwharffband", label: "YouTube", Icon: FaYoutube },
  { href: "https://www.tiktok.com/@jackwharffband", label: "TikTok", Icon: FaTiktok },
  { href: "https://www.instagram.com/jackwharffband/", label: "Instagram", Icon: FaInstagram },
  { href: "https://www.facebook.com/TheJackWharffBand/", label: "Facebook", Icon: FaFacebookF },
];

export default function Footer() {
  return (
    <footer className="bg-brand-black text-brand-yellow">
      <div className="px-6 py-12 md:py-16">
        <div className="mx-auto max-w-5xl">
          {/* Wordmark */}
          <div className="flex justify-center mb-8">
            <Wordmark className="w-[80%] max-w-[420px] h-auto text-brand-yellow" />
          </div>

          {/* Email + SMS signup */}
          <div className="max-w-md mx-auto mb-12">
            <SubscribeForm />
          </div>

          {/* Social row */}
          <div className="flex justify-center gap-4 mb-10">
            {FOOTER_SOCIALS.map(({ href, label, Icon }) => (
              <a
                key={href}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${label} (opens in new tab)`}
                className="text-brand-yellow transition-colors hover:text-brand-red p-2"
              >
                <Icon className="w-5 h-5" aria-hidden="true" />
              </a>
            ))}
          </div>
        </div>

        {/* Legal row */}
        <div className="mx-auto max-w-7xl border-t border-brand-yellow/30 pt-6 flex flex-col md:flex-row md:items-center md:justify-between gap-y-3 text-xs text-center md:text-left" style={{ color: "#8D917C" }}>
          <span>&copy; Borchetta Entertainment Group, LLC d/b/a Big Machine Records</span>
          <div className="flex flex-wrap justify-center md:justify-end gap-x-4 gap-y-1">
            <Link href="/legal/terms" className="hover:text-brand-yellow transition-colors">
              Terms
            </Link>
            <Link href="/legal/privacy" className="hover:text-brand-yellow transition-colors">
              Privacy
            </Link>
            <Link href="/legal/dmca" className="hover:text-brand-yellow transition-colors">
              Copyright (DMCA)
            </Link>
            <Link href="/legal/cybersecurity" className="hover:text-brand-yellow transition-colors">
              Cybersecurity
            </Link>
            <Link href="/legal/tcpa" className="hover:text-brand-yellow transition-colors">
              TCPA
            </Link>
            <Link href="/legal/privacy#s10-2" className="hover:text-brand-yellow transition-colors">
              Do Not Sell My Personal Information
            </Link>
            <CookieChoicesLink className="hover:text-brand-yellow transition-colors" />
          </div>
        </div>
      </div>
    </footer>
  );
}
