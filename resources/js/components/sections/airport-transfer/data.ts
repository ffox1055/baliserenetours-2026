import {
  Clock,
  GlassWater,
  MapPin,
  ShieldCheck,
  Timer,
  UserCheck,
} from "lucide-react";

import type { LucideIcon } from "lucide-react";

export interface PricingPlan {
  id: number;
  title: string;
  description: string;
  price: number;
  duration: string;
  includes: string[];
  is_popular: boolean;
  is_active: boolean;
}

export interface ServiceFeature {
  icon: LucideIcon;
  title: string;
  description: string;
}

export const serviceFeatures: ServiceFeature[] = [
  {
    icon: UserCheck,
    title: "Professional Drivers",
    description:
      "Licensed and experienced drivers with excellent knowledge of Bali routes",
  },
  {
    icon: ShieldCheck,
    title: "Safe & Reliable",
    description:
      "Well-maintained vehicles with comprehensive insurance coverage",
  },
  {
    icon: Clock,
    title: "24/7 Service",
    description: "Available round the clock for your convenience",
  },
  {
    icon: MapPin,
    title: "Real-time Tracking",
    description: "Track your vehicle in real-time via our mobile app",
  },
  {
    icon: GlassWater,
    title: "Refreshments",
    description:
      "Complimentary bottled water and cold towels during your journey",
  },
  {
    icon: Timer,
    title: "Punctual Service",
    description: "Guaranteed on-time pickup and drop-off at your destination",
  },
];
