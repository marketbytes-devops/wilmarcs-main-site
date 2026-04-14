import { getServices } from "@/lib/data";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";

interface Service {
  stitle: string;
  sdesc: string;
  deliverables?: string;
  moreinfo?: string;
  addons?: string;
}

interface Category {
  cslug: string;
  cname: string;
  cdesc: string;
  cimg?: string;
  services: Service[];
}

interface PageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const servicesData = await getServices(0);
  const categories: Category[] = servicesData?.data ?? [];
  
  const category = categories.find((c) => c.cslug === slug);
  
  if (!category) {
    return { title: "Service | Wilmarcs" };
  }

  return {
    title: `${category.cname} | Wilmarcs Video Production`,
    description: category.cdesc || "Expert video production services tailored to your needs.",
  };
}

export default async function ServiceCategoryPage({ params }: PageProps) {
  const { slug } = await params;
  const servicesData = await getServices(0);
  const categories: Category[] = servicesData?.data ?? [];
  
  const category = categories.find((c) => c.cslug === slug);

  if (!category) {
    return notFound();
  }

  return (
    <div className="min-h-screen bg-black text-white pt-24">
      {/* Hero Section */}
      <section className="relative h-[50vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src={process.env.NEXT_PUBLIC_API_URL + (category.cimg || 'assets/web/services.jpg')}
            alt={category.cname}
            fill
            className="object-cover opacity-40"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent"></div>
        </div>
        <div className="container mx-auto px-4 relative z-10 text-center">
          <h1 className="text-4xl md:text-6xl font-extrabold mb-6 tracking-tight">{category.cname}</h1>
          <p className="text-xl text-neutral-300 max-w-2xl mx-auto leading-relaxed">{category.cdesc}</p>
        </div>
      </section>

      {/* Services List */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {category.services.map((service: Service, idx: number) => (
              <div key={idx} className="group p-8 rounded-3xl bg-neutral-900/50 border border-neutral-800 hover:border-red-600/50 transition-all duration-500">
                <div className="flex justify-between items-start mb-6">
                  <h3 className="text-2xl font-bold group-hover:text-red-500 transition-colors">{service.stitle}</h3>
                  <span className="text-red-600 font-mono text-xs opacity-50">0{idx + 1}</span>
                </div>
                <p className="text-neutral-400 mb-8 leading-relaxed">{service.sdesc}</p>
                
                {(service.deliverables || service.moreinfo) && (
                  <div className="space-y-6">
                    {service.deliverables && (
                      <div>
                        <h4 className="text-sm font-bold uppercase tracking-widest text-neutral-500 mb-3">Deliverables</h4>
                        <div className="text-sm text-neutral-300 space-y-2 slist" dangerouslySetInnerHTML={{ __html: service.deliverables }}></div>
                      </div>
                    )}
                    {service.addons && (
                      <div>
                        <h4 className="text-sm font-bold uppercase tracking-widest text-neutral-500 mb-3">Add-ons</h4>
                        <div className="text-sm text-neutral-300 space-y-2 slist" dangerouslySetInnerHTML={{ __html: service.addons }}></div>
                      </div>
                    )}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 border-t border-neutral-900">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-8">Ready to start your {category.cname} project?</h2>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/book-a-call" className="bg-white text-black px-10 py-4 rounded-full font-bold hover:bg-neutral-200 transition-all">
              Get Started
            </Link>
            <Link href="/video-production-portfolio" className="border border-neutral-700 text-white px-10 py-4 rounded-full font-bold hover:bg-neutral-900 transition-all">
              View Portfolio
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
