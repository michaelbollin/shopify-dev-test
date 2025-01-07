import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

export type QuestionFrontmatter = {
  id: string;
  title: string;
  answers: {
    id: string;
    text: string;
  }[];
  correctAnswer: string;
};

export type Question = QuestionFrontmatter & {
  content: string;
};

export function loadQuestions(): Question[] {
  const questionsDirectory = path.join(process.cwd(), 'src/questions');
  const filenames = fs.readdirSync(questionsDirectory);
  
  return filenames
    .filter(filename => filename.endsWith('.md'))
    .map(filename => {
      const filePath = path.join(questionsDirectory, filename);
      const fileContents = fs.readFileSync(filePath, 'utf8');
      const { data, content } = matter(fileContents);
      
      return {
        ...(data as QuestionFrontmatter),
        content: content.trim(),
      };
    });
} 