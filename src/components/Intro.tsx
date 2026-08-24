import Image from "next/image";
import Icon from "./Icon";

const POINTS = [
  "Rapid unblocking using high-pressure jetting.",
  "Accurate diagnosis with HD CCTV drain surveys.",
  "Long-lasting structural repairs and relining.",
];

export default function Intro() {
  return (
    <section className="py-12 md:py-section-gap bg-surface">
      <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-gutter items-center">
          <div>
            <h2 className="font-headline-lg text-headline-lg text-on-surface mb-6">
              Practical Solutions for Blocked and Damaged Drains
            </h2>
            <p className="font-body-lg text-body-lg text-on-surface-variant mb-8">
              We understand the disruption a drainage issue causes. Our local Devon teams are
              equipped with the latest technology to diagnose and fix problems swiftly, minimizing
              hassle for you.
            </p>
            <ul className="space-y-4 mb-8">
              {POINTS.map((point) => (
                <li key={point} className="flex items-start gap-3">
                  <Icon name="check" className="text-primary-container mt-1" />
                  <span className="font-body-md text-body-md text-on-surface">{point}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="relative rounded-xl overflow-hidden card-shadow group aspect-[4/3] lg:aspect-auto lg:h-full">
            <Image
              alt="Drainage engineer reviewing live CCTV drain survey footage on a tablet"
              className="object-cover transform group-hover:scale-105 transition-transform duration-500"
              fill
              sizes="(min-width: 1024px) 50vw, 100vw"
              src="/images/cctv-intro.webp"
            />
            <div className="absolute inset-0 bg-primary-container/10 group-hover:bg-transparent transition-colors duration-300" />
          </div>
        </div>
      </div>
    </section>
  );
}
