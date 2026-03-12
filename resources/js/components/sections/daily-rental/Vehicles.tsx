import { motion, useReducedMotion } from "motion/react";
import { Check, Users, Cog } from "lucide-react";

import { Button } from "@/components/ui/Button";
import {
  cardHover,
  fadeUp,
  staggerContainer,
  staggerItem,
  viewportOnce,
} from "@/lib/motion";
import { vehicles, type Vehicle } from "./data";

export function Vehicles() {
  const reducedMotion = useReducedMotion();

  return (
    <motion.section
      initial="hidden"
      whileInView="visible"
      viewport={viewportOnce}
      variants={fadeUp(!!reducedMotion)}
    >
      <div className="layout py-16">
        <div className="text-center mb-16">
          <motion.h2
            className="font-serif mb-6"
            variants={staggerItem(!!reducedMotion)}
          >
            Our Vehicle Fleet
          </motion.h2>
          <motion.p
            className="max-w-2xl mx-auto"
            variants={staggerItem(!!reducedMotion)}
          >
            Choose from our diverse selection of quality vehicles to suit your
            needs and budget.
          </motion.p>
        </div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={staggerContainer(!!reducedMotion, 0.12, 0.06)}
        >
          {vehicles.map((vehicle) => (
            <VehicleCard
              key={vehicle.id}
              vehicle={vehicle}
              reducedMotion={!!reducedMotion}
            />
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
}

function VehicleCard({
  vehicle,
  reducedMotion,
}: {
  vehicle: Vehicle;
  reducedMotion: boolean;
}) {
  return (
    <motion.div
      className="flex flex-col interactive-surface interactive-surface-hover p-8"
      variants={staggerItem(reducedMotion)}
      whileHover={cardHover(reducedMotion)}
    >
      <h4 className="font-serif mb-2">{vehicle.name}</h4>

      <div className="mb-4">
        <span className="text-4xl font-bold">${vehicle.price}</span>
        <span className="ml-1 text-primary-dark/60">/day</span>
      </div>

      <div className="flex items-center gap-4 mb-6 text-primary-dark/70">
        <div className="flex items-center gap-1.5">
          <Users className="size-4" />
          <span className="text-sm">{vehicle.capacity} seats</span>
        </div>
        <div className="flex items-center gap-1.5">
          <Cog className="size-4" />
          <span className="text-sm">{vehicle.transmission}</span>
        </div>
      </div>

      <ul className="space-y-3 mb-8 grow">
        {vehicle.features.map((feature) => (
          <li key={feature} className="flex items-center gap-3">
            <Check className="size-5 shrink-0 text-primary" />
            <span className="text-sm sm:text-base">{feature}</span>
          </li>
        ))}
      </ul>

      <Button variant="outline" fullWidth>
        Book Now
      </Button>
    </motion.div>
  );
}
