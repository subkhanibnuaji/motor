"use client";

import { useState } from "react";
import { formatRupiah, formatNumber } from "@/lib/utils";

export function TCOCalculator() {
  const [kmPerBulan, setKmPerBulan] = useState(800);

  // ICE defaults (Lexi)
  const [icePrice, setIcePrice] = useState(31450000);
  const [iceFuelEff, setIceFuelEff] = useState(40);
  const [iceFuelPrice, setIceFuelPrice] = useState(13900);
  const [iceServiceYear, setIceServiceYear] = useState(800000);
  const [iceTaxYear, setIceTaxYear] = useState(350000);

  // EV defaults (Gesits G1)
  const [evPrice, setEvPrice] = useState(28000000);
  const [evConsumption, setEvConsumption] = useState(35);
  const [evElecRate, setEvElecRate] = useState(1444);
  const [evServiceYear, setEvServiceYear] = useState(300000);
  const [evTaxYear, setEvTaxYear] = useState(200000);
  const [evBattReplace, setEvBattReplace] = useState(10000000);

  const years = 5;
  const kmPerYear = kmPerBulan * 12;

  // ICE TCO
  const iceFuelYear = (kmPerYear / iceFuelEff) * iceFuelPrice;
  const iceTireReplace = Math.floor((kmPerYear * years) / 18000);
  const iceTireCost = iceTireReplace * 400000;
  const iceTCO =
    icePrice +
    iceFuelYear * years +
    iceServiceYear * years +
    iceTaxYear * years +
    iceTireCost;

  // EV TCO
  const evEnergyYear = ((kmPerYear * evConsumption) / 1000) * evElecRate;
  const evTCO =
    evPrice +
    evEnergyYear * years +
    evServiceYear * years +
    evTaxYear * years +
    evBattReplace;

  const cheaper = iceTCO < evTCO ? "ICE" : "EV";
  const diff = Math.abs(iceTCO - evTCO);

  return (
    <div className="space-y-6">
      <div>
        <label className="text-sm font-medium mb-1 block">
          Jarak tempuh/bulan: {formatNumber(kmPerBulan)} km
        </label>
        <input
          type="range"
          min={100}
          max={3000}
          step={50}
          value={kmPerBulan}
          onChange={(e) => setKmPerBulan(Number(e.target.value))}
          className="w-full accent-both-purple"
        />
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <div className="rounded-xl border-2 border-ice-orange p-5 space-y-3">
          <h3 className="font-bold text-ice-orange">Motor BBM (ICE)</h3>
          <div>
            <label className="text-xs text-muted">Harga: {formatRupiah(icePrice)}</label>
            <input type="range" min={15000000} max={50000000} step={500000} value={icePrice} onChange={(e) => setIcePrice(Number(e.target.value))} className="w-full accent-ice-orange" />
          </div>
          <div>
            <label className="text-xs text-muted">Konsumsi BBM: {iceFuelEff} km/L</label>
            <input type="range" min={20} max={70} value={iceFuelEff} onChange={(e) => setIceFuelEff(Number(e.target.value))} className="w-full accent-ice-orange" />
          </div>
          <div>
            <label className="text-xs text-muted">Harga BBM: Rp {formatNumber(iceFuelPrice)}/L</label>
            <input type="range" min={7000} max={16000} step={100} value={iceFuelPrice} onChange={(e) => setIceFuelPrice(Number(e.target.value))} className="w-full accent-ice-orange" />
          </div>
          <div>
            <label className="text-xs text-muted">Servis/tahun: {formatRupiah(iceServiceYear)}</label>
            <input type="range" min={300000} max={2000000} step={100000} value={iceServiceYear} onChange={(e) => setIceServiceYear(Number(e.target.value))} className="w-full accent-ice-orange" />
          </div>
        </div>

        <div className="rounded-xl border-2 border-ev-green p-5 space-y-3">
          <h3 className="font-bold text-ev-green">Motor Listrik (EV)</h3>
          <div>
            <label className="text-xs text-muted">Harga: {formatRupiah(evPrice)}</label>
            <input type="range" min={10000000} max={50000000} step={500000} value={evPrice} onChange={(e) => setEvPrice(Number(e.target.value))} className="w-full accent-ev-green" />
          </div>
          <div>
            <label className="text-xs text-muted">Konsumsi: {evConsumption} Wh/km</label>
            <input type="range" min={15} max={60} value={evConsumption} onChange={(e) => setEvConsumption(Number(e.target.value))} className="w-full accent-ev-green" />
          </div>
          <div>
            <label className="text-xs text-muted">Tarif listrik: Rp {formatNumber(evElecRate)}/kWh</label>
            <input type="range" min={800} max={2500} step={50} value={evElecRate} onChange={(e) => setEvElecRate(Number(e.target.value))} className="w-full accent-ev-green" />
          </div>
          <div>
            <label className="text-xs text-muted">Ganti baterai (thn 4-5): {formatRupiah(evBattReplace)}</label>
            <input type="range" min={5000000} max={20000000} step={500000} value={evBattReplace} onChange={(e) => setEvBattReplace(Number(e.target.value))} className="w-full accent-ev-green" />
          </div>
        </div>
      </div>

      <div className="bg-gradient-to-br from-navy to-navy-light text-white rounded-xl p-6">
        <h3 className="text-lg font-bold mb-4">Total Cost of Ownership — {years} Tahun</h3>
        <div className="grid grid-cols-2 gap-6 mb-4">
          <div>
            <div className="text-xs text-gray-400">Motor BBM</div>
            <div className="text-xl font-bold text-ice-orange">{formatRupiah(Math.round(iceTCO))}</div>
            <div className="text-xs text-gray-400 mt-1">{formatRupiah(Math.round(iceTCO / (years * 12)))}/bulan</div>
          </div>
          <div>
            <div className="text-xs text-gray-400">Motor Listrik</div>
            <div className="text-xl font-bold text-ev-green">{formatRupiah(Math.round(evTCO))}</div>
            <div className="text-xs text-gray-400 mt-1">{formatRupiah(Math.round(evTCO / (years * 12)))}/bulan</div>
          </div>
        </div>
        <div className="border-t border-gray-600 pt-4 text-sm">
          <span className="text-gray-400">Verdict:</span>{" "}
          <span className={`font-bold ${cheaper === "ICE" ? "text-ice-orange" : "text-ev-green"}`}>
            {cheaper === "ICE" ? "Motor BBM" : "Motor Listrik"} lebih murah
          </span>{" "}
          <span className="text-gray-400">selisih {formatRupiah(Math.round(diff))} dalam {years} tahun</span>
        </div>
      </div>
    </div>
  );
}
