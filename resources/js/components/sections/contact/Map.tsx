import { motion, useReducedMotion } from "motion/react";
import { MapPin } from "lucide-react";

import { fadeUp, staggerItem, viewportOnce } from "@/lib/motion";

export function Map() {
  const reducedMotion = useReducedMotion();

  return (
    <motion.section
      className="bg-primary-dark/10"
      initial="hidden"
      whileInView="visible"
      viewport={viewportOnce}
      variants={fadeUp(!!reducedMotion)}
    >
      <div className="layout py-12 sm:py-14 md:py-16 xl:px-16">
        <motion.div
          className="text-center mb-8"
          variants={staggerItem(!!reducedMotion)}
        >
          <h2 className="font-serif mb-4">Find Us on the Map</h2>
          <p>Locate our offices and service areas across Bali</p>
        </motion.div>

        <motion.div
          className="interactive-surface overflow-hidden h-80 sm:h-96 flex items-center justify-center bg-secondary/50"
          variants={staggerItem(!!reducedMotion)}
        >
          <div className="text-center space-y-3">
            <div className="w-16 h-16 bg-primary/20 rounded-full mx-auto flex items-center justify-center">
              <MapPin
                className="text-primary w-8 h-8"
                strokeWidth={1.5}
              />
            </div>
            <p className="font-serif">Interactive map coming soon</p>
            <p className="text-sm">
              Showing our locations in Seminyak, Ngurah Rai Airport, and Ubud
            </p>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
}
