import { CONTENT_TAG_LABELS } from "@/lib/constants";
import type { ContentTag } from "@/lib/types";

export function ContentBadge({ tag }: { tag: ContentTag }) {
  const config = CONTENT_TAG_LABELS[tag];
  if (!config) return null;

  return (
    <span
      className="inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium text-white"
      style={{ backgroundColor: config.color }}
    >
      {config.label}
    </span>
  );
}
