/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        back: '#44443f',
        neonp: '#FB48C4',
        reddish: '#ff5757',
        pinkish: '#ffecdb',
        deepp: '#8c52ff',
        malach: '#00ff41',
      },
      fontFamily: {
        matrix: ['Antimatrix', 'Matrix', 'GarishMonde', 'ui-monospace'],
        // FIXME: Find out why some fonts work and some others do not
        capa: ['SyneMono', 'MajorMono', 'NovaMono', '"Courier New"'],
      },
    },
  },
  // FIXME: creating class properties
  plugins: [
    {
      /*
    plugin(function ({ addComponents, theme }) {
      addComponents({
        '.techIcon': {
          margin: 'auto',
        },
      });
    }),*/
    },
  ],
};
