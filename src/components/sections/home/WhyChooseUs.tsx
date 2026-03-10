"use client";

import { motion, useReducedMotion } from "motion/react";
import { fadeUp, staggerContainer, staggerItem, viewportOnce } from "@/lib/motion";

const whyTravelWithUs = [
  {
    title: "Choose Service",
    description: "airpot transfer or daily rental",
  },
  {
    title: "Share Your Details",
    description: "Date, time-pickup & destination",
  },
  {
    title: "Confirm & Relax",
    description: "We handle the rest",
  },
];

export function WhyChooseUs() {
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
          className="font-serif mb-10 sm:mb-12 md:mb-16 text-center"
          variants={staggerItem(!!reducedMotion)}
        >
          Why Travel with Baliserene Tours
        </motion.h2>

        <motion.div
          className="interactive-surface interactive-surface-hover p-3 sm:p-4 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-3 sm:gap-4 md:gap-5 xl:gap-4"
          variants={staggerContainer(!!reducedMotion, 0.1, 0.04)}
        >
          {whyTravelWithUs.map((item) => (
            <motion.div
              key={item.title}
              className="rounded-md relative overflow-hidden flex flex-col items-center text-center gap-2 p-4 sm:flex-row sm:items-start sm:text-left sm:gap-4 sm:p-5 xl:p-4"
              variants={staggerItem(!!reducedMotion)}
            >
              <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-15 md:h-15 bg-primary/20 rounded-full shrink-0"></div>
              <div className="space-y-1 sm:space-y-2 sm:pr-8 2xl:pr-12">
                <h4 className="font-serif leading-tight">{item.title}</h4>
                <p className="tracking-wide leading-relaxed">
                  {item.description}
                </p>
              </div>

              <div className="hidden 2xl:block absolute right-5 top-1/2 -translate-y-1/2 w-6 h-32 overflow-hidden">
                <div className="absolute right-0 w-32 h-32 border-primary-light/30 border-2 border-dashed rounded-full"></div>
              </div>

              <div className="hidden 2xl:block absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 bg-primary/50 rounded-full"></div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
}
