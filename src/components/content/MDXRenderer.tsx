"use client";

import { MDXRemote, MDXRemoteSerializeResult } from "next-mdx-remote";
import { Callout } from "@/components/mdx/Callout";
import { SpecTable } from "@/components/mdx/SpecTable";
import { CostEstimate } from "@/components/mdx/CostEstimate";

const components = {
  Callout,
  SpecTable,
  CostEstimate,
};

export function MDXRenderer({ source }: { source: MDXRemoteSerializeResult }) {
  return (
    <div className="mdx-content">
      <MDXRemote {...source} components={components} />
    </div>
  );
}
