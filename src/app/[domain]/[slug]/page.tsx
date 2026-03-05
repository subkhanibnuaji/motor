import { notFound } from "next/navigation";
import { MDXRemote } from "next-mdx-remote/rsc";
import { Breadcrumb } from "@/components/layout/Breadcrumb";
import { ContentBadge } from "@/components/content/ContentBadge";
import { Callout } from "@/components/mdx/Callout";
import { SpecTable } from "@/components/mdx/SpecTable";
import { CostEstimate } from "@/components/mdx/CostEstimate";
import { DOMAIN_MAP, DOMAINS } from "@/lib/constants";
import { getArticle, getArticlesByDomain } from "@/lib/content";

const mdxComponents = { Callout, SpecTable, CostEstimate };

export function generateStaticParams() {
  const params: { domain: string; slug: string }[] = [];
  for (const d of DOMAINS) {
    const articles = getArticlesByDomain(d.id);
    for (const a of articles) {
      params.push({ domain: d.id, slug: a.slug });
    }
  }
  return params;
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ domain: string; slug: string }>;
}) {
  const { domain: domainId, slug } = await params;
  const article = getArticle(domainId, slug);
  if (!article) return {};
  return {
    title: article.frontmatter.title,
    description: article.frontmatter.description,
  };
}

export default async function ArticlePage({
  params,
}: {
  params: Promise<{ domain: string; slug: string }>;
}) {
  const { domain: domainId, slug } = await params;
  const domain = DOMAIN_MAP[domainId];
  const article = getArticle(domainId, slug);
  if (!domain || !article) notFound();

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 pb-16">
      <Breadcrumb
        items={[
          { label: domain.shortTitle, href: `/${domain.id}/` },
          { label: article.frontmatter.title },
        ]}
      />

      <article className="mt-4">
        <header className="mb-8">
          <div className="flex items-center gap-3 mb-3">
            <ContentBadge tag={article.frontmatter.contentTag} />
            <span className="text-xs text-muted capitalize">
              {article.frontmatter.contentType}
            </span>
            {article.frontmatter.lastUpdated && (
              <span className="text-xs text-muted">
                {article.frontmatter.lastUpdated}
              </span>
            )}
          </div>
          <h1 className="text-3xl font-extrabold">{article.frontmatter.title}</h1>
          <p className="text-muted mt-2">{article.frontmatter.description}</p>
        </header>

        <div className="mdx-content">
          <MDXRemote source={article.content} components={mdxComponents} />
        </div>
      </article>
    </div>
  );
}
