import type { ReactNode } from "react";
import { MDXRemote } from "next-mdx-remote/rsc";
import remarkGfm from "remark-gfm";
import remarkMath from "remark-math";
import rehypeKatex from "rehype-katex";
import "katex/dist/katex.min.css";

/**
 * Renders a Hub post body (MDX). The Hub editor offers a few components
 * built for the POL blog; Callout and Figure render here, and the
 * data-heavy ones (charts, Dune embeds, slide decks) are left out on this
 * blog rather than breaking the page.
 */
function Callout({ children, title }: { children?: ReactNode; title?: string }) {
  return (
    <aside className="my-8 border-l-2 border-blue-500 bg-zinc-900/50 px-5 py-4 text-zinc-300">
      {title && <p className="mb-2 font-semibold text-white">{title}</p>}
      {children}
    </aside>
  );
}

function Figure({ src, alt = "", caption }: { src?: string; alt?: string; caption?: string }) {
  if (!src) return null;
  return (
    <figure className="my-8">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src={src} alt={alt} className="w-full rounded-lg border border-zinc-800" />
      {caption && <figcaption className="mt-2 text-sm text-zinc-500">{caption}</figcaption>}
    </figure>
  );
}

const Omitted = () => null;

const components = {
  Callout,
  Figure,
  Notes: Callout,
  Chart: Omitted,
  DuneEmbed: Omitted,
  SlideDeck: Omitted,
};

export default function Mdx({ source }: { source: string }) {
  return (
    <MDXRemote
      source={source.replace(/<(https?:\/\/[^>\s]+)>/g, "[$1]($1)")}
      components={components}
      options={{ mdxOptions: { remarkPlugins: [remarkGfm, remarkMath], rehypePlugins: [rehypeKatex] } }}
    />
  );
}
