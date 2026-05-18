import { MetadataRoute } from 'next';
import { fetchBlogs } from '@/data/blogsFetcher';
import { examMetadata } from '@/app/[examId]/examData';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'https://railgrind.com';

  // 1. Static Pages
  const staticPages = [
    '',
    '/about-us',
    '/blogs',
    '/current-updates',
    '/exams',
    '/help-centre',
    '/live-tests',
    '/privacy-policy',
    '/pyqs',
    '/study-material',
    '/test-series',
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'daily' as const,
    priority: route === '' ? 1.0 : 0.8,
  }));

  // 2. Dynamic Exam Pages
  const examIds = Object.keys(examMetadata);
  const examPages = examIds.map((examId) => ({
    url: `${baseUrl}/${examId}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.9,
  }));

  // 3. Dynamic Exam Subpages (20 detailed categories per exam)
  const subpages = [
    'notification',
    'vacancy',
    'dates',
    'eligibility',
    'medical',
    'pattern',
    'syllabus',
    'pyqs',
    'mocks',
    'strategy',
    'job-profile',
    'salary',
    'preference',
    'centres',
    'admit-card',
    'day-rules',
    'normalization',
    'answer-key',
    'cutoffs',
    'result',
  ];

  const examSubpages = examIds.flatMap((examId) =>
    subpages.map((subpage) => ({
      url: `${baseUrl}/${examId}/${subpage}`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 0.7,
    }))
  );

  // 4. Dynamic Blog Post Pages (Fetched dynamically from Supabase or Static JSON)
  let blogPages: MetadataRoute.Sitemap = [];
  try {
    const blogs = await fetchBlogs();
    blogPages = blogs.map((blog) => ({
      url: `${baseUrl}/blog/${blog.id}`,
      lastModified: new Date(blog.date || Date.now()),
      changeFrequency: 'weekly' as const,
      priority: 0.8,
    }));
  } catch (error) {
    console.error("Failed to generate dynamic blog sitemap entries:", error);
  }

  return [...staticPages, ...examPages, ...examSubpages, ...blogPages];
}
