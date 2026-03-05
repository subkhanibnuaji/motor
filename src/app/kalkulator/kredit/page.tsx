import { Breadcrumb } from "@/components/layout/Breadcrumb";
import { KreditCalculator } from "@/components/interactive/KreditCalculator";

export const metadata = { title: "Simulasi Kredit Motor" };

export default function KreditPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 pb-16">
      <Breadcrumb
        items={[
          { label: "Kalkulator", href: "/kalkulator/" },
          { label: "Simulasi Kredit" },
        ]}
      />
      <h1 className="text-3xl font-extrabold mt-2 mb-2">Simulasi Kredit Motor</h1>
      <p className="text-muted mb-6">
        Hitung estimasi angsuran bulanan, total bunga, dan perbandingan dengan
        pembelian cash. Pilih preset motor atau atur manual.
      </p>
      <KreditCalculator />
      <div className="mt-6 text-xs text-muted space-y-1">
        <p>* Perhitungan menggunakan metode bunga flat (yang umum di leasing motor Indonesia).</p>
        <p>* Angka estimasi, dapat berbeda tergantung leasing dan promo yang berlaku.</p>
        <p>* Harga OTR estimasi Maret 2026, berbeda per daerah.</p>
      </div>
    </div>
  );
}
