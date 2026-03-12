import { motion, useReducedMotion } from "motion/react";
import { ChevronRight } from "lucide-react";

import { Button } from "@/components/ui/Button";
import { fadeUp, staggerItem, viewportOnce } from "@/lib/motion";

export function Hero() {
  const reducedMotion = useReducedMotion();

  return (
    <motion.section
      initial="hidden"
      whileInView="visible"
      viewport={viewportOnce}
      variants={fadeUp(!!reducedMotion)}
    >
      <div className="layout py-16 text-center">
        <motion.h1
          className="font-serif mb-6"
          variants={staggerItem(!!reducedMotion)}
        >
          Airport Transfer
        </motion.h1>
        <motion.p
          className="mx-auto max-w-3xl mb-8"
          variants={staggerItem(!!reducedMotion)}
        >
          Experience seamless and comfortable airport transfers in Bali. From
          Ngurah Rai International Airport to your destination, we ensure a
          stress-free journey with professional service and modern vehicles.
        </motion.p>
        <motion.div variants={staggerItem(!!reducedMotion)}>
          <Button className="group gap-2 font-serif">
            Book Your Transfer
            <span className="transition-transform duration-300 group-hover:translate-x-1">
              <ChevronRight />
            </span>
          </Button>
        </motion.div>
      </div>
    </motion.section>
  );
}
