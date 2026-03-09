import industries from "@/data/industries.json";
import { BASE_URL } from "@/lib/constants";
import ContactForm from "./ContactForm";
import type { Metadata } from "next";
import { getSeo } from "@/lib/seo";

export async function generateStaticParams() {
  return Object.keys(industries).map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const seo = await getSeo(slug);
  return {
    title: seo?.data?.seotitle ?? "Wilmarcs UAE",
    description: seo?.data?.seodesc ?? "Motion Pictures",
    keywords: seo?.data?.seokeywords ?? "",
    openGraph: {
      title: seo?.data?.seotitle,
      description: seo?.data?.seodesc,
      type: "website",
    },
  };
}

export default async function IndustryPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const cfg = industries[slug as keyof typeof industries];

  if (!cfg)
    return (
      <div className="min-h-screen flex items-center justify-center text-gray-400">
        Industry not found
      </div>
    );
    
  const { hero, madeFor, kpis, services, useCases, process, pricing, addons, testimonials, faq, contact } = cfg;

  return (
    <>
      {/* HERO */}
      <section className="mt-24 lg:py-24 md:py-18 pt-6 pb-10 container mx-auto px-4 sm:px-6 lg:px-8">
        <span className="uppercase text-sm text-gray-400">{hero.tag}</span>
        <h1 className="2xl:text-5xl xl:text-4xl md:text-3xl text-2xl font-extrabold mt-4">{hero.headline}</h1>
        <p className="text-gray-400 mt-4">{hero.subhead}</p>
        <div className="flex justify-start flex-wrap gap-3 mt-8">
          <a className="bg-white text-black px-5 py-2 rounded-lg hover:opacity-90" href={hero.cta.primary.href}>{hero.cta.primary.label}</a>
          <a className="border border-gray-700 px-5 py-2 rounded-lg" href={`${BASE_URL}portfolio`}>{hero.cta.secondary.label}</a>
        </div>
        <div className="flex justify-start flex-wrap gap-2 mt-6">
          {hero.chips.map((chip, i) => (
            <span key={i} className="border border-gray-700 text-gray-400 rounded-full px-4 py-1">{chip}</span>
          ))}
        </div>
      </section>

      {/* PROOF */}
      {/* <section className="border-y border-gray-800 py-10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-sm text-gray-400 mb-3" style={{ marginBottom: 10 }}>{proof.title}</div>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-3">
            {proof.logos.map((logo, i) => (
              <div key={i} className="border border-gray-800 rounded-lg p-3 text-gray-400 text-sm">{logo}</div>
            ))}
          </div>
        </div>
      </section> */}

      {/* MADE FOR */}
      <div className="border-t border-gray-800"></div>
      <section className="container mx-auto px-4 sm:px-6 lg:px-8 md:py-16 py-10" id="madefor">
        <h2 className="lg:text-3xl md:text-2xl text-xl font-bold mb-2">{madeFor.title}</h2>
        <p className="text-gray-400 mb-8">{madeFor.lead}</p>
        <div className="grid md:grid-cols-3 gap-6">
          {madeFor.cards.map((card, i) => (
            <div key={i} className="bg-[#111113] border border-gray-800 rounded-xl p-5">
              <h3 className="font-semibold mb-2">{card.title}</h3>
              <p className="text-gray-400 text-sm">{card.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* KPIs */}
      <section className="md:py-16 py-10 border-t border-gray-800" id="kpis">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="lg:text-3xl md:text-2xl text-xl font-bold sm:mb-6 mb-4">{kpis.title}</h2>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-3">
            {kpis.metrics.map((m, i) => (
              <div key={i} className="border border-gray-800 bg-[#0f0f11] rounded-xl text-center py-5">
                <div className="sm:text-sm text-xs text-gray-400">{m.label}</div>
                <div className="font-semibold md:text-lg sm:text-base text-sm font-inter">{m.value}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="container mx-auto px-4 sm:px-6 lg:px-8 md:py-16 pt-4 pb-10" id="services">
        <h2 className="lg:text-3xl md:text-2xl text-xl font-bold mb-2">{services.title}</h2>
        <p className="text-gray-400 sm:mb-8 mb-4">{services.lead}</p>
        <div className="grid md:grid-cols-3 gap-6">
          {services.packages.map((pkg, i) => (
            <div key={i} className="bg-[#111113] border border-gray-800 rounded-xl p-5">
              <h3 className="font-semibold mb-2">{pkg.title}</h3>
              <div className="text-sm text-gray-300 mb-2">Deliverables</div>
              <ul className="list-disc list-inside text-gray-300 text-sm mb-2">
                {pkg.deliverables.map((d, j) => (
                  <li key={j}>{d}</li>
                ))}
              </ul>
              <div className="text-xs text-gray-400" style={{ marginTop: 10 }}>
                Typical timeline: {pkg.timeline}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* USE CASES */}
      <section className="md:py-16 py-10 border-t border-gray-800" id="usecases">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="lg:text-3xl md:text-2xl text-xl font-bold mb-2">{useCases.title}</h2>
          <p className="text-gray-400 mb-8">{useCases.lead}</p>
          <div className="grid md:grid-cols-3 gap-6">
            {useCases.cases.map((c, i) => (
              <div key={i} className="bg-[#111113] border border-gray-800 rounded-xl p-5 font-semibold md:text-lg sm:text-base text-sm"><h3>{c}</h3></div>
            ))}
          </div>
        </div>
      </section>

      {/* REEL */}
      {/* <section className="md:pb-16 pb-10 container mx-auto px-4 sm:px-6 lg:px-8" id="reel">
        <h2 className="lg:text-3xl md:text-2xl text-xl font-bold mb-2">{reel.title}</h2>
        <p className="text-gray-400 mb-8">{reel.lead}</p>
        <div className="grid md:grid-cols-3 gap-6">
          {reel.thumbnails.map((t, i) => (
            <div key={i} className="bg-[#111113] border border-gray-800 rounded-xl p-5 sm:text-base text-sm">{t}</div>
          ))}
        </div>
      </section> */}

      {/* PROCESS */}
      <section className="md:py-16 py-10 border-t border-gray-800" id="process">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="lg:text-3xl md:text-2xl text-xl font-bold sm:mb-6 mb-4">{process.title}</h2>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-3">
            {process.steps.map((s, i) => (
              <div key={i} className="border border-gray-800 bg-[#0f0f11] rounded-xl p-5">
                {/* <div className="text-base font-bold text-gray-200">{i + 1}</div> */}
                <div className="text-sm text-gray-400">{s}</div>
              </div>
            ))}
          </div>
          {/* <div className="border-t my-8 border-gray-800"></div>
          <div className="grid md:grid-cols-2 gap-6">
            {process.highlights.map((h, i) => (
              <div key={i} className="bg-[#111113] border border-gray-800 rounded-xl p-5">
                <h3 className="font-semibold mb-2">{h.title}</h3>
                <p className="text-gray-400 text-sm">{h.description}</p>
              </div>
            ))}
          </div> */}
        </div>
      </section>

      {/* PRICING */}
      <section className="md:py-16 py-10 border-t border-gray-800" id="pricing">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="lg:text-3xl md:text-2xl text-xl font-bold mb-2">{pricing.title}</h2>
          <p className="text-gray-400 sm:mb-8 mb-4">{pricing.lead}</p>
          <div className="grid md:grid-cols-2 gap-6">
            {pricing.plans.map((p, i) => (
              <div key={i} className="bg-[#0f0f11] border border-gray-800 rounded-2xl p-6">
                <div className="text-sm text-gray-400 mb-1">{p.name}</div>
                <div className="lg:text-3xl md:text-2xl text-xl font-bold mb-3">{p.price} <small className="font-normal">per project</small></div>
                <ul className="list-disc list-inside text-gray-400 text-sm">
                  {p.details.map((d, j) => (
                    <li key={j}>{d}</li>
                  ))}
                </ul>
                <div className="flex flex-wrap gap-3 mt-5">
                  <a className="bg-white text-black px-5 py-2 rounded-lg hover:opacity-90" href="#contact">{p.cta}</a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ADDONS */}
      <section className="md:py-16 py-10 border-t border-gray-800" id="addons">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="lg:text-3xl md:text-2xl text-xl font-bold sm:mb-6 mb-4">{addons.title}</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {addons.items.map((a, i) => (
              <div key={i} className="bg-[#111113] border border-gray-800 rounded-xl p-5">
                <h3 className="font-semibold mb-2">{a.title}</h3>
                <p className="text-sm text-gray-400">{a.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="md:py-16 py-10 border-t border-gray-800" id="testimonials">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="lg:text-3xl md:text-2xl text-xl font-bold sm:mb-6 mb-4">{testimonials.title}</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {testimonials.quotes.map((q, i) => (
              <div key={i} className="bg-[#111113] border border-gray-800 rounded-xl p-5">
                <p className="md:text-lg sm:text-base text-sm mb-2">{q.text}</p>
                <div className="sm:text-sm text-xs text-gray-400">— {q.author}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="md:py-16 py-10 border-t border-gray-800" id="faq">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="lg:text-3xl md:text-2xl text-xl font-bold sm:mb-6 mb-4">{faq.title}</h2>
          <div>
            {faq.items.map((item, i) => (
              <details key={i} className="border border-gray-800 bg-[#0f0f11] rounded-lg p-4 mb-3 group">
                <summary className="font-semibold cursor-pointer"><i className="bi bi-caret-right-fill transition-all arrow"></i> {item.question}</summary>
                <div className="text-gray-400 text-sm mt-2">{item.answer}</div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section className="md:py-16 py-10 border-t border-gray-800" id="contact">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="lg:text-3xl md:text-2xl text-xl font-bold mb-2">{contact.title}</h2>
          <p className="text-gray-400 sm:mb-8 mb-4">{contact.lead}</p>
          <div className="bg-[#111113] border border-gray-800 rounded-xl p-6">
            <ContactForm hero={hero} contact={contact} />
          </div>
        </div>
      </section>
    </>
  );
}
