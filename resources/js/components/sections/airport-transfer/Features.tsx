import { motion, useReducedMotion } from "motion/react";

import {
  cardHover,
  fadeUp,
  staggerContainer,
  staggerItem,
  viewportOnce,
} from "@/lib/motion";
import { serviceFeatures } from "./data";

export function Features() {
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
            Why Choose Our Airport Transfer?
          </motion.h2>
          <motion.p
            className="max-w-2xl mx-auto"
            variants={staggerItem(!!reducedMotion)}
          >
            We provide exceptional airport transfer services with attention to
            every detail.
          </motion.p>
        </div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={staggerContainer(!!reducedMotion, 0.12, 0.06)}
        >
          {serviceFeatures.map((feature) => (
            <motion.div
              key={feature.title}
              className="text-center bg-primary-light/10 p-8 rounded-sm shadow-lg/5"
              variants={staggerItem(!!reducedMotion)}
              whileHover={cardHover(!!reducedMotion)}
            >
              <feature.icon className="mx-auto mb-4 size-10 text-primary" />
              <h3 className="font-serif text-xl mb-2">{feature.title}</h3>
              <p>{feature.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
}
