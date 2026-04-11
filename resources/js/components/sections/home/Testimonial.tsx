import { motion, useReducedMotion } from "motion/react";
import { Quote } from "lucide-react";

import { Button } from "@/components/ui/Button";
import { buildWhatsAppUrl } from "@/constants/whatsapp";
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
      <div className="layout py-24 xl:px-16">
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
          {/* Testimonial Block */}
          <motion.div
            className="interactive-surface bg-beige border-none p-10 xl:p-12 space-y-6 relative overflow-hidden flex flex-col justify-center"
            variants={staggerItem(!!reducedMotion)}
          >
            <Quote
              className="absolute -top-4 -left-4 text-primary opacity-5 rotate-180"
              size={140}
            />
            <p className="testimonial-quote md:text-xl relative z-10 text-neutral-800 italic">
              "The pickup was smooth and the driver was extremely friendly.
              Perfect start to our Bali trip."
            </p>
            <div className="flex items-center justify-center gap-4 relative z-10">
              <div className="w-12 h-12 bg-primary-light/30 rounded-full flex items-center justify-center font-serif text-primary-dark font-bold text-xl">
                E
              </div>
              <p className="font-medium text-neutral-700">Emma, Australia</p>
            </div>
          </motion.div>

          {/* CTA Block */}
          <motion.div
            className="py-10 px-6 sm:px-8 xl:px-12 shadow-primary-dark shadow-2xl/20 bg-linear-to-br from-primary to-primary-dark rounded-2xl flex flex-col items-center justify-center space-y-8 font-serif relative overflow-hidden isolate"
            variants={staggerItem(!!reducedMotion)}
          >
            {/* Decorative circles */}
            <div className="absolute -top-24 -right-24 w-64 h-64 bg-white/5 rounded-full blur-3xl -z-10 pointer-events-none" />
            <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-white/5 rounded-full blur-3xl -z-10 pointer-events-none" />

            <h3 className="text-white text-3xl xl:text-4xl text-center leading-tight">
              Ready for a Serene Bali Experience?
            </h3>

            <motion.div
              className="flex flex-col sm:flex-row gap-4 w-full justify-center relative z-10"
              variants={staggerContainer(!!reducedMotion, 0.08, 0)}
            >
              <motion.div variants={staggerItem(!!reducedMotion)}>
                <a
                  href={buildWhatsAppUrl(
                    "Halo, saya ingin booking airport transfer di Bali.",
                  )}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block"
                >
                  <Button variant="beige" size="compact" fullWidth>
                    Book Airport Transfer
                  </Button>
                </a>
              </motion.div>
              <motion.div variants={staggerItem(!!reducedMotion)}>
                <a
                  href={buildWhatsAppUrl(
                    "Halo, saya ingin menyewa mobil harian di Bali.",
                  )}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block"
                >
                  <Button variant="inverse" size="compact" fullWidth>
                    Rent a Car Today
                  </Button>
                </a>
              </motion.div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  );
}
