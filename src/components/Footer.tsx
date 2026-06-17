import Image from "next/image";
import EmailSignup from "./EmailSignup";
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

const FOOTER_SOCIALS = [
  { href: "https://open.spotify.com/artist/7Hw6prEoT6M58ChR8A1Rlz", label: "Spotify", Icon: FaSpotify },
  { href: "https://music.apple.com/us/artist/jack-wharff/1627355124", label: "Apple Music", Icon: FaItunes },
  { href: "https://music.amazon.com/artists/B0B31QWLLY/jack-wharff", label: "Amazon Music", Icon: FaAmazon },
  { href: "https://pandora.app.link/rmPezVCuFOb", label: "Pandora", Icon: SiPandora },
  { href: "https://www.youtube.com/@JackWharff", label: "YouTube", Icon: FaYoutube },
  { href: "https://www.tiktok.com/@jackwharffband", label: "TikTok", Icon: FaTiktok },
  { href: "https://www.instagram.com/jackwharffband/", label: "Instagram", Icon: FaInstagram },
  { href: "https://www.facebook.com/TheJackWharffBand/", label: "Facebook", Icon: FaFacebookF },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-darkgreen text-cream">
      <div className="mx-auto max-w-5xl px-6 py-12 md:py-16">
        {/* Stacked logo */}
        <div className="flex justify-center mb-8">
          <Image
            src="/branding/TJWB_LogoWhite.png"
            alt="The Jack Wharff Band"
            width={200}
            height={200}
            className="h-24 md:h-32 w-auto"
          />
        </div>

        {/* Email signup */}
        <div className="max-w-md mx-auto mb-12">
          <EmailSignup />
        </div>

        {/* Social row */}
        <div className="flex justify-center gap-4 mb-10">
          {FOOTER_SOCIALS.map(({ href, label, Icon }) => (
            <a
              key={href}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              className="text-cream transition-colors hover:text-russet"
            >
              <Icon className="w-5 h-5" aria-hidden="true" />
            </a>
          ))}
        </div>

        {/* Legal row */}
        <div className="border-t border-olive pt-6 flex flex-wrap justify-center gap-x-4 gap-y-1 text-xs text-olive">
          <span>&copy; {currentYear} Big Machine Label Group</span>
          <a
            href="https://www.bigmachinelabelgroup.com/terms/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-cream transition-colors"
          >
            Terms
          </a>
          <a
            href="https://www.bigmachinelabelgroup.com/privacy-notice/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-cream transition-colors"
          >
            Privacy
          </a>
          <a
            href="https://www.bigmachinelabelgroup.com/privacy-notice/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-cream transition-colors"
          >
            Do Not Sell My Personal Information
          </a>
          <span>Cookie Choices</span>
        </div>
      </div>
    </footer>
  );
}
