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
  Plus,
  Minus,
  type LucideIcon,
} from "lucide-react";

function WhatsAppGlyph({ className }: { className?: string }) {
  return (
    <svg
      className={`inline-block shrink-0 ${className ?? ""}`}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden
    >
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.472-.148-.67.15-.198.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
      <path d="M12.001 2C6.478 2 2 6.477 2 12c0 1.821.487 3.53 1.334 5.007L2 22l5.15-1.312A9.953 9.953 0 0 0 12.001 22C17.524 22 22 17.523 22 12S17.524 2 12.001 2zm0 18.166a8.14 8.14 0 0 1-4.152-1.14l-.298-.177-3.055.779.816-2.978-.194-.306a8.128 8.128 0 0 1-1.25-4.344c0-4.49 3.653-8.143 8.143-8.143 4.49 0 8.143 3.653 8.143 8.143 0 4.49-3.653 8.166-8.153 8.166z" />
    </svg>
  );
}

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
  add: Plus,
  remove: Minus,
};

type IconProps = {
  name: string;
  className?: string;
  filled?: boolean;
};

export default function Icon({ name, className = "" }: IconProps) {
  if (name === "whatsapp") return <WhatsAppGlyph className={className} />;
  const LucideComponent = ICONS[name];
  if (!LucideComponent) return null;
  return <LucideComponent className={`inline-block shrink-0 ${className}`} aria-hidden />;
}
