"use client";

import { useRef, useState } from "react";
import { COUNTRIES } from "@/lib/countries";
import { SMS_COUNTRIES } from "@/lib/subscribe-validation";

type FormStatus = "idle" | "loading" | "success" | "error";
type ErrorField = "email" | "phone" | "";

const DEFAULT_SUCCESS =
  "You're subscribed. Check your phone for a text and reply to confirm SMS updates.";

// JWB design system (from SITE.md): Cream #EEF0E2 text, Russet #5B310D accent,
// Dark Green #181912 dark bg, Dusty Olive #797D68 muted, Ash Brown #4B3728.
const inputStyle: React.CSSProperties = {
  background: "transparent",
  border: "1px solid #EEF0E2",
  borderRadius: 0,
  color: "#EEF0E2",
  padding: "14px 16px",
  fontFamily: "var(--font-sans)",
  fontSize: 16,
  outline: "none",
  width: "100%",
  boxSizing: "border-box",
};

// Keep only digits and auto-format a US number as NXX-NXX-XXXX as the fan types.
// Handles pastes that include a leading country code (1 or +1) or punctuation.
function formatUsPhone(value: string): string {
  let d = value.replace(/\D/g, "");
  if (d.length === 11 && d.startsWith("1")) d = d.slice(1);
  d = d.slice(0, 10);
  if (d.length <= 3) return d;
  if (d.length <= 6) return `${d.slice(0, 3)}-${d.slice(3)}`;
  return `${d.slice(0, 3)}-${d.slice(3, 6)}-${d.slice(6)}`;
}

