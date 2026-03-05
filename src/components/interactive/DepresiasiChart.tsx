"use client";

import { useState } from "react";
import { formatRupiah } from "@/lib/utils";
import depreciationData from "@/data/depreciation-curves.json";

export function DepresiasiChart() {
  const [harga, setHarga] = useState(31450000);
  const [selectedIdx, setSelectedIdx] = useState(1); // Yamaha MAXI

  const curve = depreciationData[selectedIdx];
  const years = [0, 1, 2, 3, 4, 5];
  const values = years.map((yr) => {
    if (yr === 0) return harga;
    let val = harga;
    for (let i = 0; i < yr; i++) {
      val = val * (1 - curve.rates[i] / 100);
    }
    return Math.round(val);
  });

  const maxVal = harga;

  return (
    <div className="space-y-4">
      <div>
        <label className="text-sm font-medium mb-1 block">
          Harga beli: {formatRupiah(harga)}
        </label>
        <input
          type="range"
          min={10000000}
          max={80000000}
          step={500000}
          value={harga}
          onChange={(e) => setHarga(Number(e.target.value))}
          className="w-full accent-racing-red"
        />
      </div>

      <div className="flex flex-wrap gap-2">
        {depreciationData.map((d, i) => (
          <button
            key={d.category}
            onClick={() => setSelectedIdx(i)}
            className={`px-3 py-1.5 text-xs rounded-full border transition-colors ${
              selectedIdx === i
                ? "bg-racing-red text-white border-racing-red"
                : "border-gray-300 dark:border-gray-600 hover:border-racing-red"
            }`}
          >
            {d.category}
          </button>
        ))}
      </div>

      <div className="space-y-2">
        {years.map((yr) => {
          const val = values[yr];
          const pct = (val / maxVal) * 100;
          const loss = harga - val;
          return (
            <div key={yr} className="flex items-center gap-3">
              <div className="w-16 text-xs font-medium text-right shrink-0">
                {yr === 0 ? "Baru" : `Thn ${yr}`}
              </div>
              <div className="flex-1">
                <div className="h-8 bg-gray-100 dark:bg-gray-800 rounded-lg overflow-hidden relative">
                  <div
                    className="h-full bg-gradient-to-r from-racing-red to-amber rounded-lg transition-all flex items-center justify-end pr-2"
                    style={{ width: `${pct}%` }}
                  >
                    <span className="text-xs font-bold text-white whitespace-nowrap">
                      {formatRupiah(val)}
                    </span>
                  </div>
                </div>
              </div>
              <div className="w-24 text-xs text-muted text-right shrink-0">
                {yr > 0 ? `-${formatRupiah(loss)}` : ""}
              </div>
            </div>
          );
        })}
      </div>

      <div className="text-sm text-muted">
        <p>Setelah 5 tahun: nilai {formatRupiah(values[5])} (turun {Math.round(((harga - values[5]) / harga) * 100)}%)</p>
        <p className="text-xs mt-1">* Data estimasi berdasarkan observasi pasar motor bekas Indonesia, Maret 2026.</p>
      </div>
    </div>
  );
}
