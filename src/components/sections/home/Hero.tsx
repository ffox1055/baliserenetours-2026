"use client";

import { motion, useReducedMotion } from "motion/react";

import { Button } from "@/components/ui/Button";
import { fadeUp, staggerContainer, staggerItem, viewportOnce } from "@/lib/motion";

export function Hero() {
  const reducedMotion = useReducedMotion();

  return (
    <motion.section
      className="relative flex items-center overflow-hidden font-serif"
      initial="hidden"
      whileInView="visible"
      viewport={viewportOnce}
      variants={fadeUp(!!reducedMotion, 12)}
    >
      <div className="layout py-16">
        <motion.div
          className="flex flex-col space-y-8"
          variants={staggerContainer(!!reducedMotion, 0.12, 0.08)}
        >
          <motion.h1
            className="text-primary-dark tracking-wide leading-tight md:max-w-1/2 2xl:max-w-2/5"
            variants={staggerItem(!!reducedMotion)}
          >
            Serene Journeys, Seamless Transfers in Bali
          </motion.h1>
          <motion.p
            className="text-primary-dark tracking-wider leading-relaxed md:text-xl md:max-w-3/5 xl:max-w-5/12"
            variants={staggerItem(!!reducedMotion)}
          >
            Private airport transfers and daily car rentals designed for
            comfort, reliability, and peace of mind
          </motion.p>
          <motion.div className="flex gap-3" variants={staggerItem(!!reducedMotion)}>
            <Button>Book Airport Transfer</Button>
            <Button variant="outline">Explore Daily Car Rental</Button>
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  );
}
