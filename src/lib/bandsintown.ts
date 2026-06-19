export interface BITEvent {
  id: string;
  datetime: string;
  venue: {
    name: string;
    city: string;
    region: string;
    country: string;
  };
  offers: { type: string; url: string; status: string }[];
  url: string;
}

export async function fetchEvents(): Promise<BITEvent[]> {
  try {
    const res = await fetch(
      "https://rest.bandsintown.com/artists/The%20Jack%20Wharff%20Band/events?app_id=umg_bigmachinelabelgroup_thejackwharffband",
      { next: { revalidate: 3600 } }
    );
    if (!res.ok) return [];
    const data = await res.json();
    return Array.isArray(data) ? data : [];
  } catch {
    return [];
  }
}

export function formatDate(datetime: string): string {
  const d = new Date(datetime);
  const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  const months = [
    "Jan", "Feb", "Mar", "Apr", "May", "Jun",
    "Jul", "Aug", "Sep", "Oct", "Nov", "Dec",
  ];
  return `${days[d.getDay()]}, ${months[d.getMonth()]} ${d.getDate()}`;
}

export function formatLocation(venue: BITEvent["venue"]): string {
  if (venue.country === "United States") {
    return `${venue.city}, ${venue.region}`;
  }
  return `${venue.city}, ${venue.country}`;
}

export function getTicketUrl(event: BITEvent): string | null {
  const offer = event.offers.find((o) => o.type === "Tickets");
  return offer?.url ?? null;
}

export function getRsvpUrl(event: BITEvent): string {
  return `${event.url}&trigger=rsvp_going`;
}
