import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  // Load env file based on `mode` in the current working directory.
  const env = loadEnv(mode, process.cwd(), '');
  return {
    plugins: [react()],
    // 'base' is crucial for GitHub Pages. './' ensures relative paths are used.
    base: './',
    define: {
      // This enables process.env.API_KEY to work in the browser after build
      'process.env.API_KEY': JSON.stringify(env.VITE_API_KEY)
    }
  };
});