import { loadQuestions } from '@/utils/questionLoader';
import { NextResponse } from 'next/server';

export async function GET() {
  const questions = loadQuestions();
  return NextResponse.json(questions);
} 