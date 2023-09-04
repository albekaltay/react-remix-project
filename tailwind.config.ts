import type { Config } from 'tailwindcss'

export default {
  content: ["./app/**/*.{js,jsx,ts,tsx}",
  './app/components/**/*.{html,js}',],
  theme: {
    extend: {},
  },
  plugins: [],
} satisfies Config

