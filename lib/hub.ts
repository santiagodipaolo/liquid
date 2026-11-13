/**
 * Posts written in the POL Hub for this blog (blog key "weibull"). Fetched
 * with ISR: cached for an hour, and busted at once by the Hub through
 * /api/revalidate whenever a Weibull post is published, edited or removed.
 */

const API_URL = (process.env.HUB_API_URL || "https://pol-hub-api.onrender.com").replace(/\/$/, "");
const BLOG = "weibull";

export interface HubAuthor {
  full_name?: string | null;
  nickname?: string | null;
}

export interface HubPostCard {
  slug: string;
  title: string;
  subtitle?: string | null;
  excerpt?: string | null;
  hero_image_url?: string | null;
  og_image_url?: string | null;
  published_at?: string | null;
  updated_at?: string | null;
  reading_time_minutes?: number;
  author?: HubAuthor | null;
  authors?: HubAuthor[] | null;
  tags?: string[] | null;
}

export interface HubPost extends HubPostCard {
  body_mdx: string;
  seo_title?: string | null;
  seo_description?: string | null;
}

async function get<T>(path: string): Promise<T | null> {
  const res = await fetch(`${API_URL}${path}`, {
    next: { revalidate: 3600, tags: ["posts"] },
  });
  if (res.status === 404) return null;
  if (!res.ok) throw new Error(`Hub ${path} → ${res.status}`);
  return (await res.json()) as T;
}

/** Published Weibull posts, newest first. */
export async function fetchPosts(): Promise<HubPostCard[]> {
  const data = await get<{ items: HubPostCard[] }>(`/api/v1/posts?blog=${BLOG}&page_size=100`);
  return data?.items ?? [];
}

export async function fetchPost(slug: string): Promise<HubPost | null> {
  return get<HubPost>(`/api/v1/posts/${encodeURIComponent(slug)}?blog=${BLOG}`);
}

export function byline(p: HubPostCard): string {
  const names = (p.authors?.length ? p.authors : p.author ? [p.author] : [])
    .map((a) => a.full_name || a.nickname)
    .filter(Boolean);
  return names.join(", ");
}

export function formatDate(iso?: string | null): string {
  if (!iso) return "";
  return new Date(iso).toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" });
}
