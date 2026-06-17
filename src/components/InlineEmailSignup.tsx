"use client";

import { useState } from "react";

export default function InlineEmailSignup() {
  const [email, setEmail] = useState("");

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    // TODO: Wire to BMLG email capture endpoint once provided
  }

  return (
    <section data-bg="dark" className="bg-darkgreen text-cream py-20 md:py-28 px-6">
      <div className="mx-auto max-w-lg text-center">
        <h2 className="font-display text-3xl md:text-4xl uppercase tracking-wide mb-8">
          Stay in the Loop
        </h2>
        <form
          onSubmit={handleSubmit}
          className="flex flex-col md:flex-row gap-3"
        >
          <input
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Your email"
            className="flex-1 bg-transparent border border-olive/50 text-cream placeholder:text-olive px-4 py-3 text-sm focus:outline-none focus:border-cream transition-colors"
          />
          <button
            type="submit"
            className="bg-russet text-cream font-display uppercase text-sm tracking-wider px-8 py-3 transition-opacity hover:opacity-85 shrink-0"
          >
            Join
          </button>
        </form>
      </div>
    </section>
  );
}
