import { motion, useReducedMotion } from "motion/react";
import { Car, Check, Plane } from "lucide-react";

import { Button } from "@/components/ui/Button";
import { buildWhatsAppUrl } from "@/constants/whatsapp";
import {
  cardHover,
  fadeUp,
  staggerContainer,
  staggerItem,
  viewportOnce,
} from "@/lib/motion";

const services = [
  {
    icon: Plane,
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
    whatsappMessage: "Halo, saya ingin booking airport transfer di Bali.",
  },
  {
    icon: Car,
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
    whatsappMessage: "Halo, saya ingin menyewa mobil harian di Bali.",
  },
];

export function ServiceCard() {
  const reducedMotion = useReducedMotion();

  return (
    <motion.section
      initial="hidden"
      whileInView="visible"
      viewport={viewportOnce}
      variants={fadeUp(!!reducedMotion)}
    >
      <div className="layout py-16 xl:px-16">
        <motion.h2
          className="text-primary-dark font-serif text-center mb-16"
          variants={staggerItem(!!reducedMotion)}
        >
          Choose Your Travel Needs
        </motion.h2>

        <motion.div
          className="grid grid-cols-1 xl:grid-cols-2 gap-8"
          variants={staggerContainer(!!reducedMotion, 0.12, 0.06)}
        >
          {services.map((service) => (
            <motion.div
              key={service.title}
              className="interactive-surface interactive-surface-hover p-8"
              variants={staggerItem(!!reducedMotion)}
              whileHover={cardHover(!!reducedMotion)}
            >
              <div className="w-25 h-25 bg-primary/20 rounded-full float-left mr-4 flex items-center justify-center">
                <service.icon className="text-primary" size={48} strokeWidth={1.5} />
              </div>
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
                <a
                  href={buildWhatsAppUrl(service.whatsappMessage)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block"
                >
                  <Button variant={service.variant} fullWidth>
                    {service.cta}
                  </Button>
                </a>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
}
