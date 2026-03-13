import { Layout } from "@/components/layouts/Layout";
import { SeoHead } from "@/components/layouts/SeoHead";
import { CTA } from "@/components/sections/airport-transfer/CTA";
import type { PricingPlan } from "@/components/sections/airport-transfer/data";
import { Features } from "@/components/sections/airport-transfer/Features";
import { Hero } from "@/components/sections/airport-transfer/Hero";
import { Pricing } from "@/components/sections/airport-transfer/Pricing";

interface AirportTransferProps {
  pricingPlans: PricingPlan[];
}

export default function AirportTransfer({ pricingPlans }: AirportTransferProps) {
  return (
    <>
      <SeoHead
        title="Airport Transfer"
        description="Reliable Bali airport transfer service with meet & greet, flight tracking, and comfortable vehicles. Fixed prices, no hidden fees."
        keywords="Bali airport transfer, Ngurah Rai airport pickup, Bali airport taxi"
      />

      <Layout>
        <Hero />
        <Features />
        <Pricing pricingPlans={pricingPlans} />
        <CTA />
      </Layout>
    </>
  );
}
