import { blogData } from "@/data/blogData";
import Image from "next/image";
import Link from "next/link";
import BlogFooterCTA from "@/components/BlogFooterCTA";
import { notFound } from "next/navigation";
import type { Metadata } from "next";

interface PageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  return blogData.map((blog) => ({
    slug: blog.blslug,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const data = blogData.find((b) => b.blslug === slug);

  return {
    title: data?.seotitle ?? data?.bltitle ?? "Blog Post | Wilmarcs",
    description: data?.seodesc ?? data?.bexcerpt ?? "Read the latest from Wilmarcs Motion Pictures.",
    keywords: data?.seokeywords ?? "",
  };
}

export default async function BlogPostPage({ params }: PageProps) {
  const { slug } = await params;
  const data = blogData.find((b) => b.blslug === slug);

  if (!data) {
    return notFound();
  }

  return (
    <article className="min-h-screen bg-[#0a0a0b] text-white">
      {/* Hero Section */}
      <section className="relative w-full min-h-[75vh] flex items-center justify-center text-center pt-32 pb-20">
        <div className="absolute inset-0 z-0">
          <Image
            src={data.blimg}
            alt={data.bltitle}
            fill
            className="object-cover opacity-40"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0b]/80 via-[#0a0a0b]/40 to-[#0a0a0b]"></div>
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-7xl mx-auto flex flex-col items-center justify-center gap-8">
            <div className="flex flex-col items-center gap-6 mb-8">
              <Link
                href="/blog"
                className="inline-flex items-center gap-2 text-white/40 hover:text-red-500 mb-6 transition-colors uppercase tracking-widest text-[10px] font-bold bg-white/5 px-5 py-2 rounded-full backdrop-blur-sm border border-white/10 group/back"
              >
                <i className="bi bi-arrow-left group-hover/back:-translate-x-1 transition-transform"></i> back to insights
              </Link>
              <span className="px-4 py-1.5 rounded-full bg-red-600/10 text-red-500 border border-red-600/20 text-[10px] sm:text-xs uppercase tracking-[0.3em] font-extrabold backdrop-blur-sm">
                {data.cname}
              </span>
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold leading-[1.1] tracking-tighter text-white">
                {data.bltitle}
              </h1>
            </div>

            <div className="flex items-center justify-center gap-8 text-neutral-400 text-xs sm:text-sm uppercase tracking-widest font-bold">
              <div className="flex items-center gap-3">
                <span className="text-white/90">Wilmarcs Team</span>
              </div>
              <span className="w-1.5 h-1.5 rounded-full bg-neutral-700"></span>
              <span className="tabular-nums">{data.blog_date}</span>
            </div>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="pb-24 lg:pb-32 -mt-10 relative z-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-full mx-auto bg-[#0d0d0f] border border-white/5 rounded-[2.5rem] p-8 md:p-16 lg:p-20 shadow-2xl shadow-black/50">
            {/* Main Content */}
            <div
              className="prose prose-invert prose-red max-w-none 
                prose-h2:text-4xl md:prose-h2:text-5xl lg:prose-h2:text-6xl prose-h2:font-black prose-h2:text-white prose-h2:mt-24 prose-h2:mb-12 prose-h2:leading-[1.1] prose-h2:tracking-tighter
                prose-h3:text-2xl md:prose-h3:text-3xl prose-h3:font-extrabold prose-h3:text-red-500 prose-h3:mt-16 prose-h3:mb-8 prose-h3:tracking-tight
                prose-p:text-neutral-400 prose-p:text-lg md:prose-p:text-xl md:prose-p:leading-[1.8] prose-p:mb-10 prose-p:font-light
                prose-ul:list-none prose-ul:pl-0 prose-ul:mb-12
                prose-li:relative prose-li:pl-8 prose-li:text-neutral-400 prose-li:text-lg md:prose-li:text-xl prose-li:mb-5
                prose-li:before:content-[''] prose-li:before:absolute prose-li:before:left-0 prose-li:before:top-2/5 prose-li:before:w-2 prose-li:before:h-2 prose-li:before:bg-red-600 prose-li:before:rounded-full
                prose-strong:text-white prose-strong:font-bold
                prose-img:rounded-[2.5rem] prose-img:shadow-2xl prose-img:shadow-black
                prose-a:text-red-600 prose-a:no-underline hover:prose-a:text-red-500 transition-colors"
              dangerouslySetInnerHTML={{ __html: data.bldesc }}
            />
          </div>
        </div>
      </section>

      {/* Footer CTA */}
      <section className="py-24 md:py-32 bg-black relative overflow-hidden">
        <BlogFooterCTA />
      </section>
    </article>
  );
}
