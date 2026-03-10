"use client";

import { motion, useReducedMotion } from "motion/react";

import { Button } from "@/components/ui/Button";
import {
  cardHover,
  fadeUp,
  staggerContainer,
  staggerItem,
  viewportOnce,
} from "@/lib/motion";

export function Testimonial() {
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
          className="mb-10 sm:mb-16 font-serif text-center"
          variants={staggerItem(!!reducedMotion)}
        >
          Book in 3 Simple Steps
        </motion.h2>

        <motion.div
          className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8"
          variants={staggerContainer(!!reducedMotion, 0.12, 0.08)}
        >
          <motion.div
            className="interactive-surface interactive-surface-hover bg-beige border-primary-dark/10 p-8 space-y-4"
            variants={staggerItem(!!reducedMotion)}
            whileHover={cardHover(!!reducedMotion)}
          >
            <p className="testimonial-quote md:text-xl">
              The pickup was smooth and the driver was extremely friendly.
              Perfect start to our Bali trip.
            </p>

            <p className="text-center">Emma, Australia</p>
          </motion.div>

          <motion.div
            className="interactive-surface-hover py-6 px-6 sm:px-8 lg:px-12 shadow-primary-dark shadow-xl/20 bg-primary rounded-lg flex flex-col items-center justify-center space-y-6 sm:space-y-8 font-serif"
            variants={staggerItem(!!reducedMotion)}
            whileHover={cardHover(!!reducedMotion)}
          >
            <h4 className="text-white">Ready for Serene Bali Experience?</h4>

            <motion.div
              className="flex flex-col sm:flex-row gap-3 sm:gap-4 w-full justify-center"
              variants={staggerContainer(!!reducedMotion, 0.08, 0)}
            >
              <motion.div variants={staggerItem(!!reducedMotion)}>
                <Button
                  variant="beige"
                  size="compact"
                  fullWidth
                  className="sm:w-auto"
                >
                  Book Airport Transfer
                </Button>
              </motion.div>
              <motion.div variants={staggerItem(!!reducedMotion)}>
                <Button
                  variant="inverse"
                  size="compact"
                  fullWidth
                  className="sm:w-auto"
                >
                  Rent a Car Today
                </Button>
              </motion.div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  );
}
