import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import Mdx from "@/app/components/Mdx";
import { byline, fetchPost, fetchPosts, formatDate } from "@/lib/hub";

// A post written in the POL Hub for the Weibull blog.
export const revalidate = 3600;
export const dynamicParams = true;

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  try {
    return (await fetchPosts()).map((p) => ({ slug: p.slug }));
  } catch {
    return [];
  }
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const post = await fetchPost((await params).slug);
  if (!post) return {};
  const description = post.seo_description || post.excerpt || post.subtitle || undefined;
  const image = post.og_image_url || post.hero_image_url || undefined;
  return {
    title: post.seo_title || post.title,
    description,
    alternates: { canonical: `https://weibull.capital/blog/${post.slug}` },
    openGraph: {
      title: post.title,
      description,
      type: "article",
      publishedTime: post.published_at ?? undefined,
      images: image ? [image] : undefined,
    },
  };
}

export default async function HubPostPage({ params }: Props) {
  const post = await fetchPost((await params).slug);
  if (!post) notFound();
  const by = byline(post);

  return (
    <section className="pt-32 pb-20 md:pb-28">
      <div className="max-w-3xl mx-auto px-6">
        <Link
          href="/blog"
          className="text-sm text-faint hover:text-ink transition-colors mb-8 inline-block"
        >
          ← Back to blog
        </Link>

        <div className="flex flex-wrap items-center gap-3 text-xs text-faint mb-4">
          {by && <span className="text-soft">{by}</span>}
          {by && <span className="text-rule">·</span>}
          <time dateTime={post.published_at ?? undefined}>{formatDate(post.published_at)}</time>
          {post.reading_time_minutes ? (
            <>
              <span className="text-rule">·</span>
              <span>{post.reading_time_minutes} min read</span>
            </>
          ) : null}
        </div>

        <h1 className="text-3xl md:text-4xl font-normal text-ink mb-4 leading-tight">
          {post.title}
        </h1>
        {post.subtitle && <p className="text-lg text-soft mb-8 leading-relaxed">{post.subtitle}</p>}

        {post.hero_image_url && (
          // eslint-disable-next-line @next/next/no-img-element
          <img src={post.hero_image_url} alt="" className="w-full rounded-none border border-rule mb-10" />
        )}

        <article className="post-body">
          <Mdx source={post.body_mdx} />
        </article>
      </div>
    </section>
  );
}
