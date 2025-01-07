import { loadQuestions } from '@/utils/questionLoader';
import { QuizPage } from '@/components/QuizPage';
import { notFound } from 'next/navigation';
import { Metadata } from 'next';

type Props = {
  params: { slug: string }
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const questions = loadQuestions();
  const question = questions.find(q => q.id === params.slug);
  
  if (!question) return { title: 'Question not found' };

  return {
    title: `Quiz Question ${params.slug}`,
    description: question.title.replace(/[*#\[\]]/g, ''), // Remove markdown
  };
}

export async function generateStaticParams() {
  const questions = loadQuestions();
  return questions.map((question) => ({
    slug: question.id,
  }));
}

export default function QuestionPage({ params }: Props) {
  const questions = loadQuestions();
  const currentQuestion = questions.find(q => q.id === params.slug);
  
  if (!currentQuestion) {
    notFound();
  }

  return <QuizPage initialQuestionId={params.slug} />;
} 