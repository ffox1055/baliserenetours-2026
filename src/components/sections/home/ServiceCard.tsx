import { Check } from "lucide-react";

import { Button } from "@/components/ui/Button";

const services = [
  {
    title: "Airport Transfer Package",
    description:
      "Stress-free pickup and drop-off from Ngurah Rai International Airport. Our professional drivers ensure a smooth and comfortable journey to your hotel or accommodation.",
    features: [
      "Private air-conditioned vehicle",
      "Meet & greet at arrival gate",
      "Fixed price, no hidden fees",
      "24/7 availability",
    ],
    cta: "View Airport Transfer Packages",
    variant: "primary" as const,
  },
  {
    title: "Daily Car Rental",
    description:
      "Enjoy Bali at your own pace with our reliable daily car rental service, perfect for sightseeing, business trips, or family vacations.",
    features: [
      "Driver included",
      "Flexible hourly or full-day use",
      "Clean & well-maintained vehicles",
      "Custom itinerary support",
    ],
    cta: "View Daily Rental Options",
    variant: "outline" as const,
  },
];

export function ServiceCard() {
  return (
    <section>
      <div className="layout py-16 xl:px-16">
        <h2 className="text-primary-dark font-serif text-center mb-16">
          Choose Your Travel Needs
        </h2>

        <div className="grid grid-cols-1 xl:grid-cols-2 gap-8">
          {services.map((service) => (
            <div
              key={service.title}
              className="border border-primary/50 rounded-lg shadow-primary-dark shadow-xl/20 p-8 hover:shadow-xl/40 transition-shadow duration-300"
            >
              <div className="w-25 h-25 bg-primary/20 rounded-full float-left mr-4"></div>
              <div className="space-y-4">
                <h3 className="mt-2 font-serif">{service.title}</h3>
                <p className="leading-relaxed">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex gap-4 items-center">
                      <Check className="text-primary" />
                      <p>{feature}</p>
                    </li>
                  ))}
                </ul>
                <Button variant={service.variant} fullWidth>
                  {service.cta}
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
