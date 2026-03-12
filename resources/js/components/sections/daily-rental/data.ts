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
  id: string;
  name: string;
  price: number;
  capacity: number;
  transmission: string;
  features: string[];
}

export interface RentalPackage {
  id: string;
  title: string;
  description: string;
  duration: string;
  price: number;
  discount?: string;
  includes: string[];
  popular: boolean;
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

export const vehicles: Vehicle[] = [
  {
    id: "1",
    name: "Toyota Avanza",
    price: 30,
    capacity: 7,
    transmission: "Automatic",
    features: ["Air Conditioning", "Audio System", "USB Charging"],
  },
  {
    id: "2",
    name: "Honda Brio",
    price: 25,
    capacity: 5,
    transmission: "Automatic",
    features: ["Air Conditioning", "Fuel Efficient", "Compact Size"],
  },
  {
    id: "3",
    name: "Toyota Innova",
    price: 45,
    capacity: 7,
    transmission: "Automatic",
    features: ["Spacious Interior", "Audio System", "Rear AC"],
  },
  {
    id: "4",
    name: "Honda HR-V",
    price: 50,
    capacity: 5,
    transmission: "Automatic",
    features: ["Sporty Design", "Touchscreen", "Cruise Control"],
  },
  {
    id: "5",
    name: "Toyota Alphard",
    price: 120,
    capacity: 7,
    transmission: "Automatic",
    features: ["Premium Interior", "Captain Seats", "Entertainment System"],
  },
  {
    id: "6",
    name: "Honda Civic",
    price: 55,
    capacity: 5,
    transmission: "Automatic",
    features: ["Sporty Sedan", "Turbo Engine", "Advanced Safety"],
  },
];

export const rentalPackages: RentalPackage[] = [
  {
    id: "1",
    title: "Daily Rental",
    description: "Perfect for short trips and day explorations around Bali",
    duration: "1 day",
    price: 30,
    includes: [
      "Full insurance coverage",
      "Free delivery & pickup",
      "24/7 roadside assistance",
      "Unlimited mileage",
    ],
    popular: false,
  },
  {
    id: "2",
    title: "Weekly Rental",
    description:
      "Ideal for week-long vacations with significant savings on daily rates",
    duration: "7 days",
    price: 175,
    discount: "Save 17%",
    includes: [
      "Full insurance coverage",
      "Free delivery & pickup",
      "24/7 roadside assistance",
      "Unlimited mileage",
      "Free vehicle swap",
    ],
    popular: true,
  },
  {
    id: "3",
    title: "Monthly Rental",
    description:
      "Best value for extended stays with the lowest daily rate and premium perks",
    duration: "30 days",
    price: 600,
    discount: "Save 33%",
    includes: [
      "Full insurance coverage",
      "Free delivery & pickup",
      "24/7 roadside assistance",
      "Unlimited mileage",
      "Free vehicle swap",
      "Priority support",
    ],
    popular: false,
  },
];
