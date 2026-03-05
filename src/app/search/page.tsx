import { Breadcrumb } from "@/components/layout/Breadcrumb";
import { Search } from "lucide-react";
import Link from "next/link";
import { DOMAINS } from "@/lib/constants";

export const metadata = { title: "Cari" };

export default function SearchPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 pb-16">
      <Breadcrumb items={[{ label: "Cari" }]} />
      <h1 className="text-3xl font-extrabold mt-2 mb-2">Cari di Moto Nexus</h1>
      <p className="text-muted mb-8">
        Jelajahi 14 knowledge domain tentang motor Indonesia.
      </p>

      <div className="mb-8">
        <h2 className="font-bold mb-4">Jelajahi Domain</h2>
        <div className="grid gap-2 sm:grid-cols-2">
          {DOMAINS.map((d) => (
            <Link
              key={d.id}
              href={`/${d.id}/`}
              className="flex items-center gap-3 px-4 py-3 rounded-lg border border-gray-200 dark:border-gray-700 hover:border-racing-red/30 hover:shadow-sm transition-all text-sm"
            >
              <div
                className="w-2 h-2 rounded-full shrink-0"
                style={{ backgroundColor: d.color }}
              />
              {d.shortTitle}
            </Link>
          ))}
        </div>
      </div>

      <div>
        <h2 className="font-bold mb-4">Tools Populer</h2>
        <div className="grid gap-2 sm:grid-cols-2">
          {[
            { href: "/kalkulator/kredit/", label: "Simulasi Kredit Motor" },
            { href: "/kalkulator/tco/", label: "Kalkulator TCO" },
            { href: "/kalkulator/bbm-vs-ev/", label: "BBM vs Listrik" },
            { href: "/checklist/inspeksi-bekas/", label: "Checklist Motor Bekas" },
          ].map((t) => (
            <Link
              key={t.href}
              href={t.href}
              className="px-4 py-3 rounded-lg border border-gray-200 dark:border-gray-700 hover:border-racing-red/30 hover:shadow-sm transition-all text-sm"
            >
              {t.label}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
