import { Breadcrumb } from "@/components/layout/Breadcrumb";
import { DepresiasiChart } from "@/components/interactive/DepresiasiChart";

export const metadata = { title: "Depresiasi Motor" };

export default function DepresiasiPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 pb-16">
      <Breadcrumb
        items={[
          { label: "Kalkulator", href: "/kalkulator/" },
          { label: "Depresiasi Motor" },
        ]}
      />
      <h1 className="text-3xl font-extrabold mt-2 mb-2">Depresiasi Motor</h1>
      <p className="text-muted mb-6">
        Lihat estimasi penurunan nilai motor per kategori dan brand selama 5
        tahun. Pilih kategori dan masukkan harga beli.
      </p>
      <DepresiasiChart />
    </div>
  );
}
