'use client';
import { useEffect, useState } from "react";
const Z = [
  { key:'IN', el:'timeIN', tz:'Asia/Kolkata', badge:'badgeIN', tzEl:'tzIN', country: 'India', place: 'Bangalore', timezone: 'IST', address: 'Whitefield, Bengaluru, Karnataka 560048', phonelink: 'tel:+919066249992', phone: '+91 90662 49992', emaillink: 'mailto:kevin@wilmarcs.com', email: 'kevin@wilmarcs.com', maplink: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4783.6582260432715!2d77.7034729!3d12.992853799999997!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae15d1419ddb75%3A0xb6cd3152480c683e!2sWilmarcs%20Motion%20Pictures%20-%20Video%20Production%20Company%20Bangalore!5e1!3m2!1sen!2sin!4v1761111616311!5m2!1sen!2sin' },
  { key:'AE', el:'timeAE', tz:'Asia/Dubai', badge:'badgeAE', tzEl:'tzAE', country: 'United Arab Emirates', place: 'Dubai', timezone: 'GST', address: '600 California St, San Francisco, CA 94108', phonelink: 'tel:+14150000000', phone: '+1 415 000 0000', emaillink: 'mailto:ae@wilmarcs.com', email: 'ae@wilmarcs.com', maplink: 'https://www.google.com/maps?q=600+California+St+San+Francisco&output=embed' },
  { key:'AU', el:'timeAU', tz:'Australia/Sydney', badge:'badgeAU', tzEl:'tzAU', country: 'Australia', place: 'Sydney', timezone: 'AET', address: 'Level 2/11 York St, Sydney NSW 2000, Australia', phonelink: 'tel:+61280000000', phone: '+61 2 8000 0000', emaillink: 'mailto:kevin@wilmarcs.com', email: 'kevin@wilmarcs.com', maplink: 'https://www.google.com/maps?q=Level+2%2F11+York+St,+Sydney+NSW+2000,+Australia&output=embed' }
  // { key:'US', el:'timeUS', tz:'America/Los_Angeles', badge:'badgeUS', tzEl:'tzUS', country: 'USA', place: 'Francisco', timezone: 'PT', address: '600 California St, San Francisco, CA 94108', phonelink: 'tel:+14150000000', phone: '+1 415 000 0000', emaillink: 'mailto:us@wilmarcs.com', email: 'us@wilmarcs.com', maplink: 'https://www.google.com/maps?q=600+California+St+San+Francisco&output=embed' }
];
const REG = ['IN','AU','US','EU','SEA'];

export default function Contact() {
  const [times, setTimes] = useState<{ [key: string]: string }>({});
  const [dayState, setDayState] = useState<{ [key: string]: "day" | "night" }>({});
  const [visitors, setVisitors] = useState<number>(0);
  const [regions, setRegions] = useState<{ code: string; n: number }[]>([]);
  
  const [busLoading, setBusLoading] = useState(false);
  const [busMsg, setBusMsg] = useState<{type: "ok" | "err"; text: string} | null>(null);
  async function submitBusiness(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setBusMsg(null);
    setBusLoading(true);

    const form = e.currentTarget;
    const formData = new FormData(form);

    try {
      const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}enquiry`, {
        method: "POST",
        body: formData,
      });
      const data = await res.json();
      if (!res.ok || !data.ok) throw new Error(data.error || "Failed");
      setBusMsg({ type: "ok", text: "Sent ✅ We’ll get back you asap." });
      form.reset();
    } catch (err) {
      const message = err instanceof Error ? err.message : "Send failed. Please try again.";
      setBusMsg({ type: "err", text: message });
    } finally {
      setBusLoading(false);
    }
  }
  
  const [genLoading, setGenLoading] = useState(false);
  const [genMsg, setGenMsg] = useState<{type: "ok" | "err"; text: string} | null>(null);
  async function submitGeneral(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setGenMsg(null);
    setGenLoading(true);

    const form = e.currentTarget;
    const formData = new FormData(form);

    try {
      const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}enquiry`, {
        method: "POST",
        body: formData,
      });
      const data = await res.json();
      if (!res.ok || !data.ok) throw new Error(data.error || "Failed");
      setGenMsg({ type: "ok", text: "Sent ✅ We’ll get back you asap." });
      form.reset();
    } catch (err) {
      const message = err instanceof Error ? err.message : "Send failed. Please try again.";
      setGenMsg({ type: "err", text: message });
    } finally {
      setGenLoading(false);
    }
  }

  const [jobLoading, setJobLoading] = useState(false);
  const [jobMsg, setJobMsg] = useState<{type: "ok" | "err"; text: string} | null>(null);
  async function submitJobs(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setJobMsg(null);
    setJobLoading(true);

    const form = e.currentTarget;
    const formData = new FormData(form);

    try {
      const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}enquiry`, {
        method: "POST",
        body: formData,
      });
      const data = await res.json();
      if (!res.ok || !data.ok) throw new Error(data.error || "Failed");
      setJobMsg({ type: "ok", text: "Sent ✅ We’ll get back you asap." });
      form.reset();
    } catch (err) {
      const message = err instanceof Error ? err.message : "Send failed. Please try again.";
      setJobMsg({ type: "err", text: message });
    } finally {
      setJobLoading(false);
    }
  }
  useEffect(() => {
    function tick() {
      const now = new Date();
      const updatedTimes: { [key: string]: string } = {};
      const updatedDayState: { [key: string]: "day" | "night" } = {};
      Z.forEach((z) => {
        const fmt = new Intl.DateTimeFormat([], {
          hour: "2-digit",
          minute: "2-digit",
          hour12: false,
          timeZone: z.tz,
        });
        const hour = parseInt(
          new Intl.DateTimeFormat([], { hour: "2-digit", hour12: false, timeZone: z.tz }).format(now),
          10
        );
        updatedTimes[z.key] = fmt.format(now);
        updatedDayState[z.key] = hour >= 6 && hour < 18 ? "day" : "night";
      });
      setTimes(updatedTimes);
      setDayState(updatedDayState);
    }
    tick();
    const interval = setInterval(tick, 1000);
    return () => clearInterval(interval);
  }, []);
  useEffect(() => {
    function telemetry() {
      const v = Math.floor(15 + Math.random() * 35);
      setVisitors(v);
      const parts = REG.map((code) => ({
        code,
        n: Math.floor((Math.random() * v) / 2),
      }));
      setRegions(parts);
    }

    telemetry();
    const interval = setInterval(telemetry, 4000);
    return () => clearInterval(interval);
  }, []);
  
  return (
    <>
      <section className="mt-[76px] relative overflow-hidden">
        <div className="absolute -z-10 inset-0">
          <div className="absolute inset-0 bg-[radial-gradient(800px_300px_at_20%_-10%,rgba(229,9,20,.18),transparent_60%)]"></div>
          <div className="absolute inset-0 bg-[radial-gradient(600px_250px_at_100%_0%,rgba(0,229,255,.12),transparent_60%)]"></div>
        </div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-14 lg:py-20">
          <div className="max-w-3xl">
            <div className="flex items-center gap-2 text-neutral-400">
              <svg className="h-5 w-5 tech" viewBox="0 0 24 24" fill="currentColor"><path d="M3 6h10l2-2h6v2h-5.17l-2 2H3zM3 10h10l2-2h6v10H3z"/></svg>
              <span className="tracking-widest text-xs uppercase">Cinematic Studio · Multi-timezone</span>
            </div>
            <h1 className="mt-2 xl:text-6xl lg:text-5xl md:text-4xl sm:text-3xl text-2xl font-extrabold leading-tight tracking-tight">Contact Us</h1>
            <p className="lg:mt-3 mt-1 lg:text-lg text-base text-neutral-300">Three lanes. Live clocks. Maps. A scheduler that respects your time zone.</p>
            <div className="mt-5 flex flex-wrap gap-2">
              <span className="text-xs border border-neutral-800 rounded-full px-3 py-1 text-neutral-400">Avg first reply: <b className="text-neutral-200">under 1 business day</b></span>
              <span className="text-xs border border-neutral-800 rounded-full px-3 py-1 text-neutral-400">Proposal ETA: <b className="text-neutral-200">5 business days</b></span>
            </div>
          </div>
        </div>
      </section>

      <section id="lanes" className="lg:pb-14 pb-10 lg:pt-14 pt-0">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 md:gap-8">
            <div className="card-border rounded-2xl p-6 lift bg-neutral-900/40" id="rfp">
              <div className="uppercase text-xs tracking-widest text-gray-400">Business</div>
              <h2 className="lg:text-2xl text-xl font-bold mt-1">New Projects & RFPs</h2>
              <p className="text-neutral-300 mt-2 mini lg:text-base text-sm min-h-[72px]">Corporate & brand films, product/explainers, 2D/3D, social, or post. Attach a brief—we’ll come back with a plan.</p>
              <form className="mt-4 space-y-3" method="post" onSubmit={submitBusiness} encType="multipart/form-data">
                {busMsg && (<div className={`px-4 py-3 rounded-lg mt-2 text-sm ${busMsg.type === "ok" ? "text-emerald-600 bg-emerald-100" : "text-red-600 bg-red-100"}`}>{busMsg.text}</div>)}
                <input type="hidden" name="type" value="business"/>
                <input type="text" name="company1" className="hidden" autoComplete="off" tabIndex={-1} />
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  <input className="rounded-xl border border-neutral-800 bg-neutral-950 px-4 py-3" name="name" placeholder="Full name" required />
                  <input type="email" className="rounded-xl border border-neutral-800 bg-neutral-950 px-4 py-3" name="email" placeholder="Work email" required />
                </div>
                <input className="w-full rounded-xl border border-neutral-800 bg-neutral-950 px-4 py-3" name="company" placeholder="Company" />
                <div className="grid grid-cols-1 xl:grid-cols-3 lg:grid-cols-1 md:grid-cols-3 gap-3">
                  <select className="rounded-xl border border-neutral-800 bg-neutral-950 px-4 py-3" name="service" required>
                    <option value="">Service</option>
                    <option value="Corporate / Brand Film">Corporate / Brand Film</option>
                    <option value="Product Video">Product Video</option>
                    <option value="Explainer (2D/Hybrid)">Explainer (2D/Hybrid)</option>
                    <option value="3D Product Animation">3D Product Animation</option>
                    <option value="Reels / Sizzles">Reels / Sizzles</option>
                    <option value="Post-Production">Post-Production</option>
                  </select>
                  <select className="rounded-xl border border-neutral-800 bg-neutral-950 px-4 py-3" name="timeline" required>
                    <option value="">Timeline</option>
                    <option value="ASAP">ASAP</option>
                    <option value="2-4 weeks">2-4 weeks</option>
                    <option value="1-2 months">1-2 months</option>
                    <option value="Quarter">Quarter</option>
                  </select>
                  <select className="rounded-xl border border-neutral-800 bg-neutral-950 px-4 py-3" name="budget" required>
                    <option value="">Budget</option>
                    <option value="Under ₹2L / A$3k">Under ₹2L / A$3k</option>
                    <option value="₹2-5L / A$3-9k">₹2-5L / A$3-9k</option>
                    <option value="₹5-12L / A$9-22k">₹5-12L / A$9-22k</option>
                    <option value="₹12L+ / A$22k+">₹12L+ / A$22k+</option>
                  </select>
                </div>
                <textarea className="w-full rounded-xl border border-neutral-800 bg-neutral-950 px-4 py-3" name="brief" placeholder="What are you trying to achieve?" rows={3} required></textarea>
                <input type="file" className="w-full rounded-xl border border-neutral-800 bg-neutral-950 px-4 py-3" name="rfp" accept=".pdf,.ppt,.pptx,.doc,.docx" />
                <input type="text" name="website" className="hidden" autoComplete="off" />
                <button className="w-full rounded-full bg-white text-neutral-900 font-semibold px-5 py-3 hover:opacity-90">{busLoading ? "Sending..." : "Send Brief"}</button>
                <p className="text-xs text-neutral-500">SLA: same-day acknowledgment, 24-48h outline, 5-day proposal.</p>
              </form>
              <div className="mt-4 text-sm flex flex-wrap gap-4">
                <a className="underline text-red-700" href="mailto:kevin@wilmarcs.com">kevin@wilmarcs.com</a>
                <a className="underline" href="https://api.whatsapp.com/send?phone=917700017110" target="_blank" rel="noopener">WhatsApp</a>
                <a className="underline" href="#book">Book a meeting</a>
              </div>
            </div>

            <div className="card-border rounded-2xl p-6 lift bg-neutral-900/40">
              <div className="uppercase text-xs tracking-widest text-gray-400">General</div>
              <h2 className="lg:text-2xl text-xl font-bold mt-1">General Enquiries</h2>
              <p className="text-neutral-300 mt-2 mini lg:text-base text-sm min-h-[72px]">Questions, partnerships, press, or vendor registration. We’ll route you.</p>
              <form className="mt-4 space-y-3" method="post" onSubmit={submitGeneral}>
                {genMsg && (<div className={`px-4 py-3 rounded-lg mt-2 text-sm ${genMsg.type === "ok" ? "text-emerald-600 bg-emerald-100" : "text-red-600 bg-red-100"}`}>{genMsg.text}</div>)}
                <input type="hidden" name="type" value="general"/>
                <input type="text" name="company1" className="hidden" autoComplete="off" tabIndex={-1} />
                <input className="w-full rounded-xl border border-neutral-800 bg-neutral-950 px-4 py-3" name="name" placeholder="Full name" required />
                <input type="email" className="w-full rounded-xl border border-neutral-800 bg-neutral-950 px-4 py-3" name="email" placeholder="Email" required />
                <select className="w-full rounded-xl border border-neutral-800 bg-neutral-950 px-4 py-3" name="topic" required>
                  <option value="">Topic</option>
                  <option value="Press / Media">Press / Media</option>
                  <option value="Partnership">Partnership</option>
                  <option value="Vendor / Supplier">Vendor / Supplier</option>
                  <option value="Other">Other</option>
                </select>
                <div className="min-h-[180px]">
                  <textarea className="w-full rounded-xl border border-neutral-800 bg-neutral-950 px-4 py-3" name="message" placeholder="How can we help?" required rows={3}></textarea>
                </div>
                <button className="w-full rounded-full bg-white text-neutral-900 font-semibold px-5 py-3 hover:opacity-90">{genLoading ? "Sending..." : "Send Message"}</button>
                <p className="text-xs text-neutral-500">Replies in under 1 business day.</p>
              </form>
              <div className="mt-4 text-sm flex flex-wrap gap-4">
                <a className="underline text-red-700" href="mailto:kevin@wilmarcs.com">kevin@wilmarcs.com</a>
                <a className="underline" href="tel:+919066249992">+91 90662 49992</a>
              </div>
            </div>

            <div className="card-border rounded-2xl p-6 lift bg-neutral-900/40">
              <div className="uppercase text-xs tracking-widest text-gray-400">Jobs</div>
              <h2 className="lg:text-2xl text-xl font-bold mt-1">Careers & Crew</h2>
              <p className="text-neutral-300 mt-2 mini lg:text-base text-sm min-h-[72px]">Editors, colorists, producers, animators—send your reel. Remote/hybrid roles across India, Australia, USA.</p>
              <form className="mt-4 space-y-3" method="post" onSubmit={submitJobs} encType="multipart/form-data">
                {jobMsg && (<div className={`px-4 py-3 rounded-lg mt-2 text-sm ${jobMsg.type === "ok" ? "text-emerald-600 bg-emerald-100" : "text-red-600 bg-red-100"}`}>{jobMsg.text}</div>)}
                <input type="hidden" name="type" value="career"/>
                <input type="text" name="company1" className="hidden" autoComplete="off" tabIndex={-1} />
                <input className="w-full rounded-xl border border-neutral-800 bg-neutral-950 px-4 py-3" name="name" placeholder="Full name" required />
                <input type="email" className="w-full rounded-xl border border-neutral-800 bg-neutral-950 px-4 py-3" name="email" placeholder="Email" required />
                <input className="w-full rounded-xl border border-neutral-800 bg-neutral-950 px-4 py-3" name="role" placeholder="Role (e.g., Editor)" required />
                <input className="w-full rounded-xl border border-neutral-800 bg-neutral-950 px-4 py-3" name="location" placeholder="City, Country" required />
                <input type="url" className="w-full rounded-xl border border-neutral-800 bg-neutral-950 px-4 py-3" name="reel" placeholder="Reel / Portfolio URL" required />
                <input type="file" className="w-full rounded-xl border border-neutral-800 bg-neutral-950 px-4 py-3" name="cv" accept=".pdf,.doc,.docx" required />
                <button className="w-full rounded-full bg-white text-neutral-900 font-semibold px-5 py-3 hover:opacity-90">{jobLoading ? "Sending..." : "Send Application"}</button>
                <p className="text-xs text-neutral-500">We reply within 3-5 business days.</p>
              </form>
              <div className="mt-4 text-sm">
                <a className="underline text-red-700" href="mailto:kevin@wilmarcs.com">kevin@wilmarcs.com</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="offices" className="py-10 md:py-16 bg-neutral-900/40 border-y border-neutral-800">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <header className="mb-6 md:mb-10">
            <h2 className="lg:text-4xl md:text-3xl text-2xl font-bold tracking-tight">Offices, local times & maps</h2>
            <p className="mt-2 text-neutral-400 max-w-3xl md:text-base text-sm">We operate across three regions. Clocks update in real-time. Badge shows day/night at each office.</p>
          </header>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 md:gap-8">
            {Z.map((z) => (
            <div className="rounded-2xl p-6 lift card-border bg-neutral-900/50" key={z.key}>
              <div className="flex items-center justify-between">
                <div>
                  <div className="uppercase text-xs tracking-widest text-gray-400">{z.country}</div>
                  <h3 className="text-xl font-semibold mt-1">{z.place}</h3>
                </div>
                <div className={'dot '+dayState[z.key]} title="Local time"></div>
              </div>
              <div className="mt-2 flex items-baseline gap-2">
                <div className="lg:text-3xl text-2xl font-extrabold">{times[z.key]}</div>
                <div className="text-neutral-400 mini md:text-base text-sm">{z.timezone}</div>
              </div>
              <address className="not-italic text-neutral-300 mini mt-3">{z.address}</address>
              <div className="mt-3 sm:text-sm text-xs flex gap-3 flex-wrap">
                <a className="underline" href={z.phonelink}>{z.phone}</a>
                <a className="underline" href={z.emaillink}>{z.email}</a>
              </div>
              <div className="mt-4">
                <iframe className="w-full h-60 rounded-xl pointer-events-none filter saturate-[1.1] contrast-[1.05] brightness-[.95]" loading="lazy" referrerPolicy="no-referrer-when-downgrade"
                  src={z.maplink}></iframe>
              </div>
            </div>
            ))}
          </div>

          <div className="mt-8 grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="rounded-2xl p-6 card-border bg-neutral-900/50">
              <div className="uppercase text-xs tracking-widest text-gray-400">Live site activity</div>
              <div className="mt-2 text-3xl font-extrabold">{visitors}</div>
              <div className="mini text-neutral-400">active visitors (anon)</div>
              <div className="mt-4 space-y-2 mini">
                {regions.map((r, i) => (
                <div key={i}>
                  <div className="flex justify-between"><span>{r.code}</span><span>{r.n}</span></div>
                  <div className="h-1.5 mt-1 rounded-full bg-gradient-to-r from-[#00E5FF] to-[#E50914]" style={{ width: `${r.n}%` }}></div>
                </div>
                ))}
              </div>
              <div className="text-xs text-neutral-500 mt-3">Hook to GA4/Plausible for real values (developer note in code).</div>
            </div>
          </div>
        </div>
      </section>

      <section id="more" className="py-10 md:py-16 bg-neutral-900/40 border-y border-neutral-800">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 md:gap-8">
            <div className="rounded-2xl border border-neutral-800 bg-neutral-900/50 p-6 lift flex flex-col justify-between">
              <div>
                <div className="uppercase text-xs tracking-widest text-gray-400">Status</div>
                <h3 className="md:text-xl text-lg font-semibold mt-1">Systems & Deliveries</h3>
                <p className="text-neutral-300 mini mt-2 md:text-base text-sm">Check ingest, review links, and delivery status.</p>
              </div>
              <a className="underline mt-3 inline-block md:text-base text-sm" href="mailto:deepak@wilmarcs.com">deepak@wilmarcs.com</a>
            </div>
            <div className="rounded-2xl border border-neutral-800 bg-neutral-900/50 p-6 lift flex flex-col justify-between">
              <div>
                <div className="uppercase text-xs tracking-widest text-gray-400">Security</div>
                <h3 className="md:text-xl text-lg font-semibold mt-1">Report a security issue</h3>
                <p className="text-neutral-300 mini mt-2 md:text-base text-sm">Responsible disclosure. PGP key available on request.</p>
              </div>
              <a className="underline mt-3 inline-block md:text-base text-sm" href="mailto:kevin@wilmarcs.com">kevin@wilmarcs.com</a>
            </div>
            <div className="rounded-2xl border border-neutral-800 bg-neutral-900/50 p-6 lift flex flex-col justify-between">
              <div>
                <div className="uppercase text-xs tracking-widest text-gray-400">Accessibility</div>
                <h3 className="md:text-xl text-lg font-semibold mt-1">Need assistance?</h3>
                <p className="text-neutral-300 mini mt-2 md:text-base text-sm">If you use assistive tech, we’ll provide alternates and priority support.</p>
              </div>
              <a className="underline mt-3 inline-block md:text-base text-sm" href="mailto:kevin@wilmarcs.com">kevin@wilmarcs.com</a>
            </div>
          </div>
          <div className="lg:mt-8 md:mt-6 mt-4 text-xs text-neutral-500">By contacting us you agree to our privacy policy and data processing terms.</div>
        </div>
      </section>
    </>
  );
}
