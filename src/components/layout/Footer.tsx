import Link from "next/link";
import { DOMAINS } from "@/lib/constants";

export function Footer() {
  const mainDomains = DOMAINS.filter((d) => d.id !== "my-lexi").slice(0, 8);

  return (
    <footer className="bg-navy text-gray-400 mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-white font-bold text-lg mb-3">
              <span className="text-racing-red">Moto</span> Nexus
            </h3>
            <p className="text-sm leading-relaxed">
              Personal Motorcycle Knowledge Hub. Pusat pengetahuan motor
              Indonesia, dengan Yamaha Lexi LX 155 sebagai anchor.
            </p>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-3">Knowledge Domains</h4>
            <ul className="space-y-1.5 text-sm">
              {mainDomains.map((domain) => (
                <li key={domain.id}>
                  <Link
                    href={`/${domain.id}/`}
                    className="hover:text-white transition-colors"
                  >
                    {domain.shortTitle}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-3">Tools</h4>
            <ul className="space-y-1.5 text-sm">
              <li>
                <Link href="/kalkulator/kredit/" className="hover:text-white transition-colors">
                  Kalkulator Kredit
                </Link>
              </li>
              <li>
                <Link href="/kalkulator/tco/" className="hover:text-white transition-colors">
                  Kalkulator TCO
                </Link>
              </li>
              <li>
                <Link href="/kalkulator/bbm-vs-ev/" className="hover:text-white transition-colors">
                  BBM vs Listrik
                </Link>
              </li>
              <li>
                <Link href="/kalkulator/depresiasi/" className="hover:text-white transition-colors">
                  Depresiasi Motor
                </Link>
              </li>
              <li>
                <Link href="/checklist/inspeksi-bekas/" className="hover:text-white transition-colors">
                  Checklist Motor Bekas
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 text-sm text-center">
          <p>
            Moto Nexus &mdash; Built with Next.js. Data estimasi per Maret 2026.
          </p>
        </div>
      </div>
    </footer>
  );
}
