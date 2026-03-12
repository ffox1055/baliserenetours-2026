import { motion, useReducedMotion } from "motion/react";
import { MapPin } from "lucide-react";

import {
  cardHover,
  fadeUp,
  staggerContainer,
  staggerItem,
  viewportOnce,
} from "@/lib/motion";
import { popularRoutes } from "./data";

export function PopularRoutes() {
  const reducedMotion = useReducedMotion();

  return (
    <motion.section
      initial="hidden"
      whileInView="visible"
      viewport={viewportOnce}
      variants={fadeUp(!!reducedMotion)}
    >
      <div className="layout py-12 sm:py-14 md:py-16 xl:px-16">
        <motion.h2
          className="font-serif text-center mb-10"
          variants={staggerItem(!!reducedMotion)}
        >
          Popular Routes
        </motion.h2>
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 gap-4"
          variants={staggerContainer(!!reducedMotion, 0.1, 0.04)}
        >
          {popularRoutes.map((route) => (
            <motion.div
              key={`${route.pickup}-${route.dropoff}`}
              className="interactive-surface interactive-surface-hover px-4 py-3"
              variants={staggerItem(!!reducedMotion)}
              whileHover={cardHover(!!reducedMotion)}
            >
              <div className="flex items-center gap-2">
                <MapPin
                  className="text-primary shrink-0"
                  size={18}
                  strokeWidth={1.5}
                />
                <p className="font-medium text-sm sm:text-base">
                  {route.pickup}
                  <span className="text-primary mx-1.5">→</span>
                  {route.dropoff}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
}
