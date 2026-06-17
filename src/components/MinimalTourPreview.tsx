import Link from "next/link";

interface BandsintownEvent {
  id: string;
  datetime: string;
  venue: {
    name: string;
    city: string;
    region: string;
    country: string;
  };
  url: string;
  offers: { url: string }[];
}

async function getUpcomingShows(): Promise<BandsintownEvent[]> {
  try {
    const res = await fetch(
      "https://rest.bandsintown.com/artists/id_15538346/events?app_id=umg_bigmachinelabelgroup_thejackwharffband",
      { next: { revalidate: 3600 } },
    );
    if (!res.ok) return [];
    const events: BandsintownEvent[] = await res.json();
    return events.slice(0, 3);
  } catch {
    return [];
  }
}

function formatDateLine(datetime: string, city: string, region: string) {
  const d = new Date(datetime);
  const month = d
    .toLocaleString("en-US", { month: "short" })
    .toUpperCase();
  const day = String(d.getDate()).padStart(2, "0");
  const location = region ? `${city}, ${region}` : city;
  return `${month} ${day}  \u00B7  ${location.toUpperCase()}`;
}

export default async function MinimalTourPreview() {
  const shows = await getUpcomingShows();

  return (
    <section data-bg="dark" className="bg-ashbrown text-cream py-16 md:py-24 px-6">
      <div className="mx-auto max-w-2xl">
        <h2 className="font-display text-3xl md:text-4xl uppercase tracking-wide mb-10">
          On the Road
        </h2>

        {shows.length > 0 ? (
          <div className="flex flex-col gap-5 md:gap-6">
            {shows.map((show, i) => {
              const ticketUrl = show.offers?.[0]?.url || show.url;
              return (
                <a
                  key={show.id || i}
                  href={ticketUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-display text-lg md:text-2xl tracking-wide text-cream hover:text-russet transition-colors"
                >
                  {formatDateLine(
                    show.datetime,
                    show.venue.city,
                    show.venue.region,
                  )}
                </a>
              );
            })}
          </div>
        ) : (
          <p className="text-cream/70 text-sm">
            No upcoming dates right now. Check back soon.
          </p>
        )}

        <div className="mt-10">
          <Link
            href="/tour"
            className="font-display uppercase text-sm tracking-wider text-russet hover:opacity-75 transition-opacity"
          >
            See All Dates
          </Link>
        </div>
      </div>
    </section>
  );
}
