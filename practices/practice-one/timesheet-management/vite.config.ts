import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: [
      { find: 'src', replacement: '/src' },
      { find: 'pages', replacement: '/src/pages' },
      { find: 'layouts', replacement: '/src/layouts' },
      { find: 'interfaces', replacement: '/src/interfaces' },
      { find: 'constants', replacement: '/src/constants' },
      { find: 'components', replacement: '/src/components' },
      { find: 'assets', replacement: '/src/assets' }
    ]
  }
});
