"use client";

import { useState } from "react";

const inputStyle: React.CSSProperties = {
  background: "transparent",
  border: "1px solid #EEF0E2",
  borderRadius: 0,
  color: "#EEF0E2",
  padding: "14px 16px",
  fontFamily: "Arial, Helvetica, sans-serif",
  fontSize: 16,
  outline: "none",
  width: "100%",
  boxSizing: "border-box",
};

export default function EmailSignup() {
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [zip, setZip] = useState("");
  const [country, setCountry] = useState("US");
  const [website, setWebsite] = useState(""); // honeypot
  const [jwb, setJwb] = useState(true);
  const [bmlg, setBmlg] = useState(false);
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState("");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("submitting");
    setErrorMsg("");

    try {
      const res = await fetch("/api/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, phone, zip, country, website }),
      });

      const data = await res.json();

      if (res.ok && data.ok) {
        setStatus("success");
        setEmail("");
        setPhone("");
        setZip("");
        setCountry("US");
      } else {
        setStatus("error");
        setErrorMsg(data.error || "Something went wrong. Please try again.");
      }
    } catch {
      setStatus("error");
      setErrorMsg("Something went wrong. Please try again.");
    }
  }

  return (
    <form onSubmit={handleSubmit} noValidate>
      {/* Honeypot — hidden from real users */}
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

      <style>{`
        .signup-input::placeholder {
          color: rgba(238, 240, 226, 0.5);
          font-family: Arial, Helvetica, sans-serif;
          font-style: normal;
        }
        .signup-input:focus {
          border-width: 2px;
          border-color: #EEF0E2;
        }
        .signup-select option {
          background: #181912;
          color: #EEF0E2;
        }
        .signup-checkbox {
          appearance: none;
          -webkit-appearance: none;
          width: 16px;
          height: 16px;
          min-width: 16px;
          border: 1px solid #EEF0E2;
          background: transparent;
          cursor: pointer;
          position: relative;
        }
        .signup-checkbox:checked {
          background: #5B310D;
        }
        .signup-checkbox:checked::after {
          content: '';
          position: absolute;
          left: 4px;
          top: 1px;
          width: 5px;
          height: 9px;
          border: solid #EEF0E2;
          border-width: 0 2px 2px 0;
          transform: rotate(45deg);
        }
      `}</style>

      <h3
        className="text-center uppercase"
        style={{
          fontFamily: "var(--font-display), serif",
          fontSize: 18,
          letterSpacing: 2,
          color: "#EEF0E2",
          marginBottom: 32,
        }}
      >
        Stay in the Loop
      </h3>

      {/* Email + Zip row */}
      <div
        className="grid"
        style={{
          gridTemplateColumns: "3fr 2fr",
          gap: 16,
          marginBottom: 16,
        }}
      >
        <div>
          <label htmlFor="signup-email" className="sr-only">Email</label>
          <input
            id="signup-email"
            type="email"
            required
            aria-required="true"
            aria-invalid={status === "error" ? "true" : undefined}
            aria-describedby={status === "error" ? "signup-error" : undefined}
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="signup-input"
            style={inputStyle}
          />
        </div>
        <div>
          <label htmlFor="signup-zip" className="sr-only">Zip Code</label>
          <input
            id="signup-zip"
            type="text"
            required
            aria-required="true"
            placeholder="Zip Code"
            value={zip}
            onChange={(e) => setZip(e.target.value)}
            className="signup-input"
            style={inputStyle}
          />
        </div>
      </div>

      {/* Phone (optional) */}
      <label htmlFor="signup-phone" className="sr-only">Phone (optional)</label>
      <input
        id="signup-phone"
        type="tel"
        placeholder="Phone (optional)"
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
        className="signup-input"
        style={{ ...inputStyle, marginBottom: 16 }}
      />

      {/* Country */}
      <label htmlFor="signup-country" className="sr-only">Country</label>
      <select
        id="signup-country"
        value={country}
        onChange={(e) => setCountry(e.target.value)}
        aria-required="true"
        className="signup-input signup-select"
        style={{ ...inputStyle, marginBottom: 24 }}
      >
        <option value="AF">Afghanistan</option>
        <option value="AL">Albania</option>
        <option value="DZ">Algeria</option>
        <option value="AD">Andorra</option>
        <option value="AO">Angola</option>
        <option value="AG">Antigua and Barbuda</option>
        <option value="AR">Argentina</option>
        <option value="AM">Armenia</option>
        <option value="AU">Australia</option>
        <option value="AT">Austria</option>
        <option value="AZ">Azerbaijan</option>
        <option value="BS">Bahamas</option>
        <option value="BH">Bahrain</option>
        <option value="BD">Bangladesh</option>
        <option value="BB">Barbados</option>
        <option value="BY">Belarus</option>
        <option value="BE">Belgium</option>
        <option value="BZ">Belize</option>
        <option value="BJ">Benin</option>
        <option value="BT">Bhutan</option>
        <option value="BO">Bolivia</option>
        <option value="BA">Bosnia and Herzegovina</option>
        <option value="BW">Botswana</option>
        <option value="BR">Brazil</option>
        <option value="BN">Brunei</option>
        <option value="BG">Bulgaria</option>
        <option value="BF">Burkina Faso</option>
        <option value="BI">Burundi</option>
        <option value="CV">Cabo Verde</option>
        <option value="KH">Cambodia</option>
        <option value="CM">Cameroon</option>
        <option value="CA">Canada</option>
        <option value="CF">Central African Republic</option>
        <option value="TD">Chad</option>
        <option value="CL">Chile</option>
        <option value="CN">China</option>
        <option value="CO">Colombia</option>
        <option value="KM">Comoros</option>
        <option value="CG">Congo</option>
        <option value="CD">Congo (DRC)</option>
        <option value="CR">Costa Rica</option>
        <option value="CI">Cote d&apos;Ivoire</option>
        <option value="HR">Croatia</option>
        <option value="CU">Cuba</option>
        <option value="CY">Cyprus</option>
        <option value="CZ">Czech Republic</option>
        <option value="DK">Denmark</option>
        <option value="DJ">Djibouti</option>
        <option value="DM">Dominica</option>
        <option value="DO">Dominican Republic</option>
        <option value="EC">Ecuador</option>
        <option value="EG">Egypt</option>
        <option value="SV">El Salvador</option>
        <option value="GQ">Equatorial Guinea</option>
        <option value="ER">Eritrea</option>
        <option value="EE">Estonia</option>
        <option value="SZ">Eswatini</option>
        <option value="ET">Ethiopia</option>
        <option value="FJ">Fiji</option>
        <option value="FI">Finland</option>
        <option value="FR">France</option>
        <option value="GA">Gabon</option>
        <option value="GM">Gambia</option>
        <option value="GE">Georgia</option>
        <option value="DE">Germany</option>
        <option value="GH">Ghana</option>
        <option value="GR">Greece</option>
        <option value="GD">Grenada</option>
        <option value="GT">Guatemala</option>
        <option value="GN">Guinea</option>
        <option value="GW">Guinea-Bissau</option>
        <option value="GY">Guyana</option>
        <option value="HT">Haiti</option>
        <option value="HN">Honduras</option>
        <option value="HU">Hungary</option>
        <option value="IS">Iceland</option>
        <option value="IN">India</option>
        <option value="ID">Indonesia</option>
        <option value="IR">Iran</option>
        <option value="IQ">Iraq</option>
        <option value="IE">Ireland</option>
        <option value="IL">Israel</option>
        <option value="IT">Italy</option>
        <option value="JM">Jamaica</option>
        <option value="JP">Japan</option>
        <option value="JO">Jordan</option>
        <option value="KZ">Kazakhstan</option>
        <option value="KE">Kenya</option>
        <option value="KI">Kiribati</option>
        <option value="KP">North Korea</option>
        <option value="KR">South Korea</option>
        <option value="KW">Kuwait</option>
        <option value="KG">Kyrgyzstan</option>
        <option value="LA">Laos</option>
        <option value="LV">Latvia</option>
        <option value="LB">Lebanon</option>
        <option value="LS">Lesotho</option>
        <option value="LR">Liberia</option>
        <option value="LY">Libya</option>
        <option value="LI">Liechtenstein</option>
        <option value="LT">Lithuania</option>
        <option value="LU">Luxembourg</option>
        <option value="MG">Madagascar</option>
        <option value="MW">Malawi</option>
        <option value="MY">Malaysia</option>
        <option value="MV">Maldives</option>
        <option value="ML">Mali</option>
        <option value="MT">Malta</option>
        <option value="MH">Marshall Islands</option>
        <option value="MR">Mauritania</option>
        <option value="MU">Mauritius</option>
        <option value="MX">Mexico</option>
        <option value="FM">Micronesia</option>
        <option value="MD">Moldova</option>
        <option value="MC">Monaco</option>
        <option value="MN">Mongolia</option>
        <option value="ME">Montenegro</option>
        <option value="MA">Morocco</option>
        <option value="MZ">Mozambique</option>
        <option value="MM">Myanmar</option>
        <option value="NA">Namibia</option>
        <option value="NR">Nauru</option>
        <option value="NP">Nepal</option>
        <option value="NL">Netherlands</option>
        <option value="NZ">New Zealand</option>
        <option value="NI">Nicaragua</option>
        <option value="NE">Niger</option>
        <option value="NG">Nigeria</option>
        <option value="MK">North Macedonia</option>
        <option value="NO">Norway</option>
        <option value="OM">Oman</option>
        <option value="PK">Pakistan</option>
        <option value="PW">Palau</option>
        <option value="PA">Panama</option>
        <option value="PG">Papua New Guinea</option>
        <option value="PY">Paraguay</option>
        <option value="PE">Peru</option>
        <option value="PH">Philippines</option>
        <option value="PL">Poland</option>
        <option value="PT">Portugal</option>
        <option value="QA">Qatar</option>
        <option value="RO">Romania</option>
        <option value="RU">Russia</option>
        <option value="RW">Rwanda</option>
        <option value="KN">Saint Kitts and Nevis</option>
        <option value="LC">Saint Lucia</option>
        <option value="VC">Saint Vincent and the Grenadines</option>
        <option value="WS">Samoa</option>
        <option value="SM">San Marino</option>
        <option value="ST">Sao Tome and Principe</option>
        <option value="SA">Saudi Arabia</option>
        <option value="SN">Senegal</option>
        <option value="RS">Serbia</option>
        <option value="SC">Seychelles</option>
        <option value="SL">Sierra Leone</option>
        <option value="SG">Singapore</option>
        <option value="SK">Slovakia</option>
        <option value="SI">Slovenia</option>
        <option value="SB">Solomon Islands</option>
        <option value="SO">Somalia</option>
        <option value="ZA">South Africa</option>
        <option value="SS">South Sudan</option>
        <option value="ES">Spain</option>
        <option value="LK">Sri Lanka</option>
        <option value="SD">Sudan</option>
        <option value="SR">Suriname</option>
        <option value="SE">Sweden</option>
        <option value="CH">Switzerland</option>
        <option value="SY">Syria</option>
        <option value="TW">Taiwan</option>
        <option value="TJ">Tajikistan</option>
        <option value="TZ">Tanzania</option>
        <option value="TH">Thailand</option>
        <option value="TL">Timor-Leste</option>
        <option value="TG">Togo</option>
        <option value="TO">Tonga</option>
        <option value="TT">Trinidad and Tobago</option>
        <option value="TN">Tunisia</option>
        <option value="TR">Turkey</option>
        <option value="TM">Turkmenistan</option>
        <option value="TV">Tuvalu</option>
        <option value="UG">Uganda</option>
        <option value="UA">Ukraine</option>
        <option value="AE">United Arab Emirates</option>
        <option value="GB">United Kingdom</option>
        <option value="US">United States</option>
        <option value="UY">Uruguay</option>
        <option value="UZ">Uzbekistan</option>
        <option value="VU">Vanuatu</option>
        <option value="VA">Vatican City</option>
        <option value="VE">Venezuela</option>
        <option value="VN">Vietnam</option>
        <option value="YE">Yemen</option>
        <option value="ZM">Zambia</option>
        <option value="ZW">Zimbabwe</option>
      </select>

      {/* Checkboxes */}
      <div style={{ display: "flex", flexDirection: "column", gap: 12, marginBottom: 16 }}>
        <label style={{ display: "flex", alignItems: "center", gap: 12, cursor: "pointer" }}>
          <input
            type="checkbox"
            checked={jwb}
            onChange={(e) => setJwb(e.target.checked)}
            className="signup-checkbox"
          />
          <span
            style={{
              fontFamily: "Arial, Helvetica, sans-serif",
              fontSize: 14,
              color: "#EEF0E2",
            }}
          >
            Jack Wharff Band
          </span>
        </label>
        <label style={{ display: "flex", alignItems: "center", gap: 12, cursor: "pointer" }}>
          <input
            type="checkbox"
            checked={bmlg}
            onChange={(e) => setBmlg(e.target.checked)}
            className="signup-checkbox"
          />
          <span
            style={{
              fontFamily: "Arial, Helvetica, sans-serif",
              fontSize: 14,
              color: "#EEF0E2",
            }}
          >
            Big Machine Label Group
          </span>
        </label>
      </div>

      {/* Privacy text */}
      <p
        style={{
          fontFamily: "var(--font-serif-italic), serif",
          fontStyle: "italic",
          fontSize: 12,
          lineHeight: 1.5,
          color: "#797D68",
          marginBottom: 24,
        }}
      >
        I understand emails will be sent by or on behalf of Big Machine Label
        Group. By submitting this form, you agree to the Big Machine Label Group{" "}
        <a
          href="https://bigmachinelabelgroup.com/privacy-policy"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            color: "#EEF0E2",
            textDecoration: "underline",
            fontFamily: "var(--font-serif-italic), serif",
            fontStyle: "italic",
          }}
        >
          Privacy Policy
        </a>
        .
      </p>

      {/* Status messages */}
      {status === "success" && (
        <p
          role="status"
          aria-live="polite"
          style={{
            fontFamily: "Arial, Helvetica, sans-serif",
            fontSize: 14,
            color: "#EEF0E2",
            textAlign: "center",
            marginBottom: 16,
          }}
        >
          You&apos;re in! Thanks for signing up.
        </p>
      )}
      {status === "error" && (
        <p
          id="signup-error"
          role="alert"
          aria-live="assertive"
          style={{
            fontFamily: "Arial, Helvetica, sans-serif",
            fontSize: 14,
            color: "#e57373",
            textAlign: "center",
            marginBottom: 16,
          }}
        >
          {errorMsg}
        </p>
      )}

      {/* Submit button */}
      <div style={{ display: "flex", justifyContent: "center" }}>
        <button
          type="submit"
          disabled={status === "submitting"}
          className="signup-submit"
          style={{
            maxWidth: 280,
            width: "100%",
            background: "#5B310D",
            color: "#EEF0E2",
            fontFamily: "var(--font-display), serif",
            textTransform: "uppercase",
            fontSize: 16,
            letterSpacing: 2,
            padding: "16px 48px",
            border: "none",
            borderRadius: 0,
            cursor: status === "submitting" ? "not-allowed" : "pointer",
            opacity: status === "submitting" ? 0.6 : 1,
            transition: "background-color 300ms ease, opacity 300ms ease",
          }}
          onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "#4B3728")}
          onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "#5B310D")}
        >
          {status === "submitting" ? "Submitting..." : "Sign Up"}
        </button>
      </div>
    </form>
  );
}
