import { defineConfig } from '@playwright/test';

export default defineConfig({
  use: {
    headless: false,
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