import { NextRequest, NextResponse } from 'next/server';
import { loadQuestions } from '@/utils/questionLoader';

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> | { id: string } }
) {
  const questions = await loadQuestions();
  const resolvedParams = await Promise.resolve(params);
  const currentIndex = questions.findIndex(q => q.id === resolvedParams.id);
  
  if (currentIndex === -1) {
    return NextResponse.json({ error: 'Question not found' }, { status: 404 });
  }

  const question = questions[currentIndex];
  
  // Add navigation metadata
  return NextResponse.json({
    ...question,
    index: currentIndex,
    previousId: currentIndex > 0 ? questions[currentIndex - 1].id : null,
    nextId: currentIndex < questions.length - 1 ? questions[currentIndex + 1].id : null,
    totalQuestions: questions.length
  });
} 