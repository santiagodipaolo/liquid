import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Insights on market making, DEX liquidity, cross-chain infrastructure, and how to think about liquidity for your project.",
};

const posts = [
  {
    slug: "loan-vs-retainer",
    title: "Token loan vs retainer: choosing the right market making model",
    excerpt:
      "Most market makers ask for a token loan upfront. Here's what that actually means for your project, and why we chose a different path.",
    date: "2026-03-06",
    readTime: "6 min read",
  },
];

export default function BlogIndex() {
  return (
    <section className="pt-32 pb-20 md:pb-28">
      <div className="max-w-3xl mx-auto px-6">
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-white mb-4">
          Blog
        </h1>
        <p className="text-zinc-400 mb-16 leading-relaxed">
          How we think about liquidity, market structure, and building
          infrastructure that works.
        </p>

        <div className="divide-y divide-zinc-800/50">
          {posts.map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="block py-8 group"
            >
              <div className="flex items-center gap-3 text-xs text-zinc-500 mb-3">
                <time dateTime={post.date}>
                  {new Date(post.date).toLocaleDateString("en-US", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })}
                </time>
                <span className="text-zinc-700">·</span>
                <span>{post.readTime}</span>
              </div>
              <h2 className="text-xl font-semibold text-white mb-2 group-hover:text-blue-400 transition-colors">
                {post.title}
              </h2>
              <p className="text-zinc-400 leading-relaxed">{post.excerpt}</p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
