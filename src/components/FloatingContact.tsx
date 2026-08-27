import Icon from "./Icon";
import { PHONE_NUMBER } from "@/lib/constants";

export default function FloatingContact() {
  return (
    <div
      className="fixed right-4 md:right-6 z-40"
      style={{ bottom: "calc(1rem + env(safe-area-inset-bottom))" }}
    >
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
