import { MetadataRoute } from 'next';
import { loadQuestions } from '@/utils/questionLoader';

export default function sitemap(): MetadataRoute.Sitemap {
  const questions = loadQuestions();
  const baseUrl = 'https://liquidquestions.com';

  // Base routes
  const routes = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 1,
    },
    {
      url: `${baseUrl}/finish`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 0.8,
    },
  ];

  // Add question routes
  const questionRoutes = questions.map((question) => ({
    url: `${baseUrl}/${question.id}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.9,
  }));

  return [...routes, ...questionRoutes];
} 