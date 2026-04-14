'use client';
import Image from "next/image";
import Link from "next/link";

type Blogs = {
  cname: string;
  cdesc: string;
  cslug: string;
  bid: string;
  fkcid: string;
  bltitle: string;
  blimg: string;
  bldesc: string;
  bldt: string;
  blslug: string;
  bexcerpt: string;
  btags: string;
  seotitle: string;
  seodesc: string;
  seokeywords: string;
  blog_date: string;
};

export default function Blogs({ data }: { data: Blogs[] }) {
  return (
    <>
      {/* Blog Hero Section */}
      <section className="lg:pt-64 md:pt-52 sm:pt-44 pt-36 md:pb-20 sm:pb-16 pb-10 bg-black relative lg:min-h-[70vh] flex items-center justify-center overflow-hidden">
        {/* Decorative background elements */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-red-600/10 via-transparent to-transparent blur-3xl opacity-50 z-0"></div>
        
        <div className="mx-auto px-4 text-center relative z-10">
          <div className="inline-block px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-white/60 text-[10px] uppercase tracking-widest font-bold mb-6 backdrop-blur-sm">
            Insights & Stories
          </div>
          <h1 className="2xl:text-7xl xl:text-5xl md:text-4xl text-3xl font-bold leading-tight text-white sm:mb-8 mb-4 tracking-tighter">
            Cinemagic <span className="text-red-600 italic font-light serif">&</span> Production Secrets
          </h1>
          <p className="max-w-2xl mx-auto text-neutral-400 lg:text-xl md:text-lg text-base leading-relaxed font-light">
            Unlock the magic behind the camera—discover the insights, techniques, and stories that make every frame unforgettable.
          </p>
        </div>
      </section>

      {/* Blog Cards Section */}
      <section className="sm:pt-24 pt-16 lg:pb-32 md:pb-24 sm:pb-20 pb-16 relative bg-[#0a0a0b]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-x-10 gap-y-16">
            {Array.isArray(data) && data.map((item, i) => (
              <Link key={i} href={`/blog/${item.blslug}`} className="group flex flex-col h-full">
                <div className="overflow-hidden rounded-2xl mb-8 relative aspect-[16/10] bg-neutral-900 border border-white/5">
                  <Image 
                    src={item.blimg} 
                    className="block w-full h-full object-cover transform scale-100 group-hover:scale-105 transition-transform duration-700 ease-out grayscale-[0.2] group-hover:grayscale-0" 
                    width={500} 
                    height={350} 
                    priority={i < 3} 
                    alt={item.bltitle} 
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity"></div>
                  
                  {/* Category Tag on Image */}
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 rounded-full bg-black/40 backdrop-blur-md border border-white/10 text-[10px] text-white/80 uppercase tracking-widest font-semibold">
                      {item.cname}
                    </span>
                  </div>
                </div>
                
                <div className="flex flex-col flex-grow">
                  <h3 className="font-bold mb-4 text-2xl leading-tight text-neutral-100 group-hover:text-red-500 transition-colors tracking-tight">
                    {item.bltitle}
                  </h3>
                  <p className="text-neutral-400 text-base mb-8 line-clamp-3 font-light leading-relaxed">
                    {item.bexcerpt}
                  </p>
                  
                  <div className="mt-auto flex items-center justify-between pt-6 border-t border-white/5 group-hover:border-red-500/20 transition-colors">
                    <span className="text-[11px] uppercase tracking-[0.2em] text-neutral-500 font-bold">{item.blog_date}</span>
                    <span className="text-red-500 text-xs font-black uppercase tracking-widest flex items-center gap-2 group-hover:translate-x-1 transition-transform">
                      Read story 
                      <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24" className="stroke-red-500">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                      </svg>
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
          
          {/* Pagination or Load More (Placeholder) */}
          <div className="mt-24 pt-16 border-t border-white/5 text-center">
            <button className="group relative inline-flex flex-col items-center gap-4 text-white/40 hover:text-white transition-colors">
              <span className="text-sm font-bold uppercase tracking-[0.3em]">Discover More</span>
              <div className="flex flex-col -space-y-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 animate-bounce" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                </svg>
              </div>
            </button>
          </div>
        </div>
      </section>
    </>
  );
}
