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

export function WhyChooseUs() {
  return (
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
  );
}
