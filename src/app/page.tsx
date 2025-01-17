import { redirect } from 'next/navigation';
import { loadQuestions } from '@/utils/questionLoader';
import { questionOrder } from '@/config/questionOrder';

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
