const API = process.env.NEXT_PUBLIC_API_URL;
export async function getServices(id: number) {
  const res = await fetch(
    `${API}services/${id}`,
    {
      next: { revalidate: 3600 } // ISR – revalidate every 1 hour
    }
  );

  if (!res.ok) return null;
  return res.json();
}
export async function getPortfolio(id: number) {
  const res = await fetch(
    `${API}portfolio/${id}`,
    {
      next: { revalidate: 3600 } // ISR – revalidate every 1 hour
    }
  );

  if (!res.ok) return null;
  return res.json();
}
export async function getBlog(id: number) {
  const res = await fetch(
    `${API}blog/${id}`,
    {
      next: { revalidate: 3600 } // ISR – revalidate every 1 hour
    }
  );

  if (!res.ok) return null;
  return res.json();
}
export async function getCategory(type: number, id: number) {
  const res = await fetch(
    `${API}category/${type}/${id}`,
    {
      next: { revalidate: 3600 } // ISR – revalidate every 1 hour
    }
  );

  if (!res.ok) return null;
  return res.json();
}