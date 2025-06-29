import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://ahmed-abd-elmohsen.vercel.app';
  
  // قائمة الصفحات الثابتة في موقعك
  const routes = ['', '/resume'].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: route === '' ? 1 : 0.8,
  }));
  
  // يمكنك إضافة صفحات ديناميكية (مثل المشاريع الفردية) هنا
  const projects = [
    {
      slug: 'muslim-azkar-app',
      lastModified: new Date(),
    },
    {
      slug: 'real-state-website',
      lastModified: new Date(),
    },
    {
      slug: 'e-commerce-website',
      lastModified: new Date(),
    },
  ].map((project) => ({
    url: `${baseUrl}/projects/${project.slug}`,
    lastModified: project.lastModified,
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }));
  
  return [...routes, ...projects];
}