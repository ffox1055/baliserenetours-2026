import { motion, useReducedMotion } from "motion/react";

import {
  cardHover,
  fadeUp,
  staggerContainer,
  staggerItem,
  viewportOnce,
} from "@/lib/motion";
import { contactInfo } from "./data";

export function ContactInfo() {
  const reducedMotion = useReducedMotion();

  return (
    <motion.section
      initial="hidden"
      whileInView="visible"
      viewport={viewportOnce}
      variants={fadeUp(!!reducedMotion)}
    >
      <div className="layout py-12 sm:py-14 md:py-16 xl:px-16">
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6"
          variants={staggerContainer(!!reducedMotion, 0.1, 0.04)}
        >
          {contactInfo.map((info) => (
            <motion.div
              key={info.title}
              className="interactive-surface interactive-surface-hover p-6 text-center"
              variants={staggerItem(!!reducedMotion)}
              whileHover={cardHover(!!reducedMotion)}
            >
              <div className="w-14 h-14 bg-primary/20 rounded-full mx-auto mb-4 flex items-center justify-center">
                <info.icon
                  className="text-primary w-7 h-7"
                  strokeWidth={1.5}
                />
              </div>
              <h4 className="font-serif mb-2">{info.title}</h4>
              {info.details.map((detail) => (
                <p key={detail} className="text-sm sm:text-base leading-relaxed">
                  {detail}
                </p>
              ))}
              <p className="text-sm text-primary mt-3 font-medium">
                {info.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
}
