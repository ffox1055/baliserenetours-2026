import { motion, useReducedMotion } from "motion/react";

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
          Book Your Service
        </motion.h1>
        <motion.p
          className="mx-auto max-w-3xl mb-8"
          variants={staggerItem(!!reducedMotion)}
        >
          Reserve your airport transfer or daily car rental in just a few steps.
          We'll confirm your booking within 2 hours and ensure everything is
          ready for your arrival in Bali.
        </motion.p>
      </div>
    </motion.section>
  );
}
