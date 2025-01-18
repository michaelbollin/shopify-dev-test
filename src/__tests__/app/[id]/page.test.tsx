import { render } from '@testing-library/react';
import QuestionPage, { generateMetadata, generateStaticParams } from '@/app/[id]/page';
import { loadQuestions } from '@/utils/questionLoader';
import { notFound } from 'next/navigation';

// Mock the loadQuestions utility
jest.mock('@/utils/questionLoader', () => ({
  loadQuestions: jest.fn(),
}));

// Mock next/navigation
jest.mock('next/navigation', () => ({
  notFound: jest.fn().mockImplementation(() => {
    throw new Error('NEXT_NOT_FOUND');
  }),
}));

// Mock the QuizPage component since it's a client component
jest.mock('@/components/QuizPage', () => ({
  QuizPage: ({ initialQuestionId }: { initialQuestionId: string }) => (
    <div data-testid="quiz-page">Mock Quiz Page: {initialQuestionId}</div>
  ),
}));

const mockQuestions = [
  {
    id: 'test-question',
    title: 'Test Question',
    content: '# Test content',
    answers: [
      { id: 'a', text: 'Answer A' },
      { id: 'b', text: 'Answer B' },
    ],
    correctAnswer: 'a',
    index: 0,
    totalQuestions: 2,
  },
  {
    id: 'seo-question',
    title: 'Regular Title',
    content: '# Test content',
    answers: [
      { id: 'a', text: 'Answer A' },
      { id: 'b', text: 'Answer B' },
    ],
    correctAnswer: 'a',
    index: 1,
    totalQuestions: 2,
    seo: {
      title: 'SEO Test Title',
      description: 'SEO Test Description'
    }
  },
];

describe('Question Page', () => {
  beforeEach(() => {
    jest.clearAllMocks();
    (loadQuestions as jest.Mock).mockResolvedValue(mockQuestions);
  });

  it('returns 404 for invalid question id', async () => {
    (loadQuestions as jest.Mock).mockResolvedValue([]);
    await expect(QuestionPage({ params: Promise.resolve({ id: 'invalid-id' }) }))
      .rejects
      .toThrow('NEXT_NOT_FOUND');
    expect(notFound).toHaveBeenCalled();
  });

  it('renders the page for valid question id', async () => {
    const page = await QuestionPage({ params: Promise.resolve({ id: 'test-question' }) });
    const { container } = render(page);
    expect(container).toMatchSnapshot();
  });

  it('returns 404 when params is undefined', async () => {
    await expect(QuestionPage({ params: undefined }))
      .rejects
      .toThrow('NEXT_NOT_FOUND');
    expect(notFound).toHaveBeenCalled();
  });

  it('renders SEO content correctly', async () => {
    const page = await QuestionPage({ params: Promise.resolve({ id: 'test-question' }) });
    const { container } = render(page);
    
    const hiddenDiv = container.querySelector('.hidden');
    expect(hiddenDiv).toBeInTheDocument();
    expect(hiddenDiv).toHaveTextContent('Test Question');
    expect(hiddenDiv).toHaveTextContent('Answer A');
    expect(hiddenDiv).toHaveTextContent('Answer B');
  });

  describe('generateMetadata', () => {
    it('generates metadata for question without SEO data', async () => {
      const metadata = await generateMetadata({ 
        params: Promise.resolve({ id: 'test-question' })
      });
      
      expect(metadata).toEqual({
        title: 'Test Question',
        openGraph: {
          title: 'Test Question',
          type: 'article',
        },
      });
    });

    it('generates metadata for question with SEO data', async () => {
      const metadata = await generateMetadata({ 
        params: Promise.resolve({ id: 'seo-question' })
      });
      
      expect(metadata).toEqual({
        title: 'SEO Test Title',
        description: 'SEO Test Description',
        openGraph: {
          title: 'SEO Test Title',
          description: 'SEO Test Description',
          type: 'article',
        },
      });
    });

    it('returns default metadata for invalid question', async () => {
      (loadQuestions as jest.Mock).mockResolvedValue([]);
      const metadata = await generateMetadata({ 
        params: Promise.resolve({ id: 'invalid-id' })
      });
      
      expect(metadata).toEqual({
        title: 'Question not found'
      });
    });

    it('handles undefined params', async () => {
      const metadata = await generateMetadata({ params: undefined });
      expect(metadata).toEqual({
        title: 'Question not found'
      });
    });
  });

  describe('generateStaticParams', () => {
    it('generates static params for all questions', async () => {
      const params = await generateStaticParams();
      expect(params).toEqual([
        { id: 'test-question' },
        { id: 'seo-question' }
      ]);
      expect(loadQuestions).toHaveBeenCalled();
    });
  });
}); 