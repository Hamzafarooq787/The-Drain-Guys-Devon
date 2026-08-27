export const PHONE_NUMBER = "01392925907";
export const PHONE_DISPLAY = "01392 925907";

export const NAV_LINKS = [
  { label: "Home", href: "#home" },
  { label: "Services", href: "#services" },
  { label: "Areas", href: "#areas" },
  { label: "Why Us", href: "#why-us" },
  { label: "FAQs", href: "#faqs" },
  { label: "Contact", href: "#contact" },
];

export const SERVICE_AREAS = [
  "Exeter",
  "Plymouth",
  "Torquay",
  "Barnstaple",
  "Newton Abbot",
  "Tiverton",
  "Exmouth",
  "Bideford",
  "Tavistock",
];

export type ServiceCard = {
  icon: string;
  title: string;
  description: string;
  image: string;
  imageAlt: string;
  imageWidth: number;
  imageHeight: number;
  highlight?: boolean;
};

export const SERVICES: ServiceCard[] = [
  {
    icon: "water_drop",
    title: "Blocked Drains",
    description:
      "Fast, effective clearing of external drains and main sewer lines using advanced techniques.",
    image: "/images/service-blocked-drains.webp",
    imageAlt: "Technician clearing a blocked exterior drain with drain rods",
    imageWidth: 841,
    imageHeight: 673,
  },
  {
    icon: "tsunami",
    title: "Water Jetting",
    description:
      "High-pressure water jetting to remove stubborn blockages, scale, and fat build-up efficiently.",
    image: "/images/service-water-jetting.webp",
    imageAlt: "High-pressure water jetting machine clearing a drain",
    imageWidth: 841,
    imageHeight: 673,
  },
  {
    icon: "videocam",
    title: "CCTV Surveys",
    description:
      "Detailed camera inspections to identify the root cause of recurring issues without excavation.",
    image: "/images/service-cctv-surveys.webp",
    imageAlt: "CCTV drain survey camera and monitor at an open manhole",
    imageWidth: 869,
    imageHeight: 652,
  },
  {
    icon: "bathroom",
    title: "Toilets & Sinks",
    description:
      "Rapid response for overflowing toilets, blocked sinks, baths, and internal pipework issues.",
    image: "/images/service-toilets-sinks.webp",
    imageAlt: "Plumber repairing pipework under a bathroom sink",
    imageWidth: 841,
    imageHeight: 673,
  },
  {
    icon: "build",
    title: "Drain Repairs",
    description:
      "Professional repair of collapsed, cracked, or damaged pipework to restore full flow.",
    image: "/images/service-drain-repairs.webp",
    imageAlt: "Technician repairing a cracked drain pipe at a UK home",
    imageWidth: 869,
    imageHeight: 652,
  },
  {
    icon: "layers",
    title: "No-Dig Repairs",
    description:
      "Trenchless patch repairs and full relining to fix pipes without disruptive digging.",
    image: "/images/service-no-dig-repairs.webp",
    imageAlt: "Trenchless drain repair equipment at an open manhole",
    imageWidth: 922,
    imageHeight: 614,
  },
  {
    icon: "home",
    title: "Homebuyer Surveys",
    description:
      "Pre-purchase drainage inspections to protect your investment and avoid hidden costs.",
    image: "/images/service-homebuyer-surveys.webp",
    imageAlt: "Technician conducting a homebuyer drain survey outside a UK home",
    imageWidth: 922,
    imageHeight: 614,
  },
  {
    icon: "business",
    title: "Commercial",
    description:
      "Tailored maintenance contracts and emergency response for commercial premises.",
    image: "/images/service-commercial.webp",
    imageAlt: "Technician performing commercial drain jetting outside a business premises",
    imageWidth: 869,
    imageHeight: 652,
    highlight: true,
  },
];

export type WhyUsItem = {
  icon: string;
  title: string;
  description: string;
};

export const WHY_US: WhyUsItem[] = [
  {
    icon: "timer",
    title: "Fast Response",
    description: "Local engineers ready to dispatch quickly across Devon.",
  },
  {
    icon: "payments",
    title: "Transparent Pricing",
    description: "Clear, upfront costs with no hidden fees or nasty surprises.",
  },
  {
    icon: "verified",
    title: "Guaranteed Work",
    description: "Quality workmanship backed by strong service guarantees.",
  },
];

export type FAQItem = {
  question: string;
  answer: string;
};

export const FAQS: FAQItem[] = [
  {
    question: "How quickly can you respond to a blocked drain emergency?",
    answer:
      "We offer a 24/7 emergency response across Devon. In most cases we can have an engineer on-site the same day, and often within a couple of hours for urgent call-outs.",
  },
  {
    question: "How much does drain unblocking cost?",
    answer:
      "Every job gets a clear, upfront quote before any work begins — no hidden fees. Pricing depends on the type of blockage and access, but we always confirm the cost with you first.",
  },
  {
    question: "Do you offer CCTV drain surveys?",
    answer:
      "Yes. Our HD CCTV surveys let us pinpoint the exact cause and location of a problem without any excavation, and you'll get a full report with footage.",
  },
  {
    question: "Are you available for emergencies outside normal working hours?",
    answer:
      "Yes, our emergency team operates 24 hours a day, 7 days a week, including evenings, weekends, and bank holidays, for both residential and commercial customers.",
  },
  {
    question: "Do you work on commercial properties as well as homes?",
    answer:
      "We do. We provide tailored maintenance contracts and emergency response for commercial premises including restaurants, retail units, and industrial sites, alongside our residential services.",
  },
  {
    question: "What areas of Devon do you cover?",
    answer:
      "We cover the whole of Devon, including Exeter, Plymouth, Torquay, Barnstaple, Newton Abbot, Tiverton, Exmouth, Bideford, and Tavistock, with local engineers dispatched from strategically placed teams.",
  },
  {
    question: "Is your work guaranteed?",
    answer:
      "Yes, all our repair and unblocking work is backed by a service guarantee, and we're fully insured, so you can have complete confidence in the quality of our work.",
  },
];
