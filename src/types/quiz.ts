export interface Answer {
  id: string;
  text: string;
}

export interface SEO {
  title: string;
  description: string;
}

export interface Question {
  id: string;
  title: string;
  content: string;
  answers: Answer[];
  correctAnswer: string;
  previousId: string | null;
  nextId: string | null;
  index: number;
  totalQuestions: number;
  seo?: SEO;
} 