import { motion, useReducedMotion } from "motion/react";
import { MessageCircle, Phone } from "lucide-react";

import { Button } from "@/components/ui/Button";
import { fadeUp, staggerItem, viewportOnce } from "@/lib/motion";

export function CTA() {
  const reducedMotion = useReducedMotion();

  return (
    <motion.section
      className="bg-primary-dark/50"
      initial="hidden"
      whileInView="visible"
      viewport={viewportOnce}
      variants={fadeUp(!!reducedMotion)}
    >
      <div className="layout py-12 sm:py-14 md:py-16 text-center">
        <motion.h2
          className="font-serif text-beige mb-4"
          variants={staggerItem(!!reducedMotion)}
        >
          Ready to Get Started?
        </motion.h2>
        <motion.p
          className="text-beige/80 max-w-2xl mx-auto mb-8"
          variants={staggerItem(!!reducedMotion)}
        >
          Contact us today and let us handle your transportation needs in Bali
        </motion.p>
        <motion.div
          className="flex flex-col sm:flex-row gap-4 justify-center"
          variants={staggerItem(!!reducedMotion)}
        >
          <a href="tel:+6281234567890">
            <Button variant="beige" className="group gap-2 font-serif">
              <Phone size={18} />
              Call Now
            </Button>
          </a>
          <a
            href="https://wa.me/6281234567890"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button className="group gap-2 font-serif text-beige border-beige hover:bg-beige/10 hover:border-beige">
              <MessageCircle size={18} />
              WhatsApp
            </Button>
          </a>
        </motion.div>
      </div>
    </motion.section>
  );
}
