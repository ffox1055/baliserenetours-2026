import { Button } from "@/components/ui/Button";

export function Hero() {
  return (
    <section className="relative flex items-center overflow-hidden font-serif">
      <div className="layout py-16">
        {/* Background Image */}
        <div className="flex flex-col space-y-8">
          <h1 className="text-primary-dark tracking-wide leading-tight md:max-w-1/2 2xl:max-w-2/5">
            Serene Journeys, Seamless Transfers in Bali
          </h1>
          <p className="text-primary-dark tracking-wider leading-relaxed md:text-xl md:max-w-3/5 xl:max-w-5/12">
            Private airport transfers and daily car rentals designed for
            comfort, reliability, and peace of mind
          </p>
          <div className="flex gap-3">
            <Button>Book Airport Transfer</Button>
            <Button variant="outline">Explore Daily Car Rental</Button>
          </div>
        </div>
      </div>
    </section>
  );
}
