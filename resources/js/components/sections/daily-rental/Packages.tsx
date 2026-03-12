import { motion, useReducedMotion } from "motion/react";
import { Check, Calendar } from "lucide-react";

import { Button } from "@/components/ui/Button";
import {
  cardHover,
  fadeUp,
  staggerContainer,
  staggerItem,
  viewportOnce,
} from "@/lib/motion";
import { cn } from "@/lib/utils";
import { rentalPackages, type RentalPackage } from "./data";

export function Packages() {
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
            Rental Packages
          </motion.h2>
          <motion.p
            className="max-w-2xl mx-auto"
            variants={staggerItem(!!reducedMotion)}
          >
            Choose the package that fits your stay. Longer rentals mean bigger
            savings.
          </motion.p>
        </div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
          variants={staggerContainer(!!reducedMotion, 0.12, 0.06)}
        >
          {rentalPackages.map((pkg) => (
            <PackageCard
              key={pkg.id}
              pkg={pkg}
              reducedMotion={!!reducedMotion}
            />
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
}

function PackageCard({
  pkg,
  reducedMotion,
}: {
  pkg: RentalPackage;
  reducedMotion: boolean;
}) {
  const isPopular = pkg.popular;

  return (
    <motion.div
      className={cn(
        "relative flex flex-col interactive-surface interactive-surface-hover p-8",
        isPopular && "bg-primary-dark text-beige border-primary-dark md:-translate-y-6",
      )}
      variants={staggerItem(reducedMotion)}
      whileHover={cardHover(reducedMotion)}
    >
      {isPopular && (
        <span className="absolute top-0 right-6 -translate-y-1/2 bg-primary-light text-primary-dark text-xs font-semibold px-4 py-1 rounded-full uppercase tracking-wider">
          Most Popular
        </span>
      )}

      <h4 className="font-serif mb-2">{pkg.title}</h4>
      <p className={cn("mb-6", isPopular ? "text-beige/80" : "text-primary-dark/70")}>
        {pkg.description}
      </p>

      <div className="mb-2">
        <span className="text-4xl font-bold">${pkg.price}</span>
        <span
          className={cn(
            "ml-1",
            isPopular ? "text-beige/70" : "text-primary-dark/60",
          )}
        >
          /{pkg.duration}
        </span>
      </div>

      {pkg.discount && (
        <span
          className={cn(
            "inline-block text-sm font-semibold mb-4 w-fit",
            isPopular ? "text-primary-light" : "text-primary",
          )}
        >
          {pkg.discount}
        </span>
      )}

      <div
        className={cn(
          "flex items-center gap-2 mb-6",
          isPopular ? "text-beige/80" : "text-primary-dark/70",
        )}
      >
        <Calendar className="size-4" />
        <span className="text-sm">{pkg.duration}</span>
      </div>

      <ul className="space-y-3 mb-8 grow">
        {pkg.includes.map((item) => (
          <li key={item} className="flex items-center gap-3">
            <Check
              className={cn(
                "size-5 shrink-0",
                isPopular ? "text-primary-light" : "text-primary",
              )}
            />
            <span className="text-sm sm:text-base">{item}</span>
          </li>
        ))}
      </ul>

      <Button
        variant={isPopular ? "beige" : "primary"}
        fullWidth
      >
        Book Now
      </Button>
    </motion.div>
  );
}
