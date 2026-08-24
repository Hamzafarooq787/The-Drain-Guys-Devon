import Icon from "./Icon";
import { PHONE_NUMBER } from "@/lib/constants";

export default function EmergencyStrip() {
  return (
    <section className="bg-primary-container border-t border-b border-outline-variant/20 py-8 relative overflow-hidden">
      <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:16px_16px]" />
      <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop flex flex-col md:flex-row items-center justify-between gap-6 relative z-10 text-center md:text-left">
        <div className="flex items-center gap-4">
          <Icon name="warning" className="text-secondary-container w-9 h-9" />
          <h2 className="font-headline-md text-headline-md text-on-primary">
            Drainage Emergency in Devon?
          </h2>
        </div>
        <a
          className="bg-secondary-container text-on-secondary-container font-label-bold text-label-bold py-4 px-8 rounded-xl hover:bg-secondary/90 transition-colors flex items-center justify-center gap-2 card-shadow whitespace-nowrap active:scale-95"
          href={`tel:${PHONE_NUMBER}`}
        >
          <Icon name="call" />
          Call Our 24/7 Team
        </a>
      </div>
    </section>
  );
}
