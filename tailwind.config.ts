import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          500: '#ff7000',
          100 : '#fff1e6',

        },
        dark: {
          100: '#000000',
          200: '#0f1117'
        }
      }
    },
  },
  plugins: [],
}
export default config
