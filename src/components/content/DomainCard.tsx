import Link from "next/link";
import {
  Bike, LayoutGrid, Cog, Settings, Circle, ShieldCheck,
  Zap, Package, Calculator, FileText, ShoppingCart, Wrench,
  BatteryCharging, Shield, TrendingUp,
} from "lucide-react";
import type { DomainConfig } from "@/lib/types";

const ICON_MAP: Record<string, React.ComponentType<{ size?: number; className?: string }>> = {
  Bike, LayoutGrid, Cog, Settings, Circle, ShieldCheck,
  Zap, Package, Calculator, FileText, ShoppingCart, Wrench,
  BatteryCharging, Shield, TrendingUp,
};

export function DomainCard({ domain }: { domain: DomainConfig }) {
  const Icon = ICON_MAP[domain.icon] || Circle;

  return (
    <Link
      href={`/${domain.id}/`}
      className="flex items-start gap-4 rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-navy-light p-5 hover:shadow-md hover:border-racing-red/30 transition-all group"
    >
      <div
        className="shrink-0 w-10 h-10 rounded-lg flex items-center justify-center text-white"
        style={{ backgroundColor: domain.color }}
      >
        <Icon size={20} />
      </div>
      <div className="min-w-0">
        <h3 className="font-semibold group-hover:text-racing-red transition-colors">
          {domain.shortTitle}
        </h3>
        <p className="text-sm text-muted mt-1 line-clamp-2">{domain.description}</p>
      </div>
    </Link>
  );
}
