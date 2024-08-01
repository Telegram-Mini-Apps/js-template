import path from 'node:path';
import { defineConfig } from 'vite';
// import basicSsl from '@vitejs/plugin-basic-ssl';

export default defineConfig({
  base: '/js-template',
  plugins: [
    // Allows using self-signed certificates to run the dev server using HTTPS.
    // https://www.npmjs.com/package/@vitejs/plugin-basic-ssl
    // basicSsl(),
  ],
  resolve: {
    alias: {
      '@': path.resolve(import.meta.dirname, './src'),
    },
  },
  build: {
    target: 'esnext',
  },
  publicDir: './public',
  server: {
    // Uncomment this line if you want to expose your dev server and access it from the devices
    // in the same network.
    // host: true,
  },
});
