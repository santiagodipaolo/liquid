import { revalidatePath, revalidateTag } from "next/cache";

/**
 * Called by the POL Hub when a Weibull post is published, edited or removed.
 *   POST /api/revalidate   header x-revalidate-secret   body { paths?: string[] }
 * Busts the "posts" fetch tag and re-renders the given paths.
 */
export async function POST(request: Request) {
  const secret = process.env.REVALIDATE_SECRET;
  if (!secret || request.headers.get("x-revalidate-secret") !== secret) {
    return Response.json({ error: "Unauthorized" }, { status: 401 });
  }
  let paths: string[] = ["/blog", "/sitemap.xml"];
  try {
    const body = (await request.json()) as { paths?: string[] };
    if (body.paths?.length) paths = body.paths;
  } catch {}
  revalidateTag("posts", { expire: 0 });
  for (const p of paths) revalidatePath(p);
  return Response.json({ revalidated: true, paths });
}
