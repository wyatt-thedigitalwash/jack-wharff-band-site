import {
  BITEvent,
  formatDate,
  formatLocation,
  getTicketUrl,
  getRsvpUrl,
} from "@/lib/bandsintown";

interface EventListProps {
  events: BITEvent[];
  limit?: number;
  compact?: boolean;
}

function EventButtons({
  event,
  fill,
}: {
  event: BITEvent;
  fill?: boolean;
}) {
  const ticketUrl = getTicketUrl(event);
  const rsvpUrl = getRsvpUrl(event);

  const base = {
    fontFamily: "var(--font-display), serif",
    textTransform: "uppercase" as const,
    letterSpacing: 1,
    borderRadius: 0,
    padding: "6px 16px",
    fontSize: 14,
    boxSizing: "border-box" as const,
    textDecoration: "none",
    transition: "opacity 0.2s ease",
  };

  return (
    <div className={`flex gap-2 shrink-0 ${fill ? "w-full" : ""}`}>
      <a
        href={rsvpUrl}
        target="_blank"
        rel="noopener noreferrer"
        className={fill ? "flex-1 text-center" : ""}
        style={{
          ...base,
          backgroundColor: "transparent",
          color: "#EEF0E2",
          border: "1px solid #EEF0E2",
        }}
      >
        RSVP
        <span className="sr-only"> (opens in new tab)</span>
      </a>
      {ticketUrl && (
        <a
          href={ticketUrl}
          target="_blank"
          rel="noopener noreferrer"
          className={fill ? "flex-1 text-center" : ""}
          style={{
            ...base,
            backgroundColor: "#EEF0E2",
            color: "#4B3728",
            border: "1px solid #EEF0E2",
          }}
        >
          Tickets
          <span className="sr-only"> (opens in new tab)</span>
        </a>
      )}
    </div>
  );
}

export default function EventList({ events, limit, compact }: EventListProps) {
  const display = limit ? events.slice(0, limit) : events;

  if (display.length === 0) {
    return (
      <p
        className="uppercase text-center"
        style={{
          fontFamily: "var(--font-display), serif",
          color: "rgba(238, 240, 226, 0.6)",
          letterSpacing: 1,
          padding: "24px 0",
        }}
      >
        No upcoming dates. Check back soon.
      </p>
    );
  }

  return (
    <div>
      {display.map((event, i) => (
        <div
          key={event.id}
          style={{
            borderBottom:
              i < display.length - 1
                ? "1px solid rgba(238, 240, 226, 0.3)"
                : "none",
            padding: "18px 0",
          }}
        >
          {/* Wide layout (home page — full-width row) */}
          {!compact && (
            <div className="hidden md:flex items-center">
              <div
                className="uppercase shrink-0"
                style={{
                  fontFamily: "var(--font-display), serif",
                  color: "#EEF0E2",
                  letterSpacing: 1,
                  fontSize: "1.125rem",
                  minWidth: 160,
                }}
              >
                {formatDate(event.datetime)}
              </div>
              <div
                className="uppercase flex-1 truncate text-left"
                style={{
                  fontFamily: "var(--font-display), serif",
                  color: "#EEF0E2",
                  letterSpacing: 1,
                  paddingLeft: 32,
                  paddingRight: 16,
                }}
              >
                {event.venue.name}
              </div>
              <div
                className="uppercase shrink-0"
                style={{
                  fontFamily: "var(--font-display), serif",
                  color: "rgba(238, 240, 226, 0.7)",
                  letterSpacing: 1,
                  paddingRight: 24,
                }}
              >
                {formatLocation(event.venue)}
              </div>
              <EventButtons event={event} />
            </div>
          )}

          {/* Compact layout (tour page — two tight rows) */}
          {compact && (
            <div className="hidden md:block">
              <div className="flex items-baseline gap-3 mb-2">
                <div
                  className="uppercase shrink-0"
                  style={{
                    fontFamily: "var(--font-display), serif",
                    color: "#EEF0E2",
                    letterSpacing: 1,
                    fontSize: "0.9rem",
                    fontWeight: 700,
                  }}
                >
                  {formatDate(event.datetime)}
                </div>
                <div
                  className="uppercase truncate"
                  style={{
                    fontFamily: "var(--font-display), serif",
                    color: "#EEF0E2",
                    letterSpacing: 1,
                    fontSize: "0.9rem",
                  }}
                >
                  {event.venue.name}
                </div>
              </div>
              <div className="flex items-center justify-between">
                <div
                  className="uppercase"
                  style={{
                    fontFamily: "var(--font-display), serif",
                    color: "rgba(238, 240, 226, 0.7)",
                    letterSpacing: 1,
                    fontSize: "0.75rem",
                  }}
                >
                  {formatLocation(event.venue)}
                </div>
                <EventButtons event={event} />
              </div>
            </div>
          )}

          {/* Mobile (stacked) */}
          <div className="md:hidden">
            <div
              className="uppercase"
              style={{
                fontFamily: "var(--font-display), serif",
                color: "#EEF0E2",
                letterSpacing: 1,
                fontSize: "1.125rem",
                marginBottom: 4,
              }}
            >
              {formatDate(event.datetime)}
            </div>
            <div
              className="uppercase"
              style={{
                fontFamily: "var(--font-display), serif",
                color: "#EEF0E2",
                letterSpacing: 1,
                marginBottom: 2,
              }}
            >
              {event.venue.name}
            </div>
            <div
              className="uppercase"
              style={{
                fontFamily: "var(--font-display), serif",
                color: "rgba(238, 240, 226, 0.7)",
                letterSpacing: 1,
                fontSize: "0.8125rem",
                marginBottom: 16,
              }}
            >
              {formatLocation(event.venue)}
            </div>
            <EventButtons event={event} fill />
          </div>
        </div>
      ))}
    </div>
  );
}
