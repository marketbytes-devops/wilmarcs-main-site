import type { Metadata } from "next";
import { getSeo } from "@/lib/seo";
import Home from "@/components/pages/Home";
import { getCategory, getPortfolio } from "@/lib/data";

export async function generateMetadata(): Promise<Metadata> {
  const seo = await getSeo("home");

  return {
    title: "Corporate & CSR Video Production Company in Bangalore, India | Wilmarcs",
    description: "Ranked among India’s top corporate and CSR filmmakers, Wilmarcs crafts cinematic brand films and documentaries that move audiences. Connect with us today",
    keywords: seo?.data?.seokeywords ?? "video production, bangalore, india, corporate, csr, commercials, brand films",
    openGraph: {
      title: "Corporate & CSR Video Production Company in Bangalore, India | Wilmarcs",
      description: "Ranked among India’s top corporate and CSR filmmakers, Wilmarcs crafts cinematic brand films and documentaries that move audiences. Connect with us today",
      type: "website",
    },
  };
}

export default async function HomePage() {
  const data = await getCategory(1, 0);
  const data1 = await getPortfolio(-1);
  return <Home service_category={data?.data ?? []} portfolio={data1?.data ?? []} />;
}
