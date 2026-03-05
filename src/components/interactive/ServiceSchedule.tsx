"use client";

import { useState } from "react";
import { CheckCircle, Clock, AlertTriangle } from "lucide-react";
import { formatRupiah, formatNumber } from "@/lib/utils";
import serviceData from "@/data/service-schedule.json";

export function ServiceSchedule() {
  const [currentKm, setCurrentKm] = useState(8000);

  return (
    <div className="space-y-4">
      <div>
        <label className="text-sm font-medium mb-1 block">
          Odometer saat ini: {formatNumber(currentKm)} km
        </label>
        <input
          type="range"
          min={0}
          max={50000}
          step={500}
          value={currentKm}
          onChange={(e) => setCurrentKm(Number(e.target.value))}
          className="w-full accent-yamaha-blue"
        />
      </div>

      <div className="space-y-3">
        {serviceData.map((svc) => {
          const isDone = currentKm >= svc.km;
          const isNext =
            !isDone &&
            (serviceData.findIndex((s) => s.km > currentKm) ===
              serviceData.indexOf(svc));
          const isOverdue = currentKm >= svc.km - 500 && currentKm < svc.km;

          return (
            <div
              key={svc.km}
              className={`rounded-lg border p-4 transition-all ${
                isDone
                  ? "border-green-200 dark:border-green-800 bg-green-50/50 dark:bg-green-900/10"
                  : isNext
                  ? "border-yamaha-blue bg-blue-50/50 dark:bg-blue-900/10 ring-2 ring-yamaha-blue/30"
                  : "border-gray-200 dark:border-gray-700"
              }`}
            >
              <div className="flex items-center gap-3 mb-2">
                {isDone ? (
                  <CheckCircle size={18} className="text-ev-green shrink-0" />
                ) : isNext ? (
                  <AlertTriangle size={18} className="text-yamaha-blue shrink-0" />
                ) : (
                  <Clock size={18} className="text-muted shrink-0" />
                )}
                <span className="font-bold text-sm">
                  {formatNumber(svc.km)} km
                </span>
                {isNext && (
                  <span className="text-xs bg-yamaha-blue text-white px-2 py-0.5 rounded-full">
                    Selanjutnya ({formatNumber(svc.km - currentKm)} km lagi)
                  </span>
                )}
                {isDone && (
                  <span className="text-xs text-ev-green font-medium">Selesai</span>
                )}
              </div>
              <ul className="text-sm space-y-1 ml-8">
                {svc.items.map((item, i) => (
                  <li key={i} className={isDone ? "text-muted line-through" : ""}>
                    {item}
                  </li>
                ))}
              </ul>
              <div className="ml-8 mt-2 text-xs text-muted">
                Est. biaya: Dealer {formatRupiah(svc.estimatedCost.dealer)} |
                Bengkel {formatRupiah(svc.estimatedCost.bengkel)}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
