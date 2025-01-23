# Shopify Quiz Application

An interactive quiz application built with Next.js to test knowledge of Shopify development concepts. The application features a comprehensive set of questions covering Shopify's ecosystem, including Liquid templating, theme development, APIs, and best practices.

> **Note**: This is a self-assessment tool. Answers can be easily viewed in browser dev tools, so this quiz should be used for honest self-checking of knowledge rather than formal testing.

> **Question Issues**: If you find any incorrect or outdated information in the questions, please open an issue or contact me. Your feedback helps maintain the quality of the quiz.

## Features

- Interactive quiz interface with progress tracking
- Real-time scoring and metrics
- Comprehensive test coverage
- UI built with Tailwind CSS and DaisyUI
- No database required - questions are stored as Markdown files
- Easy to add new questions by creating markdown files

## Tech Stack

- **Framework**: Next.js 15
- **Language**: TypeScript
- **Styling**: Tailwind CSS, DaisyUI
- **Testing**: Jest, React Testing Library
- **Content**: Markdown with Gray Matter
- **State Management**: Zustand
- **Analytics**: Vercel Analytics

## Getting Started

1. Clone the repository
2. Install dependencies:
   ```bash
   yarn install
   ```
3. Run the development server:
   ```bash
   yarn dev
   ```
4. Open [http://localhost:3000](http://localhost:3000) in your browser


## Project Structure

- `/src/components` - React components
- `/src/questions` - Markdown files containing quiz questions (each question is a separate .md file with frontmatter for metadata)
- `/src/__tests__` - Test files
- `/src/app` - Next.js app router files
- `/src/types` - TypeScript type definitions

## Adding Questions

Questions are stored as Markdown files in the `/src/questions` directory. Each question file includes:
- Question title and content in Markdown format
- Metadata in frontmatter (answers, correct answer, etc.)
- No database setup required

## Author

Michael Bollin.  
Website: [www.bollin.dev](https://www.bollin.dev)  
Contact: [michael@bollin.dev](mailto:michael@bollin.dev)
