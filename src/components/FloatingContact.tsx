import Icon from "./Icon";
import { PHONE_NUMBER, whatsappLink } from "@/lib/constants";

const WHATSAPP_MESSAGE = "Hi, I'd like to ask about a drainage job in Devon.";

export default function FloatingContact() {
  return (
    <div className="hidden md:flex flex-col gap-3 fixed bottom-6 right-6 z-40">
      <a
        className="w-14 h-14 rounded-full bg-[#25D366] text-white flex items-center justify-center shadow-[0_4px_20px_rgba(0,31,63,0.25)] hover:scale-105 active:scale-95 transition-transform"
        href={whatsappLink(WHATSAPP_MESSAGE)}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Message us on WhatsApp"
        title="WhatsApp us"
      >
        <Icon name="whatsapp" className="w-7 h-7" />
      </a>
      <a
        className="w-14 h-14 rounded-full bg-secondary-container text-on-secondary-container flex items-center justify-center shadow-[0_4px_20px_rgba(0,31,63,0.25)] hover:scale-105 active:scale-95 transition-transform"
        href={`tel:${PHONE_NUMBER}`}
        aria-label="Call us"
        title="Call us"
      >
        <Icon name="phone" className="w-7 h-7" />
      </a>
    </div>
  );
}
