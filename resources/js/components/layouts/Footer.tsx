import { Link } from "@inertiajs/react";
import logo from "@/assets/logo-only.png";
import { navLinks } from "@/constants/navLinks";

export function Footer() {
  return (
    <footer className="border-t-primary/20 border-t">
      <div className="layout flex flex-col items-center gap-4 py-6 md:grid md:h-26  lg:grid-cols-3 md:items-stretch md:gap-8 md:py-2">
        {/* logo */}
        <div className="flex w-full justify-center md:justify-start">
          <Link
            href="/"
            className="text-primary flex items-center tracking-wider font-serif text-base md:text-2xl"
          >
            <img src={logo} alt="Baliserenetours Logo" width={50} height={50} />
            <span>BALISERENE TOURS</span>
          </Link>
        </div>
        {/* link */}

        <ul className="flex flex-col items-center gap-3 text-sm font-serif md:flex-row md:justify-between md:gap-0 md:text-base">
          {navLinks.map((link) => (
            <li key={link.label}>
              <Link href={link.href} className="interactive-link">
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* copyright */}
        <div className="flex w-full justify-center md:items-end md:justify-end">
          <p className="text-center text-xs md:text-right md:text-sm">
            © {new Date().getFullYear()} BALISERENE TOURS. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
