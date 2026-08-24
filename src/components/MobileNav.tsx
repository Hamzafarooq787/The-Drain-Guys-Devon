import Icon from "./Icon";
import { PHONE_NUMBER } from "@/lib/constants";

export default function MobileNav() {
  return (
    <nav className="bg-surface md:hidden fixed bottom-0 left-0 right-0 z-50 border-t border-outline-variant shadow-[0_-4px_20px_rgba(0,31,63,0.08)] pb-[env(safe-area-inset-bottom)]">
      <div className="w-full flex justify-around items-center px-4 py-3">
        <a
          className="flex flex-col items-center justify-center bg-secondary-container text-on-secondary-container rounded-xl px-6 py-2 active:scale-95 transition-transform"
          href={`tel:${PHONE_NUMBER}`}
        >
          <Icon name="call" className="mb-1" />
          <span className="font-label-bold text-label-bold">Call Now</span>
        </a>
        <a
          className="flex flex-col items-center justify-center text-on-surface-variant px-6 py-2 hover:bg-secondary/10 active:scale-95 transition-transform rounded-xl"
          href="#contact"
        >
          <Icon name="request_quote" className="mb-1" />
          <span className="font-label-bold text-label-bold">Get a Quote</span>
        </a>
      </div>
    </nav>
  );
}
