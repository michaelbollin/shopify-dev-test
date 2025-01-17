import { redirect } from 'next/navigation';
import { loadQuestions } from '@/utils/questionLoader';
import { questionOrder } from '@/config/questionOrder';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Shopify Development Quiz',
  description: 'Test your knowledge of Shopify development with our comprehensive quiz. Learn about themes, APIs, webhooks, and more.',
  openGraph: {
    title: 'Shopify Development Quiz',
    description: 'Challenge yourself with our Shopify development quiz and test your expertise in themes, APIs, webhooks, and more.',
    type: 'website',
  },
};

export default async function Home() {
  const questions = await loadQuestions();
  
  if (questions.length > 0 && questionOrder.length > 0) {
    // Get the first question ID from the order array
    const firstQuestionBase = questionOrder[0];
    const firstQuestion = questions.find(q => 
      q.id === firstQuestionBase || q.id === `shopify-${firstQuestionBase}`
    );
    if (firstQuestion) {
      redirect(`/${firstQuestion.id}`);
    }
  }

  return null;
}
