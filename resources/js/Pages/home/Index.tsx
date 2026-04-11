import { Layout } from "@/components/layouts/Layout";
import { SeoHead } from "@/components/layouts/SeoHead";
import { Hero } from "@/components/sections/home/Hero";
import { ServiceCard } from "@/components/sections/home/ServiceCard";
import { Testimonial } from "@/components/sections/home/Testimonial";
import { WhyChooseUs } from "@/components/sections/home/WhyChooseUs";

const localBusinessJsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "Baliserene Tours",
  description:
    "Premium Bali airport transfers, daily car rentals, and guided tours.",
  "@id": "https://baliserenetours.com",
  url: "https://baliserenetours.com",
  telephone: "+6281394450370",
  image: "https://baliserenetours.com/images/hero-home.jpg",
  areaServed: "Bali, Indonesia",
  serviceType: ["Airport Transfer", "Daily Car Rental", "Guided Tours"],
};

export default function Home() {
  return (
    <>
      <SeoHead
        title="Bali Airport Transfer & Car Rental | Baliserene Tours"
        description="Bali Serene Tours offers premium airport transfers, daily car rentals, and guided tours across Bali. Book your ride today."
        keywords="Bali airport transfer, Bali car rental, Bali tours, Bali transport"
        ogImage="https://baliserenetours.com/images/hero-home.jpg"
        jsonLd={localBusinessJsonLd}
      />

      <Layout>
        <Hero />
        <ServiceCard />
        <WhyChooseUs />
        <Testimonial />
      </Layout>
    </>
  );
}
