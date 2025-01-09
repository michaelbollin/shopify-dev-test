import { redirect } from 'next/navigation';
import { loadQuestions } from '@/utils/questionLoader';

export default async function Home() {
  const questions = await loadQuestions();
  
  if (questions.length > 0) {
    redirect(`/shopify/${questions[0].id}`);
  }

  return null;
}
