import Icon from "./Icon";
import { SERVICES } from "@/lib/constants";

export default function Services() {
  return (
    <section className="py-12 md:py-section-gap bg-surface-container-low" id="services">
      <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
        <div className="text-center mb-12">
          <h2 className="font-headline-lg text-headline-lg text-on-surface mb-4">Our Services</h2>
          <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl mx-auto">
            Comprehensive drainage solutions tailored for homes and businesses across Devon.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {SERVICES.map((service) => (
            <div
              key={service.title}
              className={`rounded-xl p-6 card-shadow hover:-translate-y-1 transition-transform duration-300 border border-outline-variant/30 flex flex-col h-full ${
                service.highlight ? "bg-primary-container text-on-primary" : "bg-surface"
              }`}
            >
              <div
                className={`w-14 h-14 rounded-lg flex items-center justify-center mb-4 ${
                  service.highlight
                    ? "bg-secondary-container/20 text-secondary-container"
                    : "bg-primary-container/5 text-primary-container"
                }`}
              >
                <Icon name={service.icon} className="w-8 h-8" />
              </div>
              <h3
                className={`font-headline-md text-headline-md mb-3 ${
                  service.highlight ? "text-on-primary" : "text-on-surface"
                }`}
              >
                {service.title}
              </h3>
              <p
                className={`font-body-md text-body-md flex-grow ${
                  service.highlight ? "text-on-primary/80" : "text-on-surface-variant"
                }`}
              >
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
