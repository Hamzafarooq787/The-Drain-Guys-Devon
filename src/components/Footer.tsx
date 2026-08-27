import Image from "next/image";
import Icon from "./Icon";
import { NAV_LINKS, PHONE_DISPLAY, PHONE_NUMBER, SERVICES } from "@/lib/constants";

const QUICK_LINKS = NAV_LINKS.filter((link) => link.href !== "#contact");

export default function Footer() {
  return (
    <footer className="bg-primary text-on-primary w-full">
      <div className="py-12 md:py-section-gap px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto grid grid-cols-1 md:grid-cols-12 gap-y-10 gap-x-gutter">
        <div className="md:col-span-4">
          <div className="bg-white rounded-xl p-3 inline-block mb-4">
            <Image
              alt="The Drain Guys"
              src="/images/logo.webp"
              width={1000}
              height={1000}
              className="h-20 w-20"
            />
          </div>
          <p className="font-body-md text-body-md text-on-primary/80 max-w-sm">
            Professional, reliable, and fast drain unblocking and repair services across the
            whole of Devon. Available 24/7 for emergencies.
          </p>
        </div>

        <div className="md:col-span-3">
          <h4 className="font-label-bold text-label-bold mb-4 text-on-primary">Quick Links</h4>
          <ul className="space-y-2 font-body-md text-body-md">
            {QUICK_LINKS.map((link) => (
              <li key={link.href}>
                <a
                  className="text-on-primary/80 hover:text-secondary-fixed transition-colors"
                  href={link.href}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className="md:col-span-3">
          <h4 className="font-label-bold text-label-bold mb-4 text-on-primary">Our Services</h4>
          <ul className="space-y-2 font-body-md text-body-md">
            {SERVICES.map((service) => (
              <li key={service.title}>
                <a
                  className="text-on-primary/80 hover:text-secondary-fixed transition-colors"
                  href="#services"
                >
                  {service.title}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className="md:col-span-2">
          <h4 className="font-label-bold text-label-bold mb-4 text-on-primary">Contact</h4>
          <div className="space-y-3">
            <a
              className="flex items-center gap-3 text-on-primary hover:text-secondary-fixed transition-colors font-label-bold text-label-bold"
              href={`tel:${PHONE_NUMBER}`}
            >
              <Icon name="phone" className="w-5 h-5 text-secondary-fixed shrink-0" />
              {PHONE_DISPLAY}
            </a>
            <div className="flex items-center gap-3 text-on-primary/80 font-body-md text-body-md">
              <Icon name="location_on" className="w-5 h-5 text-secondary-fixed shrink-0" />
              Serving all of Devon, UK
            </div>
          </div>
        </div>
      </div>
      <div className="border-t border-outline-variant/20 py-6 px-margin-mobile md:px-margin-desktop text-center font-body-md text-body-md text-on-primary/60">
        © 2026 The Drain Guys Devon. All rights reserved. Registered in England &amp; Wales.
      </div>
    </footer>
  );
}
