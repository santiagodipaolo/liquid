import type { MetadataRoute } from "next";
import { fetchPosts } from "@/lib/hub";

const SITE = "https://weibull.capital";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  let hub: MetadataRoute.Sitemap = [];
  try {
    hub = (await fetchPosts()).map((p) => ({
      url: `${SITE}/blog/${p.slug}`,
      lastModified: new Date(p.updated_at || p.published_at || Date.now()),
      changeFrequency: "monthly",
      priority: 0.8,
    }));
  } catch {}
  return [
    { url: SITE, lastModified: new Date(), changeFrequency: "monthly", priority: 1 },
    { url: `${SITE}/compare`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },
    { url: `${SITE}/blog`, lastModified: new Date(), changeFrequency: "weekly", priority: 0.7 },
    { url: `${SITE}/blog/loan-vs-retainer`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },
    ...hub,
  ];
}
