"use client"
import { headers } from "next/headers";

export async function getFullUrl() {
  const h = await headers();
  const protocol = h.get("x-forwarded-proto") ?? "https";
  const host = h.get("x-forwarded-host") ?? h.get("host");
  const pathname = h.get("x-pathname") ?? "";
  return `${protocol}://${host}${pathname}`;
}