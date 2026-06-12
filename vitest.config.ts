import { configDefaults, defineConfig } from 'vitest/config'
import react from '@vitejs/plugin-react'
import tsconfigPaths from 'vite-tsconfig-paths'

export default defineConfig({
  plugins: [react(), tsconfigPaths()],
  test: {
    environment: 'jsdom',
    globals: true,
    setupFiles: ['./src/test/setup.ts'],
    css: false,
    passWithNoTests: true,
    exclude: [...configDefaults.exclude, '**/.claude/**'],
    coverage: {
      provider: 'v8',
      reporter: ['text', 'json-summary'],
      reportOnFailure: true,
      exclude: [...(configDefaults.coverage?.exclude ?? []), '**/.claude/**'],
    },
  },
})
