"use client";

import { useEffect, useState } from "react";
import Icon from "./Icon";
import { PHONE_NUMBER, whatsappLink } from "@/lib/constants";

const WHATSAPP_MESSAGE = "Hi, I'd like to ask about a drainage job in Devon.";

export default function MobileNav() {
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
    <nav
      className={`bg-surface md:hidden fixed bottom-0 left-0 right-0 z-50 border-t border-outline-variant shadow-[0_-4px_20px_rgba(0,31,63,0.08)] pb-[env(safe-area-inset-bottom)] transition-transform duration-200 ${
        hidden ? "translate-y-full" : "translate-y-0"
      }`}
    >
      <div className="w-full flex justify-around items-center px-2 py-3">
        <a
          className="flex flex-col items-center justify-center bg-secondary-container text-on-secondary-container rounded-xl px-4 py-2 active:scale-95 transition-transform"
          href={`tel:${PHONE_NUMBER}`}
        >
          <Icon name="call" className="mb-1" />
          <span className="font-label-bold text-label-bold">Call</span>
        </a>
        <a
          className="flex flex-col items-center justify-center bg-[#25D366] text-white rounded-xl px-4 py-2 active:scale-95 transition-transform"
          href={whatsappLink(WHATSAPP_MESSAGE)}
          target="_blank"
          rel="noopener noreferrer"
        >
          <Icon name="whatsapp" className="mb-1 w-6 h-6" />
          <span className="font-label-bold text-label-bold">WhatsApp</span>
        </a>
        <a
          className="flex flex-col items-center justify-center text-on-surface-variant px-4 py-2 hover:bg-secondary/10 active:scale-95 transition-transform rounded-xl"
          href="#contact"
        >
          <Icon name="request_quote" className="mb-1" />
          <span className="font-label-bold text-label-bold">Quote</span>
        </a>
      </div>
    </nav>
  );
}
