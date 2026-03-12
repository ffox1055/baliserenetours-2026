import type { LucideIcon } from "lucide-react";
import { Clock, Mail, MapPin, Phone } from "lucide-react";

export interface ContactInfoItem {
  icon: LucideIcon;
  title: string;
  details: string[];
  description: string;
}

export interface OfficeLocation {
  name: string;
  address: string;
  phone: string;
  hours: string;
}

export const contactInfo: ContactInfoItem[] = [
  {
    icon: Phone,
    title: "Phone",
    details: ["+62 812-3456-7890", "+62 811-2345-6789"],
    description: "24/7 customer support",
  },
  {
    icon: Mail,
    title: "Email",
    details: ["info@baliserenetours.com", "bookings@baliserenetours.com"],
    description: "We respond within 2 hours",
  },
  {
    icon: MapPin,
    title: "Location",
    details: [
      "Jl. Sunset Road No. 88",
      "Seminyak, Bali 80361",
      "Indonesia",
    ],
    description: "Visit our office",
  },
  {
    icon: Clock,
    title: "Business Hours",
    details: ["Mon - Sun: 24/7", "Emergency: Always available"],
    description: "We're here when you need us",
  },
];

export const offices: OfficeLocation[] = [
  {
    name: "Main Office - Seminyak",
    address: "Jl. Sunset Road No. 88, Seminyak, Bali 80361",
    phone: "+62 812-3456-7890",
    hours: "24/7",
  },
  {
    name: "Airport Counter - Ngurah Rai",
    address: "Domestic Arrival Hall, Ngurah Rai International Airport",
    phone: "+62 811-2345-6789",
    hours: "24/7",
  },
  {
    name: "Ubud Branch",
    address: "Jl. Raya Ubud No. 45, Ubud, Bali 80571",
    phone: "+62 813-4567-8901",
    hours: "08:00 - 20:00 WITA",
  },
];
