import { defineConfig } from 'vite-plugin-windicss';
import * as daisyUI from 'daisyui';

export default defineConfig({
  darkMode: false,
  plugins: [daisyUI],
  theme: {
    extend: {},
  },
});
