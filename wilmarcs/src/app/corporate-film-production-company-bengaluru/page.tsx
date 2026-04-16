import type { Metadata } from "next";
import CorporateFilmCompany from "@/components/pages/SEO/CorporateFilmCompany";

export const metadata: Metadata = {
  title: "Corporate Film Production Company in Bengaluru | Wilmarcs",
  description: "Wilmarcs is Bengaluru's trusted corporate film production company. Leadership films, CSR docs, employer brand & more. Director-led. Book a call today.",
  keywords: ["corporate film production company in Bengaluru", "corporate filmmakers Bangalore", "leadership films Bengaluru", "CSR filmmaking India", "company culture videos Bangalore"],
  openGraph: {
    title: "Corporate Film Production Company in Bengaluru | Wilmarcs",
    description: "Cinematic corporate film production in Bengaluru. We specialize in leadership films, CSR documentaries, and employer brand stories. Fast turnaround, premium quality.",
    type: "website",
    url: "https://wilmarcs.com/corporate-film-production-company-bengaluru",
  },
};

export default function Page() {
  return <CorporateFilmCompany />;
}
