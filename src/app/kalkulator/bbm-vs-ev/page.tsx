import { Breadcrumb } from "@/components/layout/Breadcrumb";
import { BBMvsEVCalculator } from "@/components/interactive/BBMvsEVCalculator";

export const metadata = { title: "BBM vs Listrik — Perbandingan Biaya" };

export default function BBMvsEVPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 pb-16">
      <Breadcrumb
        items={[
          { label: "Kalkulator", href: "/kalkulator/" },
          { label: "BBM vs Listrik" },
        ]}
      />
      <h1 className="text-3xl font-extrabold mt-2 mb-2">
        BBM vs Listrik — Perbandingan Biaya Energi
      </h1>
      <p className="text-muted mb-6">
        Bandingkan biaya harian, bulanan, dan tahunan antara motor bensin dan
        motor listrik berdasarkan pola berkendara kamu.
      </p>
      <BBMvsEVCalculator />
    </div>
  );
}
