import Icon from "./Icon";
import { WHY_US } from "@/lib/constants";

export default function WhyUs() {
  return (
    <section
      className="py-12 md:py-section-gap bg-primary-container text-on-primary relative overflow-hidden"
      id="why-us"
    >
      <div className="absolute right-0 top-0 w-1/2 h-full opacity-5 pointer-events-none">
        <svg className="w-full h-full fill-current" preserveAspectRatio="none" viewBox="0 0 100 100">
          <path d="M0 100 C 20 0 50 0 100 100 Z" />
        </svg>
      </div>

      <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop relative z-10">
        <div className="text-center mb-12">
          <h2 className="font-headline-lg text-headline-lg mb-4">
            Why Choose The Drain Guys Devon?
          </h2>
          <p className="font-body-lg text-body-lg text-on-primary/80 max-w-2xl mx-auto">
            Reliability and expertise you can trust when it matters most.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {WHY_US.map((item) => (
            <div key={item.title} className="text-center flex flex-col items-center">
              <div className="w-16 h-16 rounded-full bg-secondary-container/10 border border-secondary-container/30 flex items-center justify-center mb-4">
                <Icon name={item.icon} className="text-secondary-container w-8 h-8" />
              </div>
              <h4 className="font-headline-md text-headline-md mb-2">{item.title}</h4>
              <p className="font-body-md text-body-md text-on-primary/70">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
