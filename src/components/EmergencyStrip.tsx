import Icon from "./Icon";
import { PHONE_NUMBER, whatsappLink } from "@/lib/constants";

const WHATSAPP_MESSAGE = "Hi, I have a drainage emergency in Devon and need help.";

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
        <div className="flex flex-col sm:flex-row gap-3">
          <a
            className="bg-secondary-container text-on-secondary-container font-label-bold text-label-bold py-4 px-8 rounded-xl hover:bg-secondary/90 transition-colors flex items-center justify-center gap-2 card-shadow whitespace-nowrap active:scale-95"
            href={`tel:${PHONE_NUMBER}`}
          >
            <Icon name="call" />
            Call Our 24/7 Team
          </a>
          <a
            className="bg-[#25D366] text-white font-label-bold text-label-bold py-4 px-8 rounded-xl hover:bg-[#25D366]/90 transition-colors flex items-center justify-center gap-2 card-shadow whitespace-nowrap active:scale-95"
            href={whatsappLink(WHATSAPP_MESSAGE)}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Icon name="whatsapp" className="w-5 h-5" />
            WhatsApp Us
          </a>
        </div>
      </div>
    </section>
  );
}
