import { NextRequest, NextResponse } from 'next/server';
import { loadQuestions } from '@/utils/questionLoader';
import { questionOrder } from '@/config/questionOrder';

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  const questions = loadQuestions();
  const { id } = await params;
  
  // Find question by ID
  const question = questions.find(q => q.id === id);
  
  if (!question) {
    return NextResponse.json({ error: 'Question not found' }, { status: 404 });
  }

  // Find index in the ordered array
  const currentIndex = questionOrder.findIndex(q => q === question.id);
  
  // Determine previous and next based on position in array
  const previousId = currentIndex > 0 ? questionOrder[currentIndex - 1] : null;
  const nextId = currentIndex < questionOrder.length - 1 ? questionOrder[currentIndex + 1] : null;
  
  // Add navigation metadata
  return NextResponse.json({
    ...question,
    index: currentIndex,
    previousId,
    nextId,
    totalQuestions: questionOrder.length
  });
} 