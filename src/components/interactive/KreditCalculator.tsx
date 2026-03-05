"use client";

import { useState } from "react";
import { formatRupiah, formatNumber } from "@/lib/utils";

const PRESETS = [
  { label: "Lexi Standard", price: 26800000 },
  { label: "Lexi S Version", price: 28600000 },
  { label: "Lexi Connected/ABS", price: 31450000 },
  { label: "NMAX 155", price: 32000000 },
  { label: "Honda PCX 160", price: 34000000 },
  { label: "Honda Vario 160", price: 27500000 },
];

const TENORS = [12, 18, 24, 30, 33, 36];

export function KreditCalculator() {
  const [harga, setHarga] = useState(31450000);
  const [dpPercent, setDpPercent] = useState(20);
  const [tenor, setTenor] = useState(36);
  const [bunga, setBunga] = useState(7);

  const dp = Math.round(harga * (dpPercent / 100));
  const pokokPinjaman = harga - dp;
  const totalBunga = Math.round(pokokPinjaman * (bunga / 100) * (tenor / 12));
  const totalPinjaman = pokokPinjaman + totalBunga;
  const angsuranPerBulan = Math.round(totalPinjaman / tenor);
  const totalBayar = dp + totalPinjaman;
  const selisihDenganCash = totalBayar - harga;

  return (
    <div className="space-y-6">
      <div className="flex flex-wrap gap-2">
        {PRESETS.map((p) => (
          <button
            key={p.label}
            onClick={() => setHarga(p.price)}
            className={`px-3 py-1.5 text-xs rounded-full border transition-colors ${
              harga === p.price
                ? "bg-racing-red text-white border-racing-red"
                : "border-gray-300 dark:border-gray-600 hover:border-racing-red"
            }`}
          >
            {p.label}
          </button>
        ))}
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label className="text-sm font-medium mb-1 block">
            Harga OTR: {formatRupiah(harga)}
          </label>
          <input
            type="range"
            min={15000000}
            max={100000000}
            step={500000}
            value={harga}
            onChange={(e) => setHarga(Number(e.target.value))}
            className="w-full accent-racing-red"
          />
        </div>

        <div>
          <label className="text-sm font-medium mb-1 block">
            DP: {dpPercent}% ({formatRupiah(dp)})
          </label>
          <input
            type="range"
            min={10}
            max={50}
            step={5}
            value={dpPercent}
            onChange={(e) => setDpPercent(Number(e.target.value))}
            className="w-full accent-racing-red"
          />
        </div>

        <div>
          <label className="text-sm font-medium mb-2 block">Tenor (bulan)</label>
          <div className="flex flex-wrap gap-2">
            {TENORS.map((t) => (
              <button
                key={t}
                onClick={() => setTenor(t)}
                className={`px-3 py-1.5 text-sm rounded-lg border transition-colors ${
                  tenor === t
                    ? "bg-navy text-white border-navy dark:bg-racing-red dark:border-racing-red"
                    : "border-gray-300 dark:border-gray-600 hover:border-navy"
                }`}
              >
                {t}
              </button>
            ))}
          </div>
        </div>

        <div>
          <label className="text-sm font-medium mb-1 block">
            Bunga Flat: {bunga}%/tahun
          </label>
          <input
            type="range"
            min={3}
            max={15}
            step={0.5}
            value={bunga}
            onChange={(e) => setBunga(Number(e.target.value))}
            className="w-full accent-racing-red"
          />
        </div>
      </div>

      <div className="bg-gradient-to-br from-navy to-navy-light text-white rounded-xl p-6">
        <h3 className="text-lg font-bold mb-4">Hasil Simulasi Kredit</h3>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <div className="text-gray-400 text-xs">DP</div>
            <div className="text-lg font-bold">{formatRupiah(dp)}</div>
          </div>
          <div>
            <div className="text-gray-400 text-xs">Angsuran/Bulan</div>
            <div className="text-2xl font-bold text-amber">
              {formatRupiah(angsuranPerBulan)}
            </div>
          </div>
          <div>
            <div className="text-gray-400 text-xs">Total Bunga</div>
            <div className="text-lg font-bold text-racing-red">
              {formatRupiah(totalBunga)}
            </div>
          </div>
          <div>
            <div className="text-gray-400 text-xs">Total Bayar</div>
            <div className="text-lg font-bold">{formatRupiah(totalBayar)}</div>
          </div>
        </div>
        <div className="mt-4 pt-4 border-t border-gray-600 text-sm">
          <span className="text-gray-400">Selisih dengan cash:</span>{" "}
          <span className="text-racing-red font-bold">
            +{formatRupiah(selisihDenganCash)}
          </span>
          <span className="text-gray-400">
            {" "}
            (+{Math.round((selisihDenganCash / harga) * 100)}% dari harga motor)
          </span>
        </div>
      </div>
    </div>
  );
}
