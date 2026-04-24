import type { Metadata } from "next";
import EventVideoServices from "@/components/pages/SEO/EventVideoServices";

export const metadata: Metadata = {
  title: "Event Video Production Services in Bengaluru | Wilmarcs",
  description: "Wilmarcs delivers professional event video production in Bengaluru. Aftermovies, conference coverage, hybrid events & social clips. Book your event crew today.",
  keywords: ["event video production Bengaluru", "conference video coverage Bangalore", "corporate event videography", "hybrid event production Bengaluru", "event aftermovie production"],
  openGraph: {
    title: "Event Video Production Services in Bengaluru | Wilmarcs",
    description: "Every corporate event tells a story. We deliver professional event video production in Bengaluru that preserves the energy and message of your event.",
    type: "website",
    url: "https://wilmarcs.com/event-video-production-services-bengaluru",
  },
};

export default function Page() {
  return <EventVideoServices />;
}
