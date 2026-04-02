import type { MetadataRoute } from 'next';
import { BASE_URL } from '@/lib/constants';
import industries from '@/data/industries.json';

export default function sitemap(): MetadataRoute.Sitemap {
  const topLevelRoutes = [
    '',
    'about-us',
    'blog',
    'contact',
    'industries',
    'portfolio',
    'services',
  ];

  const industryRoutes = Object.keys(industries).map((slug) => `industries/${slug}`);

  const allRoutes = [...topLevelRoutes, ...industryRoutes];

  const currentDate = new Date();

  return allRoutes.map((route) => ({
    url: `${BASE_URL}${route}`,
    lastModified: currentDate,
    changeFrequency: 'monthly',
    priority: route === '' ? 1 : 0.8,
  }));
}
