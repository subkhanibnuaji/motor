import fs from "fs";
import path from "path";
import matter from "gray-matter";
import type { Article, ArticleFrontmatter } from "./types";

const CONTENT_DIR = path.join(process.cwd(), "content");

export function getArticlesByDomain(domain: string): Article[] {
  const domainDir = path.join(CONTENT_DIR, domain);
  if (!fs.existsSync(domainDir)) return [];

  const articles: Article[] = [];

  function readDir(dir: string, prefix: string = "") {
    const entries = fs.readdirSync(dir, { withFileTypes: true });
    for (const entry of entries) {
      if (entry.isDirectory()) {
        readDir(path.join(dir, entry.name), `${prefix}${entry.name}/`);
      } else if (entry.name.endsWith(".mdx") && !entry.name.startsWith("_")) {
        const filePath = path.join(dir, entry.name);
        const fileContent = fs.readFileSync(filePath, "utf-8");
        const { data, content } = matter(fileContent);
        const slug = `${prefix}${entry.name.replace(/\.mdx$/, "")}`;
        articles.push({
          slug,
          domain,
          frontmatter: data as ArticleFrontmatter,
          content,
        });
      }
    }
  }

  readDir(domainDir);
  return articles.sort((a, b) => (a.frontmatter.order ?? 99) - (b.frontmatter.order ?? 99));
}

export function getArticle(domain: string, slug: string): Article | null {
  const filePath = path.join(CONTENT_DIR, domain, `${slug}.mdx`);
  if (!fs.existsSync(filePath)) return null;

  const fileContent = fs.readFileSync(filePath, "utf-8");
  const { data, content } = matter(fileContent);

  return {
    slug,
    domain,
    frontmatter: data as ArticleFrontmatter,
    content,
  };
}

export function getDomainIndex(domain: string): Article | null {
  const filePath = path.join(CONTENT_DIR, domain, "_index.mdx");
  if (!fs.existsSync(filePath)) return null;

  const fileContent = fs.readFileSync(filePath, "utf-8");
  const { data, content } = matter(fileContent);

  return {
    slug: "_index",
    domain,
    frontmatter: data as ArticleFrontmatter,
    content,
  };
}

export function getAllArticles(): Article[] {
  const domains = fs.readdirSync(CONTENT_DIR, { withFileTypes: true });
  const articles: Article[] = [];

  for (const domain of domains) {
    if (domain.isDirectory()) {
      articles.push(...getArticlesByDomain(domain.name));
    }
  }

  return articles;
}

export function getAllDomainSlugs(): string[] {
  return fs
    .readdirSync(CONTENT_DIR, { withFileTypes: true })
    .filter((d) => d.isDirectory())
    .map((d) => d.name);
}
