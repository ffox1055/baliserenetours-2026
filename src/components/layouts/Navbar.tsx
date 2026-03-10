"use client";

import { Menu, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const navLinks = [
  { label: "Airport Transfers", href: "#" },
  { label: "Daily Rental", href: "#" },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 w-full shadow-md bg-beige">
        <nav className="layout">
          <div className="flex justify-between items-center h-16 md:h-20 font-serif">
            {/* Logo */}
            <Link
              href="/"
              className="text-xl text-primary flex items-center tracking-wider"
            >
              <Image src="/logo-only.png" alt="Logo" width={50} height={50} />
              <span>BALISERENE TOURS</span>
            </Link>

            {/* Desktop nav */}
            <div className="hidden md:flex items-center space-x-8 text-primary-dark">
              {navLinks.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className="relative after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 after:bg-primary after:transition-all after:duration-300 hover:after:w-full hover:text-primary transition-colors duration-200"
                >
                  {link.label}
                </Link>
              ))}
              <Link
                href="#"
                className="bg-primary px-4 py-2 rounded-md text-white hover:bg-primary-dark transition-colors duration-200"
              >
                Book Now
              </Link>
            </div>

            {/* Mobile hamburger */}
            <button
              className="md:hidden text-primary-dark p-2 rounded-md hover:bg-primary/10 transition-colors duration-200"
              onClick={() => setIsOpen(true)}
              aria-label="Open menu"
            >
              <Menu size={24} />
            </button>
          </div>
        </nav>
      </header>

      {/* Backdrop */}
      <div
        onClick={() => setIsOpen(false)}
        className={`md:hidden fixed inset-0 z-[60] bg-black/50 backdrop-blur-sm transition-opacity duration-300 ${
          isOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
        aria-hidden="true"
      />

      {/* Mobile drawer */}
      <div
        className={`md:hidden fixed top-0 right-0 z-[70] h-full w-4/5 max-w-sm bg-beige shadow-2xl flex flex-col font-serif transition-transform duration-300 ease-in-out ${
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
            className="p-2 rounded-md text-primary-dark hover:bg-primary/10 transition-colors duration-200"
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
              className="py-3 px-3 rounded-md text-lg hover:bg-primary/10 hover:text-primary transition-colors duration-200"
            >
              {link.label}
            </Link>
          ))}
          <div className="pt-4">
            <Link
              href="#"
              onClick={() => setIsOpen(false)}
              className="block bg-primary px-4 py-3 rounded-md text-white text-center text-lg hover:bg-primary-dark transition-colors duration-200"
            >
              Book Now
            </Link>
          </div>
        </nav>
      </div>
    </>
  );
}
