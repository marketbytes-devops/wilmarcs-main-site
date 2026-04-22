import type { Metadata } from "next";
import BengaluruAgency from "@/components/pages/SEO/BengaluruAgency";

export const metadata: Metadata = {
  title: "Corporate Video Production Agency in Bengaluru — Wilmarcs Motion Pictures",
  description: "Wilmarcs is a premier corporate video production agency in Bengaluru, crafting cinematic brand films, CSR documentaries, and animations since 2016. Trusted by Google, Samsung, and Akshaya Patra. Request a quote.",
  keywords: ["corporate video production agency in Bengaluru", "video production company Bangalore", "brand films Bangalore", "CSR video production India", "commercial filmmakers Bengaluru"],
  openGraph: {
    title: "Corporate Video Production Agency in Bengaluru — Wilmarcs Motion Pictures",
    description: "Cinematic storytellers for brands, tech enterprises, and NGOs in Bengaluru. High-quality production with fast turnaround. Contact us for your next project.",
    type: "website",
    url: "https://wilmarcs.com/corporate-video-production-agency-in-bengaluru",
  },
};

export default function Page() {
  return <BengaluruAgency />;
}
