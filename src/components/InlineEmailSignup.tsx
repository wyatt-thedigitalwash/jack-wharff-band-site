"use client";

import { useState } from "react";

export default function InlineEmailSignup() {
  const [email, setEmail] = useState("");
  const [website, setWebsite] = useState(""); // honeypot
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("submitting");

    try {
      const res = await fetch("/api/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, zip: "00000", country: "US", website }),
      });

      const data = await res.json();

      if (res.ok && data.ok) {
        setStatus("success");
        setEmail("");
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  return (
    <section aria-label="Email signup" data-bg="dark" className="bg-darkgreen text-cream py-20 md:py-28 px-6">
      <div className="mx-auto max-w-lg text-center">
        <h2 className="font-display text-3xl md:text-4xl uppercase tracking-wide mb-8">
          Stay in the Loop
        </h2>

        {status === "success" ? (
          <p
            role="status"
            aria-live="polite"
            style={{
              fontFamily: "Arial, Helvetica, sans-serif",
              fontSize: 16,
              color: "#EEF0E2",
            }}
          >
            You&apos;re in! Thanks for signing up.
          </p>
        ) : (
          <form
            onSubmit={handleSubmit}
            noValidate
            className="flex flex-col md:flex-row gap-3"
          >
            {/* Honeypot */}
            <div aria-hidden="true" style={{ position: "absolute", left: "-9999px" }}>
              <input
                type="text"
                name="website"
                tabIndex={-1}
                autoComplete="off"
                value={website}
                onChange={(e) => setWebsite(e.target.value)}
              />
            </div>

            <label htmlFor="inline-signup-email" className="sr-only">Email</label>
            <input
              id="inline-signup-email"
              type="email"
              required
              aria-required="true"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Your email"
              className="flex-1 bg-transparent border border-olive/50 text-cream placeholder:text-olive px-4 py-3 text-sm focus:border-cream transition-colors"
            />
            <button
              type="submit"
              disabled={status === "submitting"}
              className="bg-russet text-cream font-display uppercase text-sm tracking-wider px-8 py-3 transition-opacity hover:opacity-85 shrink-0"
              style={{
                opacity: status === "submitting" ? 0.6 : 1,
                cursor: status === "submitting" ? "not-allowed" : "pointer",
              }}
            >
              {status === "submitting" ? "..." : "Join"}
            </button>

            {status === "error" && (
              <p role="alert" aria-live="assertive" className="text-sm mt-2 md:mt-0 md:self-center" style={{ color: "#e57373" }}>
                Something went wrong.
              </p>
            )}
          </form>
        )}
      </div>
    </section>
  );
}
