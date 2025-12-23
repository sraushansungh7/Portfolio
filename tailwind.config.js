/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      backgroundImage: {
        'grid-slate-200': 'linear-gradient(to right, rgb(226 232 240 / 0.5) 1px, transparent 1px), linear-gradient(to bottom, rgb(226 232 240 / 0.5) 1px, transparent 1px)',
        'grid-slate-700': 'linear-gradient(to right, rgb(51 65 85 / 0.5) 1px, transparent 1px), linear-gradient(to bottom, rgb(51 65 85 / 0.5) 1px, transparent 1px)',
      },
    },
  },
  plugins: [],
};
