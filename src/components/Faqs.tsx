"use client";

import { useState } from "react";
import Icon from "./Icon";
import { FAQS } from "@/lib/constants";

export default function Faqs() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="py-12 md:py-section-gap bg-surface-container-low" id="faqs">
      <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
        <div className="text-center mb-12">
          <h2 className="font-headline-lg text-headline-lg text-on-surface mb-4">
            Frequently Asked Questions
          </h2>
          <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl mx-auto">
            Answers to the questions we hear most from Devon homeowners and businesses.
          </p>
        </div>

        <div className="max-w-3xl mx-auto space-y-4">
          {FAQS.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={faq.question}
                className="bg-surface rounded-xl card-shadow border border-outline-variant/30 overflow-hidden"
              >
                <button
                  type="button"
                  className="w-full flex items-center justify-between gap-4 text-left px-6 py-5 min-h-[48px]"
                  aria-expanded={isOpen}
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                >
                  <span className="font-headline-md text-headline-md text-on-surface">
                    {faq.question}
                  </span>
                  <Icon
                    name={isOpen ? "remove" : "add"}
                    className="text-primary-container shrink-0"
                  />
                </button>
                {isOpen && (
                  <div className="px-6 pb-5">
                    <p className="font-body-md text-body-md text-on-surface-variant">
                      {faq.answer}
                    </p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
