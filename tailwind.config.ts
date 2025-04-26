// tailwind.config.ts
import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class', // 👈 이 줄 추가
  theme: {
    extend: {},
  },
  plugins: [],
};

export default config;
