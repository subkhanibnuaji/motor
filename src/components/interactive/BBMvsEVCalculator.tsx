"use client";

import { useState } from "react";
import { formatRupiah, formatNumber } from "@/lib/utils";

const PRESETS = [
  {
    label: "Lexi vs Gesits G1",
    ice: { name: "Lexi LX 155", consumption: 40, fuelPrice: 13900 },
    ev: { name: "Gesits G1", consumption: 35, electricRate: 1444 },
  },
  {
    label: "Lexi vs Volta 401",
    ice: { name: "Lexi LX 155", consumption: 40, fuelPrice: 13900 },
    ev: { name: "Volta 401", consumption: 30, electricRate: 1444 },
  },
];

export function BBMvsEVCalculator() {
  const [jarakHarian, setJarakHarian] = useState(20);
  const [hariKerja, setHariKerja] = useState(5);
  const [konsumBBM, setKonsumBBM] = useState(40);
  const [hargaBBM, setHargaBBM] = useState(13900);
  const [konsumEV, setKonsumEV] = useState(35);
  const [tarifListrik, setTarifListrik] = useState(1444);
  const [activePreset, setActivePreset] = useState(0);

  const kmPerBulan = jarakHarian * hariKerja * 4.33;
  const kmPerTahun = kmPerBulan * 12;

  const bbmPerBulan = (kmPerBulan / konsumBBM) * hargaBBM;
  const bbmPerTahun = bbmPerBulan * 12;
  const bbmPerKm = hargaBBM / konsumBBM;

  const evPerBulan = ((kmPerBulan * konsumEV) / 1000) * tarifListrik;
  const evPerTahun = evPerBulan * 12;
  const evPerKm = (konsumEV / 1000) * tarifListrik;

  const hematPerBulan = bbmPerBulan - evPerBulan;
  const hematPerTahun = bbmPerTahun - evPerTahun;

  function applyPreset(idx: number) {
    setActivePreset(idx);
    const p = PRESETS[idx];
    setKonsumBBM(p.ice.consumption);
    setHargaBBM(p.ice.fuelPrice);
    setKonsumEV(p.ev.consumption);
    setTarifListrik(p.ev.electricRate);
  }

  const maxCost = Math.max(bbmPerBulan, evPerBulan);

  return (
    <div className="space-y-6">
      <div className="flex flex-wrap gap-2">
        {PRESETS.map((p, i) => (
          <button
            key={p.label}
            onClick={() => applyPreset(i)}
            className={`px-3 py-1.5 text-xs rounded-full border transition-colors ${
              activePreset === i
                ? "bg-both-purple text-white border-both-purple"
                : "border-gray-300 dark:border-gray-600 hover:border-both-purple"
            }`}
          >
            {p.label}
          </button>
        ))}
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <div className="space-y-3">
          <h4 className="font-semibold text-sm">Pola Berkendara</h4>
          <div>
            <label className="text-xs text-muted">
              Jarak harian: {jarakHarian} km
            </label>
            <input
              type="range"
              min={5}
              max={100}
              value={jarakHarian}
              onChange={(e) => setJarakHarian(Number(e.target.value))}
              className="w-full accent-both-purple"
            />
          </div>
          <div>
            <label className="text-xs text-muted">
              Hari kerja/minggu: {hariKerja}
            </label>
            <input
              type="range"
              min={3}
              max={7}
              value={hariKerja}
              onChange={(e) => setHariKerja(Number(e.target.value))}
              className="w-full accent-both-purple"
            />
          </div>
          <p className="text-xs text-muted">
            ~{formatNumber(Math.round(kmPerBulan))} km/bulan |{" "}
            ~{formatNumber(Math.round(kmPerTahun))} km/tahun
          </p>
        </div>

        <div className="grid grid-cols-2 gap-3">
          <div className="space-y-2">
            <h4 className="font-semibold text-sm text-ice-orange">Motor BBM</h4>
            <div>
              <label className="text-xs text-muted">Konsumsi: {konsumBBM} km/L</label>
              <input
                type="range"
                min={20}
                max={70}
                value={konsumBBM}
                onChange={(e) => setKonsumBBM(Number(e.target.value))}
                className="w-full accent-ice-orange"
              />
            </div>
            <div>
              <label className="text-xs text-muted">
                BBM: Rp {formatNumber(hargaBBM)}/L
              </label>
              <input
                type="range"
                min={7000}
                max={16000}
                step={100}
                value={hargaBBM}
                onChange={(e) => setHargaBBM(Number(e.target.value))}
                className="w-full accent-ice-orange"
              />
            </div>
          </div>

          <div className="space-y-2">
            <h4 className="font-semibold text-sm text-ev-green">Motor Listrik</h4>
            <div>
              <label className="text-xs text-muted">Konsumsi: {konsumEV} Wh/km</label>
              <input
                type="range"
                min={15}
                max={60}
                value={konsumEV}
                onChange={(e) => setKonsumEV(Number(e.target.value))}
                className="w-full accent-ev-green"
              />
            </div>
            <div>
              <label className="text-xs text-muted">
                Tarif: Rp {formatNumber(tarifListrik)}/kWh
              </label>
              <input
                type="range"
                min={800}
                max={2500}
                step={50}
                value={tarifListrik}
                onChange={(e) => setTarifListrik(Number(e.target.value))}
                className="w-full accent-ev-green"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white dark:bg-navy-light rounded-xl border border-gray-200 dark:border-gray-700 p-5 space-y-4">
        <h3 className="font-bold">Perbandingan Biaya Energi</h3>

        <div className="space-y-3">
          <div>
            <div className="flex justify-between text-sm mb-1">
              <span className="text-ice-orange font-medium">BBM/bulan</span>
              <span className="font-bold">{formatRupiah(Math.round(bbmPerBulan))}</span>
            </div>
            <div className="h-3 bg-gray-100 dark:bg-gray-800 rounded-full overflow-hidden">
              <div
                className="h-full bg-ice-orange rounded-full transition-all"
                style={{ width: `${(bbmPerBulan / maxCost) * 100}%` }}
              />
            </div>
          </div>

          <div>
            <div className="flex justify-between text-sm mb-1">
              <span className="text-ev-green font-medium">Listrik/bulan</span>
              <span className="font-bold">{formatRupiah(Math.round(evPerBulan))}</span>
            </div>
            <div className="h-3 bg-gray-100 dark:bg-gray-800 rounded-full overflow-hidden">
              <div
                className="h-full bg-ev-green rounded-full transition-all"
                style={{ width: `${(evPerBulan / maxCost) * 100}%` }}
              />
            </div>
          </div>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-2">
          <div className="text-center p-3 bg-gray-50 dark:bg-gray-800 rounded-lg">
            <div className="text-xs text-muted">BBM/km</div>
            <div className="font-bold text-ice-orange">
              Rp {formatNumber(Math.round(bbmPerKm))}
            </div>
          </div>
          <div className="text-center p-3 bg-gray-50 dark:bg-gray-800 rounded-lg">
            <div className="text-xs text-muted">Listrik/km</div>
            <div className="font-bold text-ev-green">
              Rp {formatNumber(Math.round(evPerKm))}
            </div>
          </div>
          <div className="text-center p-3 bg-gray-50 dark:bg-gray-800 rounded-lg">
            <div className="text-xs text-muted">Hemat/bulan</div>
            <div className="font-bold text-both-purple">
              {formatRupiah(Math.round(hematPerBulan))}
            </div>
          </div>
          <div className="text-center p-3 bg-gray-50 dark:bg-gray-800 rounded-lg">
            <div className="text-xs text-muted">Hemat/tahun</div>
            <div className="font-bold text-both-purple">
              {formatRupiah(Math.round(hematPerTahun))}
            </div>
          </div>
        </div>

        <p className="text-xs text-muted pt-2">
          * Perbandingan hanya biaya energi (BBM vs listrik). Belum termasuk servis,
          depresiasi, dan biaya lain. Gunakan Kalkulator TCO untuk analisis lebih lengkap.
        </p>
      </div>
    </div>
  );
}
