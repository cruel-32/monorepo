import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import svgr from 'vite-plugin-svgr';
import { fileURLToPath, URL } from 'node:url';

export default defineConfig({
  base: '/',
  plugins: [react(), svgr()],
  resolve: {
    alias: [
      {
        find: '@',
        replacement: fileURLToPath(new URL('./src', import.meta.url)),
      },
      {
        find: '@monorepo/common',
        replacement: fileURLToPath(new URL('../common', import.meta.url)),
      },
    ],
  },
  server: {
    proxy: {
      '/v1': 'http://localhost:9090',
    },
  },
  build: {
    outDir: '../../dist/react-zustand',
    emptyOutDir: true,
  },
});
