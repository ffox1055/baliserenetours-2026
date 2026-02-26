import { Hero } from "@/components/sections/home/Hero";
import { Check } from "lucide-react";

const whyTravelWithUs = [
  {
    title: "Choose Service",
    description: "airpot transfer or daily rental",
  },
  {
    title: "Share Your Details",
    description: "Date, time-pickup & destination",
  },
  {
    title: "Confirm & Relax",
    description: "We handle the rest",
  },
];

export default function Home() {
  return (
    <>
      <Hero />

      <section>
        <div className="layout py-16 xl:px-16">
          <h2 className="text-primary-dark font-serif text-center mb-16">
            Choose Your Travel Needs
          </h2>

          <div className="grid grid-cols-1 xl:grid-cols-2 gap-8">
            <div className="border border-primary/50 rounded-lg shadow-primary-dark shadow-xl/20 p-8">
              <div className="w-25 h-25 bg-primary/20 rounded-full float-left mr-4"></div>

              <div className="space-y-4">
                <h3 className="mt-2 font-serif">Airport Transfer Package</h3>
                <p className="leading-relaxed">
                  Stress-free pickup and drop-off from Ngurah Rai International
                  Airport. Our professional drivers ensure a smooth and
                  comfortable journey to your hotel or accommodation.
                </p>
                <ul className="space-y-2">
                  <li className="flex gap-4 items-center">
                    <Check className="text-primary" />
                    <p>Private air-conditioned vehicle</p>
                  </li>
                  <li className="flex gap-4 items-center">
                    <Check className="text-primary" />
                    <p>Meet & greet at arrival gate</p>
                  </li>
                  <li className="flex gap-4 items-center">
                    <Check className="text-primary" />
                    <p>Fixed price, no hidden fees</p>
                  </li>
                  <li className="flex gap-4 items-center">
                    <Check className="text-primary" />
                    <p>24/7 availability</p>
                  </li>
                </ul>
                <button className="border-primary bg-primary px-8 py-2 text-beige rounded-sm shadow-sm text-xl cursor-pointer w-full">
                  View Airport Transfer Packages
                </button>
              </div>
            </div>
            <div className="border border-primary/50 rounded-lg shadow-primary-dark shadow-xl/20 p-8">
              <div className="w-25 h-25 bg-primary/20 rounded-full float-left mr-4"></div>
              <div className="space-y-4">
                <h3 className="mt-2 font-serif">Daily Car Rental</h3>
                <p className="leading-relaxed">
                  Enjoy Bali at your own pace with our reliable daily car rental
                  service, perfect for sightseeing, business trips, or family
                  vacations.
                </p>
                <ul className="space-y-2">
                  <li className="flex gap-4 items-center">
                    <Check className="text-primary" />
                    <p>Driver included</p>
                  </li>
                  <li className="flex gap-4 items-center">
                    <Check className="text-primary" />
                    <p>Flexible hourly or full-day use</p>
                  </li>
                  <li className="flex gap-4 items-center">
                    <Check className="text-primary" />
                    <p>Clean & well-maintained vehicles</p>
                  </li>
                  <li className="flex gap-4 items-center">
                    <Check className="text-primary" />
                    <p>Custom itinerary support</p>
                  </li>
                </ul>
                <button className="border-primary border px-8 py-2 rounded-sm bg-primary-light/10 text-primary-dark shadow-sm text-xl cursor-pointer w-full">
                  View Daily Rental Options
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="layout py-16 xl:px-16">
          <h2 className="font-serif mb-16 text-center">
            Why Travel with Baliserene Tours
          </h2>

          <div className="border border-primary/50 rounded-lg shadow-primary-dark shadow-xl/20 p-2 xl:p-4 grid-cols-1 xl:grid-cols-3 grid gap-4 lg:max-w-1/2 lg:mx-auto xl:max-w-full">
            {whyTravelWithUs.map((item) => (
              <div key={item.title} className="relative overflow-hidden flex">
                <div className="w-15 h-15 bg-primary/20 rounded-full xl:float-left mr-4"></div>
                <div>
                  <h4 className="my-2 font-serif">{item.title}</h4>
                  <p className="text-wider">{item.description}</p>
                </div>

                <div className="hidden 2xl:block absolute right-5 top-1/2 -translate-y-1/2 w-6 h-32 overflow-hidden">
                  <div className="absolute right-0 w-32 h-32 border-primary-light/30 border-2 border-dashed rounded-full"></div>
                </div>

                <div className="hidden 2xl:block absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 bg-primary/50 rounded-full"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section>
        <div className="layout py-16 xl:px-16">
          <h2 className="mb-10 sm:mb-16 font-serif text-center">
            Book in 3 Simple Steps
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
            {/* review */}
            <div className="bg-beige shadow-primary-dark shadow-xl/20 p-8 rounded-lg space-y-4 border-primary-dark/10 border">
              <p className="testimonial-quote text-xl">
                The pickup was smooth and the driver was extremely friendly.
                Perfect start to our Bali trip.
              </p>

              <p className="text-center">Emma, Australia</p>
            </div>
            {/* cta */}
            <div className="py-6 px-6 sm:px-8 lg:px-12 shadow-primary-dark shadow-xl/20 bg-primary rounded-lg flex flex-col items-center justify-center space-y-6 sm:space-y-8 font-serif">
              <h4 className="text-white">Ready for Serene Bali Experience?</h4>

              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 w-full justify-center">
                <button className="border-beige border px-4 sm:px-8 py-2 rounded-sm bg-beige text-primary-dark shadow-sm text-base sm:text-xl cursor-pointer w-full sm:w-auto">
                  Book Airport Transfer
                </button>
                <button className="border-beige border px-4 sm:px-8 py-2 rounded-sm bg-primary text-white shadow-sm text-base sm:text-xl cursor-pointer w-full sm:w-auto">
                  Rent a Car Today
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
