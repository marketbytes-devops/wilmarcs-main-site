import type { Metadata } from "next";
import { getSeo } from "@/lib/seo";
import Home from "@/components/pages/Home";
import { getCategory, getPortfolio } from "@/lib/data";

export async function generateMetadata(): Promise<Metadata> {
  const seo = await getSeo("home");

  return {
    title: seo?.data?.seotitle ?? "Wilmarcs UAE",
    description: seo?.data?.seodesc ?? "Motion Pictures",
    keywords: seo?.data?.seokeywords ?? "",
    openGraph: {
      title: seo?.data?.seotitle,
      description: seo?.data?.seodesc,
      type: "website",
    },
  };
}

export default async function HomePage() {
  const data = await getCategory(1, 0);
  const data1 = await getPortfolio(-1);
  return <Home service_category={data?.data ?? []} portfolio={data1?.data ?? []} />;
}
