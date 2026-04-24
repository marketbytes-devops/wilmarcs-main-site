'use client';

import Image from "next/image";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import EnquiryModal from "@/components/EnquiryModal";

export default function ExplainerVideoCompany() {
  const [isEnquiryOpen, setIsEnquiryOpen] = useState(false);
  const [activeFaq, setActiveFaq] = useState<number | null>(0);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("in");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    const revealEls = document.querySelectorAll(".reveal");
    revealEls.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <>
      {/* Hero Section */}
      <section className="lg:mt-[76px] mt-[64px] relative overflow-hidden min-h-[65vh] flex items-center">
        <div className="absolute inset-0 -z-10">
          <Image 
            src="/images/seo/explainer-video/hero.png" 
            alt="Explainer Video Company in Bengaluru for Tech & SaaS" 
            fill 
            className="object-cover opacity-40"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/80 to-black"></div>
        </div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24 relative z-1 text-center">
          <div className="max-w-7xl mx-auto">
            <h1 className="reveal 2xl:text-6xl xl:text-5xl md:text-4xl text-3xl font-extrabold leading-tight tracking-tight text-white mb-6 uppercase">
              Explainer Video Company in <span className="text-red-600">Bengaluru</span> for Tech & SaaS — Wilmarcs Motion Pictures
            </h1>
            <p className="reveal mt-6 lg:text-xl md:text-lg text-base text-neutral-300 leading-relaxed max-w-4xl mx-auto font-medium">
              If your product is powerful but difficult to explain, the right explainer video changes everything. As a dedicated explainer video company in Bengaluru for Tech & SaaS, Wilmarcs Motion Pictures specializes in turning complex software, platforms, and digital products into clear, compelling video content that drives understanding and action.
            </p>
            <p className="reveal mt-4 md:text-lg text-base text-neutral-400 leading-relaxed max-w-4xl mx-auto">
              We have spent nearly a decade producing explainer videos for startups, scale-ups, and enterprise tech teams across Bengaluru and India. Whether you are launching a new SaaS product, onboarding users, or pitching to investors, we build videos that make your audience lean in not scroll past.
            </p>
            <p className="reveal mt-4 text-white font-bold text-lg italic">
                Got a product that&apos;s hard to explain? That&apos;s exactly what we do best.
            </p>
            <div className="reveal mt-10 flex flex-wrap gap-4 justify-center">
              <button 
                onClick={() => setIsEnquiryOpen(true)}
                className="rounded-full bg-white text-black font-bold px-10 py-4 hover:bg-neutral-200 transition-all flex items-center gap-2 group"
              >
                Book a Free Consultation 
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="group-hover:translate-x-1 transition-transform" viewBox="0 0 16 16">
                  <path fillRule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8"/>
                </svg>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Info Section */}
      <section className="py-24 bg-black border-y border-neutral-800">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <div className="reveal">
              <h2 className="2xl:text-4xl xl:text-3xl md:text-2xl text-xl font-bold tracking-tight text-white mb-6">What Is an Explainer Video — and Why Do Tech Companies Need One?</h2>
              <p className="text-neutral-300 text-lg leading-relaxed mb-6">
                An explainer video is a short, focused video — typically 60 to 180 seconds — that explains what a product or service does, how it works, and why it matters. For tech and SaaS companies, explainer videos solve one of the most persistent marketing challenges: communicating value quickly to a skeptical audience.
              </p>
              <div className="bg-neutral-900/50 border-l-4 border-red-600 p-6 mb-6">
                <p className="text-white font-medium italic">
                    Quick definition: An explainer video simplifies a complex product or concept into a clear visual narrative — using animation, live action, or a hybrid of both — so viewers understand and remember your core value proposition in under three minutes.
                </p>
              </div>
              <p className="text-neutral-400 text-base leading-relaxed mb-6">
                The best explainer videos do not just inform — they persuade. They reduce friction in the buyer journey, improve conversion rates on landing pages, and give your sales team a shareable asset that works around the clock.
              </p>
              
              <div className="mt-12">
                <h3 className="text-xl font-bold text-white mb-4">The specific challenge for Tech and SaaS brands in Bengaluru</h3>
                <p className="text-neutral-400 leading-relaxed mb-4">
                  Bengaluru is India&apos;s technology capital. The city produces world-class software, AI tools, cloud platforms, and FinTech products — but many of these products suffer from the same problem: they are genuinely hard to explain in words alone.
                </p>
                <p className="text-neutral-400 leading-relaxed">
                  Dashboards, APIs, workflow automation, data pipelines — these are abstract concepts that resist static description. A well-produced explainer video makes the invisible visible. It shows the product in motion, demonstrates the user journey, and answers the buyer&apos;s first question — &quot;what does this actually do?&quot; — in a format they will actually engage with.
                </p>
              </div>
            </div>
            <div className="relative aspect-[4/5] reveal group overflow-hidden rounded-3xl h-full w-full">
              <Image 
                src="/images/seo/explainer-video/saas-dashboard.png" 
                alt="SaaS Explainer Video Production" 
                fill 
                className="object-cover transition-transform duration-700 group-hover:scale-105 h-full w-full"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
              <div className="absolute bottom-10 left-10">
                <div className="chip font-bold bg-red-600 border-none text-white mb-3">TECH & SAAS SPECIALISTS</div>
                <div className="text-2xl font-bold text-white">Making the Invisible<br/>Visible.</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Formats Grid */}
      <section className="py-24 bg-[#0A0A0A]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mb-20 reveal mx-auto text-center">
            <h2 className="2xl:text-5xl xl:text-4xl md:text-3xl text-2xl font-black tracking-tight text-white mb-6">Explainer Video Formats We Produce for Tech & SaaS Companies</h2>
            <p className="text-neutral-400 text-lg">Not every product needs the same format. We help you choose the right approach based on your audience, message complexity, and distribution channel.</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { title: "2D Animated Explainer", desc: "Character-driven or icon-based animation. Ideal for abstract SaaS concepts, B2B platforms, and FinTech products where live action is impractical." },
              { title: "Live-Action + Motion Graphics", desc: "Real people with animated overlays. Best for products with a human element — healthcare tech, HR software, edtech platforms." },
              { title: "Screen Recording + Narration", desc: "Clean product walkthroughs with professional VO and motion graphics. Perfect for onboarding, help centres, and product demos." },
              { title: "3D Product Animation", desc: "Photorealistic 3D renders for hardware tech, IoT devices, and MedTech products that benefit from visual precision." },
              { title: "Whiteboard / Kinetic Type", desc: "Clean, fast-paced visual storytelling driven by typography and diagrams. Great for concept explainers and investor pitches." },
              { title: "AI-Assisted Hybrid", desc: "Our newest format — AI-generated storyboards and animatics accelerate production timelines for teams that need to move fast." }
            ].map((format, i) => (
              <div key={i} className="reveal group p-10 rounded-3xl bg-neutral-900/40 border border-neutral-800 hover:border-red-600/30 transition-all duration-300 flex flex-col justify-between">
                <div>
                  <h3 className="text-2xl font-bold text-white mb-6 leading-tight">{format.title}</h3>
                  <p className="text-neutral-400 leading-relaxed text-sm md:text-base">{format.desc}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-20 text-center reveal">
            <p className="text-neutral-300 mb-8 text-lg">Not sure which format fits your product? Share your brief and we&apos;ll recommend the best approach.</p>
            <button 
              onClick={() => setIsEnquiryOpen(true)}
              className="rounded-full bg-white text-black font-bold px-10 py-5 hover:bg-neutral-200 transition-all flex items-center gap-2 mx-auto"
            >
              Talk to a Video Strategist
            </button>
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="py-24 bg-black border-y border-neutral-800">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
           <div className="max-w-4xl mb-16 reveal mx-auto text-center">
            <h2 className="2xl:text-4xl xl:text-3xl md:text-2xl text-xl font-bold tracking-tight text-white mb-4">Use Cases — Where Tech & SaaS Companies Use Explainer Videos</h2>
            <p className="text-neutral-400">Great explainer videos work across the entire customer journey. Here is how our clients in Bengaluru&apos;s tech ecosystem put them to use.</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { t: "Product launch and landing page videos", d: "A well-placed explainer video on your homepage or product page can increase conversion rates significantly. We produce launch videos that communicate your core value proposition in 90 seconds or less — optimized for autoplay, sound-off viewing, and both desktop and mobile experiences." },
              { t: "Investor pitch and fundraising decks", d: "When you are raising a seed round, Series A, or Series B, investors see hundreds of pitches. A polished product explainer embedded in your deck makes your product tangible and memorable. We have produced pitch videos for Bengaluru-based startups backed by investors including Accel." },
              { t: "User onboarding and product education", d: "Reducing churn starts at onboarding. We produce step-by-step product walkthroughs and feature explainers that help new users activate faster — reducing support tickets and improving time-to-value for your customer success team." },
              { t: "Sales enablement and outbound", d: "Your sales team needs assets that work in cold outreach, follow-up sequences, and proposal decks. A crisp 60-second product explainer gives your reps a powerful tool that explains the product better than any email ever could." },
              { t: "Internal training and technical documentation", d: "As your platform evolves, your internal team needs to stay current. We produce technical training videos for engineering, sales, and customer success teams — clear, structured, and easy to update when your product changes." }
            ].map((usecase, i) => (
              <div key={i} className="reveal p-8 rounded-2xl bg-neutral-900/40 border border-neutral-800">
                <h3 className="text-xl font-bold text-white mb-4">{usecase.t}</h3>
                <p className="text-neutral-400 text-sm leading-relaxed">{usecase.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24 bg-[#0A0A0A]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mb-20 reveal mx-auto text-center">
            <h2 className="2xl:text-5xl xl:text-4xl md:text-3xl text-2xl font-black tracking-tight text-white mb-6">Why Tech & SaaS Companies in Bengaluru Choose Wilmarcs</h2>
            <p className="text-neutral-400 text-lg">There are many video production companies in Bengaluru, but very few understand the specific needs of technology products. Here is what makes us different.</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { title: "We understand tech — not just video", desc: "Our team has produced explainer videos for AI platforms, IoT devices, cloud infrastructure tools, FinTech APIs, and healthcare data systems. We do not need a week to understand what your product does." },
              { title: "Script-first, not style-first", desc: "Every project starts with a message architecture — identifying the core problem, the solution, and the proof — before a single frame is designed." },
              { title: "Built for Bengaluru's pace", desc: "Startup timelines do not accommodate six-week production cycles. Our modular process allows us to deliver a polished explainer video in as little as 10 business days for standard formats." },
              { title: "Proven results with tech clients", desc: "We have produced explainer and product videos for companies including CRED, Neuralzome, One Connect, and growth-stage SaaS teams across Bengaluru." }
            ].map((feature, i) => (
              <div key={i} className="reveal p-8 rounded-3xl bg-neutral-900/40 border border-neutral-800 hover:border-red-600/30 transition-all">
                <h3 className="text-xl font-bold text-white mb-4 leading-tight">{feature.title}</h3>
                <p className="text-neutral-400 text-sm leading-relaxed">{feature.desc}</p>
              </div>
            ))}
          </div>
          <div className="mt-20 text-center reveal">
            <p className="text-neutral-300 mb-8 text-lg">Ready to see what we&apos;d do with your product? Let&apos;s start with a 30-minute discovery call — no obligation.</p>
            <button 
              onClick={() => setIsEnquiryOpen(true)}
              className="rounded-full bg-white text-black font-bold px-10 py-5 hover:bg-neutral-200 transition-all flex items-center gap-2 mx-auto"
            >
              Book a Discovery Call
            </button>
          </div>
        </div>
      </section>

      {/* Process Section with Image */}
      <section className="py-24 bg-black border-y border-neutral-800">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
             <div className="relative aspect-video reveal overflow-hidden rounded-3xl">
              <Image 
                src="/images/seo/explainer-video/animation-studio.png" 
                alt="Explainer Video Production Process" 
                fill 
                className="object-cover"
              />
              <div className="absolute inset-0 bg-black/20"></div>
            </div>
            <div className="reveal">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">Our Explainer Video Production Process — From Brief to Launch</h2>
              <ul className="space-y-6">
                {[
                  "Discovery and message architecture — We map your audience, their pain points, your solution, and the single most important thing you want them to do",
                  "Script development — We write a tight, structured script optimized for spoken clarity and retention",
                  "Storyboard and style frames — Visual direction is approved before animation begins, so there are no costly mid-production pivots",
                  "Voiceover recording — Professional VO talent in your preferred accent, language, and tone",
                  "Animation and post-production — Full animation, sound design, music licensing, and color finishing",
                  "Delivery and versioning — Final file in all required formats plus cutdown versions for social and email"
                ].map((step, i) => (
                  <li key={i} className="flex gap-4 items-start">
                    <div className="w-6 h-6 rounded-full bg-red-600 text-white flex items-center justify-center shrink-0 mt-1 text-[10px] font-black">
                      {i + 1}
                    </div>
                    <span className="text-neutral-300 text-sm md:text-base">{step}</span>
                  </li>
                ))}
              </ul>
              <p className="mt-10 text-neutral-400 font-medium italic">
                Standard delivery: 3 to 4 weeks. Fast-track delivery: 10 to 14 business days. All projects include two structured review rounds.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Accordion */}
      <section className="py-24 bg-[#0A0A0A]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="2xl:text-4xl xl:text-3xl md:text-2xl text-xl font-bold tracking-tight text-white mb-12 reveal text-center">Frequently Asked Questions — Explainer Videos for Tech & SaaS in Bengaluru</h2>
          <div className="mx-auto space-y-4">
            {[
              { q: "What is an explainer video?", a: "A short video — usually 60 to 90 seconds — that explains what your product does, how it works, and why someone should use it. It simplifies complex ideas into a clear, visual story." },
              { q: "How much does a SaaS explainer video cost in Bengaluru?", a: "Prices range from ₹80,000 for a basic animated explainer to ₹4,00,000+ for a premium production with custom animation, voiceover, and music. We share a clear quote after your brief — no hidden costs." },
              { q: "What is the ideal length for a tech explainer video?", a: "60 to 90 seconds for a product or landing page video. 2 to 3 minutes for onboarding or feature walkthroughs. Keep it short—attention drops fast beyond 3 minutes." },
              { q: "Animation or live action — which is better for a SaaS product?", a: "Animation works best for software and SaaS because it can show dashboards, workflows, and data flows visually. Live action suits products where the human experience is central. Many of our top-performing videos use both." },
              { q: "How long does it take to deliver an explainer video?", a: "Standard delivery is 3 to 4 weeks. Fast-track is 10 to 14 business days. Both options include script, storyboard, animation, voiceover, and two review rounds." }
            ].map((faq, i) => (
              <div key={i} className="reveal border border-neutral-800 rounded-2xl overflow-hidden bg-neutral-900/20">
                <button 
                  onClick={() => setActiveFaq(activeFaq === i ? null : i)}
                  className="w-full px-8 py-6 flex items-center justify-between text-left hover:bg-neutral-800/30 transition-colors"
                >
                  <span className="text-lg font-bold text-white pr-8">{faq.q}</span>
                  <motion.span 
                    animate={{ rotate: activeFaq === i ? 180 : 0 }}
                    className="text-neutral-500 shrink-0"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </motion.span>
                </button>
                <AnimatePresence>
                  {activeFaq === i && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                    >
                      <div className="px-8 pb-8 text-neutral-400 leading-relaxed">
                        {faq.a}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Conclusion */}
      <section className="py-24 bg-black border-t border-neutral-800 text-center">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="reveal max-w-4xl mx-auto">
                <p className="text-neutral-300 text-xl leading-relaxed mb-10">
                    If your product deserves to be understood—and every great tech product does—Wilmarcs is the explainer video company in Bengaluru for Tech & SaaS that knows how to tell that story. Clearly, quickly, and in a way your audience will remember. Let&apos;s build something that works as hard as your product does.
                </p>
                <button 
                  onClick={() => setIsEnquiryOpen(true)}
                  className="rounded-full bg-red-600 text-white font-bold px-12 py-5 hover:bg-red-700 transition-all uppercase tracking-tighter"
                >
                  Get Started Today
                </button>
            </div>
        </div>
      </section>

      <EnquiryModal isOpen={isEnquiryOpen} onClose={() => setIsEnquiryOpen(false)} />
    </>
  );
}
