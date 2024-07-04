/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
    '../common/**/*.{js,jsx,ts,tsx}',
    '../common/tailwind.config.js',
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
