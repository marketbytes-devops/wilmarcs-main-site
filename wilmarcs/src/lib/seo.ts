export async function getSeo(page?: string) {
  if (!page) return null;
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}seo/${page}`,
    {
      next: { revalidate: 3600 } // ISR – revalidate every 1 hour
    }
  );

  if (!res.ok) return null;
  return res.json();
}