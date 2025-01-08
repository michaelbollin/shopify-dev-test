import { loadQuestions } from '@/utils/questionLoader';
import { QuizPage } from '@/components/QuizPage';
import { notFound } from 'next/navigation';
import { Metadata } from 'next';

type Props = {
  params: { slug: string }
};

export async function generateMetadata({ params: { slug } }: Props): Promise<Metadata> {
  const questions = await loadQuestions();
  const question = questions.find(q => q.id === slug);
  
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

export default async function QuestionPage({ params: { slug } }: Props) {
  const questions = await loadQuestions();
  const currentQuestion = questions.find(q => q.id === slug);
  
  if (!currentQuestion) {
    notFound();
  }

  return <QuizPage initialQuestionId={slug} />;
} 