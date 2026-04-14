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
      <section className="lg:pt-64 md:pt-52 sm:pt-44 pt-36 md:pb-20 sm:pb-16 pb-10 bg-black relative lg:min-h-[91vh] flex items-center justify-center">
        <div className="mx-auto px-4 text-center">
          <h1 className="2xl:text-6xl xl:text-4xl md:text-3xl text-2xl font-normal leading-snug text-white sm:mb-8 mb-4">
            <span className="block italic font-light opacity-90">Cinemagic:</span> <strong>Secrets</strong> of Production
          </h1>
          <p className="max-w-md mx-auto text-neutral-400 lg:text-xl md:text-lg text-base leading-relaxed">Unlock the magic behind the camera—discover the secrets that make every frame unforgettable.</p>
        </div>
      </section>
      <section className="sm:pt-20 pt-16 lg:pb-52 md:pb-44 sm:pb-36 pb-24 relative bg-[#111113] before:content-[''] before:absolute before:left-0 before:bottom-0 before:w-full before:h-full before:bg-gradient-to-t before:from-black before:from-20% before:to-60% before:via-45% before:via-transparent before:to-black before:z-1">
        <div className="max-w-7xl mx-auto relative z-1 px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-x-12 gap-y-20 xl:mb-64 lg:mb-52 md:mb-44 sm:mb-36 mb-24 transition-all duration-300">
            {Array.isArray(data) && data.map((item, i) => (
              <Link key={i} href={`/blog/${item.bid}`} className="group block">
                <div className="overflow-hidden rounded-2xl mb-6 relative">
                  <Image 
                    src={process.env.NEXT_PUBLIC_ASSET_URL + item.blimg} 
                    className="block w-full h-64 object-cover transform scale-100 group-hover:scale-110 transition-transform duration-500 ease-out" 
                    width={400} 
                    height={256} 
                    priority 
                    alt={item.bltitle} 
                  />
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-colors"></div>
                </div>
                <div className="px-2">
                  <h4 className="font-bold mb-3 text-xl leading-tight group-hover:text-red-500 transition-colors">
                    {item.bltitle}
                  </h4>
                  <p className="text-neutral-400 text-sm mb-6 line-clamp-3 font-light leading-relaxed">
                    {item.bexcerpt}
                  </p>
                  <div className="flex items-center justify-between mt-auto pt-4 border-t border-white/10 group-hover:border-red-500/50 transition-colors">
                    <span className="text-[12px] uppercase tracking-wider opacity-50 font-medium">{item.blog_date}</span>
                    <span className="text-red-500 text-xs font-bold flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                      Read More 
                      <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="currentColor" viewBox="0 0 16 16">
                        <path fillRule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8"/>
                      </svg>
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
          <div className="text-center">
            <a href="" className="grid gap-5">
              <span className="lg:text-2xl md:text-xl sm:text-lg">View all</span>
              <span className="grid -space-y-4 text-white text-center justify-center items-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="sm:w-8 w-6 opacity-50" fill="currentColor" viewBox="0 0 16 16"> <path fillRule="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708"/> </svg>
                <svg xmlns="http://www.w3.org/2000/svg" className="sm:w-8 w-6 opacity-75" fill="currentColor" viewBox="0 0 16 16"> <path fillRule="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708"/> </svg>
              </span>
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
