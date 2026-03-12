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
  id: string;
  title: string;
  description: string;
  price: number;
  duration: string;
  includes: string[];
  popular: boolean;
}

export interface ServiceFeature {
  icon: LucideIcon;
  title: string;
  description: string;
}

export const pricingPlans: PricingPlan[] = [
  {
    id: "1",
    title: "Standard Airport Transfer",
    description:
      "Reliable transportation from/to Ngurah Rai Airport with professional driver",
    price: 25,
    duration: "45-60 minutes",
    includes: [
      "Professional driver",
      "Air-conditioned vehicle",
      "Flight monitoring",
      "24/7 support",
    ],
    popular: false,
  },
  {
    id: "2",
    title: "VIP Airport Transfer",
    description:
      "Premium service with luxury vehicle and personalized assistance",
    price: 45,
    duration: "45-60 minutes",
    includes: [
      "Professional driver",
      "Luxury vehicle",
      "Personal assistant",
      "Welcome drink",
      "Priority service",
    ],
    popular: true,
  },
  {
    id: "3",
    title: "Executive Group Transfer",
    description:
      "Spacious vehicle for families or groups, with extra luggage space and meet & greet service",
    price: 65,
    duration: "45-60 minutes",
    includes: [
      "Professional driver",
      "Spacious SUV/minivan",
      "Extra luggage space",
      "Meet & greet",
      "Complimentary WiFi",
      "Child seat available",
    ],
    popular: false,
  },
];

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
