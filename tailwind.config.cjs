/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        black: '#00000033',
        black2: '#000000f2',
        back: '#07070633',
        back2: '#070706e6',
        ghgray: '#222224',
        neonp: '#FB48C4',
        reddish: '#ff5757',
        pinkish: '#ffecdb',
        deepp: '#8c52ff',
        malach: '#00ff41',
      },
      typography: {
        DEFAULT: {
          css: {
            a: {
              color: 'white',
              '&:hover': {
                color: '#FB48C4',
              }
            }
          }
        }
      }
    },
  },

  plugins: [require('@tailwindcss/typography')],
};
