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
  return ["about-our-team", "blog", "book-a-call", "industries-we-serve", "video-production-portfolio", "video-production-services"].map((slug) => ({ slug }));
}
export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const seo = slug ? await getSeo(slug) : null;

  const metadataMap: Record<string, { title: string; description: string }> = {
    "about-our-team": {
      title: "About Wilmarcs Motion Pictures | Global Corporate Film Experts",
      description: "From Bangalore to a global studio, Wilmarcs delivers brand, CSR, and NGO films that move audiences and stakeholders. Contact us to plan your next story",
    },
    "video-production-services": {
      title: "Corporate, CSR & Brand Film Production Services in India | Wilmarcs",
      description: "Explore Wilmarcs’ corporate films, animation, and post‑production services one partner from brief to final delivery. Enquire now to start your next project",
    },
    "video-production-portfolio": {
      title: "Video Production Portfolio & Case Studies | Wilmarcs Films",
      description: "Discover cinematic brand films, CSR videos, and commercials by Wilmarcs in our curated portfolio. View our best work and start your next project today.",
    },
    "industries-we-serve": {
      title: "Corporate Video Production for Industries in India | Wilmarcs",
      description: "Wilmarcs crafts industry‑specific films for travel, tech, healthcare, fintech, education, and more blending strategy with storytelling. Connect with our team today.",
    },
    "book-a-call": {
      title: "Contact Wilmarcs | Start Your Corporate Video Project Today",
      description: "Turn your story into a cinematic film with Wilmarcs. Share your brief for expert producer guidance and clear next steps. Request a call with our team today.",
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
    case "about-our-team":
      return <AboutUs />;

    case "blog":
      const blogs = await getBlog(0);
      return <Blog data={blogs?.data ?? []} />;

    case "book-a-call":
      return <Contact />;

    case "industries-we-serve":
      return <Industries />;

    case "video-production-portfolio":
      const portfolio = await getPortfolio(0);
      return <Portfolio data={portfolio?.data ?? []} />;

    case "video-production-services":
      const services = await getServices(0);
      return <Services data={services?.data ?? []} />;


    default:
      return <NotFound />;
  }
}
