import Image from "next/image";
import Icon from "./Icon";
import QuickQuoteForm from "./QuickQuoteForm";
import { PHONE_DISPLAY, PHONE_NUMBER, whatsappLink } from "@/lib/constants";

const TRUST_POINTS = ["24/7 Response", "Fixed Pricing", "Local Experts", "Fully Insured"];
const WHATSAPP_MESSAGE = "Hi, I'd like to ask about a drainage job in Devon.";

export default function Hero() {
  return (
    <section
      className="relative bg-primary-container text-on-primary min-h-[80vh] flex items-center"
      id="home"
    >
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-primary-container/80 z-10" />
        <Image
          alt="Drainage technician clearing an exterior drain on a UK driveway"
          className="object-cover object-center"
          fill
          priority
          sizes="100vw"
          src="/images/hero.webp"
        />
      </div>

      <div className="relative z-20 w-full px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto grid grid-cols-1 lg:grid-cols-12 gap-gutter py-12 md:py-section-gap">
        <div className="lg:col-span-7 flex flex-col justify-center">
          <h1 className="font-headline-xl-mobile md:font-headline-xl text-headline-xl-mobile md:text-headline-xl text-on-primary mb-6">
            Fast Drain Unblocking and Repairs Across Devon
          </h1>
          <p className="font-body-lg text-body-lg text-on-primary/90 mb-8 max-w-2xl">
            24/7 specialist help for residential and commercial properties. We clear blockages
            fast and provide lasting repair solutions.
          </p>
          <div className="flex flex-col sm:flex-row sm:flex-wrap gap-4 mb-10">
            <a
              className="bg-secondary-container text-on-secondary-container font-label-bold text-label-bold py-4 px-8 rounded-xl hover:bg-secondary/90 transition-colors flex items-center justify-center gap-2 card-shadow text-center min-h-[48px] active:scale-95"
              href={`tel:${PHONE_NUMBER}`}
            >
              <Icon name="phone" />
              Call {PHONE_DISPLAY}
            </a>
            <a
              className="bg-[#25D366] text-white font-label-bold text-label-bold py-4 px-8 rounded-xl hover:bg-[#25D366]/90 transition-colors flex items-center justify-center gap-2 card-shadow text-center min-h-[48px] active:scale-95"
              href={whatsappLink(WHATSAPP_MESSAGE)}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Icon name="whatsapp" className="w-5 h-5" />
              WhatsApp Us
            </a>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-on-primary/80 font-body-md text-body-md">
            {TRUST_POINTS.map((point) => (
              <div key={point} className="flex items-center gap-2">
                <Icon name="check_circle" className="text-secondary-container" />
                <span>{point}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="lg:col-span-5 mt-4 lg:mt-0" id="contact">
          <QuickQuoteForm />
        </div>
      </div>
    </section>
  );
}
