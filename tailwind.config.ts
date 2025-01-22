import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      typography: {
        DEFAULT: {
          css: {
            'code': {
              '@apply bg-[#EEEEEE] text-[#333333] overflow-x-auto p-[2px] top-2 relative inline-block text-sm font-mono whitespace-pre': {}
            }
          }
        }
      }
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('daisyui')
  ],
  daisyui: {
    themes: [
      {
        light: {
          ...require('daisyui/src/theming/themes')['light'],
          primary: '#222222',
          secondary: '#171717',
          accent: '#1FB2A5',
          neutral: '#191D24',
          'base-100': '#FFFFFF',
          'base-200': '#F9FAFB',
          'base-300': '#D1D5DB',
          '.disabled': {
            '@apply bg-transparent border-current text-current opacity-30': {}
          },
          '.disabled:hover': {
            '@apply bg-transparent border-current text-current': {}
          },
          '.btn': {
            '@apply [animation:none]': {}
          },
          '.link': {
            '@apply text-blue-600 underline hover:text-blue-800': {}
          },
          '.btn-answer': {
            '@apply btn w-full justify-start normal-case [animation:none]': {}
          },
          '.btn-answer-selected': {
            '@apply btn-primary opacity-50': {},
          },
          '.btn-answer-correct': {
            '@apply btn-success': {},
            '&:disabled': {
              '@apply bg-green-500 text-white opacity-100': {}
            }
          },
          '.btn-answer-incorrect': {
            '@apply btn-error': {},
            '&:disabled': {
              '@apply bg-red-500 text-white opacity-100': {}
            }
          },
          '.btn-answer-correct-disabled': {
            '@apply btn-outline btn-success': {},
            '&:disabled': {
              '@apply border-green-500 text-green-500 opacity-100 bg-green-100': {}
            }
          }
        }
      }
    ]
  }
};

export default config; 