import { Check } from "lucide-react";

export function ServiceCard() {
  return (
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
  );
}
