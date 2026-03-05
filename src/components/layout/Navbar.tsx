"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X, Bike, Search } from "lucide-react";
import { DOMAINS } from "@/lib/constants";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white/80 dark:bg-navy-light/80 backdrop-blur-md border-b border-gray-200 dark:border-gray-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="flex items-center gap-2 font-bold text-xl">
            <span className="text-racing-red">Moto</span>
            <span className="text-navy dark:text-white">Nexus</span>
          </Link>

          <nav className="hidden md:flex items-center gap-6 text-sm font-medium">
            <Link
              href="/my-lexi/"
              className="flex items-center gap-1.5 text-yamaha-blue hover:text-yamaha-blue/80 transition-colors"
            >
              <Bike size={16} />
              My Lexi
            </Link>
            <Link href="/panduan-beli/" className="hover:text-racing-red transition-colors">
              Panduan Beli
            </Link>
            <Link href="/perawatan/" className="hover:text-racing-red transition-colors">
              Perawatan
            </Link>
            <Link href="/motor-listrik/" className="hover:text-racing-red transition-colors">
              Motor Listrik
            </Link>
            <Link href="/kalkulator/" className="hover:text-racing-red transition-colors">
              Kalkulator
            </Link>
            <Link
              href="/search/"
              className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
              aria-label="Search"
            >
              <Search size={18} />
            </Link>
          </nav>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800"
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden border-t border-gray-200 dark:border-gray-700 bg-white dark:bg-navy-light">
          <nav className="px-4 py-4 space-y-2">
            <Link
              href="/my-lexi/"
              onClick={() => setIsOpen(false)}
              className="flex items-center gap-2 px-3 py-2 rounded-lg text-yamaha-blue font-medium hover:bg-blue-50 dark:hover:bg-blue-900/20"
            >
              <Bike size={16} />
              My Lexi LX 155
            </Link>
            {DOMAINS.filter((d) => d.id !== "my-lexi")
              .slice(0, 8)
              .map((domain) => (
                <Link
                  key={domain.id}
                  href={`/${domain.id}/`}
                  onClick={() => setIsOpen(false)}
                  className="block px-3 py-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 text-sm"
                >
                  {domain.shortTitle}
                </Link>
              ))}
            <Link
              href="/kalkulator/"
              onClick={() => setIsOpen(false)}
              className="block px-3 py-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 text-sm font-medium"
            >
              Kalkulator
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
