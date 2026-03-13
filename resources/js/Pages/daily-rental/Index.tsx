import { Layout } from "@/components/layouts/Layout";
import { SeoHead } from "@/components/layouts/SeoHead";
import { CTA } from "@/components/sections/daily-rental/CTA";
import type { RentalPackage, Vehicle } from "@/components/sections/daily-rental/data";
import { Features } from "@/components/sections/daily-rental/Features";
import { Hero } from "@/components/sections/daily-rental/Hero";
import { Packages } from "@/components/sections/daily-rental/Packages";
import { Vehicles } from "@/components/sections/daily-rental/Vehicles";

interface DailyRentalProps {
  vehicles: Vehicle[];
  rentalPackages: RentalPackage[];
}

export default function DailyRental({ vehicles, rentalPackages }: DailyRentalProps) {
  return (
    <>
      <SeoHead
        title="Daily Rental"
        description="Rent a car with a professional driver in Bali. Explore temples, beaches, and attractions at your own pace with flexible daily rental packages."
        keywords="Bali daily car rental, Bali car hire, Bali driver rental"
      />

      <Layout>
        <Hero />
        <Features />
        <Vehicles vehicles={vehicles} />
        <Packages rentalPackages={rentalPackages} />
        <CTA />
      </Layout>
    </>
  );
}
