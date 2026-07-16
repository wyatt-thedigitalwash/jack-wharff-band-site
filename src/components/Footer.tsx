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
  return (
    <footer className="bg-darkgreen text-cream">
      <div className="px-6 py-12 md:py-16">
        <div className="mx-auto max-w-5xl">
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
                aria-label={`${label} (opens in new tab)`}
                className="text-cream transition-colors hover:text-russet p-2"
              >
                <Icon className="w-5 h-5" aria-hidden="true" />
              </a>
            ))}
          </div>
        </div>

        {/* Legal row */}
        <div className="mx-auto max-w-7xl border-t border-olive pt-6 flex flex-col md:flex-row md:items-center md:justify-between gap-y-3 text-xs text-center md:text-left" style={{ color: "#8D917C" }}>
          <span>&copy; Borchetta Entertainment Group, LLC d/b/a Big Machine Records</span>
          <div className="flex flex-wrap justify-center md:justify-end gap-x-4 gap-y-1">
            <a
              href="https://www.bigmachinerecords.com/terms"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-cream transition-colors"
            >
              Terms
            </a>
            <a
              href="https://www.bigmachinerecords.com/privacy"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-cream transition-colors"
            >
              Privacy
            </a>
            <a
              href="https://www.bigmachinerecords.com/privacy"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-cream transition-colors"
            >
              Do Not Sell My Personal Information
            </a>
            <a
              href="https://www.bigmachinerecords.com/privacy"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-cream transition-colors"
            >
              Cookie Choices
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
