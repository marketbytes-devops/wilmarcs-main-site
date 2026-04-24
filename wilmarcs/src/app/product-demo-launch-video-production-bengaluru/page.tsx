import type { Metadata } from "next";
import ProductLaunchVideo from "@/components/pages/SEO/ProductLaunchVideo";

export const metadata: Metadata = {
  title: "Product Demo & Launch Video Production Bengaluru | Wilmarcs",
  description: "Wilmarcs produces product demo & launch videos in Bengaluru. SaaS demos, app reveals, 3D product films & launch teasers. Fast delivery. Book a call today.",
  keywords: ["product demo video Bengaluru", "launch video production Bangalore", "SaaS demo videos", "app launch videos Bengaluru", "3D product films Bangalore"],
  openGraph: {
    title: "Product Demo & Launch Video Production Bengaluru | Wilmarcs",
    description: "Your product launch gets one chance to make a first impression. We specialize in high-impact product demo and launch video production in Bengaluru.",
    type: "website",
    url: "https://wilmarcs.com/product-demo-launch-video-production-bengaluru",
  },
};

export default function Page() {
  return <ProductLaunchVideo />;
}
