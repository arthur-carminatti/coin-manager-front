import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/**/*.tsx",
  ],
  theme: {
    extend: {
      gridTemplateColumns: {
        content: 'minmax(14rem, 26rem) 1fr'
      },

      gridTemplateRows: {
        app: 'minmax(2rem, 4rem) 1fr auto',
        content: 'minmax(10rem, 12rem) minmax(10rem, 17rem) minmax(10rem, 17rem)',
      },

      backgroundColor: {
        bgDefault: '#0A0E27',
        slotColor: '#171C3A',
      },
    },
  },
  plugins: [],
};
export default config;