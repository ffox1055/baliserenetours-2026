import { useState } from "react";
import { motion, useReducedMotion } from "motion/react";
import { Send } from "lucide-react";

import { Button } from "@/components/ui/Button";
import {
  fadeUp,
  staggerContainer,
  staggerItem,
  viewportOnce,
} from "@/lib/motion";
import {
  locationSuggestions,
  serviceOptions,
  vehicleTypes,
} from "./data";

export function BookingForm() {
  const reducedMotion = useReducedMotion();
  const [formData, setFormData] = useState({
    service: "",
    pickupDate: "",
    pickupTime: "",
    returnDate: "",
    returnTime: "",
    pickupLocation: "",
    dropoffLocation: "",
    vehicle: "",
    passengers: "",
    name: "",
    email: "",
    phone: "",
    specialRequests: "",
  });

  function handleInputChange(
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  }

  function handleServiceSelect(serviceId: string) {
    setFormData((prev) => ({
      ...prev,
      service: serviceId,
      ...(serviceId !== "daily-rental" && serviceId !== "both"
        ? { returnDate: "", returnTime: "" }
        : {}),
    }));
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    console.log("Booking submitted:", formData);
  }

  const today = new Date().toISOString().split("T")[0];
  const showReturnFields =
    formData.service === "daily-rental" || formData.service === "both";

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
        <motion.div
          className="interactive-surface p-6 sm:p-8"
          variants={staggerItem(!!reducedMotion)}
        >
          <h2 className="font-serif mb-8">Booking Details</h2>
          <form onSubmit={handleSubmit} className="space-y-8">
            {/* Service Selection */}
            <div>
              <label className="block text-sm font-medium mb-3">
                Select Service *
              </label>
              <motion.div
                className="grid grid-cols-1 sm:grid-cols-3 gap-4"
                variants={staggerContainer(!!reducedMotion, 0.08, 0.02)}
              >
                {serviceOptions.map((option) => (
                  <motion.button
                    key={option.id}
                    type="button"
                    onClick={() => handleServiceSelect(option.id)}
                    aria-pressed={formData.service === option.id}
                    className={`interactive-surface p-5 text-left transition-all duration-300 cursor-pointer ${
                      formData.service === option.id
                        ? "ring-2 ring-primary border-primary"
                        : ""
                    }`}
                    variants={staggerItem(!!reducedMotion)}
                  >
                    <div className="w-10 h-10 bg-primary/20 rounded-full mb-3 flex items-center justify-center">
                      <option.icon
                        className="text-primary w-5 h-5"
                        strokeWidth={1.5}
                      />
                    </div>
                    <h5 className="font-serif mb-1">{option.title}</h5>
                    <p className="text-sm leading-relaxed">
                      {option.description}
                    </p>
                  </motion.button>
                ))}
              </motion.div>
            </div>

            {/* Date & Time */}
            <div>
              <h4 className="font-serif mb-4">Date & Time</h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label
                    htmlFor="pickupDate"
                    className="block text-sm font-medium mb-2"
                  >
                    Pickup Date *
                  </label>
                  <input
                    type="date"
                    id="pickupDate"
                    name="pickupDate"
                    value={formData.pickupDate}
                    onChange={handleInputChange}
                    required
                    min={today}
                    className={inputClasses}
                  />
                </div>
                <div>
                  <label
                    htmlFor="pickupTime"
                    className="block text-sm font-medium mb-2"
                  >
                    Pickup Time *
                  </label>
                  <input
                    type="time"
                    id="pickupTime"
                    name="pickupTime"
                    value={formData.pickupTime}
                    onChange={handleInputChange}
                    required
                    className={inputClasses}
                  />
                </div>
              </div>
              {showReturnFields && (
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mt-5">
                  <div>
                    <label
                      htmlFor="returnDate"
                      className="block text-sm font-medium mb-2"
                    >
                      Return Date *
                    </label>
                    <input
                      type="date"
                      id="returnDate"
                      name="returnDate"
                      value={formData.returnDate}
                      onChange={handleInputChange}
                      required
                      min={formData.pickupDate || today}
                      className={inputClasses}
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="returnTime"
                      className="block text-sm font-medium mb-2"
                    >
                      Return Time *
                    </label>
                    <input
                      type="time"
                      id="returnTime"
                      name="returnTime"
                      value={formData.returnTime}
                      onChange={handleInputChange}
                      required
                      className={inputClasses}
                    />
                  </div>
                </div>
              )}
            </div>

            {/* Locations */}
            <div>
              <h4 className="font-serif mb-4">Locations</h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label
                    htmlFor="pickupLocation"
                    className="block text-sm font-medium mb-2"
                  >
                    Pickup Location *
                  </label>
                  <input
                    type="text"
                    id="pickupLocation"
                    name="pickupLocation"
                    list="location-suggestions"
                    value={formData.pickupLocation}
                    onChange={handleInputChange}
                    required
                    className={inputClasses}
                    placeholder="e.g. Ngurah Rai Airport"
                  />
                </div>
                <div>
                  <label
                    htmlFor="dropoffLocation"
                    className="block text-sm font-medium mb-2"
                  >
                    Drop-off Location *
                  </label>
                  <input
                    type="text"
                    id="dropoffLocation"
                    name="dropoffLocation"
                    list="location-suggestions"
                    value={formData.dropoffLocation}
                    onChange={handleInputChange}
                    required
                    className={inputClasses}
                    placeholder="e.g. Seminyak"
                  />
                </div>
              </div>
              <datalist id="location-suggestions">
                {locationSuggestions.map((location) => (
                  <option key={location} value={location} />
                ))}
              </datalist>
            </div>

            {/* Vehicle & Passengers */}
            <div>
              <h4 className="font-serif mb-4">Vehicle & Passengers</h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label
                    htmlFor="vehicle"
                    className="block text-sm font-medium mb-2"
                  >
                    Vehicle Type *
                  </label>
                  <select
                    id="vehicle"
                    name="vehicle"
                    value={formData.vehicle}
                    onChange={handleInputChange}
                    required
                    className={inputClasses}
                  >
                    <option value="">Select a vehicle</option>
                    {vehicleTypes.map((v) => (
                      <option key={v.id} value={v.id}>
                        {v.name} – ${v.price}/day ({v.capacity} seats)
                      </option>
                    ))}
                  </select>
                </div>
                <div>
                  <label
                    htmlFor="passengers"
                    className="block text-sm font-medium mb-2"
                  >
                    Number of Passengers *
                  </label>
                  <select
                    id="passengers"
                    name="passengers"
                    value={formData.passengers}
                    onChange={handleInputChange}
                    required
                    className={inputClasses}
                  >
                    <option value="">Select</option>
                    {[1, 2, 3, 4, 5, 6, 7].map((n) => (
                      <option key={n} value={n}>
                        {n} {n === 1 ? "passenger" : "passengers"}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
            </div>

            {/* Personal Information */}
            <div>
              <h4 className="font-serif mb-4">Personal Information</h4>
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
              <div className="mt-5">
                <label
                  htmlFor="phone"
                  className="block text-sm font-medium mb-2"
                >
                  Phone Number *
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  required
                  className={inputClasses}
                  placeholder="+62 xxx xxxx xxxx"
                />
              </div>
            </div>

            {/* Special Requests */}
            <div>
              <label
                htmlFor="specialRequests"
                className="block text-sm font-medium mb-2"
              >
                Special Requests
              </label>
              <textarea
                id="specialRequests"
                name="specialRequests"
                value={formData.specialRequests}
                onChange={handleInputChange}
                rows={4}
                className={`${inputClasses} resize-none`}
                placeholder="Child seat, extra luggage space, specific route preferences..."
              />
            </div>

            {/* Submit */}
            <Button type="submit" fullWidth className="group gap-2 font-serif">
              Submit Booking
              <span className="transition-transform duration-300 group-hover:translate-x-1">
                <Send size={18} />
              </span>
            </Button>
          </form>
        </motion.div>
      </div>
    </motion.section>
  );
}
