import { defineConfig } from '@playwright/test';

export default defineConfig({
  retries: 2,

  fullyParallel: true,

  workers: process.env.CI ? 2 : undefined,

  use: {
    baseURL: process.env.BASE_URL || 'https://leaftaps.com/opentaps/control/login',

    headless: process.env.CI ? true : false,

    browserName: 'chromium',

    launchOptions: {
      args: [
        '--disable-notifications',
        '--disable-save-password-bubble',
        '--disable-infobars',
        '--disable-extensions'
      ]
    },

    trace: 'on-first-retry',
    screenshot: 'only-on-failure',
    video: 'retain-on-failure'
  },
});