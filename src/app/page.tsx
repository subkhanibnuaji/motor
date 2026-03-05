import Link from "next/link";
import { Bike, Calculator, ShoppingCart, Wrench, BatteryCharging, ArrowRight } from "lucide-react";
import { DOMAINS } from "@/lib/constants";
import { DomainCard } from "@/components/content/DomainCard";

export default function HomePage() {
  const regularDomains = DOMAINS.filter((d) => d.id !== "my-lexi");

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6">
      {/* Hero */}
      <section className="py-12 md:py-20">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight">
            <span className="text-racing-red">Moto</span>{" "}
            <span className="text-navy dark:text-white">Nexus</span>
          </h1>
          <p className="mt-4 text-lg text-muted max-w-2xl">
            Personal Motorcycle Knowledge Hub. Pusat pengetahuan motor Indonesia
            terlengkap — dari perawatan, pembelian, hingga perbandingan ICE vs
            motor listrik. Dengan Yamaha Lexi LX 155 sebagai anchor.
          </p>
          <div className="flex flex-wrap gap-3 mt-6">
            <Link
              href="/my-lexi/"
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-yamaha-blue text-white rounded-lg font-medium hover:bg-yamaha-blue/90 transition-colors"
            >
              <Bike size={18} />
              My Lexi LX 155
            </Link>
            <Link
              href="/kalkulator/"
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-navy text-white rounded-lg font-medium hover:bg-navy/90 transition-colors"
            >
              <Calculator size={18} />
              Kalkulator
            </Link>
          </div>
        </div>
      </section>

      {/* My Lexi Quick Card */}
      <section className="mb-12">
        <Link
          href="/my-lexi/"
          className="block bg-gradient-to-r from-yamaha-blue to-info-blue text-white rounded-2xl p-6 md:p-8 hover:shadow-lg transition-shadow"
        >
          <div className="flex items-center justify-between">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <Bike size={24} />
                <h2 className="text-xl font-bold">My Lexi LX 155 Connected/ABS</h2>
              </div>
              <p className="text-blue-100 text-sm max-w-lg">
                Owner&apos;s hub — spesifikasi lengkap, jadwal servis interaktif,
                tips harian, known issues, dan upgrade recommendations.
              </p>
              <div className="flex flex-wrap gap-4 mt-4 text-sm">
                <span>155.9cc Blue Core VVA</span>
                <span>15.15 HP</span>
                <span>ABS</span>
                <span>Y-Connect</span>
              </div>
            </div>
            <ArrowRight size={24} className="hidden md:block" />
          </div>
        </Link>
      </section>

      {/* Quick Access */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-6">Akses Cepat</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          <Link
            href="/panduan-beli/"
            className="flex flex-col items-center gap-2 p-4 rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-navy-light hover:border-racing-red/30 hover:shadow-md transition-all text-center"
          >
            <ShoppingCart size={24} className="text-racing-red" />
            <span className="text-sm font-medium">Panduan Beli</span>
          </Link>
          <Link
            href="/perawatan/"
            className="flex flex-col items-center gap-2 p-4 rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-navy-light hover:border-racing-red/30 hover:shadow-md transition-all text-center"
          >
            <Wrench size={24} className="text-amber" />
            <span className="text-sm font-medium">Perawatan</span>
          </Link>
          <Link
            href="/motor-listrik/"
            className="flex flex-col items-center gap-2 p-4 rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-navy-light hover:border-racing-red/30 hover:shadow-md transition-all text-center"
          >
            <BatteryCharging size={24} className="text-ev-green" />
            <span className="text-sm font-medium">Motor Listrik</span>
          </Link>
          <Link
            href="/kalkulator/bbm-vs-ev/"
            className="flex flex-col items-center gap-2 p-4 rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-navy-light hover:border-racing-red/30 hover:shadow-md transition-all text-center"
          >
            <Calculator size={24} className="text-both-purple" />
            <span className="text-sm font-medium">BBM vs Listrik</span>
          </Link>
        </div>
      </section>

      {/* All Domains */}
      <section className="mb-16">
        <h2 className="text-2xl font-bold mb-6">14 Knowledge Domains</h2>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {regularDomains.map((domain) => (
            <DomainCard key={domain.id} domain={domain} />
          ))}
        </div>
      </section>
    </div>
  );
}
