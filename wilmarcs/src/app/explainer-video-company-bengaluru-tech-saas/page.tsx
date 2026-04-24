import type { Metadata } from "next";
import ExplainerVideoCompany from "@/components/pages/SEO/ExplainerVideoCompany";

export const metadata: Metadata = {
  title: "Explainer Video Company in Bengaluru for Tech & SaaS | Wilmarcs",
  description: "Clear explainer videos for SaaS and tech products in Bengaluru. Turn complex platforms into simple stories that drive signups and sales. Book your explainer today.",
  keywords: ["explainer video company Bengaluru", "SaaS explainer videos", "tech product videos Bangalore", "animated explainer videos Bengaluru", "SaaS marketing videos"],
  openGraph: {
    title: "Explainer Video Company in Bengaluru for Tech & SaaS | Wilmarcs",
    description: "Wilmarcs specializes in turning complex software, platforms, and digital products into clear, compelling video content. Top-rated explainer video company in Bengaluru.",
    type: "website",
    url: "https://wilmarcs.com/explainer-video-company-bengaluru-tech-saas",
  },
};

export default function Page() {
  return <ExplainerVideoCompany />;
}
