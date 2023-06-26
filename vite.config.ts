/// <reference types="vitest" />

import react from '@vitejs/plugin-react';
import { defineConfig } from 'vitest/config';

export default defineConfig({
  plugins: [react()],
  test: {
    coverage: {
      provider: 'istanbul',
      reportsDirectory: './test-results/unit/coverage',
    },
    globals: true,
    environment: 'happy-dom',
    setupFiles: './setup.ts',
  },
})
