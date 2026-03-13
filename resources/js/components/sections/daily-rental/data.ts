import {
  CalendarRange,
  CarFront,
  Headset,
  Navigation,
  ShieldCheck,
  Sparkles,
} from "lucide-react";

import type { LucideIcon } from "lucide-react";

export interface ServiceFeature {
  icon: LucideIcon;
  title: string;
  description: string;
}

export interface Vehicle {
  id: number;
  name: string;
  price: number;
  capacity: number;
  transmission: string;
  features: string[];
  is_active: boolean;
}

export interface RentalPackage {
  id: number;
  title: string;
  description: string;
  duration: string;
  price: number;
  discount: string | null;
  includes: string[];
  is_popular: boolean;
  is_active: boolean;
}

export const serviceFeatures: ServiceFeature[] = [
  {
    icon: CarFront,
    title: "Well-Maintained Fleet",
    description:
      "All vehicles are regularly serviced and kept in excellent condition for your safety and comfort",
  },
  {
    icon: ShieldCheck,
    title: "Full Insurance Coverage",
    description:
      "Comprehensive insurance included with every rental for complete peace of mind",
  },
  {
    icon: Headset,
    title: "24/7 Customer Support",
    description:
      "Our dedicated support team is available around the clock to assist you anytime",
  },
  {
    icon: CalendarRange,
    title: "Flexible Rental Periods",
    description:
      "Rent by the day, week, or month with easy extensions and no hidden fees",
  },
  {
    icon: Sparkles,
    title: "Clean & Sanitized",
    description:
      "Every vehicle is thoroughly cleaned and sanitized before each rental",
  },
  {
    icon: Navigation,
    title: "Free Delivery & Pickup",
    description:
      "Complimentary vehicle delivery and pickup at your hotel or villa in Bali",
  },
];

