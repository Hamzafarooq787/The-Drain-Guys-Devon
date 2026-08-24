import Image from "next/image";

const SERVICE_LINKS = ["Emergency Blockages", "CCTV Surveys", "Drain Repairs"];
const LEGAL_LINKS = ["Privacy Policy", "Terms of Service"];

export default function Footer() {
  return (
    <footer className="bg-primary text-on-primary w-full pb-24 md:pb-0">
      <div className="py-12 md:py-section-gap px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto grid grid-cols-1 md:grid-cols-4 gap-gutter">
        <div className="col-span-1 md:col-span-2">
          <Image
            alt="The Drain Guys Devon"
            src="/images/logo-light.webp"
            width={1307}
            height={327}
            className="h-9 w-auto mb-4"
          />
          <p className="font-body-md text-body-md text-on-primary/80 mb-6 max-w-sm">
            Professional, reliable, and fast drain unblocking and repair services across the
            whole of Devon. Available 24/7 for emergencies.
          </p>
        </div>
        <div>
          <h4 className="font-label-bold text-label-bold mb-4 text-on-primary">Services</h4>
          <ul className="space-y-2 font-body-md text-body-md">
            {SERVICE_LINKS.map((link) => (
              <li key={link}>
                <a className="text-on-primary/80 hover:text-secondary-fixed transition-colors" href="#">
                  {link}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h4 className="font-label-bold text-label-bold mb-4 text-on-primary">Legal</h4>
          <ul className="space-y-2 font-body-md text-body-md">
            {LEGAL_LINKS.map((link) => (
              <li key={link}>
                <a className="text-on-primary/80 hover:text-secondary-fixed transition-colors" href="#">
                  {link}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="border-t border-outline-variant/20 py-6 px-margin-mobile md:px-margin-desktop text-center font-body-md text-body-md text-on-primary/60">
        © 2026 The Drain Guys Devon. All rights reserved. Registered in England & Wales.
      </div>
    </footer>
  );
}
