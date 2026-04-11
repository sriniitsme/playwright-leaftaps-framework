import { defineConfig } from '@playwright/test';
export default defineConfig({
  retries: 2,
  fullyParallel: true,
  workers: process.env.CI ? 2 : undefined,

  reporter: [
    ['line'],
    ['html', { open: 'never', outputFolder: 'playwright-report' }]
  ],

  use: {
    baseURL: process.env.BASE_URL || 'https://leaftaps.com/opentaps/control/login',
    headless: process.env.CI ? true : false,
    trace: 'on-first-retry',
    screenshot: 'only-on-failure',
    video: 'retain-on-failure'
  },
});
