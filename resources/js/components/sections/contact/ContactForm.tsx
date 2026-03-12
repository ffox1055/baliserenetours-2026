import { useState } from "react";
import { motion, useReducedMotion } from "motion/react";
import { Clock, Phone, Send } from "lucide-react";

import { Button } from "@/components/ui/Button";
import {
  fadeUp,
  staggerContainer,
  staggerItem,
  viewportOnce,
} from "@/lib/motion";
import { offices } from "./data";

export function ContactForm() {
  const reducedMotion = useReducedMotion();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });

  function handleInputChange(
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    console.log("Form submitted:", formData);
  }

  const inputClasses =
    "w-full px-4 py-3 border border-primary/30 rounded-lg bg-beige/50 text-primary-dark transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary";

  return (
    <motion.section
      initial="hidden"
      whileInView="visible"
      viewport={viewportOnce}
      variants={fadeUp(!!reducedMotion)}
    >
      <div className="layout py-12 sm:py-14 md:py-16 xl:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {/* Contact Form */}
          <motion.div
            className="interactive-surface p-6 sm:p-8"
            variants={staggerItem(!!reducedMotion)}
          >
            <h2 className="font-serif mb-6">Send us a Message</h2>
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium mb-2"
                  >
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className={inputClasses}
                    placeholder="Your full name"
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium mb-2"
                  >
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className={inputClasses}
                    placeholder="your@email.com"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label
                    htmlFor="phone"
                    className="block text-sm font-medium mb-2"
                  >
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className={inputClasses}
                    placeholder="+62 xxx xxxx xxxx"
                  />
                </div>
                <div>
                  <label
                    htmlFor="service"
                    className="block text-sm font-medium mb-2"
                  >
                    Service Interested In
                  </label>
                  <select
                    id="service"
                    name="service"
                    value={formData.service}
                    onChange={handleInputChange}
                    className={inputClasses}
                  >
                    <option value="">Select a service</option>
                    <option value="airport-transfer">Airport Transfer</option>
                    <option value="daily-rental">Daily Car Rental</option>
                    <option value="both">Both Services</option>
                    <option value="other">Other</option>
                  </select>
                </div>
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium mb-2"
                >
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows={5}
                  className={`${inputClasses} resize-none`}
                  placeholder="Tell us about your transportation needs..."
                />
              </div>

              <Button type="submit" fullWidth className="group gap-2 font-serif">
                Send Message
                <span className="transition-transform duration-300 group-hover:translate-x-1">
                  <Send size={18} />
                </span>
              </Button>
            </form>
          </motion.div>

          {/* Office Locations */}
          <motion.div variants={staggerItem(!!reducedMotion)}>
            <h2 className="font-serif mb-6">Our Locations</h2>
            <motion.div
              className="space-y-5"
              variants={staggerContainer(!!reducedMotion, 0.1, 0.06)}
            >
              {offices.map((office) => (
                <motion.div
                  key={office.name}
                  className="interactive-surface p-6"
                  variants={staggerItem(!!reducedMotion)}
                >
                  <h5 className="font-serif mb-2">{office.name}</h5>
                  <p className="text-sm sm:text-base leading-relaxed mb-3">
                    {office.address}
                  </p>
                  <div className="flex items-center gap-2 text-sm mb-1">
                    <Phone
                      className="text-primary shrink-0"
                      size={16}
                      strokeWidth={1.5}
                    />
                    <span>{office.phone}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <Clock
                      className="text-primary shrink-0"
                      size={16}
                      strokeWidth={1.5}
                    />
                    <span>{office.hours}</span>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}
