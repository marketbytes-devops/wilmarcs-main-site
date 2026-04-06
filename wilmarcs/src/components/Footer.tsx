'use client';
import { useEffect } from 'react';
import { usePathname } from 'next/navigation';
import { BASE_URL } from "@/lib/constants";
type ServiceCategory = {
  cname: string;
  cdesc: string;
  cslug: string;
  cimg: string;
};
export default function Footer({ data }: { data: ServiceCategory[] }) {
  const pathname = usePathname() || '';
  useEffect(() => {
    function handleResize() {
      const container = document.querySelector('.container') as HTMLElement | null;
      if (!container) return;

      const raPadding = ((window.innerWidth - container.clientWidth) / 2) + 'px';

      document.querySelectorAll<HTMLElement>('.serviceslider .swiper-wrapper').forEach(element => {
        element.style.paddingLeft = raPadding;
      });
    }
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  return (
    <>
      <footer className="lg:pt-32 md:pt-24 sm:pt-16 pt-10 border-t border-neutral-800">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 lg:gap-4 gap-x-6 gap-y-12 pb-8">
            <div>
              <h5 className="lg:text-xl text-base font-bold md:mb-8 mb-6">Company</h5>
              <ul className="grid gap-4 footul text-sm">
                <li><a href={`${BASE_URL}about-our-team`}>About us</a></li>
                <li><a href={`${BASE_URL}video-production-services`}>Services</a></li>
                <li><a href={`${BASE_URL}video-production-portfolio`}>Portfolio</a></li>
                <li><a href={`${BASE_URL}industries-we-serve`}>Industries</a></li>
                {/* <li><a href={`${BASE_URL}blogs`}>Blogs</a></li> */}
                <li><a href={`${BASE_URL}book-a-call`}>Contact</a></li>
              </ul>
            </div>
            <div>
              <h5 className="lg:text-xl text-base font-bold md:mb-8 mb-6">Services</h5>
              <ul className="grid gap-4 footul text-sm">
                {Array.isArray(data) && data.map((item, i) => (<li key={i}><a href={`${BASE_URL}video-production-services#${item.cslug}`}>{item.cname}</a></li>))}
              </ul>
            </div>
            <div>
              <h5 className="lg:text-xl text-base font-bold md:mb-8 mb-6">Industries</h5>
              <ul className="grid gap-4 footul text-sm">
                <li><a className={pathname.startsWith('/industries/travel-hospitality') ? '' : ''} href={`${BASE_URL}industries/travel-hospitality-video-production`}>Travel & Hospitality</a></li>
                <li><a className={pathname.startsWith('/industries/tech-saas') ? '' : ''} href={`${BASE_URL}industries/tech-saas-video-production`}>Tech / SaaS</a></li>
                <li><a className={pathname.startsWith('/industries/real-estate') ? '' : ''} href={`${BASE_URL}industries/real-estate-video-production`}>Real Estate</a></li>
                <li><a className={pathname.startsWith('/industries/post-production') ? '' : ''} href={`${BASE_URL}industries/post-production-broadcast`}>Post-Production</a></li>
                <li><a className={pathname.startsWith('/industries/csr-video') ? '' : ''} href={`${BASE_URL}industries/csr-ngo-video-production-agency`}>CSR Video</a></li>
                <li><a className={pathname.startsWith('/industries/media-entertainment') ? '' : ''} href={`${BASE_URL}industries/media-entertainment-video-production`}>Media & Entertainment</a></li>
                <li><a className={pathname.startsWith('/industries/manufacturing') ? '' : ''} href={`${BASE_URL}industries/manufacturing-industry-video-services`}>Manufacturing</a></li>
                <li><a className={pathname.startsWith('/industries/healthcare') ? '' : ''} href={`${BASE_URL}industries/healthcare-medtech-video-makers`}>Healthcare</a></li>
                <li><a className={pathname.startsWith('/industries/fintech') ? '' : ''} href={`${BASE_URL}industries/fintech-video-production-services`}>FinTech</a></li>
                <li><a className={pathname.startsWith('/industries/education') ? '' : ''} href={`${BASE_URL}industries/education-edtech-video-production`}>Education</a></li>
                <li><a className={pathname.startsWith('/industries/e-commerce') ? '' : ''} href={`${BASE_URL}industries/ecommerce-retail-video-production`}>E-Commerce</a></li>
              </ul>
            </div>
            <div>
              <h5 className="lg:text-xl text-base font-bold md:mb-8 mb-6">Connect</h5>
              <ul className="grid gap-8">
                <li>
                  <a href="">
                    <h6 className="font-bold mb-2 md:text-base text-sm">India</h6>
                    <div className="grid md:text-sm text-xs gap-2">
                      <span>Brigade Summit Offices, 8th Floor, Summit A,</span>
                      <span>Garudachar Palya, Mahadevapura, Bengaluru,</span>
                      <span>Karnataka - 560048</span>
                      <span>Ph no : +91 77000 17110</span>
                    </div>
                  </a>
                </li>
                <li>
                  <a href="">
                    <h6 className="font-bold mb-2 md:text-base text-sm">Australia</h6>
                    <div className="grid md:text-sm text-xs gap-2">
                      <span>Fishburners, Level 2/11 York St,</span>
                      <span>Sydney NSW 2000, Australia</span>
                      <span>Ph no : +61 490 792 544</span>
                    </div>
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="lg:py-12 pt-4 pb-20 flex lg:flex-row flex-col-reverse gap-6 items-center lg:justify-between justify-center">
            <span className="sm:text-sm text-xs">&copy; 2025 Wilmarcs Motion Pictures. All Rights Reserved.</span>
            <ul className="flex items-center sm:gap-6 gap-4 md:text-lg sm:text-base text-sm footul">
              <li><a href="https://www.linkedin.com/company/wilmarcs-motion-pictures/?originalSubdomain=in" target="_blank"><i className="bi bi-linkedin"></i></a></li>
              <li><a href="https://www.youtube.com/@wilmarcsmotionpictures_ind" target="_blank"><i className="bi bi-youtube"></i></a></li>
              <li><a href="https://www.instagram.com/wilmarcsmotionpictures" target="_blank"><i className="bi bi-instagram"></i></a></li>
              <li><a href="https://www.facebook.com/wilmarcs/" target="_blank"><i className="bi bi-facebook"></i></a></li>
              {/* <li><a href=""><i className="bi bi-dribbble"></i></a></li>
              <li><a href=""><i className="bi bi-behance"></i></a></li>
              <li><a href=""><i className="bi bi-twitter-x"></i></a></li> */}
            </ul>
          </div>
        </div>
      </footer>
      <div className="bg-black fixed z-10 left-0 bottom-0 w-full py-2 px-4 lg:hidden flex items-center justify-between gap-2">
        <a href={`${BASE_URL}`} className="flex flex-col gap-1 items-center justify-center">
          <svg className={`sm:w-6 sm:h-6 w-4 h-4 ${pathname === '/' ? 'fill-white stroke-white' : 'stroke-gray-400'}`} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 22"><path strokeWidth="1.2" d="M19 17.75V9.565c0-.574 0-.862-.074-1.126a2 2 0 0 0-.318-.65c-.163-.221-.39-.397-.843-.75l-5.8-4.511c-.703-.547-1.054-.82-1.442-.925a2 2 0 0 0-1.046 0c-.388.105-.739.378-1.442.925l-5.8 4.511c-.453.353-.68.529-.843.75a2 2 0 0 0-.318.65C1 8.703 1 8.991 1 9.565v8.185c0 .698 0 1.047.086 1.33a2 2 0 0 0 1.333 1.334c.284.086.633.086 1.331.086s1.047 0 1.33-.086a2 2 0 0 0 1.334-1.334c.086-.283.086-.632.086-1.33V15.2c0-1.12 0-1.68.218-2.108a2 2 0 0 1 .874-.874C8.02 12 8.58 12 9.7 12h.6c1.12 0 1.68 0 2.108.218a2 2 0 0 1 .874.874c.218.428.218.988.218 2.108v2.55c0 .698 0 1.047.086 1.33a2 2 0 0 0 1.333 1.334c.284.086.633.086 1.331.086s1.047 0 1.33-.086a2 2 0 0 0 1.334-1.334c.086-.283.086-.632.086-1.33Z"></path></svg>
          <span className={`${pathname.startsWith('/about') ? 'font-semibold text-white' : 'font-extralight text-gray-300'} lg:text-sm sm:text-xs text-[10px]`}>Home</span>
        </a>
        <a href={`${BASE_URL}about-our-team`} className="flex flex-col gap-1 items-center justify-center">
          <svg className={`sm:w-6 sm:h-6 w-4 h-4 ${pathname.startsWith('/about') ? 'fill-white stroke-white' : 'stroke-gray-400'}`} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 19 10"><path  strokeWidth="0.8" d="M0.35452 0.345714C0.377982 0.435714 0.702056 1.57857 1.381 3.97857C1.53643 4.52429 1.68161 5.03857 1.7036 5.12143C1.72707 5.20429 1.77839 5.38714 1.81945 5.52857C1.98808 6.12429 2.14939 6.69429 2.18018 6.80714C2.21244 6.92143 2.29016 7.19857 2.4236 7.66429C2.45586 7.77857 2.56878 8.18 2.67582 8.55714L2.86939 9.24286L4.78303 9.24714L6.69668 9.25L6.69815 8.86857C6.69815 8.59429 6.70548 8.43143 6.72307 8.29286C6.84332 7.38571 7.13953 6.66 7.6425 6.05143C7.76421 5.90429 10.0078 3.72857 10.0371 3.72857C10.0577 3.72857 10.1119 3.85571 10.153 4.00571C10.1794 4.09571 10.1852 4.16714 10.1911 4.43571C10.194 4.61286 10.2028 4.76857 10.2116 4.78286C10.2234 4.80429 11.0739 6.07714 11.3745 6.52143C11.7176 7.03 12.0021 7.46 12.0256 7.50571C12.1003 7.64857 12.1238 7.89143 12.0783 8.05571C12.0461 8.17571 11.9772 8.29429 11.8804 8.39714C11.7396 8.54714 11.7865 8.55286 11.307 8.32714C11.0783 8.22 10.8055 8.09143 10.6999 8.04286C10.5958 7.99429 10.3143 7.86143 10.0767 7.75C9.42857 7.44571 9.36992 7.41857 9.36698 7.42429C9.36405 7.42714 9.4447 7.56714 9.54588 7.73571C9.6456 7.90429 9.82157 8.2 9.93595 8.39286C10.0503 8.58571 10.2116 8.85714 10.2952 8.99571L10.4463 9.25H12.9333H15.4217L15.5713 8.78143C15.7091 8.34571 16.2165 6.77714 16.4115 6.17857C16.4585 6.03286 16.5948 5.61571 16.7122 5.25C16.9248 4.58857 17.0186 4.30143 17.1961 3.75714C17.2474 3.6 17.3794 3.19143 17.4893 2.85C17.5993 2.50857 17.7313 2.1 17.7826 1.94286C17.8339 1.78571 17.9058 1.56429 17.9425 1.45C17.9791 1.33571 18.0818 1.02143 18.1683 0.75L18.3281 0.257143L16.8896 0.252857C15.6476 0.25 15.4335 0.252857 15.3191 0.271429C15.171 0.297143 14.9671 0.36 14.8352 0.421429C14.5008 0.578572 14.1929 0.881429 14.0287 1.21429C13.9935 1.28429 13.8791 1.59 13.772 1.89286C13.6665 2.19571 13.5198 2.60714 13.4494 2.80714C13.3776 3.00714 13.2456 3.38143 13.1547 3.63857C13.0638 3.89714 12.986 4.10714 12.9802 4.10714C12.9758 4.10714 12.9538 4.06 12.9333 4.00286C12.9113 3.94714 12.8423 3.76143 12.7778 3.59286C12.6781 3.32857 12.5711 3.04714 12.291 2.30714C12.2602 2.22429 12.1883 2.03429 12.1311 1.88571C11.8819 1.22571 11.7557 0.892857 11.6399 0.585714L11.5167 0.257143L9.17782 0.252857L6.84039 0.25L6.7656 0.417143C6.57497 0.848572 5.61008 3.01571 5.5177 3.22143C5.4869 3.28857 5.38426 3.51857 5.28894 3.73429L5.11444 4.12714L5.08951 4.02714C5.07631 3.97286 5.02792 3.77143 4.98246 3.57857C4.937 3.38571 4.89301 3.20286 4.88568 3.17143C4.87835 3.14 4.83142 2.94429 4.78303 2.73571C4.46483 1.38 4.4487 1.32429 4.31232 1.1C4.08796 0.73 3.76096 0.47 3.3489 0.335714C3.08348 0.25 3.08348 0.25 1.64202 0.25H0.328125L0.35452 0.345714Z"/></svg>
          <span className={`${pathname.startsWith('/about') ? 'font-semibold text-white' : 'font-extralight text-gray-300'} lg:text-sm sm:text-xs text-[10px]`}>About us</span>
        </a>
        <a href={`${BASE_URL}video-production-services`} className="flex flex-col gap-1 items-center justify-center">
          <svg className={`sm:w-6 sm:h-6 w-4 h-4 ${pathname.startsWith('/services') ? 'fill-white stroke-black' : 'stroke-gray-400'}`} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 22"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.2" d="M7.3 10.9a3.8 3.8 0 0 0-1.458 1.287.925.925 0 0 0 0 1.026c.369.549.864.99 1.458 1.287M12.889 10.9a3.8 3.8 0 0 1 1.458 1.287.925.925 0 0 1 0 1.026c-.37.55-.864.99-1.458 1.287"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.2" d="M7 19h6c4.5 0 6-1.5 6-6V7c0-4.5-1.5-6-6-6H7C2.5 1 1 2.5 1 7v6c0 4.5 1.5 6 6 6M1.207 6.409l17.298-.01"></path></svg>
          <span className={`${pathname.startsWith('/services') ? 'font-semibold text-white' : 'font-extralight text-gray-300'} lg:text-sm sm:text-xs text-[10px]`}>Services</span>
        </a>
        <a href={`${BASE_URL}video-production-portfolio`} className="flex flex-col gap-1 items-center justify-center">
          <svg className={`sm:w-6 sm:h-6 w-4 h-4 ${pathname.startsWith('/portfolio') ? 'fill-white stroke-black' : 'stroke-gray-400'}`} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 22"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.2" d="M7 19h6c4.5 0 6-1.5 6-6V7c0-4.5-1.5-6-6-6H7C2.5 1 1 2.5 1 7v6c0 4.5 1.5 6 6 6"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.2" d="M7.3 8.2a1.8 1.8 0 1 0 0-3.6 1.8 1.8 0 0 0 0 3.6M1.604 16.255l4.437-2.98c.71-.476 1.737-.422 2.376.127l.297.26c.702.604 1.835.604 2.537 0l3.745-3.212c.701-.603 1.835-.603 2.537 0L19 11.71"></path></svg>
          <span className={`${pathname.startsWith('/portfolio') ? 'font-semibold text-white' : 'font-extralight text-gray-300'} lg:text-sm sm:text-xs text-[10px]`}>Portfolio</span>
        </a>
        <a href={`${BASE_URL}industries-we-serve`} className="flex flex-col gap-1 items-center justify-center">
          <svg className={`sm:w-6 sm:h-6 w-4 h-4 ${pathname.startsWith('/industries') ? 'fill-white stroke-white' : 'stroke-gray-400'}`} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 18"><path  strokeWidth="1" d="M0.599609 1.74442C0.599609 1.41109 0.705078 1.13728 0.916016 0.922991C1.12695 0.708705 1.39648 0.601562 1.72461 0.601562H3.97461C4.30273 0.601562 4.57227 0.708705 4.7832 0.922991C4.99414 1.13728 5.09961 1.41109 5.09961 1.74442V7.13728L10.6191 4.13728C10.9004 3.99442 11.1699 4.00632 11.4277 4.17299C11.6855 4.31585 11.8262 4.55394 11.8496 4.88728V7.13728L17.3691 4.13728C17.6504 3.99442 17.9199 4.00632 18.1777 4.17299C18.4355 4.31585 18.5762 4.55394 18.5996 4.88728V10.3158V14.8873C18.5762 15.3635 18.4121 15.7682 18.1074 16.1016C17.7793 16.4111 17.3809 16.5778 16.9121 16.6016H2.28711C1.81836 16.5778 1.41992 16.4111 1.0918 16.1016C0.787109 15.7682 0.623047 15.3635 0.599609 14.8873V12.0301V10.3158V1.74442ZM8.75586 10.6016C8.4043 10.6254 8.2168 10.8158 8.19336 11.173V12.8873C8.2168 13.2444 8.4043 13.4349 8.75586 13.4587H10.4434C10.7949 13.4349 10.9824 13.2444 11.0059 12.8873V11.173C10.9824 10.8158 10.7949 10.6254 10.4434 10.6016H8.75586ZM3.69336 11.173V12.8873C3.7168 13.2444 3.9043 13.4349 4.25586 13.4587H5.94336C6.29492 13.4349 6.48242 13.2444 6.50586 12.8873V11.173C6.48242 10.8158 6.29492 10.6254 5.94336 10.6016H4.25586C3.9043 10.6254 3.7168 10.8158 3.69336 11.173ZM13.2559 10.6016C12.9043 10.6254 12.7168 10.8158 12.6934 11.173V12.8873C12.7168 13.2444 12.9043 13.4349 13.2559 13.4587H14.9434C15.2949 13.4349 15.4824 13.2444 15.5059 12.8873V11.173C15.4824 10.8158 15.2949 10.6254 14.9434 10.6016H13.2559Z"/></svg>
          <span className={`${pathname.startsWith('/industries') ? 'font-semibold text-white' : 'font-extralight text-gray-300'} lg:text-sm sm:text-xs text-[10px]`}>Industries</span>
        </a>
        <a href={`${BASE_URL}book-a-call`} className="flex flex-col gap-1 items-center justify-center">
          <svg className={`sm:w-6 sm:h-6 w-4 h-4 ${pathname.startsWith('/contact') ? 'fill-white stroke-white' : 'stroke-gray-400'}`} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 22"><path strokeMiterlimit="10" strokeWidth="1.2" d="M18.475 15.38c0 .306-.069.621-.213.927a3.5 3.5 0 0 1-.578.867c-.417.459-.876.79-1.394 1.003a4.3 4.3 0 0 1-1.657.323c-.867 0-1.794-.204-2.771-.62a15 15 0 0 1-2.924-1.683 24.4 24.4 0 0 1-2.789-2.38 24 24 0 0 1-2.371-2.78c-.697-.969-1.258-1.938-1.666-2.899Q1.5 6.687 1.5 5.36c0-.578.102-1.13.306-1.64.204-.519.527-.995.978-1.42.544-.535 1.139-.799 1.768-.799.238 0 .476.051.688.153.221.102.417.255.57.476l1.972 2.78c.152.212.263.407.34.595.076.178.119.357.119.518 0 .204-.06.408-.179.603-.11.196-.272.4-.476.604l-.646.672a.46.46 0 0 0-.136.34c0 .068.008.127.026.195.025.068.05.119.067.17.154.28.417.646.791 1.088.382.442.79.892 1.233 1.343.459.45.9.867 1.351 1.25.442.373.807.628 1.096.781q.065.028.153.069a.6.6 0 0 0 .213.034.47.47 0 0 0 .348-.145l.646-.637q.32-.321.613-.476c.195-.12.39-.179.603-.179q.24-.002.518.11c.188.077.383.188.595.332l2.814 1.998c.221.152.374.331.468.543.085.213.136.425.136.663Z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.2" d="M15.525 7.45c0-.51-.4-1.292-.995-1.93-.544-.586-1.266-1.045-1.98-1.045M18.5 7.45c0-3.29-2.66-5.95-5.95-5.95"></path></svg>
          <span className={`${pathname.startsWith('/contact') ? 'font-semibold text-white' : 'font-extralight text-gray-300'} lg:text-sm sm:text-xs text-[10px]`}>Contact</span>
        </a>
      </div>
    </>
  );
}