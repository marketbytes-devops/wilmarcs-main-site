import { getBlog } from "@/lib/data";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";

interface PageProps {
  params: Promise<{
    id: string;
  }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { id } = await params;
  const blog = await getBlog(Number(id));
  const data = blog?.data;

  return {
    title: data?.seotitle ?? data?.bltitle ?? "Blog Post | Wilmarcs",
    description: data?.seodesc ?? data?.bexcerpt ?? "Read the latest from Wilmarcs Motion Pictures.",
    keywords: data?.seokeywords ?? "",
  };
}

export default async function BlogPostPage({ params }: PageProps) {
  const { id } = await params;
  const blog = await getBlog(Number(id));
  
  if (!blog || !blog.status || !blog.data) {
    return notFound();
  }

  const data = blog.data;

  return (
    <article className="min-h-screen bg-[#0a0a0b] text-white">
      {/* Hero Section */}
      <section className="relative w-full h-[60vh] md:h-[70vh] flex items-end">
        <div className="absolute inset-0 z-0">
          <Image
            src={process.env.NEXT_PUBLIC_ASSET_URL + data.blimg}
            alt={data.bltitle}
            fill
            className="object-cover opacity-60"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0b] via-transparent to-transparent"></div>
        </div>
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 pb-12 md:pb-20">
          <Link href="/blog" className="inline-flex items-center gap-2 text-sm text-neutral-400 hover:text-white mb-6 transition-colors">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
              <path fillRule="evenodd" d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8"/>
            </svg>
            Back to Blog
          </Link>
          <div className="max-w-4xl">
            <span className="inline-block px-3 py-1 rounded-full bg-red-600 text-[10px] uppercase tracking-widest font-bold mb-4">
              {data.cname}
            </span>
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-extrabold leading-tight mb-6">
              {data.bltitle}
            </h1>
            <div className="flex items-center gap-4 text-neutral-400 text-sm">
              <span className="font-medium text-white">Wilmarcs Team</span>
              <span>•</span>
              <span>{data.blog_date}</span>
            </div>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-12 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            {/* Excerpt/Intro */}
            <p className="text-xl md:text-2xl text-neutral-300 font-light leading-relaxed mb-12 italic border-l-4 border-red-600 pl-6">
              {data.bexcerpt}
            </p>

            {/* Main Content */}
            <div 
              className="prose prose-invert prose-red max-w-none 
                prose-headings:font-bold prose-headings:tracking-tight 
                prose-p:text-neutral-300 prose-p:leading-loose prose-p:text-lg
                prose-img:rounded-3xl prose-a:text-red-500 hover:prose-a:text-red-400 transition-colors"
              dangerouslySetInnerHTML={{ __html: data.bldesc }}
            />

            {/* Tags area if any */}
            {data.btags && (
              <div className="mt-16 pt-8 border-t border-white/10">
                <div className="flex flex-wrap gap-2">
                  {data.btags.split(',').map((tag: string, i: number) => (
                    <span key={i} className="px-3 py-1 rounded-full bg-neutral-900 border border-neutral-800 text-xs text-neutral-400">
                      #{tag.trim()}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Footer CTA */}
      <section className="py-20 bg-[#111113] border-t border-white/5">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Inspired by this story?</h2>
          <p className="text-neutral-400 mb-8 max-w-xl mx-auto">Let's create something equally unforgettable for your brand.</p>
          <Link 
            href="/book-a-call" 
            className="inline-flex items-center gap-2 bg-white text-black px-8 py-4 rounded-full font-bold hover:bg-neutral-200 transition-all"
          >
            Start Your Project
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" viewBox="0 0 16 16">
              <path fillRule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8"/>
            </svg>
          </Link>
        </div>
      </section>
    </article>
  );
}
