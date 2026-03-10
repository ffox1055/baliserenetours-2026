import { Button } from "@/components/ui/Button";

export function Testimonial() {
  return (
    <section>
      <div className="layout py-16 xl:px-16">
        <h2 className="mb-10 sm:mb-16 font-serif text-center">
          Book in 3 Simple Steps
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
          {/* review */}
          <div className="interactive-surface interactive-surface-hover bg-beige border-primary-dark/10 p-8 space-y-4">
            <p className="testimonial-quote md:text-xl">
              The pickup was smooth and the driver was extremely friendly.
              Perfect start to our Bali trip.
            </p>

            <p className="text-center">Emma, Australia</p>
          </div>
          {/* cta */}
          <div className="interactive-surface-hover py-6 px-6 sm:px-8 lg:px-12 shadow-primary-dark shadow-xl/20 bg-primary rounded-lg flex flex-col items-center justify-center space-y-6 sm:space-y-8 font-serif">
            <h4 className="text-white">Ready for Serene Bali Experience?</h4>

            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 w-full justify-center">
              <Button
                variant="beige"
                size="compact"
                fullWidth
                className="sm:w-auto"
              >
                Book Airport Transfer
              </Button>
              <Button
                variant="inverse"
                size="compact"
                fullWidth
                className="sm:w-auto"
              >
                Rent a Car Today
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
