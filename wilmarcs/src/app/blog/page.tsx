import Blog from "@/components/pages/Blog";
import { getBlog } from "@/lib/data";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog | Wilmarcs Motion Pictures",
  description: "Insights, secrets, and stories from the world of cinematic production. Learn how we make magic behind the camera.",
};

export default async function BlogPage() {
  const blogs = await getBlog(0);
  return <Blog data={blogs?.data ?? []} />;
}
