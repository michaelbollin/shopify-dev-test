import { loadQuestions } from '@/utils/questionLoader';
import { QuizPage } from '@/components/QuizPage';
import { notFound } from 'next/navigation';
import { Metadata } from 'next';

type Props = {
  params: Promise<{ slug: string }> | { slug: string }
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const resolvedParams = await Promise.resolve(params);
  const questions = await loadQuestions();
  const question = questions.find(q => q.id === resolvedParams.slug);
  
  if (!question) return { title: 'Question not found' };

  const cleanTitle = question.title
    .replace(/[*#\[\]]/g, '')
    .replace(/\n/g, ' ')
    .trim();

  return {
    title: `${cleanTitle} | Quiz Question`,
    description: `Test your knowledge: ${cleanTitle}`,
    openGraph: {
      title: cleanTitle,
      description: `Quiz question about ${cleanTitle.split('?')[0]}`,
      type: 'article',
    },
  };
}

export async function generateStaticParams() {
  const questions = await loadQuestions();
  return questions.map((question) => ({
    slug: question.id,
  }));
}

export default async function QuestionPage({ params }: Props) {
  const questions = await loadQuestions();
  const resolvedParams = await Promise.resolve(params);
  
  if (!resolvedParams.slug || !questions.find(q => q.id === resolvedParams.slug)) {
    notFound();
  }

  return <QuizPage initialQuestionId={resolvedParams.slug} />;
} 