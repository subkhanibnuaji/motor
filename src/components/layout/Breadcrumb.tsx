import Link from "next/link";
import { ChevronRight, Home } from "lucide-react";

interface BreadcrumbItem {
  label: string;
  href?: string;
}

export function Breadcrumb({ items }: { items: BreadcrumbItem[] }) {
  return (
    <nav className="flex items-center gap-1.5 text-sm text-muted overflow-x-auto py-3">
      <Link href="/" className="hover:text-racing-red transition-colors shrink-0">
        <Home size={14} />
      </Link>
      {items.map((item, i) => (
        <span key={i} className="flex items-center gap-1.5 shrink-0">
          <ChevronRight size={14} />
          {item.href ? (
            <Link href={item.href} className="hover:text-racing-red transition-colors">
              {item.label}
            </Link>
          ) : (
            <span className="text-gray-900 dark:text-gray-200 font-medium">
              {item.label}
            </span>
          )}
        </span>
      ))}
    </nav>
  );
}
