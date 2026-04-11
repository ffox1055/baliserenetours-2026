import { motion, useReducedMotion } from "motion/react";

import { Button } from "@/components/ui/Button";
import { buildWhatsAppUrl } from "@/constants/whatsapp";
import {
  fadeUp,
  staggerContainer,
  staggerItem,
  viewportOnce,
} from "@/lib/motion";

export function Hero() {
  const reducedMotion = useReducedMotion();

  return (
    <motion.section
      className="relative flex items-center overflow-hidden font-serif min-h-[70vh] md:min-h-[80vh]"
      initial="hidden"
      whileInView="visible"
      viewport={viewportOnce}
      variants={fadeUp(!!reducedMotion, 12)}
    >
      <img
        src="/images/hero-home.jpg"
        alt="Private car driving along a scenic road in Bali at sunset"
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-linear-to-r from-beige/95 via-beige/85 to-beige/50 md:from-beige md:via-beige/90 md:to-beige/30" />

      <div className="layout py-16 relative z-10">
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
          <motion.div
            className="flex gap-3"
            variants={staggerItem(!!reducedMotion)}
          >
            <a
              href={buildWhatsAppUrl(
                "Halo, saya ingin booking airport transfer di Bali.",
              )}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button>Book Airport Transfer</Button>
            </a>
            <a
              href={buildWhatsAppUrl(
                "Halo, saya ingin menyewa mobil harian di Bali.",
              )}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button variant="outline">Explore Daily Car Rental</Button>
            </a>
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  );
}
