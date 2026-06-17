import Image from "next/image";
import EmailSignup from "./EmailSignup";

function SpotifyIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.6 0 12 0zm5.521 17.34a.75.75 0 01-1.032.247c-2.828-1.73-6.39-2.122-10.587-1.162a.75.75 0 01-.334-1.462c4.594-1.05 8.533-.598 11.706 1.345a.75.75 0 01.247 1.032zm1.473-3.272a.938.938 0 01-1.29.308c-3.236-1.99-8.172-2.566-12.002-1.404a.938.938 0 11-.544-1.795c4.375-1.327 9.814-.683 13.528 1.6a.938.938 0 01.308 1.29zm.127-3.403C15.535 8.39 9.03 8.18 5.26 9.322a1.125 1.125 0 11-.652-2.153c4.326-1.31 11.514-1.057 16.062 1.627a1.125 1.125 0 01-1.55 1.868z" />
    </svg>
  );
}

function AppleMusicIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M23.994 6.124a9.23 9.23 0 00-.24-2.19c-.317-1.31-1.062-2.31-2.18-3.043A5.022 5.022 0 0019.7.197a10.56 10.56 0 00-1.564-.15C17.49.01 16.842 0 14.96 0H9.04c-1.882 0-2.53.01-3.176.047a10.56 10.56 0 00-1.564.15A5.02 5.02 0 002.426.891C1.31 1.624.563 2.624.246 3.934a9.23 9.23 0 00-.24 2.19C.003 6.77 0 7.418 0 9.3v5.4c0 1.882.003 2.53.006 3.176a9.23 9.23 0 00.24 2.19c.317 1.31 1.062 2.31 2.18 3.043a5.022 5.022 0 001.874.694c.5.105 1.027.15 1.564.15.646.037 1.294.047 3.176.047h5.92c1.882 0 2.53-.01 3.176-.047a10.56 10.56 0 001.564-.15 5.02 5.02 0 001.874-.694c1.118-.733 1.863-1.733 2.18-3.043a9.23 9.23 0 00.24-2.19c.003-.646.006-1.294.006-3.176V9.3c0-1.882-.003-2.53-.006-3.176zM16.95 17.09c0 .58-.21 1.07-.63 1.45-.36.33-.81.52-1.33.55-.06.01-.12.01-.19.01-.38 0-.73-.1-1.04-.3a1.97 1.97 0 01-.73-.83 2.46 2.46 0 01-.2-.97c0-.58.21-1.07.63-1.45.36-.33.81-.52 1.33-.55.06-.01.12-.01.19-.01.38 0 .73.1 1.04.3.31.2.56.48.73.83.12.27.19.56.2.87v.1zm.1-7.45l-7.2 1.56v5.89c0 .58-.21 1.07-.63 1.45-.36.33-.81.52-1.33.55-.06.01-.12.01-.19.01-.38 0-.73-.1-1.04-.3a1.97 1.97 0 01-.73-.83 2.46 2.46 0 01-.2-.97c0-.58.21-1.07.63-1.45.36-.33.81-.52 1.33-.55.06-.01.12-.01.19-.01.38 0 .73.1 1.04.3V7.48l7.2-1.56v3.72h-.07z" />
    </svg>
  );
}

function AmazonMusicIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M13.958 10.09c0 1.232.029 2.256-.591 3.351-.502.891-1.301 1.438-2.186 1.438-1.214 0-1.922-.924-1.922-2.292 0-2.692 2.415-3.182 4.7-3.182v.685zm3.186 7.705a.66.66 0 01-.753.069c-1.06-.881-1.25-1.289-1.834-2.128-1.753 1.789-2.993 2.325-5.265 2.325-2.687 0-4.784-1.658-4.784-4.972 0-2.588 1.403-4.348 3.398-5.208 1.73-.756 4.146-.891 5.993-1.1v-.41c0-.753.058-1.643-.385-2.293-.384-.579-1.124-.818-1.775-.818-1.205 0-2.277.618-2.54 1.897-.054.285-.261.565-.547.579l-3.065-.33c-.259-.057-.546-.266-.472-.66C5.736 1.396 9.046 0 12.01 0c1.517 0 3.502.404 4.7 1.554 1.517 1.418 1.373 3.31 1.373 5.371v4.865c0 1.462.607 2.104 1.178 2.893.202.279.246.614-.009.822-.638.535-1.774 1.527-2.399 2.084l-.009-.005v.005z" />
      <path d="M21.7 19.766C19.105 21.787 15.175 23 11.787 23c-4.773 0-9.07-1.765-12.32-4.7-.255-.231-.027-.546.28-.367 3.51 2.04 7.847 3.268 12.324 3.268 3.022 0 6.345-.627 9.403-1.922.46-.198.848.303.226.487z" />
      <path d="M22.834 18.43c-.348-.446-2.304-.212-3.182-.107-.267.032-.308-.2-.067-.368 1.558-1.094 4.113-.778 4.412-.412.3.37-.079 2.93-1.541 4.152-.225.189-.44.088-.34-.162.328-.821 1.066-2.656.718-3.103z" />
    </svg>
  );
}

function PandoraIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M6.143 21.527V2.473h5.714c3.858 0 6 2.571 6 6.214 0 3.643-2.571 6.214-6 6.214H9.43v6.626H6.143zM9.43 12.33h2.142c2.143 0 3.143-1.357 3.143-3.643S13.715 5.044 11.572 5.044H9.43V12.33z" />
    </svg>
  );
}

function YouTubeIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.546 12 3.546 12 3.546s-7.505 0-9.377.504A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.504 9.376.504 9.376.504s7.505 0 9.377-.504a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
    </svg>
  );
}

function TikTokIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z" />
    </svg>
  );
}

function InstagramIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
    </svg>
  );
}

function FacebookIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
    </svg>
  );
}

const FOOTER_SOCIALS = [
  { href: "https://open.spotify.com/artist/7Hw6prEoT6M58ChR8A1Rlz", label: "Spotify", Icon: SpotifyIcon },
  { href: "https://music.apple.com/us/artist/jack-wharff/1627355124", label: "Apple Music", Icon: AppleMusicIcon },
  { href: "https://music.amazon.com/artists/B0B31QWLLY/jack-wharff", label: "Amazon Music", Icon: AmazonMusicIcon },
  { href: "https://pandora.app.link/rmPezVCuFOb", label: "Pandora", Icon: PandoraIcon },
  { href: "https://www.youtube.com/@JackWharff", label: "YouTube", Icon: YouTubeIcon },
  { href: "https://www.tiktok.com/@jackwharffband", label: "TikTok", Icon: TikTokIcon },
  { href: "https://www.instagram.com/jackwharffband/", label: "Instagram", Icon: InstagramIcon },
  { href: "https://www.facebook.com/TheJackWharffBand/", label: "Facebook", Icon: FacebookIcon },
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
              <Icon className="w-5 h-5" />
            </a>
          ))}
        </div>

        {/* Email signup */}
        <div className="max-w-md mx-auto mb-12">
          <EmailSignup />
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
