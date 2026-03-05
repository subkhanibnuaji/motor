import { Bike, Wrench, AlertTriangle, Star, ArrowRight } from "lucide-react";
import Link from "next/link";
import { Breadcrumb } from "@/components/layout/Breadcrumb";
import { SpecTable } from "@/components/mdx/SpecTable";
import { ServiceSchedule } from "@/components/interactive/ServiceSchedule";
import lexiData from "@/data/lexi-specs.json";
import { getArticlesByDomain } from "@/lib/content";
import { ArticleCard } from "@/components/content/ArticleCard";

export const metadata = { title: "My Lexi LX 155 — Owner's Hub" };

export default function MyLexiPage() {
  const articles = getArticlesByDomain("my-lexi");

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 pb-16">
      <Breadcrumb items={[{ label: "My Lexi LX 155" }]} />

      {/* Header */}
      <div className="bg-gradient-to-r from-yamaha-blue to-info-blue text-white rounded-2xl p-6 md:p-8 mb-8">
        <div className="flex items-center gap-3 mb-3">
          <Bike size={28} />
          <h1 className="text-2xl md:text-3xl font-extrabold">
            My Lexi LX 155 Connected/ABS
          </h1>
        </div>
        <p className="text-blue-100 max-w-2xl">
          Owner&apos;s hub pribadi. Semua yang perlu kamu tahu tentang Yamaha Lexi LX
          155 — spesifikasi, jadwal servis, tips, known issues, dan upgrade.
        </p>
        <div className="flex flex-wrap gap-3 mt-4">
          {["155.9cc Blue Core VVA", "15.15 HP", "14.2 Nm", "ABS", "Y-Connect", "Smart Key"].map(
            (tag) => (
              <span
                key={tag}
                className="text-xs bg-white/20 px-3 py-1 rounded-full"
              >
                {tag}
              </span>
            )
          )}
        </div>
      </div>

      {/* Variant Comparison */}
      <section className="mb-10">
        <h2 className="text-xl font-bold mb-4">Varian & Harga (Estimasi 2026)</h2>
        <div className="grid gap-4 md:grid-cols-3">
          {lexiData.variants.map((v) => (
            <div
              key={v.name}
              className={`rounded-xl border p-5 ${
                v.name.includes("Connected")
                  ? "border-yamaha-blue bg-blue-50/50 dark:bg-blue-900/10"
                  : "border-gray-200 dark:border-gray-700 bg-white dark:bg-navy-light"
              }`}
            >
              <h3 className="font-bold text-sm mb-1">{v.name}</h3>
              <p className="text-lg font-extrabold text-racing-red mb-3">
                Rp {(v.priceOTR / 1000000).toFixed(1)} jt
              </p>
              <ul className="text-xs space-y-1 text-muted">
                {v.features.map((f) => (
                  <li key={f} className="flex items-center gap-1.5">
                    <Star size={10} className="text-amber shrink-0" /> {f}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* Specs */}
      <section className="mb-10">
        <h2 className="text-xl font-bold mb-4">Spesifikasi Lengkap</h2>
        <div className="space-y-4">
          {lexiData.specs.map((group) => (
            <SpecTable key={group.category} title={group.category} data={group.items} />
          ))}
        </div>
      </section>

      {/* Service Schedule */}
      <section className="mb-10">
        <h2 className="text-xl font-bold mb-4">
          <Wrench size={20} className="inline mr-2" />
          Jadwal Servis Interaktif
        </h2>
        <p className="text-sm text-muted mb-4">
          Geser slider ke odometer kamu saat ini untuk melihat servis yang sudah
          lewat dan yang akan datang.
        </p>
        <ServiceSchedule />
      </section>

      {/* Quick Tips */}
      <section className="mb-10">
        <h2 className="text-xl font-bold mb-4">Tips Harian</h2>
        <div className="grid gap-3 sm:grid-cols-2">
          {[
            { title: "BBM", desc: "Gunakan Pertamax (RON 92+) untuk performa optimal Blue Core VVA." },
            { title: "Tekanan Ban", desc: "Depan 200 kPa, Belakang 225 kPa. Cek tiap 2 minggu." },
            { title: "Oli", desc: "Yamalube Blue Core 10W-40, ganti tiap 4.000 km. Kapasitas 0.85L." },
            { title: "SSS", desc: "Stop & Start System aktif otomatis. Jika tidak, cek sensor side stand." },
          ].map((tip) => (
            <div
              key={tip.title}
              className="rounded-lg border border-gray-200 dark:border-gray-700 p-4 bg-white dark:bg-navy-light"
            >
              <h4 className="font-semibold text-sm mb-1">{tip.title}</h4>
              <p className="text-xs text-muted">{tip.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Known Issues */}
      <section className="mb-10">
        <h2 className="text-xl font-bold mb-4">
          <AlertTriangle size={20} className="inline mr-2 text-amber" />
          Known Issues & Solusi
        </h2>
        <div className="space-y-3">
          {[
            { issue: "CVT bunyi saat start dingin", solution: "Normal untuk beberapa detik pertama. Jika persistent, cek belt & roller." },
            { issue: "SSS tidak aktif", solution: "Pastikan side stand terlipat sempurna. Cek soket sensor side stand." },
            { issue: "LCD berkedip / blank", solution: "Cek soket konektor LCD di bagian dalam panel depan. Bersihkan & pasang ulang." },
            { issue: "Radiator perlu dicek", solution: "Pastikan level coolant antara LOW-FULL. Ganti coolant tiap 24.000 km." },
          ].map((item) => (
            <div
              key={item.issue}
              className="rounded-lg border border-amber/30 bg-amber/5 p-4"
            >
              <h4 className="font-semibold text-sm">{item.issue}</h4>
              <p className="text-xs text-muted mt-1">{item.solution}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Articles */}
      {articles.length > 0 && (
        <section>
          <h2 className="text-xl font-bold mb-4">Artikel My Lexi</h2>
          <div className="grid gap-4 sm:grid-cols-2">
            {articles.map((a) => (
              <ArticleCard key={a.slug} article={a} />
            ))}
          </div>
        </section>
      )}
    </div>
  );
}
