"use client";

import { useState } from "react";
import { CheckSquare, Square } from "lucide-react";
import { Breadcrumb } from "@/components/layout/Breadcrumb";

const CHECKLIST = [
  {
    category: "Motor",
    items: [
      "Oli mesin masih OK (cek dipstick)",
      "Coolant level antara LOW-FULL",
      "Tekanan ban: D 200 kPa, B 225 kPa",
      "Kembang ban masih tebal",
      "Rem depan & belakang pakem",
      "Semua lampu & sein berfungsi",
      "Klakson berfungsi",
      "Rantai (jika ada) sudah dilumasi & dikencangkan",
      "Aki full charge",
    ],
  },
  {
    category: "Perlengkapan Rider",
    items: [
      "Helm (SNI, full-face recommended)",
      "Jaket touring / waterproof",
      "Sarung tangan",
      "Sepatu tertutup / riding boots",
      "Jas hujan",
      "Kacamata / visor bersih",
    ],
  },
  {
    category: "Bawaan",
    items: [
      "STNK + SIM",
      "Toolkit darurat",
      "Ban dalam cadangan / tubeless kit",
      "Pompa mini",
      "Obat-obatan pribadi",
      "Charger HP + power bank",
      "Air minum",
      "Snack",
    ],
  },
  {
    category: "Perencanaan",
    items: [
      "Rute sudah dipelajari (offline map ready)",
      "Rest stop tiap 1.5-2 jam sudah ditandai",
      "Cek prakiraan cuaca",
      "Info SPBU di rute",
      "Kontak darurat tersimpan",
      "Teman / keluarga tahu rute kamu",
    ],
  },
];

export default function TouringChecklistPage() {
  const [checked, setChecked] = useState<Set<string>>(new Set());
  const total = CHECKLIST.reduce((s, c) => s + c.items.length, 0);
  const progress = Math.round((checked.size / total) * 100);

  function toggle(key: string) {
    setChecked((prev) => {
      const next = new Set(prev);
      if (next.has(key)) next.delete(key);
      else next.add(key);
      return next;
    });
  }

  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 pb-16">
      <Breadcrumb
        items={[
          { label: "Checklist", href: "/checklist/" },
          { label: "Persiapan Touring" },
        ]}
      />
      <h1 className="text-3xl font-extrabold mt-2 mb-2">
        Checklist Persiapan Touring
      </h1>
      <p className="text-muted mb-6">
        Pastikan motor dan perlengkapan siap sebelum touring jarak jauh.
      </p>

      <div className="sticky top-16 z-10 bg-white dark:bg-navy-light rounded-lg border border-gray-200 dark:border-gray-700 p-4 mb-4">
        <div className="flex justify-between text-sm mb-2">
          <span>Progress: {checked.size}/{total}</span>
          <span className="font-bold">{progress}%</span>
        </div>
        <div className="h-2 bg-gray-100 dark:bg-gray-800 rounded-full overflow-hidden">
          <div className="h-full bg-ev-green rounded-full transition-all" style={{ width: `${progress}%` }} />
        </div>
      </div>

      {CHECKLIST.map((cat) => (
        <div key={cat.category} className="rounded-lg border border-gray-200 dark:border-gray-700 overflow-hidden mb-4">
          <h3 className="font-semibold text-sm bg-gray-50 dark:bg-gray-800 px-4 py-3">{cat.category}</h3>
          <div className="divide-y divide-gray-100 dark:divide-gray-800">
            {cat.items.map((item) => {
              const key = `${cat.category}:${item}`;
              const done = checked.has(key);
              return (
                <button key={key} onClick={() => toggle(key)} className="w-full flex items-start gap-3 px-4 py-3 text-left text-sm hover:bg-gray-50 dark:hover:bg-gray-800/50">
                  {done ? <CheckSquare size={18} className="text-ev-green shrink-0 mt-0.5" /> : <Square size={18} className="text-muted shrink-0 mt-0.5" />}
                  <span className={done ? "line-through text-muted" : ""}>{item}</span>
                </button>
              );
            })}
          </div>
        </div>
      ))}
    </div>
  );
}
