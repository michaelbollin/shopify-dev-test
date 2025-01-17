import { loadQuestions } from '@/utils/questionLoader';
import { QuizPage } from '@/components/QuizPage';
import { notFound } from 'next/navigation';
import { Metadata } from 'next';
import { questionOrder } from '@/config/questionOrder';

type Props = {
  params: Promise<{ id: string }> | { id: string }
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const resolvedParams = await Promise.resolve(params);
  const questions = await loadQuestions();
  
  // Find question by ID
  const question = questions.find(q => q.id === resolvedParams.id);
  
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
    id: question.id,
  }));
}

export default async function QuestionPage({ params }: Props) {
  const questions = await loadQuestions();
  const resolvedParams = await Promise.resolve(params);
  
  // Find question by ID
  const question = questions.find(q => q.id === resolvedParams.id);

  if (!resolvedParams.id || !question) {
    notFound();
  }

  return <QuizPage initialQuestionId={question.id} />;
} 