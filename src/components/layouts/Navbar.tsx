import { Menu } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export function Navbar() {
  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 w-full shadow-md bg-beige">
        <nav className="layout">
          <div className="flex justify-between items-center h-16 md:h-20 font-serif">
            <div>
              <Link
                href="/"
                className="text-xl text-primary flex items-center tracking-wider"
              >
                <Image src="/logo-only.png" alt="Logo" width={50} height={50} />
                <span>BALISERENE TOURS</span>
              </Link>
            </div>
            <div className="flex items-center space-x-8 text-primary-dark">
              <Link href="#">Airport Transfers</Link>
              <Link href="#">Daily Rental</Link>
              <Link
                href="#"
                className="bg-primary px-4 py-2 rounded-md text-white"
              >
                Book Now
              </Link>
            </div>
          </div>
        </nav>
      </header>
    </>
  );
}
