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

  const metadataMap: Record<string, { title: string; description: string }> = {
    "about-us": {
      title: "About Our Global Story & Team | Wilmarcs Motion Pictures",
      description: "From a 2016 Bangalore crew to a global studio across India, Dubai, and Australia, Wilmarcs delivers impact-driven brand, CSR, and NGO films.",
    },
    "services": {
      title: "Brand Films, CSR & Documentary Video Production Services | Wilmarcs",
      description: "Explore Wilmarcs’ corporate films, animation, social content, innovation, and post‑production services, one integrated video production partner from brief to final master.",
    },
    "portfolio": {
      title: "Video Production Portfolio & Case Studies | Wilmarcs Motion Pictures",
      description: "See how Wilmarcs turns briefs into cinematic results with brand films, CSR videos, documentaries, events, and commercial spots in our curated video production portfolio.",
    },
    "industries": {
      title: "Global Corporate Video Solutions for Leading Industries | Wilmarcs",
      description: "Wilmarcs connects storytelling with strategy, crafting industry‑specific films for travel, tech, CSR, real estate, healthcare, fintech, education, e‑commerce and more.",
    },
    "contact": {
      title: "Contact Wilmarcs | Brief, Collaborate or Join Our Video Team",
      description: "Where next stories begin on screen contact Wilmarcs to share your brief or request a call, and our producers will define clear next steps for your video project.",
    },
  };

  const currentMetadata = metadataMap[slug] || {
    title: seo?.data?.seotitle ?? "Wilmarcs UAE",
    description: seo?.data?.seodesc ?? "Motion Pictures",
  };

  return {
    title: currentMetadata.title,
    description: currentMetadata.description,
    keywords: seo?.data?.seokeywords ?? "",
    openGraph: {
      title: currentMetadata.title,
      description: currentMetadata.description,
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
