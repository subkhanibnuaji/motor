import { Breadcrumb } from "@/components/layout/Breadcrumb";
import { InspectionChecklist } from "@/components/interactive/InspectionChecklist";

export const metadata = { title: "Checklist Inspeksi Motor Bekas" };

export default function InspeksiPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 pb-16">
      <Breadcrumb
        items={[
          { label: "Checklist", href: "/checklist/" },
          { label: "Inspeksi Motor Bekas" },
        ]}
      />
      <h1 className="text-3xl font-extrabold mt-2 mb-2">
        Checklist Inspeksi Motor Bekas
      </h1>
      <p className="text-muted mb-6">
        20-point checklist yang bisa kamu centang langsung saat inspeksi motor
        bekas. Buka di HP kamu saat di showroom atau ketemu penjual.
      </p>
      <InspectionChecklist />
    </div>
  );
}
