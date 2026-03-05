import Link from "next/link";
import { ContentBadge } from "./ContentBadge";
import type { Article } from "@/lib/types";

export function ArticleCard({ article }: { article: Article }) {
  const { frontmatter, domain, slug } = article;

  return (
    <Link
      href={`/${domain}/${slug}/`}
      className="block rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-navy-light p-5 hover:shadow-md hover:border-racing-red/30 transition-all group"
    >
      <div className="flex items-start justify-between gap-2 mb-2">
        <h3 className="font-semibold group-hover:text-racing-red transition-colors line-clamp-2">
          {frontmatter.title}
        </h3>
        <ContentBadge tag={frontmatter.contentTag} />
      </div>
      <p className="text-sm text-muted line-clamp-2">{frontmatter.description}</p>
      <div className="flex items-center gap-3 mt-3 text-xs text-muted">
        <span className="capitalize">{frontmatter.contentType}</span>
        {frontmatter.lastUpdated && <span>{frontmatter.lastUpdated}</span>}
      </div>
    </Link>
  );
}
