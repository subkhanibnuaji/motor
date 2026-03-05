import { formatRupiah } from "@/lib/utils";

interface CostEstimateProps {
  item: string;
  dealer: number;
  bengkel: number;
  note?: string;
}

export function CostEstimate({ item, dealer, bengkel, note }: CostEstimateProps) {
  return (
    <div className="my-3 rounded-lg border border-gray-200 dark:border-gray-700 p-4">
      <h4 className="font-semibold mb-2">{item}</h4>
      <div className="grid grid-cols-2 gap-3 text-sm">
        <div className="bg-blue-50 dark:bg-blue-900/20 rounded-lg p-3">
          <div className="text-muted text-xs mb-1">Dealer Resmi</div>
          <div className="font-bold text-info-blue">{formatRupiah(dealer)}</div>
        </div>
        <div className="bg-green-50 dark:bg-green-900/20 rounded-lg p-3">
          <div className="text-muted text-xs mb-1">Bengkel Umum</div>
          <div className="font-bold text-ev-green">{formatRupiah(bengkel)}</div>
        </div>
      </div>
      {note && <p className="text-xs text-muted mt-2">{note}</p>}
    </div>
  );
}
