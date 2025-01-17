import { QuizFinish } from '@/components/QuizFinish';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Quiz Results | Shopify Development Quiz',
  description: 'View your results from the Shopify Development Quiz. Test your knowledge of Shopify development concepts and features.',
  openGraph: {
    title: 'Quiz Results - Shopify Development Quiz',
    description: 'See how well you did on the Shopify Development Quiz!',
    type: 'article',
  },
};

export default function FinishPage() {
  return <QuizFinish />;
} 