export default function SubscribeForm() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [zipCode, setZipCode] = useState("");
  const [country, setCountry] = useState("United States");
  const [website, setWebsite] = useState(""); // honeypot
  const [status, setStatus] = useState<FormStatus>("idle");
  const [errorMessage, setErrorMessage] = useState("");
  const [errorField, setErrorField] = useState<ErrorField>("");
  const [successMessage, setSuccessMessage] = useState("");

  const emailRef = useRef<HTMLInputElement>(null);
  const phoneRef = useRef<HTMLInputElement>(null);

  // US/Canada get the +1 auto-formatted REQUIRED phone; elsewhere it's optional/plain
  // because Laylo can only text North American numbers.
  const isNorthAmerica = SMS_COUNTRIES.has(country);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (status === "loading") return; // guard double-submit
    setStatus("loading");
    setErrorMessage("");
    setErrorField("");

    try {
      const res = await fetch("/api/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ firstName, lastName, email, phone, zipCode, country, website }),
      });
      const data = await res.json().catch(() => null);

      if (res.ok) {
        setSuccessMessage(data?.message || DEFAULT_SUCCESS);
        setStatus("success");
        setFirstName("");
        setLastName("");
        setEmail("");
        setPhone("");
        setZipCode("");
        setCountry("United States");
        return;
      }

      const field: ErrorField =
        data?.field === "email" || data?.field === "phone" ? data.field : "";
      setErrorMessage(data?.error || "Something went wrong. Please try again.");
      setErrorField(field);
      setStatus("error");
      requestAnimationFrame(() => {
        if (field === "email") emailRef.current?.focus();
        else if (field === "phone") phoneRef.current?.focus();
      });
    } catch {
      setErrorMessage("Something went wrong. Please try again.");
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <p
        role="status"
        aria-live="polite"
        style={{
          fontFamily: "var(--font-sans)",
          fontSize: 15,
          lineHeight: 1.6,
          color: "#EEF0E2",
          textAlign: "center",
        }}
      >
        {successMessage || DEFAULT_SUCCESS}
      </p>
    );
  }

  const describedBy = (f: "email" | "phone") =>
    errorField === f ? "subscribe-error" : undefined;
  const borderFor = (f: ErrorField): React.CSSProperties =>
    errorField && errorField === f
      ? { borderColor: "#e57373" }
      : { borderColor: "#EEF0E2" };

  return (
    <form onSubmit={handleSubmit} noValidate>
      {/* Honeypot -- off-screen, hidden from real users */}
      <div aria-hidden="true" style={{ position: "absolute", left: "-9999px" }}>
        <label htmlFor="sub-website">Website</label>
        <input
          id="sub-website"
          type="text"
          name="website"
          tabIndex={-1}
          autoComplete="off"
          value={website}
          onChange={(e) => setWebsite(e.target.value)}
        />
      </div>

      <style>{`
        .subscribe-input::placeholder { color: rgba(238,240,226,0.5); font-family: var(--font-sans); }
        .subscribe-input:focus { border-width: 2px; }
        .subscribe-select option { background: #181912; color: #EEF0E2; }
      `}</style>

      <div className="grid" style={{ gridTemplateColumns: "1fr 1fr", gap: 16, marginBottom: 16 }}>
        <div>
          <label htmlFor="sub-first" className="sr-only">First Name</label>
          <input id="sub-first" name="firstName" type="text" placeholder="First Name"
            autoComplete="given-name" value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            className="subscribe-input" style={inputStyle} />
        </div>
        <div>
          <label htmlFor="sub-last" className="sr-only">Last Name</label>
          <input id="sub-last" name="lastName" type="text" placeholder="Last Name"
            autoComplete="family-name" value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            className="subscribe-input" style={inputStyle} />
        </div>
      </div>

      <label htmlFor="sub-email" className="sr-only">Email</label>
      <input id="sub-email" ref={emailRef} name="email" type="email" required aria-required="true"
        autoComplete="email" placeholder="Email"
        aria-invalid={errorField === "email" ? "true" : undefined}
        aria-describedby={describedBy("email")}
        value={email} onChange={(e) => setEmail(e.target.value)}
        className="subscribe-input" style={{ ...inputStyle, ...borderFor("email"), marginBottom: 16 }} />

      {/* Phone: +1 prefix + required for US/Canada, plain optional otherwise */}
      <label htmlFor="sub-phone" className="sr-only">Phone Number</label>
      <div style={{ position: "relative", marginBottom: 16 }}>
        {isNorthAmerica && (
          <span aria-hidden="true" style={{
            position: "absolute", left: 16, top: "50%", transform: "translateY(-50%)",
            color: "rgba(238,240,226,0.5)", fontFamily: "var(--font-sans)", fontSize: 16,
            pointerEvents: "none",
          }}>+1</span>
        )}
        <input id="sub-phone" ref={phoneRef} name="phone" type="tel"
          required={isNorthAmerica} aria-required={isNorthAmerica ? "true" : undefined}
          inputMode={isNorthAmerica ? "numeric" : "tel"}
          placeholder={isNorthAmerica ? "555-555-5555" : "Phone Number (optional)"}
          aria-invalid={errorField === "phone" ? "true" : undefined}
          aria-describedby={describedBy("phone")}
          autoComplete="tel"
          value={phone}
          onChange={(e) =>
            setPhone(isNorthAmerica ? formatUsPhone(e.target.value) : e.target.value)
          }
          className="subscribe-input"
          style={{ ...inputStyle, ...borderFor("phone"), paddingLeft: isNorthAmerica ? 44 : 16 }} />
      </div>

      <label htmlFor="sub-country" className="sr-only">Country</label>
      <select id="sub-country" name="country" value={country}
        onChange={(e) => setCountry(e.target.value)} aria-required="true"
        className="subscribe-input subscribe-select"
        style={{ ...inputStyle, marginBottom: 16 }}>
        {COUNTRIES.map((c) => (
          <option key={c} value={c}>{c}</option>
        ))}
      </select>

      <label htmlFor="sub-zip" className="sr-only">Zip Code</label>
      <input id="sub-zip" name="zipCode" type="text" inputMode="numeric" placeholder="Zip Code"
        autoComplete="postal-code" value={zipCode}
        onChange={(e) => setZipCode(e.target.value)}
        className="subscribe-input" style={{ ...inputStyle, marginBottom: 24 }} />

      {status === "error" && errorMessage && (
        <p id="subscribe-error" role="alert" aria-live="assertive" style={{
          fontFamily: "var(--font-sans)", fontSize: 14, color: "#e57373",
          textAlign: "center", marginBottom: 16,
        }}>{errorMessage}</p>
      )}

      <div style={{ display: "flex", justifyContent: "center" }}>
        <button type="submit" disabled={status === "loading"} style={{
          maxWidth: 280, width: "100%", background: "#5B310D", color: "#EEF0E2",
          fontFamily: "var(--font-display), serif", textTransform: "uppercase",
          fontSize: 16, letterSpacing: 2, padding: "16px 48px", border: "none",
          borderRadius: 0, cursor: status === "loading" ? "not-allowed" : "pointer",
          opacity: status === "loading" ? 0.6 : 1,
          transition: "background-color 300ms ease, opacity 300ms ease",
        }}
          onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "#4B3728")}
          onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "#5B310D")}>
          {status === "loading" ? "Submitting..." : "Subscribe"}
        </button>
      </div>

      {/* Consent line -- legally required because we collect phone for SMS via Laylo */}
      <p style={{
        fontFamily: "var(--font-sans)", fontSize: 11, lineHeight: 1.5,
        color: "#797D68", textAlign: "center", marginTop: 16,
      }}>
        By subscribing you agree to receive email and recurring automated marketing text
        messages. We will text you once to confirm your number, reply to opt in. Consent is
        not a condition of purchase. Message and data rates may apply. See Laylo&apos;s{" "}
        <a href="https://laylo.com/terms" target="_blank" rel="noopener noreferrer"
          style={{ color: "#EEF0E2", textDecoration: "underline" }}>Terms</a>{" and "}
        <a href="https://laylo.com/privacy" target="_blank" rel="noopener noreferrer"
          style={{ color: "#EEF0E2", textDecoration: "underline" }}>Privacy Policy</a>.
      </p>
    </form>
  );
}
