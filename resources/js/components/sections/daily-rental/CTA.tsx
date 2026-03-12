import { motion, useReducedMotion } from "motion/react";
import { ChevronRight } from "lucide-react";

import { Button } from "@/components/ui/Button";
import { fadeUp, staggerItem, viewportOnce } from "@/lib/motion";

export function CTA() {
  const reducedMotion = useReducedMotion();

  return (
    <motion.section
      className="bg-primary-dark/10"
      initial="hidden"
      whileInView="visible"
      viewport={viewportOnce}
      variants={fadeUp(!!reducedMotion)}
    >
      <div className="layout py-16">
        <div className="text-center">
          <motion.h2
            className="font-serif mb-6"
            variants={staggerItem(!!reducedMotion)}
          >
            Ready to Explore Bali?
          </motion.h2>
          <motion.p
            className="max-w-2xl mx-auto mb-8"
            variants={staggerItem(!!reducedMotion)}
          >
            Rent a car today and discover the island on your own terms
          </motion.p>
          <motion.div variants={staggerItem(!!reducedMotion)}>
            <Button className="group gap-2 font-serif">
              Rent Your Car Now
              <span className="transition-transform duration-300 group-hover:translate-x-1">
                <ChevronRight />
              </span>
            </Button>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}
