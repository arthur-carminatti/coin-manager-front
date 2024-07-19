import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/**/*.tsx",
  ],
  theme: {
    extend: {
      colors: {
        defaultFont: '#ecfeff',
      },
      backgroundColor: {
        bgDefault: '#0A0E27',
        slotColor: '#171C3A',
      }
    },
  },
  plugins: [],
};
export default config;