import { redirect } from 'next/navigation';
import { loadQuestions } from '@/utils/questionLoader';

export default function Home() {
  const questions = loadQuestions();
  const firstQuestion = questions[0];
  
  if (firstQuestion) {
    redirect(`/shopify/${firstQuestion.id}`);
  }
  
  return null;
}
