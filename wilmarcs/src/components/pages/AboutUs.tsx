'use client';
import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay } from "swiper/modules";
import { BASE_URL } from "@/lib/constants";
const Z = [
  { key:'IN', el:'timeIN', tz:'Asia/Kolkata', badge:'badgeIN', tzEl:'tzIN', country: 'India', place: 'Bangalore', timezone: 'IST', address: 'Bandra Kurla Complex, Mumbai 400051', phonelink: 'tel:+912240000000', phone: '+91 22 4000 0000', emaillink: 'mailto:hello@wilmarcs.com', email: 'hello@wilmarcs.com', maplink: 'https://www.google.com/maps?q=Bandra+Kurla+Complex+Mumbai&output=embed' },
  { key:'AE', el:'timeAE', tz:'Asia/Dubai', badge:'badgeAE', tzEl:'tzAE', country: 'United Arab Emirates', place: 'Dubai', timezone: 'GST', address: '600 California St, San Francisco, CA 94108', phonelink: 'tel:+14150000000', phone: '+1 415 000 0000', emaillink: 'mailto:ae@wilmarcs.com', email: 'ae@wilmarcs.com', maplink: 'https://www.google.com/maps?q=600+California+St+San+Francisco&output=embed' },
  { key:'AU', el:'timeAU', tz:'Australia/Sydney', badge:'badgeAU', tzEl:'tzAU', country: 'Australia', place: 'Sydney', timezone: 'AET', address: 'Barangaroo Ave, Sydney NSW 2000', phonelink: 'tel:+61280000000', phone: '+61 2 8000 0000', emaillink: 'au@wilmarcs.com', email: 'mailto:au@wilmarcs.com', maplink: 'https://www.google.com/maps?q=Barangaroo+Sydney&output=embed' }
  // { key:'US', el:'timeUS', tz:'America/Los_Angeles', badge:'badgeUS', tzEl:'tzUS', country: 'USA', place: 'Francisco', timezone: 'PT', address: '600 California St, San Francisco, CA 94108', phonelink: 'tel:+14150000000', phone: '+1 415 000 0000', emaillink: 'mailto:us@wilmarcs.com', email: 'us@wilmarcs.com', maplink: 'https://www.google.com/maps?q=600+California+St+San+Francisco&output=embed' }
];
const menuItems = [
  { label: "Our Story", href: "#story" },
  { label: "Why Us", href: "#why" },
  { label: "Team", href: "#team" },
  { label: "Global", href: "#global" },
  { label: "MAYCROFT Foundation", href: "#csr" },
  { label: "Testimonials", href: "#testimonials" },
];
export default function AboutUs() {
  const [times, setTimes] = useState<{ [key: string]: string }>({});
  const [dayState, setDayState] = useState<{ [key: string]: "day" | "night" }>({});
  const [activeId, setActiveId] = useState("");
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
    const observer = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) {
            e.target.classList.add("in");
            observer.unobserve(e.target);
          }
        }
      },
      { threshold: 0.2 }
    );
    const revealEls = document.querySelectorAll(".reveal");
    revealEls.forEach((el) => observer.observe(el));
    const pxEls = document.querySelectorAll<HTMLElement>("[data-parallax]");
    function parallax() {
      const y = window.scrollY || window.pageYOffset;
      pxEls.forEach((el) => {
        const speed = el.tagName === "H1" ? 0.15 : 0.1;
        el.style.setProperty("--py", `${y * -speed}px`);
      });
    }
    parallax();
    window.addEventListener("scroll", parallax, { passive: true });
    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", parallax);
    };
  }, []);
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);            
          }
        });
      },
      { threshold: 0.6 }
    );
    menuItems.forEach((item) => {
      const id = item.href.replace("#", "");
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);
  return (
    <>
      <aside className="fixed right-12 top-1/2 -translate-y-1/2 z-50">
        <nav className="lg:flex hidden flex-col gap-8 text-right">
          {menuItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`${ activeId === item.href.replace("#", "") ? "after:bg-gradient-to-br after:from-cyan-400 after:to-red-600 after:border-none" : "hover:after:bg-white" } group transition inline-flex items-center justify-end gap-2 after:content-[''] after:rounded-full after:inline-block after:w-3 after:h-3 after:border after:border-white/50 after:transition after:shadow-2xl after:shadow-cyan-300`}
            >
              <span className={`transition-all text-sm duration-300 group-hover:opacity-100 relative -right-2 group-hover:right-0 ${ activeId === item.href.replace("#", "") ? "opacity-100 right-0" : "opacity-0" }`}>{item.label}</span>
            </Link>
          ))}
        </nav>
      </aside>

      <section className="lg:mt-[76px] mt-[64px] relative overflow-hidden">
        <div className="absolute -z-10 inset-0">
          <div className="absolute inset-0 bg-[radial-gradient(800px_300px_at_20%_-10%,rgba(229,9,20,.18),transparent_60%)]"></div>
          <div className="absolute inset-0 bg-[radial-gradient(600px_250px_at_100%_0%,rgba(0,229,255,.12),transparent_60%)]"></div>
        </div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
          <div className="max-w-3xl">
            <h1 data-parallax className="mt-2 2xl:text-6xl xl:text-4xl md:text-3xl text-2xl font-extrabold leading-[1.02] tracking-tight">We tell stories that <span className="accent">move</span> people.</h1>
            <p data-parallax className="mt-4 lg:text-lg md:text-base text-sm text-neutral-300">With roots in India and a home in Dubai, Wilmarcs brings global storytelling precision to the UAE — blending creativity and technology to create world-class cinematic work.</p>
            <div className="mt-6 flex gap-3">
              <a href="#why" className="rounded-full bg-white text-neutral-900 sm:text-sm text-xs font-semibold px-5 py-3 hover:opacity-90">Why choose us</a>
              <a href="#csr" className="rounded-full border border-neutral-700 sm:text-sm text-xs px-5 py-3">Our impact</a>
            </div>
          </div>
        </div>
      </section>

      <section id="trusted" className="py-6 md:py-8 border-y border-neutral-800 bg-neutral-900/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="uppercase text-xs tracking-widest text-gray-400 mb-3">Trusted By</div>
          <div className="relative overflow-hidden">
            <Swiper modules={[Autoplay]} spaceBetween={40} slidesPerView="auto" loop={true} speed={3000} autoplay={{ delay: 0, disableOnInteraction: false, }} allowTouchMove={false} >
              <SwiperSlide className="!w-auto h-10">
                <div className="flex group items-center justify-center">
                  <Image src={`${process.env.NEXT_PUBLIC_API_URL}assets/web/clients/white/accel.png`} alt="clients" className="block md:h-[60px] h-[40px] object-contain mx-auto transition-all duration-300 ease group-hover:opacity-0" width={120} height={60} priority />
                  <Image src={`${process.env.NEXT_PUBLIC_API_URL}assets/web/clients/color/accel.png`} alt="clients" className="block md:h-[60px] h-[40px] object-contain mx-auto transition-all duration-300 ease absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100" width={120} height={60} priority />
                </div>
              </SwiperSlide>
              <SwiperSlide className="!w-auto h-10">
                <div className="flex group items-center justify-center">
                  <Image src={`${process.env.NEXT_PUBLIC_API_URL}assets/web/clients/white/akshaya-patra.png`} alt="clients" className="block md:h-[60px] h-[40px] object-contain mx-auto transition-all duration-300 ease group-hover:opacity-0" width={120} height={60} priority />
                  <Image src={`${process.env.NEXT_PUBLIC_API_URL}assets/web/clients/color/akshaya-patra.png`} alt="clients" className="block md:h-[60px] h-[40px] object-contain mx-auto transition-all duration-300 ease absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100" width={120} height={60} priority />
                </div>
              </SwiperSlide>
              <SwiperSlide className="!w-auto h-10">
                <div className="flex group items-center justify-center">
                  <Image src={`${process.env.NEXT_PUBLIC_API_URL}assets/web/clients/white/audi.png`} alt="clients" className="block md:h-[60px] h-[40px] object-contain mx-auto transition-all duration-300 ease group-hover:opacity-0" width={120} height={60} priority />
                  <Image src={`${process.env.NEXT_PUBLIC_API_URL}assets/web/clients/color/audi.png`} alt="clients" className="block md:h-[60px] h-[40px] object-contain mx-auto transition-all duration-300 ease absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100" width={120} height={60} priority />
                </div>
              </SwiperSlide>
              <SwiperSlide className="!w-auto h-10">
                <div className="flex group items-center justify-center">
                  <Image src={`${process.env.NEXT_PUBLIC_API_URL}assets/web/clients/white/brigade.png`} alt="clients" className="block md:h-[60px] h-[40px] object-contain mx-auto transition-all duration-300 ease group-hover:opacity-0" width={120} height={60} priority />
                  <Image src={`${process.env.NEXT_PUBLIC_API_URL}assets/web/clients/color/brigade.png`} alt="clients" className="block md:h-[60px] h-[40px] object-contain mx-auto transition-all duration-300 ease absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100" width={120} height={60} priority />
                </div>
              </SwiperSlide>
              <SwiperSlide className="!w-auto h-10">
                <div className="flex group items-center justify-center">
                  <Image src={`${process.env.NEXT_PUBLIC_API_URL}assets/web/clients/white/cafe-coffee-day.png`} alt="clients" className="block md:h-[60px] h-[40px] object-contain mx-auto transition-all duration-300 ease group-hover:opacity-0" width={120} height={60} priority />
                  <Image src={`${process.env.NEXT_PUBLIC_API_URL}assets/web/clients/color/cafe-coffee-day.png`} alt="clients" className="block md:h-[60px] h-[40px] object-contain mx-auto transition-all duration-300 ease absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100" width={120} height={60} priority />
                </div>
              </SwiperSlide>
              <SwiperSlide className="!w-auto h-10">
                <div className="flex group items-center justify-center">
                  <Image src={`${process.env.NEXT_PUBLIC_API_URL}assets/web/clients/white/comic-con.png`} alt="clients" className="block md:h-[60px] h-[40px] object-contain mx-auto transition-all duration-300 ease group-hover:opacity-0" width={120} height={60} priority />
                  <Image src={`${process.env.NEXT_PUBLIC_API_URL}assets/web/clients/color/comic-con.png`} alt="clients" className="block md:h-[60px] h-[40px] object-contain mx-auto transition-all duration-300 ease absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100" width={120} height={60} priority />
                </div>
              </SwiperSlide>
              <SwiperSlide className="!w-auto h-10">
                <div className="flex group items-center justify-center">
                  <Image src={`${process.env.NEXT_PUBLIC_API_URL}assets/web/clients/white/cred.png`} alt="clients" className="block md:h-[60px] h-[40px] object-contain mx-auto transition-all duration-300 ease group-hover:opacity-0" width={120} height={60} priority />
                  <Image src={`${process.env.NEXT_PUBLIC_API_URL}assets/web/clients/color/cred.png`} alt="clients" className="block md:h-[60px] h-[40px] object-contain mx-auto transition-all duration-300 ease absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100" width={120} height={60} priority />
                </div>
              </SwiperSlide>
              <SwiperSlide className="!w-auto h-10">
                <div className="flex group items-center justify-center">
                  <Image src={`${process.env.NEXT_PUBLIC_API_URL}assets/web/clients/white/echoes-of-earth.png`} alt="clients" className="block md:h-[60px] h-[40px] object-contain mx-auto transition-all duration-300 ease group-hover:opacity-0" width={120} height={60} priority />
                  <Image src={`${process.env.NEXT_PUBLIC_API_URL}assets/web/clients/color/echoes-of-earth.png`} alt="clients" className="block md:h-[60px] h-[40px] object-contain mx-auto transition-all duration-300 ease absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100" width={120} height={60} priority />
                </div>
              </SwiperSlide>
              <SwiperSlide className="!w-auto h-10">
                <div className="flex group items-center justify-center">
                  <Image src={`${process.env.NEXT_PUBLIC_API_URL}assets/web/clients/white/embassy.png`} alt="clients" className="block md:h-[60px] h-[40px] object-contain mx-auto transition-all duration-300 ease group-hover:opacity-0" width={120} height={60} priority />
                  <Image src={`${process.env.NEXT_PUBLIC_API_URL}assets/web/clients/color/embassy.png`} alt="clients" className="block md:h-[60px] h-[40px] object-contain mx-auto transition-all duration-300 ease absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100" width={120} height={60} priority />
                </div>
              </SwiperSlide>
              <SwiperSlide className="!w-auto h-10">
                <div className="flex group items-center justify-center">
                  <Image src={`${process.env.NEXT_PUBLIC_API_URL}assets/web/clients/white/google.png`} alt="clients" className="block md:h-[60px] h-[40px] object-contain mx-auto transition-all duration-300 ease group-hover:opacity-0" width={120} height={60} priority />
                  <Image src={`${process.env.NEXT_PUBLIC_API_URL}assets/web/clients/color/google.png`} alt="clients" className="block md:h-[60px] h-[40px] object-contain mx-auto transition-all duration-300 ease absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100" width={120} height={60} priority />
                </div>
              </SwiperSlide>
              <SwiperSlide className="!w-auto h-10">
                <div className="flex group items-center justify-center">
                  <Image src={`${process.env.NEXT_PUBLIC_API_URL}assets/web/clients/white/hilton.png`} alt="clients" className="block md:h-[60px] h-[40px] object-contain mx-auto transition-all duration-300 ease group-hover:opacity-0" width={120} height={60} priority />
                  <Image src={`${process.env.NEXT_PUBLIC_API_URL}assets/web/clients/color/hilton.png`} alt="clients" className="block md:h-[60px] h-[40px] object-contain mx-auto transition-all duration-300 ease absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100" width={120} height={60} priority />
                </div>
              </SwiperSlide>
              <SwiperSlide className="!w-auto h-10">
                <div className="flex group items-center justify-center">
                  <Image src={`${process.env.NEXT_PUBLIC_API_URL}assets/web/clients/white/himalaya.png`} alt="clients" className="block md:h-[60px] h-[40px] object-contain mx-auto transition-all duration-300 ease group-hover:opacity-0" width={120} height={60} priority />
                  <Image src={`${process.env.NEXT_PUBLIC_API_URL}assets/web/clients/color/himalaya.png`} alt="clients" className="block md:h-[60px] h-[40px] object-contain mx-auto transition-all duration-300 ease absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100" width={120} height={60} priority />
                </div>
              </SwiperSlide>
              <SwiperSlide className="!w-auto h-10">
                <div className="flex group items-center justify-center">
                  <Image src={`${process.env.NEXT_PUBLIC_API_URL}assets/web/clients/white/malabar.png`} alt="clients" className="block md:h-[60px] h-[40px] object-contain mx-auto transition-all duration-300 ease group-hover:opacity-0" width={120} height={60} priority />
                  <Image src={`${process.env.NEXT_PUBLIC_API_URL}assets/web/clients/color/malabar.png`} alt="clients" className="block md:h-[60px] h-[40px] object-contain mx-auto transition-all duration-300 ease absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100" width={120} height={60} priority />
                </div>
              </SwiperSlide>
              <SwiperSlide className="!w-auto h-10">
                <div className="flex group items-center justify-center">
                  <Image src={`${process.env.NEXT_PUBLIC_API_URL}assets/web/clients/white/parc.png`} alt="clients" className="block md:h-[60px] h-[40px] object-contain mx-auto transition-all duration-300 ease group-hover:opacity-0" width={120} height={60} priority />
                  <Image src={`${process.env.NEXT_PUBLIC_API_URL}assets/web/clients/color/parc.png`} alt="clients" className="block md:h-[60px] h-[40px] object-contain mx-auto transition-all duration-300 ease absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100" width={120} height={60} priority />
                </div>
              </SwiperSlide>
              <SwiperSlide className="!w-auto h-10">
                <div className="flex group items-center justify-center">
                  <Image src={`${process.env.NEXT_PUBLIC_API_URL}assets/web/clients/white/paytm.png`} alt="clients" className="block md:h-[60px] h-[40px] object-contain mx-auto transition-all duration-300 ease group-hover:opacity-0" width={120} height={60} priority />
                  <Image src={`${process.env.NEXT_PUBLIC_API_URL}assets/web/clients/color/paytm.png`} alt="clients" className="block md:h-[60px] h-[40px] object-contain mx-auto transition-all duration-300 ease absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100" width={120} height={60} priority />
                </div>
              </SwiperSlide>
              <SwiperSlide className="!w-auto h-10">
                <div className="flex group items-center justify-center">
                  <Image src={`${process.env.NEXT_PUBLIC_API_URL}assets/web/clients/white/xiaomi.png`} alt="clients" className="block md:h-[60px] h-[40px] object-contain mx-auto transition-all duration-300 ease group-hover:opacity-0" width={120} height={60} priority />
                  <Image src={`${process.env.NEXT_PUBLIC_API_URL}assets/web/clients/color/xiaomi.png`} alt="clients" className="block md:h-[60px] h-[40px] object-contain mx-auto transition-all duration-300 ease absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100" width={120} height={60} priority />
                </div>
              </SwiperSlide>
              <SwiperSlide className="!w-auto h-10">
                <div className="flex group items-center justify-center">
                  <Image src={`${process.env.NEXT_PUBLIC_API_URL}assets/web/clients/white/samsung.png`} alt="clients" className="block md:h-[60px] h-[40px] object-contain mx-auto transition-all duration-300 ease group-hover:opacity-0" width={120} height={60} priority />
                  <Image src={`${process.env.NEXT_PUBLIC_API_URL}assets/web/clients/color/samsung.png`} alt="clients" className="block md:h-[60px] h-[40px] object-contain mx-auto transition-all duration-300 ease absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100" width={120} height={60} priority />
                </div>
              </SwiperSlide>
              <SwiperSlide className="!w-auto h-10">
                <div className="flex group items-center justify-center">
                  <Image src={`${process.env.NEXT_PUBLIC_API_URL}assets/web/clients/white/selco.png`} alt="clients" className="block md:h-[60px] h-[40px] object-contain mx-auto transition-all duration-300 ease group-hover:opacity-0" width={120} height={60} priority />
                  <Image src={`${process.env.NEXT_PUBLIC_API_URL}assets/web/clients/color/selco.png`} alt="clients" className="block md:h-[60px] h-[40px] object-contain mx-auto transition-all duration-300 ease absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100" width={120} height={60} priority />
                </div>
              </SwiperSlide>
              <SwiperSlide className="!w-auto h-10">
                <div className="flex group items-center justify-center">
                  <Image src={`${process.env.NEXT_PUBLIC_API_URL}assets/web/clients/white/sheraton.png`} alt="clients" className="block md:h-[60px] h-[40px] object-contain mx-auto transition-all duration-300 ease group-hover:opacity-0" width={120} height={60} priority />
                  <Image src={`${process.env.NEXT_PUBLIC_API_URL}assets/web/clients/color/sheraton.png`} alt="clients" className="block md:h-[60px] h-[40px] object-contain mx-auto transition-all duration-300 ease absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100" width={120} height={60} priority />
                </div>
              </SwiperSlide>
              <SwiperSlide className="!w-auto h-10">
                <div className="flex group items-center justify-center">
                  <Image src={`${process.env.NEXT_PUBLIC_API_URL}assets/web/clients/white/sleepy-head.png`} alt="clients" className="block md:h-[60px] h-[40px] object-contain mx-auto transition-all duration-300 ease group-hover:opacity-0" width={120} height={60} priority />
                  <Image src={`${process.env.NEXT_PUBLIC_API_URL}assets/web/clients/color/sleepy-head.png`} alt="clients" className="block md:h-[60px] h-[40px] object-contain mx-auto transition-all duration-300 ease absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100" width={120} height={60} priority />
                </div>
              </SwiperSlide>
              <SwiperSlide className="!w-auto h-10">
                <div className="flex group items-center justify-center">
                  <Image src={`${process.env.NEXT_PUBLIC_API_URL}assets/web/clients/white/tata.png`} alt="clients" className="block md:h-[60px] h-[40px] object-contain mx-auto transition-all duration-300 ease group-hover:opacity-0" width={120} height={60} priority />
                  <Image src={`${process.env.NEXT_PUBLIC_API_URL}assets/web/clients/color/tata.png`} alt="clients" className="block md:h-[60px] h-[40px] object-contain mx-auto transition-all duration-300 ease absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100" width={120} height={60} priority />
                </div>
              </SwiperSlide>
              <SwiperSlide className="!w-auto h-10">
                <div className="flex group items-center justify-center">
                  <Image src={`${process.env.NEXT_PUBLIC_API_URL}assets/web/clients/white/swiggy.png`} alt="clients" className="block md:h-[60px] h-[40px] object-contain mx-auto transition-all duration-300 ease group-hover:opacity-0" width={120} height={60} priority />
                  <Image src={`${process.env.NEXT_PUBLIC_API_URL}assets/web/clients/color/swiggy.png`} alt="clients" className="block md:h-[60px] h-[40px] object-contain mx-auto transition-all duration-300 ease absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100" width={120} height={60} priority />
                </div>
              </SwiperSlide>
              <SwiperSlide className="!w-auto h-10">
                <div className="flex group items-center justify-center">
                  <Image src={`${process.env.NEXT_PUBLIC_API_URL}assets/web/clients/white/triumph.png`} alt="clients" className="block md:h-[60px] h-[40px] object-contain mx-auto transition-all duration-300 ease group-hover:opacity-0" width={120} height={60} priority />
                  <Image src={`${process.env.NEXT_PUBLIC_API_URL}assets/web/clients/color/triumph.png`} alt="clients" className="block md:h-[60px] h-[40px] object-contain mx-auto transition-all duration-300 ease absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100" width={120} height={60} priority />
                </div>
              </SwiperSlide>
              <SwiperSlide className="!w-auto h-10">
                <div className="flex group items-center justify-center">
                  <Image src={`${process.env.NEXT_PUBLIC_API_URL}assets/web/clients/white/vanhuessan.png`} alt="clients" className="block md:h-[60px] h-[40px] object-contain mx-auto transition-all duration-300 ease group-hover:opacity-0" width={120} height={60} priority />
                  <Image src={`${process.env.NEXT_PUBLIC_API_URL}assets/web/clients/color/vanhuessan.png`} alt="clients" className="block md:h-[60px] h-[40px] object-contain mx-auto transition-all duration-300 ease absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100" width={120} height={60} priority />
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </section>

      <section id="story" className="py-12 md:py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-10 items-start">
            <div>
              <div className="uppercase text-xs tracking-widest text-gray-400">Our Story</div>
              <h2 className="2xl:text-4xl xl:text-3xl md:text-2xl text-xl font-bold tracking-tight mt-1">From a small vision in 2016 to a global cinematic studio.</h2>
              <p className="mt-4 text-neutral-300">Wilmarcs Motion Pictures began in 2016 as a small Bangalore-based crew united by one belief, that storytelling should feel cinematic, no matter the scale. What started with a camera and conviction has grown into a cross-continental production house spanning India, the UAE, and Australia.</p>
              <p className="mt-3 text-neutral-400">Today, we partner with leading brands, foundations, and innovators, crafting films that move people and deliver measurable impact. Our strength lies in the balance between art and precision, blending cinematic storytelling with modern production pipelines to create work that’s both timeless and fast-moving.</p>
              <p className="mt-3 text-neutral-400">Our story is built on discipline, design, and purpose, the same values that continue to shape every frame we deliver.</p>
              <div className="mt-5 p-4 rounded-xl border border-neutral-800 bg-neutral-900/40 reveal">
                <p className="text-neutral-300 italic">“We exist to marry speed with cinema, disciplined craft at the pace of today’s brands.”</p>
                <div className="mt-2 signature">— Kevin Wilson</div>
              </div>
            </div>
            <div className="space-y-6">
              <div className="flex gap-4 tl-card p-4 rounded-xl bg-neutral-900/40 border border-neutral-800 lift reveal">
                <div className="tl-dot mt-2"></div>
                <div><div className="text-sm text-neutral-400">2016</div><div className="font-semibold">First films ship from Bangalore</div><p className="text-neutral-400 text-sm">Corporate stories and CSR shorts set the tone.</p></div>
              </div>
              <div className="flex gap-4 tl-card p-4 rounded-xl bg-neutral-900/40 border border-neutral-800 lift reveal">
                <div className="tl-dot mt-2"></div>
                <div><div className="text-sm text-neutral-400">2020</div><div className="font-semibold">NGO & Foundation work grows</div><p className="text-neutral-400 text-sm">Partnerships with UNICEF, RN Foundation, Akshaya Patra.</p></div>
              </div>
              <div className="flex gap-4 tl-card p-4 rounded-xl bg-neutral-900/40 border border-neutral-800 lift reveal">
                <div className="tl-dot mt-2"></div>
                <div><div className="text-sm text-neutral-400">2024</div><div className="font-semibold">Global expansion</div><p className="text-neutral-400 text-sm">Sydney and U.S. presence; live, 2D/3D, post under one roof.</p></div>
              </div>
              <div className="flex gap-4 tl-card p-4 rounded-xl bg-neutral-900/40 border border-neutral-800 lift reveal">
                <div className="tl-dot mt-2"></div>
                <div><div className="text-sm text-neutral-400">2025</div><div className="font-semibold">AI + instant delivery</div><p className="text-neutral-400 text-sm">Hybrid AI tooling for faster boards, captions, versions.</p></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="why" className="py-12 md:py-16 bg-neutral-900/40 border-y border-neutral-800">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8">
            <div className="uppercase text-xs tracking-widest text-gray-400">Why Us</div>
            <h2 className="2xl:text-4xl xl:text-3xl md:text-2xl text-xl font-bold tracking-tight mt-1">Fast. Cinematic. Transparent.</h2>
            <p className="mt-3 text-neutral-300 max-w-3xl">We combine a filmmaker’s eye with a product mindset. Clear briefs, fast cycles, and broadcast‑grade finishing.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-6 md:gap-8">
            <div className="sm:p-6 p-4 rounded-2xl border border-neutral-800 bg-neutral-900/50 lift card-border reveal">
              <div className="uppercase text-xs tracking-widest text-gray-400">Speed</div><h3 className="md:text-xl text-lg font-semibold mt-1">Lightning delivery</h3>
              <p className="text-neutral-400 mt-2 text-sm">Modular shoots and edit pipelines to ship in days, not months.</p>
            </div>
            <div className="sm:p-6 p-4 rounded-2xl border border-neutral-800 bg-neutral-900/50 lift card-border reveal">
              <div className="uppercase text-xs tracking-widest text-gray-400">Craft</div><h3 className="md:text-xl text-lg font-semibold mt-1">Cinematic quality</h3>
              <p className="text-neutral-400 mt-2 text-sm">Director‑led visuals, proper color, sound, and titles.</p>
            </div>
            <div className="sm:p-6 p-4 rounded-2xl border border-neutral-800 bg-neutral-900/50 lift card-border reveal">
              <div className="uppercase text-xs tracking-widest text-gray-400">Clarity</div><h3 className="md:text-xl text-lg font-semibold mt-1">Transparent process</h3>
              <p className="text-neutral-400 mt-2 text-sm">Up‑front scope, clean comms, and clear post handoffs.</p>
            </div>
          </div>
        </div>
      </section>

      <section id="team" className="py-10 sm:py-16 md:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8">
            <div className="uppercase text-xs tracking-widest text-gray-400">Team</div>
            <h2 className="2xl:text-4xl xl:text-3xl md:text-2xl text-xl font-bold tracking-tight mt-1">The people behind the films</h2>
            <p className="mt-3 text-neutral-300 max-w-3xl">Editors, colorists, producers, animators. We keep teams small and senior.</p>
          </div>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
            <div className="rounded-2xl border border-neutral-800 bg-neutral-900/40 p-4 lift">
              <Image className="portrait" alt="Kevin" src={`${process.env.NEXT_PUBLIC_API_URL}assets/web/kevin.jpg`} width={360} height={450} priority/>
              <div className="mt-3 font-semibold">Kevin Wilson</div>
              <div className="text-sm text-neutral-400">Founder · Director</div>
            </div>
            <div className="rounded-2xl border border-neutral-800 bg-neutral-900/40 p-4 lift">
              <Image className="portrait" alt="Deepak" src={`${process.env.NEXT_PUBLIC_API_URL}assets/web/deepak.jpg`} width={360} height={450} priority/>
              <div className="mt-3 font-semibold">Deepak</div>
              <div className="text-sm text-neutral-400">Creative Producer</div>
            </div>
            <div className="rounded-2xl border border-neutral-800 bg-neutral-900/40 p-4 lift">
              <Image className="portrait" alt="Ansad" src={`${process.env.NEXT_PUBLIC_API_URL}assets/web/ansad.jpg`} width={360} height={450} priority/>
              <div className="mt-3 font-semibold">Ansad</div>
              <div className="text-sm text-neutral-400">Creative Director</div>
            </div>
          </div>
        </div>
      </section>

      <section id="global" className="py-12 md:py-16 bg-neutral-900/40 border-y border-neutral-800">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8"><div className="uppercase text-xs tracking-widest text-gray-400">Global</div><h2 className="2xl:text-4xl xl:text-3xl md:text-2xl text-xl font-bold tracking-tight mt-1">Where we work</h2><p className="mt-3 text-neutral-300 max-w-3xl">We operate across time zones — clocks update live.</p></div>
          <div className="grid md:grid-cols-3 gap-6 md:gap-8">
            {Z.map((z) => (
            <div className="rounded-2xl border border-neutral-800 bg-neutral-900/50 p-6 lift card-border" key={z.key}>
              <div className="flex items-center justify-between"><div>
                <div className="uppercase text-xs tracking-widest text-gray-400">{z.country}</div>
                <h3 className="md:text-xl text-lg font-semibold mt-1">{z.place}</h3></div>
                <div className={'w-2.5 h-2.5 rounded-full dot '+dayState[z.key]}></div>
              </div>
              <div className="mt-2 stat">{times[z.key]}</div><div className="text-neutral-400 text-sm">{z.timezone}</div>
            </div>
            ))}
          </div>
        </div>
      </section>

      <section id="numbers" className="py-12 md:py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-6 md:gap-8">
            <div className="rounded-2xl border border-neutral-800 bg-neutral-900/40 p-6 lift text-center reveal">
              <div className="flex items-center justify-center">
                <Counter target={800}/>
                <span className="text-5xl font-black">+</span>
              </div>
              <div className="mt-2 text-neutral-400">Films delivered</div>
            </div>
            <div className="rounded-2xl border border-neutral-800 bg-neutral-900/40 p-6 lift text-center reveal">
              <div className="flex items-center justify-center">
                <Counter target={15}/>
                <span className="text-5xl font-black">+</span>
              </div>
              <div className="mt-2 text-neutral-400">Industries</div>
            </div>
            <div className="rounded-2xl border border-neutral-800 bg-neutral-900/40 p-6 lift text-center reveal">
              <div className="flex items-center justify-center">
                <Counter target={3}/>
                <span className="text-5xl font-black">+</span>
              </div>
              <div className="mt-2 text-neutral-400">Countries</div>
            </div>
          </div>
        </div>
      </section>

      <section id="innovation" className="py-12 md:py-16 bg-neutral-900/40 border-y border-neutral-800">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8"><div className="uppercase text-xs tracking-widest text-gray-400">Innovation</div><h2 className="2xl:text-4xl xl:text-3xl md:text-2xl text-xl font-bold tracking-tight mt-1">Tech that accelerates craft</h2></div>
          <div className="grid md:grid-cols-3 gap-6 md:gap-8">
            <div className="sm:p-6 p-4 rounded-2xl border border-neutral-800 bg-neutral-900/50 lift card-border reveal"><h3 className="md:text-xl text-lg font-semibold">AI‑assisted workflows</h3><p className="text-neutral-400 mt-2 text-sm">Faster boards, captions, versioning; humans lead, AI assists.</p></div>
            <div className="sm:p-6 p-4 rounded-2xl border border-neutral-800 bg-neutral-900/50 lift card-border reveal"><h3 className="md:text-xl text-lg font-semibold">Sustainable production</h3><p className="text-neutral-400 mt-2 text-sm">Smaller crews, remote reviews, greener deliveries.</p></div>
            <div className="sm:p-6 p-4 rounded-2xl border border-neutral-800 bg-neutral-900/50 lift card-border reveal"><h3 className="md:text-xl text-lg font-semibold">Instant deliverables</h3><p className="text-neutral-400 mt-2 text-sm">Cloud review & clear handoffs for press‑ready assets.</p></div>
          </div>
        </div>
      </section>

      <section id="csr" className="py-12 md:py-16 bg-neutral-900/40 border-y border-neutral-800">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8">
            <div className="uppercase text-xs tracking-widest text-gray-400">CSR</div>
            <h2 className="2xl:text-4xl xl:text-3xl md:text-2xl text-xl font-bold tracking-tight mt-1">MAYCROFT Foundation</h2>
            <p className="mt-3 text-neutral-300">Through the MAYCROFT Foundation, we dedicate time and expertise to social impact — especially education. We teach <b>five children every year</b>; we’ve been doing this for <b>three years</b> so far, supporting <b>15 students</b> to date.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-6 md:gap-8">
            <div className="sm:p-6 p-4 rounded-2xl border border-neutral-800 bg-neutral-900/50 lift card-border reveal"><h3 className="md:text-xl text-lg font-semibold">Educate</h3><p className="text-neutral-400 mt-2 text-sm">Scholarships and mentorships that give children the tools to dream bigger.</p></div>
            <div className="sm:p-6 p-4 rounded-2xl border border-neutral-800 bg-neutral-900/50 lift card-border reveal"><h3 className="md:text-xl text-lg font-semibold">Empower</h3><p className="text-neutral-400 mt-2 text-sm">Support for underprivileged youth through career readiness and creative exposure.</p></div>
            <div className="sm:p-6 p-4 rounded-2xl border border-neutral-800 bg-neutral-900/50 lift card-border reveal"><h3 className="md:text-xl text-lg font-semibold">Elevate</h3><p className="text-neutral-400 mt-2 text-sm">Sustainable initiatives that nurture education, equality, and opportunity across communities.</p></div>
          </div>
        </div>
      </section>

      <section id="testimonials" className="py-12 md:py-16 bg-neutral-900/40 border-y border-neutral-800">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8"><div className="uppercase text-xs tracking-widest text-gray-400">What clients say</div><h2 className="2xl:text-4xl xl:text-3xl md:text-2xl text-xl font-bold tracking-tight mt-1">Real words. Real outcomes.</h2></div>
          <div className="grid md:grid-cols-3 gap-6 md:gap-8">
            <div className="rounded-2xl border border-neutral-800 bg-neutral-900/50 p-6 lift reveal"><p className="sm:text-lg text-base">“Fastest, most cinematic team we’ve worked with.”</p><div className="text-sm text-neutral-400 mt-3">VP Marketing, D2C brand</div></div>
            <div className="rounded-2xl border border-neutral-800 bg-neutral-900/50 p-6 lift reveal"><p className="sm:text-lg text-base">“They didn’t just film our story—they amplified our mission.”</p><div className="text-sm text-neutral-400 mt-3">Program Lead, NGO</div></div>
            <div className="rounded-2xl border border-neutral-800 bg-neutral-900/50 p-6 lift reveal"><p className="sm:text-lg text-base">“Crystal-clear process, zero surprises. We hit our launch.”</p><div className="text-sm text-neutral-400 mt-3">Brand Manager, FMCG</div></div>
          </div>
        </div>
      </section>

      <section id="cta" className="py-10 sm:py-16 md:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="2xl:text-4xl xl:text-3xl md:text-2xl text-xl font-bold tracking-tight">Ready to elevate your story?</h2>
          <p className="mt-3 text-neutral-300">Let’s plan your film or series of assets — fast, cinematic, and on budget.</p>
          <div className="mt-6 flex items-center justify-center gap-3">
            <a href="mailto:business@wilmarcs.com" className="rounded-full bg-white text-neutral-900 font-semibold px-5 py-3 hover:opacity-90">Email us</a>
            <a href={`${BASE_URL}book-a-call`} className="rounded-full border border-neutral-700 px-5 py-3">Book a call</a>
          </div>
        </div>
      </section>
    </>
  );
}

function Counter({ target }: { target: number }) {
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const runCounter = () => {
      let cur = 0;
      const step = Math.max(1, Math.floor(target / 60));
      const t = setInterval(() => {
        cur += step;
        if (cur >= target) {
          cur = target;
          clearInterval(t);
        }
        el.textContent = cur.toString();
      }, 16);
    };

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            if (!el.dataset.running) {
              el.dataset.running = "1";
              runCounter();
            }
          }
        });
      },
      { threshold: 0.6 }
    );

    observer.observe(el);

    return () => {
      observer.disconnect();
    };
  }, [target]);

  return <span ref={ref} className="stat" data-target={target} />;
}