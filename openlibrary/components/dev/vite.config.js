/*
This is the config used for the dev server ala `npm run serve`
This does not effect production builds
*/

import vue from '@vitejs/plugin-vue';
import { defineConfig } from 'vite';

// https://vite.dev/config/
export default defineConfig({
  plugins: [vue()],
});
