import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'standalone',
  reactStrictMode: true,
  trailingSlash: false,
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'img.youtube.com',
      },
      {
        protocol: 'https',
        hostname: 'manage.wilmarcs.com',
      },
    ],
  },
  async redirects() {
    return [
      { source: '/about-us', destination: '/about-our-team', permanent: true },
      { source: '/services', destination: '/video-production-services', permanent: true },
      { source: '/portfolio', destination: '/video-production-portfolio', permanent: true },
      { source: '/industries', destination: '/industries-we-serve', permanent: true },
      { source: '/contact', destination: '/book-a-call', permanent: true },
      { source: '/industries/travel-hospitality', destination: '/industries/travel-hospitality-video-production', permanent: true },
      { source: '/industries/tech-saas', destination: '/industries/tech-saas-video-production', permanent: true },
      { source: '/industries/real-estate', destination: '/industries/real-estate-video-production', permanent: true },
      { source: '/industries/post-production', destination: '/industries/post-production-broadcast', permanent: true },
      { source: '/industries/csr-video', destination: '/industries/csr-ngo-video-production-agency', permanent: true },
      { source: '/industries/media-entertainment', destination: '/industries/media-entertainment-video-production', permanent: true },
      { source: '/industries/manufacturing', destination: '/industries/manufacturing-industry-video-services', permanent: true },
      { source: '/industries/healthcare', destination: '/industries/healthcare-medtech-video-makers', permanent: true },
      { source: '/industries/fintech', destination: '/industries/fintech-video-production-services', permanent: true },
      { source: '/industries/education', destination: '/industries/education-edtech-video-production', permanent: true },
      { source: '/industries/e-commerce', destination: '/industries/ecommerce-retail-video-production', permanent: true },
    ];
  },
};

export default nextConfig;
