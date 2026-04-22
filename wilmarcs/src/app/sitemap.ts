import type { MetadataRoute } from 'next';
import { BASE_URL } from '@/lib/constants';
import industries from '@/data/industries.json';
import { blogData } from '@/data/blogData';

export default function sitemap(): MetadataRoute.Sitemap {
  const topLevelRoutes = [
    '',
    'about-our-team',
    'blog',
    'book-a-call',
    'industries-we-serve',
    'video-production-portfolio',
    'video-production-services',
    'corporate-video-production-agency-in-bengaluru',
    'corporate-film-production-company-bengaluru',
  ];

  const industryRoutes = Object.keys(industries).map((slug) => `industries/${slug}`);
  const blogRoutes = blogData.map((blog) => `blog/${blog.blslug}`);

  const allRoutes = [...topLevelRoutes, ...industryRoutes, ...blogRoutes];

  const currentDate = new Date();

  return allRoutes.map((route) => ({
    url: `${BASE_URL}${route}`,
    lastModified: currentDate,
    changeFrequency: 'monthly',
    priority: route === '' ? 1 : 0.8,
  }));
}
