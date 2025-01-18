import '@testing-library/jest-dom';

// Filter out the act() warning
const originalError = console.error;
console.error = (...args) => {
  if (args[0]?.includes?.('ReactDOMTestUtils.act')) {
    return;
  }
  originalError.call(console, ...args);
};

// Mock next/image
jest.mock('next/image', () => ({
  __esModule: true,
  default: function Image(props: any) {
    // eslint-disable-next-line @next/next/no-img-element
    return {
      type: 'img',
      props: { ...props, loading: 'lazy' }
    };
  }
}));

// Mock next/navigation
jest.mock('next/navigation', () => ({
  useRouter() {
    return {
      push: jest.fn(),
      replace: jest.fn(),
      prefetch: jest.fn(),
    };
  },
  useSearchParams() {
    return {
      get: jest.fn(),
    };
  },
  notFound: jest.fn()
})); 