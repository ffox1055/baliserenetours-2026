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
          Contact Us
        </motion.h1>
        <motion.p
          className="mx-auto max-w-3xl mb-8"
          variants={staggerItem(!!reducedMotion)}
        >
          Get in touch with us for all your transportation needs in Bali.
          We're here to help you plan the perfect journey with our premium
          airport transfer and car rental services.
        </motion.p>
      </div>
    </motion.section>
  );
}
