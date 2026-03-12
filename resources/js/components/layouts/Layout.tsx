import { WhatsAppFloatingButton } from "../ui/WhatsAppFloatingButton";
import { Footer } from "./Footer";
import { Navbar } from "./Navbar";

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Navbar />
      <main className="pt-16 md:pt-20">{children}</main>
      <WhatsAppFloatingButton />
      <Footer />
    </>
  );
}
