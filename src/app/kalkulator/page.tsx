import Link from "next/link";
import { Calculator, TrendingDown, Fuel, Zap } from "lucide-react";
import { Breadcrumb } from "@/components/layout/Breadcrumb";

export const metadata = { title: "Kalkulator Motor" };

const tools = [
  {
    href: "/kalkulator/kredit/",
    icon: Calculator,
    title: "Simulasi Kredit Motor",
    desc: "Hitung angsuran, DP, total bunga, dan perbandingan cash vs kredit.",
    color: "text-racing-red",
  },
  {
    href: "/kalkulator/tco/",
    icon: TrendingDown,
    title: "Total Cost of Ownership (TCO)",
    desc: "Bandingkan total biaya motor BBM vs motor listrik selama 5 tahun.",
    color: "text-both-purple",
  },
  {
    href: "/kalkulator/depresiasi/",
    icon: TrendingDown,
    title: "Depresiasi Motor",
    desc: "Lihat estimasi penurunan nilai motor per brand dan kategori.",
    color: "text-amber",
  },
  {
    href: "/kalkulator/bbm-vs-ev/",
    icon: Zap,
    title: "BBM vs Listrik",
    desc: "Bandingkan biaya energi motor bensin vs motor listrik per bulan dan per tahun.",
    color: "text-ev-green",
  },
];

export default function KalkulatorPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 pb-16">
      <Breadcrumb items={[{ label: "Kalkulator" }]} />
      <h1 className="text-3xl font-extrabold mt-2 mb-2">Kalkulator Motor</h1>
      <p className="text-muted mb-8">
        Tools interaktif untuk membantu keputusan finansial motor kamu.
      </p>
      <div className="grid gap-4 sm:grid-cols-2">
        {tools.map((t) => (
          <Link
            key={t.href}
            href={t.href}
            className="flex items-start gap-4 rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-navy-light p-5 hover:shadow-md hover:border-racing-red/30 transition-all group"
          >
            <t.icon size={24} className={`${t.color} shrink-0 mt-0.5`} />
            <div>
              <h3 className="font-semibold group-hover:text-racing-red transition-colors">
                {t.title}
              </h3>
              <p className="text-sm text-muted mt-1">{t.desc}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
