"use client";

import { FormEvent, useState } from "react";
import Icon from "./Icon";
import { whatsappLink } from "@/lib/constants";

const PROBLEM_OPTIONS = ["Blocked Drain", "Drain Repair", "CCTV Survey", "Other"];

export default function QuickQuoteForm() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const name = data.get("name");
    const phone = data.get("phone");
    const postcode = data.get("postcode");
    const problem = data.get("problem");

    const message = [
      "Hi, I'd like a quote for a drainage job:",
      `Name: ${name}`,
      `Phone: ${phone}`,
      `Postcode: ${postcode}`,
      `Problem: ${problem}`,
    ].join("\n");

    window.open(whatsappLink(message), "_blank", "noopener,noreferrer");
    setSubmitted(true);
  }

  return (
    <div
      id="quick-quote-form"
      className="bg-surface text-on-surface rounded-xl p-6 md:p-8 card-shadow relative z-30"
    >
      <h3 className="font-headline-md text-headline-md mb-6">Quick Quote</h3>

      {submitted ? (
        <p className="font-body-md text-body-md text-on-surface-variant py-4">
          Thanks! We&apos;ve opened WhatsApp with your quote request — just hit send and
          we&apos;ll be in touch shortly.
        </p>
      ) : (
        <form className="space-y-4" onSubmit={handleSubmit}>
          <div>
            <label
              className="block font-label-bold text-label-bold text-on-surface-variant mb-1"
              htmlFor="hero-name"
            >
              Name
            </label>
            <input
              className="w-full bg-surface-container border border-outline-variant rounded-lg px-4 py-3 min-h-[48px] focus:border-primary-container focus:ring-1 focus:ring-primary-container transition-colors text-on-surface"
              id="hero-name"
              name="name"
              type="text"
              required
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label
                className="block font-label-bold text-label-bold text-on-surface-variant mb-1"
                htmlFor="hero-phone"
              >
                Phone
              </label>
              <input
                className="w-full bg-surface-container border border-outline-variant rounded-lg px-4 py-3 min-h-[48px] focus:border-primary-container focus:ring-1 focus:ring-primary-container transition-colors text-on-surface"
                id="hero-phone"
                name="phone"
                type="tel"
                required
              />
            </div>
            <div>
              <label
                className="block font-label-bold text-label-bold text-on-surface-variant mb-1"
                htmlFor="hero-postcode"
              >
                Postcode
              </label>
              <input
                className="w-full bg-surface-container border border-outline-variant rounded-lg px-4 py-3 min-h-[48px] focus:border-primary-container focus:ring-1 focus:ring-primary-container transition-colors text-on-surface"
                id="hero-postcode"
                name="postcode"
                type="text"
                required
              />
            </div>
          </div>

          <div>
            <label
              className="block font-label-bold text-label-bold text-on-surface-variant mb-1"
              htmlFor="hero-problem"
            >
              Problem
            </label>
            <select
              className="w-full bg-surface-container border border-outline-variant rounded-lg px-4 py-3 min-h-[48px] focus:border-primary-container focus:ring-1 focus:ring-primary-container transition-colors text-on-surface"
              id="hero-problem"
              name="problem"
              defaultValue={PROBLEM_OPTIONS[0]}
            >
              {PROBLEM_OPTIONS.map((option) => (
                <option key={option}>{option}</option>
              ))}
            </select>
          </div>

          <button
            className="w-full bg-[#25D366] text-white font-label-bold text-label-bold py-4 rounded-xl hover:bg-[#25D366]/90 transition-colors min-h-[48px] card-shadow flex items-center justify-center gap-2"
            type="submit"
          >
            <Icon name="whatsapp" className="w-5 h-5" />
            Send Quote Request via WhatsApp
          </button>
        </form>
      )}
    </div>
  );
}
