import Image from "next/image";
import Icon from "./Icon";
import { SERVICE_AREAS } from "@/lib/constants";

export default function Areas() {
  return (
    <section className="py-12 md:py-section-gap bg-surface" id="areas">
      <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-gutter items-center">
          <div className="order-2 lg:order-1">
            <h2 className="font-headline-lg text-headline-lg text-on-surface mb-6">
              Serving All of Devon
            </h2>
            <p className="font-body-lg text-body-lg text-on-surface-variant mb-8">
              Our strategically located teams ensure we can reach your property quickly, no
              matter where you are in the county.
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 font-body-md text-body-md text-on-surface">
              {SERVICE_AREAS.map((area) => (
                <div key={area} className="flex items-center gap-2">
                  <Icon name="location_on" className="text-primary-container w-3.5 h-3.5" />
                  {area}
                </div>
              ))}
            </div>
          </div>
          <div className="order-1 lg:order-2 rounded-xl overflow-hidden card-shadow bg-surface-container-low flex items-center justify-center p-4">
            <Image
              alt="Map of Devon showing The Drain Guys Devon service areas"
              className="w-full h-auto object-contain max-h-[400px]"
              width={922}
              height={614}
              src="/images/devon-map.webp"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
