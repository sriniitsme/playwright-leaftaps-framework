import { defineConfig } from '@playwright/test';

export default defineConfig({
  use: {
    headless:  process.env.CI ? true : false,
    launchOptions: {
      args: [
        '--disable-notifications',
        '--disable-save-password-bubble',
        '--disable-infobars',
        '--disable-extensions'
      ]
    }
  }
});