import {
  Phone,
  PhoneCall,
  CheckCircle2,
  AlertTriangle,
  Check,
  Droplet,
  Waves,
  Video,
  Bath,
  Wrench,
  Layers,
  Home,
  Building2,
  Timer,
  Banknote,
  BadgeCheck,
  MapPin,
  Menu,
  X,
  ClipboardList,
  type LucideIcon,
} from "lucide-react";

const ICONS: Record<string, LucideIcon> = {
  phone: Phone,
  call: PhoneCall,
  check_circle: CheckCircle2,
  warning: AlertTriangle,
  check: Check,
  water_drop: Droplet,
  tsunami: Waves,
  videocam: Video,
  bathroom: Bath,
  build: Wrench,
  layers: Layers,
  home: Home,
  business: Building2,
  timer: Timer,
  payments: Banknote,
  verified: BadgeCheck,
  location_on: MapPin,
  menu: Menu,
  close: X,
  request_quote: ClipboardList,
};

type IconProps = {
  name: string;
  className?: string;
  filled?: boolean;
};

export default function Icon({ name, className = "" }: IconProps) {
  const LucideComponent = ICONS[name];
  if (!LucideComponent) return null;
  return <LucideComponent className={`inline-block shrink-0 ${className}`} aria-hidden />;
}
