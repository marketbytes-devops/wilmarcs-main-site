'use client';
import Image from "next/image";
// import { EffectCoverflow } from 'swiper/modules';
// import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import "lightgallery/css/lightgallery.css";
import "lightgallery/css/lg-video.css";
import "lightgallery/css/lg-thumbnail.css";
import LightGallery from 'lightgallery/react';
import lgVideo from 'lightgallery/plugins/video';
type Portfolio = {
  cname: string;
  cdesc: string;
  cslug: string;
  portfolio: [{
    pid: string;
    fkcid: string;
    ptitle: string;
    pimg: string;
    plink: string;
  }]
};
export default function Portfolio({ data }: { data: Portfolio[] }) {
  return (
    <>
      <section className="xl:pt-48 lg:pt-40 md:pt-32 pt-28 lg:pb-24 md:pb-16 pb-12 bg-black relative">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative before:content-[''] before:absolute before:left-0 before:bottom-0 before:w-full before:h-full before:bg-gradient-to-r before:from-black before:via-transparent before:to-black before:z-2 before:pointer-events-none before:touch-auto">
            <video src={`${process.env.NEXT_PUBLIC_API_URL}assets/web/portfolio-banner.mp4`} autoPlay muted loop playsInline className="block ml-auto w-full object-cover rounded-xl" />
          </div>
          <div className="max-w-xl mx-auto text-center xl:mt-32 lg:mt-24 md:mt-16 sm:mt-12 mt-8">
            <h1 className="2xl:text-6xl xl:text-4xl md:text-3xl text-2xl font-normal text-white lg:mb-8 md:mb-6 sm:mb-4 mb-3">Works That <strong>Speaks</strong></h1>
            <p className="text-[#b5b5b5] lg:text-2xl md:text-xl text-lg leading-relaxed">From concept to creation, our work speaks for itself. Explore the projects that bring ideas to life.</p>
          </div>
        </div>
      </section>
      <section className="lg:pt-24 md:pt-12 pt-4 2xl:pb-52 xl:pb-44 lg:pb-36 md:pb-28 sm:pb-20 pb-12 relative bg-[#1D1D1F] before:content-[''] before:absolute before:left-0 before:bottom-0 before:w-full before:h-full before:bg-gradient-to-t before:from-black before:via-transparent before:from-25% before:to-70% before:via-45% before:to-black before:z-1">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-1">
          <div className="grid lg:grid-cols-2 grid-cols-1 gap-x-40 xl:gap-y-20 md:gap-y-16 gap-y-12 items-center justify-center">
            
            {Array.isArray(data) && data.map((item, i) => (
            <div className={(data.length%2 != 0 && (i == (data.length-1)))?"lg:col-span-2 col-span-1 flex justify-center lastbox":""} key={i}>
              <LightGallery plugins={[lgVideo]} download={false}>
                {Array.isArray(item.portfolio) && item.portfolio.map((item1, k) => (<a href={item1.plink} key={k} className={(k==0)?"layeredblock":"hidden"}>
                  <Image src={process.env.NEXT_PUBLIC_ASSET_URL + item1.pimg} alt={item1.ptitle} className="block w-full rounded-3xl shadow-md lg:h-80 md:h-72 h-56 object-cover" width={600} height={360} priority />
                  <h4 className="text-white px-4 sm:mt-6 mt-4 xl:text-2xl md:text-xl text-lg">{item.cname}</h4>
                </a>))}
              </LightGallery>
            </div>))}

          </div>
          {/* <div className="text-center">
            <a href="https://www.youtube.com/@wilmarcsmotionpictures_ind" target="_blank" className="grid gap-5">
              <span className="text-2xl">View all</span>
              <span className="grid -space-y-4 text-white text-center justify-center items-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-8 opacity-50" fill="currentColor" viewBox="0 0 16 16"> <path fillRule="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708"/> </svg>
                <svg xmlns="http://www.w3.org/2000/svg" className="w-8 opacity-75" fill="currentColor" viewBox="0 0 16 16"> <path fillRule="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708"/> </svg>
              </span>
            </a>
          </div> */}
        </div>
      </section>
    </>
  );
}
