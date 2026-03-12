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
          Daily Car Rental
        </motion.h1>
        <motion.p
          className="mx-auto max-w-3xl mb-8"
          variants={staggerItem(!!reducedMotion)}
        >
          Explore Bali at your own pace with our reliable and affordable car
          rental service. Choose from a wide selection of well-maintained
          vehicles, delivered straight to your doorstep.
        </motion.p>
        <motion.div variants={staggerItem(!!reducedMotion)}>
          <Button className="group gap-2 font-serif">
            Rent a Car Now
            <span className="transition-transform duration-300 group-hover:translate-x-1">
              <ChevronRight />
            </span>
          </Button>
        </motion.div>
      </div>
    </motion.section>
  );
}
