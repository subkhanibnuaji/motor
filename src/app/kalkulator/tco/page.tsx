import { Breadcrumb } from "@/components/layout/Breadcrumb";
import { TCOCalculator } from "@/components/interactive/TCOCalculator";

export const metadata = { title: "Kalkulator TCO Motor" };

export default function TCOPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 pb-16">
      <Breadcrumb
        items={[
          { label: "Kalkulator", href: "/kalkulator/" },
          { label: "Total Cost of Ownership" },
        ]}
      />
      <h1 className="text-3xl font-extrabold mt-2 mb-2">
        Total Cost of Ownership — 5 Tahun
      </h1>
      <p className="text-muted mb-6">
        Bandingkan total biaya kepemilikan motor BBM vs motor listrik selama 5
        tahun, termasuk harga beli, energi, servis, pajak, dan penggantian
        baterai.
      </p>
      <TCOCalculator />
      <div className="mt-6 text-xs text-muted space-y-1">
        <p>* TCO belum termasuk depresiasi dan asuransi. Gunakan kalkulator depresiasi terpisah.</p>
        <p>* Biaya ganti baterai EV bervariasi. Estimasi 30-50% harga motor baru.</p>
        <p>* Data estimasi Maret 2026.</p>
      </div>
    </div>
  );
}
