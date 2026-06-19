const DIRECTORY = [
  {
    category: "Management",
    company: "Playdate Media",
    contacts: [
      { name: "Nate", email: "Nate@playdatemedia.co" },
      { name: "Mason", email: "Mason@playdatemedia.co" },
    ],
  },
  {
    category: "Booking",
    company: "UTA",
    contacts: [
      { name: "Joe Wohlfeld", email: "Joe.Wohlfeld@unitedtalent.com" },
      { name: "Alec Vidmar", email: "Alec.Vidmar@unitedtalent.com" },
    ],
  },
];

export default function ContactPageContent() {
  return (
    <div
      className="flex items-center justify-center"
      style={{ backgroundColor: "#EEF0E2", minHeight: "100vh", paddingTop: 56 }}
    >
      <div
        className="mx-auto px-6 md:px-8"
        style={{
          maxWidth: 1100,
          paddingTop: "6vh",
          paddingBottom: "6vh",
        }}
      >
        {/* Get in Touch heading */}
        <h1
          className="uppercase text-center"
          style={{
            fontFamily: "var(--font-display), serif",
            fontSize: "clamp(32px, 5vw, 64px)",
            color: "#4B3728",
            letterSpacing: "0.02em",
            marginBottom: 32,
          }}
        >
          Get in Touch
        </h1>

        {/* Email & DM */}
        <div className="text-center" style={{ marginBottom: 64 }}>
          <div className="flex flex-col gap-4 items-center">
            <div>
              <p
                style={{
                  fontFamily: "Arial, Helvetica, sans-serif",
                  fontSize: 14,
                  color: "#797D68",
                  textTransform: "uppercase",
                  letterSpacing: 1,
                  marginBottom: 4,
                }}
              >
                Email
              </p>
              <a
                href="mailto:jackwharffbooking@gmail.com"
                style={{
                  fontFamily: "Arial, Helvetica, sans-serif",
                  fontSize: 16,
                  color: "#5B310D",
                  textDecoration: "underline",
                }}
              >
                jackwharffbooking@gmail.com
              </a>
            </div>

            <div>
              <p
                style={{
                  fontFamily: "Arial, Helvetica, sans-serif",
                  fontSize: 14,
                  color: "#797D68",
                  textTransform: "uppercase",
                  letterSpacing: 1,
                  marginBottom: 4,
                }}
              >
                DM
              </p>
              <a
                href="https://www.instagram.com/jackwharffband/"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  fontFamily: "Arial, Helvetica, sans-serif",
                  fontSize: 16,
                  color: "#5B310D",
                  textDecoration: "underline",
                }}
              >
                @jackwharffband
              </a>
            </div>
          </div>
        </div>

        {/* Management & Booking */}
        <div className="grid grid-cols-1 md:grid-cols-2" style={{ gap: 48 }}>
          {DIRECTORY.map((group) => (
            <div key={group.category} className="text-center">
              <h2
                className="uppercase"
                style={{
                  fontFamily: "var(--font-display), serif",
                  fontSize: "clamp(24px, 3vw, 40px)",
                  color: "#4B3728",
                  letterSpacing: "0.02em",
                  marginBottom: 4,
                }}
              >
                {group.category}
              </h2>
              <p
                style={{
                  fontFamily: "var(--font-serif-italic), serif",
                  fontStyle: "italic",
                  fontSize: "clamp(14px, 1.2vw, 16px)",
                  color: "#797D68",
                  marginBottom: 20,
                }}
              >
                {group.company}
              </p>
              {group.contacts.map((contact) => (
                <div key={contact.email} style={{ marginBottom: 12 }}>
                  <p
                    style={{
                      fontFamily: "Arial, Helvetica, sans-serif",
                      fontSize: 16,
                      color: "#4B3728",
                    }}
                  >
                    {contact.name}
                  </p>
                  <a
                    href={`mailto:${contact.email}`}
                    style={{
                      fontFamily: "Arial, Helvetica, sans-serif",
                      fontSize: 15,
                      color: "#5B310D",
                      textDecoration: "underline",
                    }}
                  >
                    {contact.email}
                  </a>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
