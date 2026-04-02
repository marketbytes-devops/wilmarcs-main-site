const API = process.env.NEXT_PUBLIC_API_URL;

async function fetcher(url: string) {
  try {
    const res = await fetch(url, {
      next: { revalidate: 3600 }
    });
    if (!res.ok) return null;
    return await res.json();
  } catch (err) {
    console.error(`Fetch failed for ${url}:`, err);
    return null;
  }
}

export async function getServices(id: number) {
  return await fetcher(`${API}services/${id}`);
}

export async function getPortfolio(id: number) {
  return await fetcher(`${API}portfolio/${id}`);
}

export async function getBlog(id: number) {
  return await fetcher(`${API}blog/${id}`);
}

export async function getCategory(type: number, id: number) {
  return await fetcher(`${API}category/${type}/${id}`);
}
