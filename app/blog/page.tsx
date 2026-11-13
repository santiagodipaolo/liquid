import type { Metadata } from "next";
import Link from "next/link";
import { fetchPosts, formatDate } from "@/lib/hub";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Insights on token liquidity, DEX liquidity, cross-chain infrastructure, and how to run market making without handing over your tokens.",
};

// Hourly floor; the Hub busts it on publish through /api/revalidate.
export const revalidate = 3600;

interface Entry {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
}

// Written before the blog moved to the Hub; it lives in app/blog/loan-vs-retainer.
const LEGACY: Entry[] = [
  {
    slug: "loan-vs-retainer",
    title: "Token loan vs retainer: choosing how to get liquidity for your token",
    excerpt:
      "Most market makers ask for a token loan upfront. Here's what that actually means for your project, and what it looks like to keep your tokens and pay an operator instead.",
    date: "2026-03-06",
    readTime: "6 min read",
  },
];

export default async function BlogIndex() {
  const hub = await fetchPosts();
  const posts: Entry[] = [
    ...hub.map((p) => ({
      slug: p.slug,
      title: p.title,
      excerpt: p.excerpt ?? p.subtitle ?? "",
      date: p.published_at ?? "",
      readTime: p.reading_time_minutes ? `${p.reading_time_minutes} min read` : "",
    })),
    ...LEGACY,
  ].sort((a, b) => b.date.localeCompare(a.date));

  return (
    <section className="pt-32 pb-20 md:pb-28">
      <div className="max-w-3xl mx-auto px-6">
        <h1 className="text-4xl md:text-5xl font-normal text-ink mb-4">
          Blog
        </h1>
        <p className="text-soft mb-16 leading-relaxed">
          How we think about liquidity, market structure, and building
          infrastructure that works.
        </p>

        <div className="divide-y divide-rule">
          {posts.map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="block py-8 group"
            >
              <div className="flex items-center gap-3 text-xs text-faint mb-3">
                <time dateTime={post.date}>{formatDate(post.date)}</time>
                {post.readTime && (
                  <>
                    <span className="text-rule">·</span>
                    <span>{post.readTime}</span>
                  </>
                )}
              </div>
              <h2 className="text-xl font-bold text-ink mb-2 group-hover:text-accent transition-colors">
                {post.title}
              </h2>
              {post.excerpt && <p className="text-soft leading-relaxed">{post.excerpt}</p>}
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
