"use client";

import { useEffect, useState } from "react";
import Icon from "./Icon";
import { PHONE_NUMBER, whatsappLink } from "@/lib/constants";

const WHATSAPP_MESSAGE = "Hi, I'd like to ask about a drainage job in Devon.";

export default function FloatingContact() {
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    const form = document.getElementById("quick-quote-form");
    if (!form) return;

    const observer = new IntersectionObserver(
      ([entry]) => setHidden(entry.isIntersecting),
      { rootMargin: "0px 0px -56px 0px" }
    );
    observer.observe(form);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      className={`flex flex-col gap-3 fixed right-4 md:right-6 z-40 transition-transform duration-200 ${
        hidden ? "translate-y-24 pointer-events-none opacity-0" : "translate-y-0 opacity-100"
      }`}
      style={{ bottom: "calc(1rem + env(safe-area-inset-bottom))" }}
    >
      <a
        className="w-14 h-14 rounded-full bg-[#25D366] text-white flex items-center justify-center shadow-[0_4px_20px_rgba(11,47,115,0.25)] hover:scale-105 active:scale-95 transition-transform"
        href={whatsappLink(WHATSAPP_MESSAGE)}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Message us on WhatsApp"
        title="WhatsApp us"
      >
        <Icon name="whatsapp" className="w-7 h-7" />
      </a>
      <a
        className="w-14 h-14 rounded-full bg-secondary-container text-on-secondary-container flex items-center justify-center shadow-[0_4px_20px_rgba(11,47,115,0.25)] hover:scale-105 active:scale-95 transition-transform"
        href={`tel:${PHONE_NUMBER}`}
        aria-label="Call us"
        title="Call us"
      >
        <Icon name="phone" className="w-7 h-7" />
      </a>
    </div>
  );
}
