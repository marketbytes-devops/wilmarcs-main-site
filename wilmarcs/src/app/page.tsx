import type { Metadata } from "next";
import { getSeo } from "@/lib/seo";
import Home from "@/components/pages/Home";
import { getCategory, getPortfolio } from "@/lib/data";

export async function generateMetadata(): Promise<Metadata> {
  const seo = await getSeo("home");

  return {
    title: "Corporate & CSR Video Production Company Bangalore, India | Wilmarcs",
    description: "Ranked among India’s top Corporate & CSR filmmakers, Wilmarcs creates cinematic brand films, commercials, and documentaries that elevate brands globally.",
    keywords: seo?.data?.seokeywords ?? "video production, bangalore, india, corporate, csr, commercials, brand films",
    openGraph: {
      title: "Corporate & CSR Video Production Company Bangalore, India | Wilmarcs",
      description: "Ranked among India’s top Corporate & CSR filmmakers, Wilmarcs creates cinematic brand films, commercials, and documentaries that elevate brands globally.",
      type: "website",
    },
  };
}

export default async function HomePage() {
  const data = await getCategory(1, 0);
  const data1 = await getPortfolio(-1);
  return <Home service_category={data?.data ?? []} portfolio={data1?.data ?? []} />;
}
