import Link from "next/link";
import { ClipboardCheck, Map } from "lucide-react";
import { Breadcrumb } from "@/components/layout/Breadcrumb";

export const metadata = { title: "Checklist" };

export default function ChecklistPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 pb-16">
      <Breadcrumb items={[{ label: "Checklist" }]} />
      <h1 className="text-3xl font-extrabold mt-2 mb-2">Checklist Interaktif</h1>
      <p className="text-muted mb-8">
        Checklist yang bisa kamu centang langsung dari HP saat di lapangan.
      </p>
      <div className="grid gap-4 sm:grid-cols-2">
        <Link
          href="/checklist/inspeksi-bekas/"
          className="flex items-start gap-4 rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-navy-light p-5 hover:shadow-md hover:border-racing-red/30 transition-all group"
        >
          <ClipboardCheck size={24} className="text-racing-red shrink-0" />
          <div>
            <h3 className="font-semibold group-hover:text-racing-red transition-colors">
              Inspeksi Motor Bekas
            </h3>
            <p className="text-sm text-muted mt-1">
              20-point checklist lengkap untuk inspeksi motor bekas sebelum beli.
            </p>
          </div>
        </Link>
        <Link
          href="/checklist/persiapan-touring/"
          className="flex items-start gap-4 rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-navy-light p-5 hover:shadow-md hover:border-racing-red/30 transition-all group"
        >
          <Map size={24} className="text-info-blue shrink-0" />
          <div>
            <h3 className="font-semibold group-hover:text-racing-red transition-colors">
              Persiapan Touring
            </h3>
            <p className="text-sm text-muted mt-1">
              Checklist persiapan motor dan perlengkapan sebelum touring jarak jauh.
            </p>
          </div>
        </Link>
      </div>
    </div>
  );
}
