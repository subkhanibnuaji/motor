"use client";

import { useState } from "react";
import { CheckSquare, Square, AlertTriangle } from "lucide-react";

const CHECKLIST_ITEMS = [
  {
    category: "Dokumen",
    items: [
      "STNK & BPKB cocok (nama, nomor rangka, nomor mesin)",
      "Pajak hidup / belum telat lama",
      "Cek keaslian via Polda online (NIK/VIN)",
      "Faktur ada (penting untuk balik nama)",
    ],
  },
  {
    category: "Eksterior & Body",
    items: [
      "Panel body: baret, retak, repaint?",
      "Cat: belang, beda shade (tanda repaint/nabrak)",
      "Karat/korosi di area tersembunyi",
      "Panel gap rata (tidak bekas tabrak)",
    ],
  },
  {
    category: "Mesin",
    items: [
      "Suara idle halus, stabil, tidak ngelitik",
      "Asap knalpot normal (tidak putih/biru tebal)",
      "Tarikan responsif, tidak brebet",
      "Tidak ada getaran abnormal",
      "Oli tidak hitam pekat / bau gosong",
    ],
  },
  {
    category: "CVT / Transmisi",
    items: [
      "Tidak ada bunyi aneh dari area CVT",
      "Tarikan smooth, tidak slip",
      "Akselerasi normal (tidak lemot)",
    ],
  },
  {
    category: "Kelistrikan",
    items: [
      "Semua lampu menyala (depan, belakang, sein, rem)",
      "Klakson normal",
      "Starter electric berfungsi",
      "Speedometer & indikator normal",
      "Charger/USB berfungsi (jika ada)",
    ],
  },
  {
    category: "Suspensi",
    items: [
      "Bounce test: tidak mentul berlebihan",
      "Tidak ada bocor oli shock/fork",
      "Handling stabil saat test ride",
    ],
  },
  {
    category: "Rem",
    items: [
      "Rem depan pakem, tidak bunyi",
      "Rem belakang berfungsi normal",
      "Sisa kampas rem cukup",
      "Piringan/disc tidak aus berlebihan",
    ],
  },
  {
    category: "Ban & Velg",
    items: [
      "Sisa kembang ban cukup (cek TWI)",
      "Ban tidak retak/mengeras",
      "Ukuran ban sesuai standar",
      "Velg tidak peyang/retak",
    ],
  },
  {
    category: "Rangka",
    items: [
      "Rangka lurus (cek alignment roda)",
      "Tidak ada bekas las-lasan",
      "Bearing comstir tidak oblak",
    ],
  },
  {
    category: "Test Ride",
    items: [
      "Handling stabil, tidak berat sebelah",
      "Rem responsif dan predictable",
      "Engine response normal",
      "Tidak ada suara/getaran abnormal saat jalan",
    ],
  },
];

export function InspectionChecklist() {
  const [checked, setChecked] = useState<Set<string>>(new Set());

  const totalItems = CHECKLIST_ITEMS.reduce(
    (sum, cat) => sum + cat.items.length,
    0
  );
  const checkedCount = checked.size;
  const progress = Math.round((checkedCount / totalItems) * 100);

  function toggleItem(key: string) {
    setChecked((prev) => {
      const next = new Set(prev);
      if (next.has(key)) next.delete(key);
      else next.add(key);
      return next;
    });
  }

  return (
    <div className="space-y-4">
      <div className="sticky top-16 z-10 bg-white dark:bg-navy-light rounded-lg border border-gray-200 dark:border-gray-700 p-4">
        <div className="flex items-center justify-between mb-2">
          <span className="text-sm font-medium">
            Progress: {checkedCount}/{totalItems} item
          </span>
          <span className="text-sm font-bold">{progress}%</span>
        </div>
        <div className="h-2 bg-gray-100 dark:bg-gray-800 rounded-full overflow-hidden">
          <div
            className="h-full bg-ev-green rounded-full transition-all"
            style={{ width: `${progress}%` }}
          />
        </div>
        {checkedCount === totalItems && (
          <p className="text-xs text-ev-green mt-2 font-medium">
            Semua item sudah dicek! Motor layak dipertimbangkan.
          </p>
        )}
      </div>

      {CHECKLIST_ITEMS.map((cat) => (
        <div
          key={cat.category}
          className="rounded-lg border border-gray-200 dark:border-gray-700 overflow-hidden"
        >
          <h3 className="font-semibold text-sm bg-gray-50 dark:bg-gray-800 px-4 py-3">
            {cat.category}
          </h3>
          <div className="divide-y divide-gray-100 dark:divide-gray-800">
            {cat.items.map((item) => {
              const key = `${cat.category}:${item}`;
              const isChecked = checked.has(key);
              return (
                <button
                  key={key}
                  onClick={() => toggleItem(key)}
                  className="w-full flex items-start gap-3 px-4 py-3 text-left text-sm hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-colors"
                >
                  {isChecked ? (
                    <CheckSquare
                      size={18}
                      className="text-ev-green shrink-0 mt-0.5"
                    />
                  ) : (
                    <Square
                      size={18}
                      className="text-muted shrink-0 mt-0.5"
                    />
                  )}
                  <span className={isChecked ? "line-through text-muted" : ""}>
                    {item}
                  </span>
                </button>
              );
            })}
          </div>
        </div>
      ))}
    </div>
  );
}
