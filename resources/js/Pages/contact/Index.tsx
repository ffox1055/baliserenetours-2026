import { Layout } from "@/components/layouts/Layout";
import { SeoHead } from "@/components/layouts/SeoHead";
import { ContactForm } from "@/components/sections/contact/ContactForm";
import { ContactInfo } from "@/components/sections/contact/ContactInfo";
import { CTA } from "@/components/sections/contact/CTA";
import { Hero } from "@/components/sections/contact/Hero";
import { Map } from "@/components/sections/contact/Map";

export default function Contact() {
  return (
    <>
      <SeoHead
        title="Contact"
        description="Get in touch with Bali Serene Tours. Reach us by phone, email, or WhatsApp for booking inquiries and travel assistance."
        keywords="contact Bali Serene Tours, Bali transport inquiry, Bali tour booking"
      />

      <Layout>
        <Hero />
        <ContactInfo />
        <ContactForm />
        <Map />
        <CTA />
      </Layout>
    </>
  );
}
