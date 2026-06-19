import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://thejackwharffband.com';
  return [
    { url: baseUrl, changeFrequency: 'weekly' as const, priority: 1.0, lastModified: new Date() },
    { url: `${baseUrl}/music`, changeFrequency: 'weekly' as const, priority: 0.9, lastModified: new Date() },
    { url: `${baseUrl}/tour`, changeFrequency: 'weekly' as const, priority: 0.9, lastModified: new Date() },
    { url: `${baseUrl}/videos`, changeFrequency: 'weekly' as const, priority: 0.8, lastModified: new Date() },
    { url: `${baseUrl}/about`, changeFrequency: 'monthly' as const, priority: 0.7, lastModified: new Date() },
    { url: `${baseUrl}/contact`, changeFrequency: 'monthly' as const, priority: 0.6, lastModified: new Date() },
  ];
}
