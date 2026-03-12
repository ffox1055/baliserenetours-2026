import logo from "@/assets/logo-only.png";
import { Menu, X } from "lucide-react";
import { Link, usePage } from "@inertiajs/react";
import { useState } from "react";
import { navLinks } from "@/constants/navLinks";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const { url } = usePage();

  const isActive = (href: string) => {
    return url === href || (href !== "/" && url.startsWith(href));
  };

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 w-full shadow-md bg-beige">
        <nav className="layout">
          <div className="flex justify-between items-center h-16 md:h-20 font-serif">
            {/* Logo */}
            <Link
              href="/"
              className="text-base md:text-xl text-primary flex items-center tracking-wider"
            >
              <img
                src={logo}
                alt="Baliserenetours Logo"
                width={50}
                height={50}
              />
              <span>BALISERENE TOURS</span>
            </Link>

            {/* Desktop nav */}
            <div className="hidden lg:flex items-center space-x-8 text-primary-dark">
              {navLinks.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className={`interactive-link text-sm sm:text-base md:text-lg ${isActive(link.href) ? "text-primary font-semibold" : ""}`}
                >
                  {link.label}
                </Link>
              ))}
              <Link
                href="/book-now"
                className="interactive-surface-hover inline-flex items-center justify-center rounded-md border border-primary bg-primary px-4 py-2 text-white shadow-sm hover:bg-primary-dark hover:border-primary-dark focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/40 focus-visible:ring-offset-2 focus-visible:ring-offset-beige"
              >
                Book Now
              </Link>
            </div>

            {/* Mobile hamburger */}
            <button
              className="interactive-ghost lg:hidden text-primary-dark p-2"
              onClick={() => setIsOpen(true)}
              aria-label="Open menu"
            >
              <Menu size={24} className="text-primary" />
            </button>
          </div>
        </nav>
      </header>

      {/* Backdrop */}
      <div
        onClick={() => setIsOpen(false)}
        className={`lg:hidden fixed inset-0 z-60 bg-black/50 backdrop-blur-sm transition-opacity duration-300 ${
          isOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
        aria-hidden="true"
      />

      {/* Mobile drawer */}
      <div
        className={`lg:hidden fixed top-0 right-0 z-70 h-full w-4/5 max-w-sm bg-beige shadow-2xl flex flex-col font-serif transition-transform duration-300 ease-in-out ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Drawer header */}
        <div className="flex items-center justify-between px-6 h-16 border-b border-primary/20">
          <span className="text-primary font-semibold tracking-wider text-lg">
            Menu
          </span>
          <button
            onClick={() => setIsOpen(false)}
            className="interactive-ghost p-2 text-primary-dark"
            aria-label="Close menu"
          >
            <X size={24} />
          </button>
        </div>

        {/* Drawer links */}
        <nav className="flex flex-col px-6 py-8 space-y-2 text-primary-dark flex-1">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className={`interactive-ghost py-3 px-3 text-lg ${isActive(link.href) ? "text-primary font-semibold bg-primary/10 rounded-md" : ""}`}
            >
              {link.label}
            </Link>
          ))}
          <div className="pt-4">
            <Link
              href="#"
              onClick={() => setIsOpen(false)}
              className="interactive-surface-hover block border border-primary bg-primary px-4 py-3 rounded-md text-white text-center text-lg shadow-sm hover:bg-primary-dark hover:border-primary-dark focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/40 focus-visible:ring-offset-2 focus-visible:ring-offset-beige"
            >
              Book Now
            </Link>
          </div>
        </nav>
      </div>
    </>
  );
}
