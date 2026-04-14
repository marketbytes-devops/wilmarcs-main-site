import Blog from "@/components/pages/Blog";
import { blogData } from "@/data/blogData";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog | Wilmarcs Motion Pictures",
  description: "Insights, secrets, and stories from the world of cinematic production. Learn how we make magic behind the camera.",
};

export default function BlogPage() {
  return <Blog data={blogData} />;
}
