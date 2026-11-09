# SITE.md — The Jack Wharff Band

## Project
Rebuild of the official website for The Jack Wharff Band, a four-piece country, bluegrass, and rock band from Richmond, Virginia, signed to Big Machine Records and based in Nashville. The client is Big Machine Records. This replaces an existing WordPress label-template site. The goal is a warm, analog, story-driven site that feels like the band made it, not like a label stamped it out.

## Band
- Jack Wharff: vocalist, frontman
- Garrett Howell: drums
- Ryan Atchison: bass
- Evan Novoa: guitar

## Positioning
Richmond kids who went viral on TikTok, got signed to Big Machine, and moved to Music City while keeping their salt-of-the-earth, dive-bar soul. The site tells that arc through lo-fi nostalgia, Appalachian roots, and honky-tonk warmth.

## Brand colors (Coming Home era, Nov 2026)
Defined as CSS variables in src/app/globals.css (`--brand-*`, Tailwind `brand-*`).
- Black #231F20: every background
- Yellow #D4B773 (PMS 4023 C): sub-heads, body copy, borders, tour dates, Tour heading
- Red #C24833 (PMS 7619 C): headlines and decoration (underlines, hovers)
- White #FFFFFF: client call for the hero and header wordmark, nav, home card titles, tour listings and buttons
Red only reaches 3.3:1 on black, so keep it to large text (24px+, or 18.66px+ bold). Small links stay yellow with a red underline. Buttons are yellow fill with black text.
There is no purple in this brand. Ignore any reference to purple.

## Typography
- Tamil Sangam MN everywhere. Bold drives `--font-display` (headlines, nav, buttons); Regular drives body copy.
- Files: public/fonts/TamilSangamMN-{Regular,Bold}.woff2, extracted from the supplied .ttc, subset to Latin, and with vertical metrics rewritten (ascent 1815, descent -420, line gap 0 at 2048 upm) so Latin text centers in its line box. The stock metrics leave a large gap under the text in buttons. Re-apply the fix if the files are ever regenerated.

## Logos
- Wordmark: "the jack wharff band", traced to SVG from TheJackWharffBand_A_LOGO_ComingHome_Name_1cBlack_2026.10.22_FNL.png. Use the `Wordmark` component (fills with currentColor, so any text color class recolors it). Static copy: public/branding/TJWB_Wordmark.svg.
- Used in the hero, header, footer and mobile menu.

## Tone of voice
Plainspoken, warm, a little mythologizing. Never corporate, never hype-y, no exclamation-point energy. Let the story and the music carry it. No em dashes anywhere in any copy.

## Visual references
- 1970s outlaw country record sleeves (Waylon Jennings "Honky Tonk Heroes," Willie Nelson "Red Headed Stranger") for warm film grade and rough type
- Dive bar and honky-tonk print culture (hand-painted signage, jukebox title cards, matchbooks) for texture and density
- The band's own photoshoot grade (wood paneling, Rock-Ola jukebox, Kodak-warm color) as the literal palette source

## Signature Move
The site opens cinematically. Four photos quick-cut at increasing sizes, the last filling the viewport, the white logo settling over it. Then three release banners (Low Life, Strange EP, Saved) on a pinned scroll, each sliding up to replace the previous as the user scrolls past.

## Pages
1. Home: cinematic opening (4 photos quick-cutting to fullscreen with logo overlay, then 3 pinned-scroll release slides covering it), About (eyebrow + heading + body text + horizontal scrollable photo gallery), Tour (Bandsintown widget on cream), Music Video (contained YouTube on cream with drop shadow), and Music section placeholder (darkgreen). Footer follows.
2. Music: all releases, leading with the new single, links out to lnk.to smart links
3. Tour: Bandsintown feed plus a square tour video
4. Videos: YouTube embeds
5. About: band story and members
6. Contact: booking inquiry form plus management and booking directory

## Releases to highlight
1. Low Life: new single, releasing June 5, 2026. Gets a dedicated splash page later. Lead release on Home and Music. Smart link on placeholder until live.
2. Strange EP: out now. https://jackwharff.lnk.to/strangeEPWE
3. Saved: single, out now. https://jackwharff.lnk.to/savedWE

## Preserved label infrastructure (do not replace, restyle only)
- Bandsintown tour feed (Big Machine app_id umg_bigmachinelabelgroup_thejackwharffband)
- Big Machine Label Group email capture
- Shopify merch link
- Copyright Big Machine Label Group footer and legal links (Terms, Privacy, Do Not Sell My Personal Information)

## Contact
- General and booking inquiries: jackwharffbooking@gmail.com (contact form sends here via Resend)
- Instagram DM: @jackwharffband
- Management, Playdate Media: Nate@playdatemedia.co, Mason@playdatemedia.co
- Booking, UTA: Joe.Wohlfeld@unitedtalent.com, Alec.Vidmar@unitedtalent.com

## Social links
- Spotify: https://open.spotify.com/artist/7Hw6prEoT6M58ChR8A1Rlz
- Apple Music: https://music.apple.com/us/artist/jack-wharff/1627355124
- Amazon Music: https://music.amazon.com/artists/B0B31QWLLY/jack-wharff
- Pandora: https://pandora.app.link/rmPezVCuFOb
- YouTube: https://www.youtube.com/@thejackwharffband
- TikTok: https://www.tiktok.com/@jackwharffband
- Instagram: https://www.instagram.com/jackwharffband/
- Facebook: https://www.facebook.com/TheJackWharffBand/

## Anti-patterns (do not do on this site)
- No centered hero with CTA and feature grid below
- No icon-in-circle rows
- No three-column card grids for content
- No clean SaaS spacing, no blue or teal palettes
- No stock photography
Favor density and warmth over whitespace and polish. Closer to a record sleeve than a tech landing page.

## Placeholder inventory (current)
- Horizontal and stacked logos
- Desktop and mobile video banner heroes
- Square tour video
- All band photography
- Low Life smart link (not live until June 5, 2026)
