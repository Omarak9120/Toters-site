import { defineConfig } from '@playwright/test';

const BASE_URL = process.env.BASE_URL || 'http://localhost:4321';
const USE_PREVIEW = !!process.env.USE_PREVIEW;

export default defineConfig({
  webServer: process.env.BASE_URL
    ? undefined
    : USE_PREVIEW
      ? { command: 'npm run preview', url: BASE_URL, reuseExistingServer: true, timeout: 120000 }
      : { command: 'npm run dev',     url: BASE_URL, reuseExistingServer: true, timeout: 120000 },
  use: { 
    baseURL: BASE_URL,
    screenshot: 'only-on-failure',
    trace: 'retain-on-failure',
    video: 'off',
  },
  expect: {
    toHaveScreenshot: {
      maxDiffPixelRatio: 0.02,
    },
  },
});
