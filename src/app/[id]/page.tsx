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

  return {
    title: question.seo?.title || question.title,
    description: question.seo?.description,
    openGraph: {
      title: question.seo?.title || question.title,
      description: question.seo?.description,
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

  return (
    <>
      {/* Hidden SEO content - only visible to search engines */}
      <div className="hidden">
        <h1>{question.title}</h1>
        <div dangerouslySetInnerHTML={{ __html: question.content }} />
        <h2>Answer Options:</h2>
        <ul>
          {question.answers.map(answer => (
            <li key={answer.id}>{answer.text}</li>
          ))}
        </ul>
      </div>
      
      {/* Interactive quiz component */}
      <QuizPage initialQuestionId={question.id} />
    </>
  );
} 