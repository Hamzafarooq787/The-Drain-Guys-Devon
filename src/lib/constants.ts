export const PHONE_NUMBER = "01632960245";
export const PHONE_DISPLAY = "01632 960 245";

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
  highlight?: boolean;
};

export const SERVICES: ServiceCard[] = [
  {
    icon: "water_drop",
    title: "Blocked Drains",
    description:
      "Fast, effective clearing of external drains and main sewer lines using advanced techniques.",
  },
  {
    icon: "tsunami",
    title: "Water Jetting",
    description:
      "High-pressure water jetting to remove stubborn blockages, scale, and fat build-up efficiently.",
  },
  {
    icon: "videocam",
    title: "CCTV Surveys",
    description:
      "Detailed camera inspections to identify the root cause of recurring issues without excavation.",
  },
  {
    icon: "bathroom",
    title: "Toilets & Sinks",
    description:
      "Rapid response for overflowing toilets, blocked sinks, baths, and internal pipework issues.",
  },
  {
    icon: "build",
    title: "Drain Repairs",
    description:
      "Professional repair of collapsed, cracked, or damaged pipework to restore full flow.",
  },
  {
    icon: "layers",
    title: "No-Dig Repairs",
    description:
      "Trenchless patch repairs and full relining to fix pipes without disruptive digging.",
  },
  {
    icon: "home",
    title: "Homebuyer Surveys",
    description:
      "Pre-purchase drainage inspections to protect your investment and avoid hidden costs.",
  },
  {
    icon: "business",
    title: "Commercial",
    description:
      "Tailored maintenance contracts and emergency response for commercial premises.",
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
