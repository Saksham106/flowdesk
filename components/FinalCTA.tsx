"use client";

import { useState, FormEvent } from "react";

export default function FinalCTA() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [message, setMessage] = useState("");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!email) return;
    setStatus("loading");
    try {
      const res = await fetch("/api/early-access", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });
      const data = await res.json();
      if (res.ok) {
        setStatus("success");
        setMessage(data.message ?? "You're on the list!");
        setEmail("");
      } else {
        setStatus("error");
        setMessage("Something went wrong. Please try again.");
      }
    } catch {
      setStatus("error");
      setMessage("Something went wrong. Please try again.");
    }
  }

  return (
    <section id="cta" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="max-w-lg mx-auto text-center">
          <h2 className="font-serif text-3xl sm:text-4xl text-neutral-900 mb-3">
            Be first in the door.
          </h2>
          <p className="text-neutral-500 text-base mb-8 leading-relaxed">
            We're opening access in waves. Drop your email and we'll be in touch.
          </p>

          {status === "success" ? (
            <div className="rounded-xl border border-neutral-200 bg-neutral-50 px-6 py-5 text-center">
              <p className="text-sm font-medium text-neutral-900">{message}</p>
              <p className="text-sm text-neutral-500 mt-1">We'll be in touch soon.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3" noValidate>
              <div className="flex-1">
                <label htmlFor="email-cta" className="sr-only">
                  Email address
                </label>
                <input
                  id="email-cta"
                  type="email"
                  name="email"
                  autoComplete="email"
                  required
                  placeholder="you@yourteam.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full rounded-lg border border-neutral-200 bg-white px-4 py-3 text-sm text-neutral-900 placeholder:text-neutral-400 focus:outline-none focus:ring-2 focus:ring-neutral-900/20 focus:border-neutral-400 transition"
                />
              </div>
              <button
                type="submit"
                disabled={status === "loading"}
                className="inline-flex items-center justify-center rounded-lg bg-neutral-900 px-5 py-3 text-sm font-medium text-white hover:bg-neutral-700 transition-colors disabled:opacity-60 disabled:cursor-not-allowed whitespace-nowrap"
              >
                {status === "loading" ? "Sending…" : "Get early access"}
              </button>
            </form>
          )}

          {status === "error" && (
            <p className="mt-3 text-sm text-red-500">{message}</p>
          )}

          <p className="mt-4 text-xs text-neutral-400">
            No spam. No credit card required. Unsubscribe any time.
          </p>
        </div>
      </div>
    </section>
  );
}
