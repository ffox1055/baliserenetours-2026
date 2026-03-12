import { CalendarClock, CircleCheckBig, Compass, type LucideIcon } from "lucide-react";

interface WhyTravelWithUsItem {
  title: string;
  description: string;
  icon: LucideIcon;
}

export const whyTravelWithUsItems: WhyTravelWithUsItem[] = [
  {
    title: "Choose Service",
    description: "Airport transfer or daily rental",
    icon: Compass,
  },
  {
    title: "Share Your Details",
    description: "Date, time-pickup & destination",
    icon: CalendarClock,
  },
  {
    title: "Confirm & Relax",
    description: "We handle the rest",
    icon: CircleCheckBig,
  },
];
