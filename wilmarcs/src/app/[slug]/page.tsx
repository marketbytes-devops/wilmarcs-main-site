import AboutUs from "@/components/pages/AboutUs";
import Blog from "@/components/pages/Blog";
import Contact from "@/components/pages/Contact";
import Industries from "@/components/pages/Industries";
import Portfolio from "@/components/pages/Portfolio";
import Services from "@/components/pages/Services";
import type { Metadata } from "next";
import { getSeo } from "@/lib/seo";
import { getBlog, getPortfolio, getServices } from "@/lib/data";
import NotFound from "@/components/pages/NotFound";
interface PageProps {
  params: Promise<{
    slug: string;
  }>;
}
export async function generateStaticParams() {
  return ["about-us", "blog", "contact", "industries", "portfolio", "services"].map((slug) => ({ slug }));
}
export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const seo = slug ? await getSeo(slug) : null;
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
export default async function Page({ params }: PageProps) {
  const { slug } = await params;

  switch (slug) {
    case "about-us":
      return <AboutUs />;

    case "blog":
      const blogs = await getBlog(0);
      return <Blog data={blogs?.data ?? []} />;

    case "contact":
      return <Contact />;

    case "industries":
      return <Industries />;

    case "portfolio":
      const portfolio = await getPortfolio(0);
      return <Portfolio data={portfolio?.data ?? []} />;

    case "services":
      const services = await getServices(0);
      return <Services data={services?.data ?? []} />;

    default:
      return <NotFound />;
  }
}
