import { Hero } from "@/components/sections/home/Hero";
import { ServiceCard } from "@/components/sections/home/ServiceCard";
import { Testimonial } from "@/components/sections/home/Testimonial";
import { WhyChooseUs } from "@/components/sections/home/WhyChooseUs";

export default function Home() {
  return (
    <>
      <Hero />
      <ServiceCard />
      <WhyChooseUs />
      <Testimonial />
    </>
  );
}
