import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      typography: {
        DEFAULT: {
          css: {
            'code': {
              backgroundColor: '#EEEEEE',
              color: '#333333',
              overflowX:'auto',
              padding: '2px',
              top:'8px',
              position:'relative',
              display:'inline-block',
              fontSize: '0.875em',
              fontFamily: 'Consolas, Monaco, "Andale Mono", "Ubuntu Mono", monospace',
              whiteSpace: 'pre'
            }
          }
        }
      }
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
} satisfies Config;
