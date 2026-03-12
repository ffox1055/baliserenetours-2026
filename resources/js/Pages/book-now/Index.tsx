import { Layout } from "@/components/layouts/Layout";
import { SeoHead } from "@/components/layouts/SeoHead";
import { BookingForm } from "@/components/sections/book-now/BookingForm";
import { Hero } from "@/components/sections/book-now/Hero";
import { PopularRoutes } from "@/components/sections/book-now/PopularRoutes";

export default function BookNow() {
  return (
    <>
      <SeoHead
        title="Book Now"
        description="Book your Bali airport transfer or daily car rental. Easy online booking with confirmation within 2 hours."
        keywords="book Bali transfer, Bali car rental booking, Bali transport reservation"
      />

      <Layout>
        <Hero />
        <BookingForm />
        <PopularRoutes />
      </Layout>
    </>
  );
}
