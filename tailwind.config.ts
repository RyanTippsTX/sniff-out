import { type Config } from 'tailwindcss';

export default {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    screens: {
      xs: '400px',
      sm: '640px',
      md: '768px',
      lg: '1024px',
      // xl: '1280px',
      // '2xl': '1536px',
    },
    extend: {},
  },
  plugins: [],
} satisfies Config;
