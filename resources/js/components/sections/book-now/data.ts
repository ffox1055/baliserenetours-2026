import type { LucideIcon } from "lucide-react";
import { Bus, Car, Plane } from "lucide-react";

export interface ServiceOption {
  id: string;
  icon: LucideIcon;
  title: string;
  description: string;
}

export interface VehicleType {
  id: string;
  name: string;
  price: number;
  capacity: number;
}

export interface PopularRoute {
  pickup: string;
  dropoff: string;
}

export const serviceOptions: ServiceOption[] = [
  {
    id: "airport-transfer",
    icon: Plane,
    title: "Airport Transfer",
    description: "Pickup or drop-off at Ngurah Rai International Airport",
  },
  {
    id: "daily-rental",
    icon: Car,
    title: "Daily Rental",
    description: "Rent a car with driver for full-day exploration",
  },
  {
    id: "both",
    icon: Bus,
    title: "Both Services",
    description: "Combine airport transfer with daily car rental",
  },
];

export const vehicleTypes: VehicleType[] = [
  { id: "honda-brio", name: "Honda Brio", price: 25, capacity: 5 },
  { id: "toyota-avanza", name: "Toyota Avanza", price: 30, capacity: 7 },
  { id: "toyota-innova", name: "Toyota Innova", price: 45, capacity: 7 },
  { id: "toyota-alphard", name: "Toyota Alphard", price: 120, capacity: 7 },
];

export const popularRoutes: PopularRoute[] = [
  { pickup: "Ngurah Rai Airport", dropoff: "Seminyak" },
  { pickup: "Ngurah Rai Airport", dropoff: "Ubud" },
  { pickup: "Ngurah Rai Airport", dropoff: "Kuta" },
  { pickup: "Ngurah Rai Airport", dropoff: "Nusa Dua" },
  { pickup: "Seminyak", dropoff: "Uluwatu Temple" },
  { pickup: "Ubud", dropoff: "Tegallalang Rice Terrace" },
  { pickup: "Kuta", dropoff: "Tanah Lot" },
  { pickup: "Sanur", dropoff: "Ngurah Rai Airport" },
];

export const locationSuggestions: string[] = [
  "Ngurah Rai Airport",
  "Seminyak",
  "Kuta",
  "Ubud",
  "Nusa Dua",
  "Sanur",
  "Canggu",
  "Jimbaran",
  "Uluwatu",
  "Tanah Lot",
  "Denpasar",
  "Legian",
];
