import { notFound } from "next/navigation";
import { Breadcrumb } from "@/components/layout/Breadcrumb";
import { ArticleCard } from "@/components/content/ArticleCard";
import { DOMAIN_MAP, DOMAINS } from "@/lib/constants";
import { getArticlesByDomain } from "@/lib/content";

export function generateStaticParams() {
  return DOMAINS.filter((d) => d.id !== "my-lexi").map((d) => ({ domain: d.id }));
}

export async function generateMetadata({ params }: { params: Promise<{ domain: string }> }) {
  const { domain: domainId } = await params;
  const domain = DOMAIN_MAP[domainId];
  if (!domain) return {};
  return { title: domain.title };
}

export default async function DomainPage({ params }: { params: Promise<{ domain: string }> }) {
  const { domain: domainId } = await params;
  const domain = DOMAIN_MAP[domainId];
  if (!domain) notFound();

  const articles = getArticlesByDomain(domainId);

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 pb-16">
      <Breadcrumb items={[{ label: domain.title }]} />
      <div className="mb-8">
        <h1 className="text-3xl font-extrabold mt-2 mb-2">{domain.title}</h1>
        <p className="text-muted">{domain.description}</p>
      </div>

      {articles.length > 0 ? (
        <div className="grid gap-4 sm:grid-cols-2">
          {articles.map((article) => (
            <ArticleCard key={article.slug} article={article} />
          ))}
        </div>
      ) : (
        <div className="text-center py-16 text-muted">
          <p className="text-lg mb-2">Konten sedang disiapkan</p>
          <p className="text-sm">
            Domain ini akan segera diisi dengan artikel lengkap.
          </p>
        </div>
      )}
    </div>
  );
}
