export async function getSeo(page?: string) {
  if (!page) return null;
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}seo/${page}`,
      {
        next: { revalidate: 3600 }
      }
    );

    if (!res.ok) return null;
    return await res.json();
  } catch (err) {
    console.error(`Fetch failed for SEO on page ${page}:`, err);
    return null;
  }
}
