/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        back: '#44443f',
        neonp: '#FB48C4',
        reddish: '#ff5757',
        deepp: '#8c52ff',
        malach: '#00ff41',
      },
    },
  },
  plugins: [],
};