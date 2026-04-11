import { defineConfig } from '@playwright/test';
import * as dotenv from 'dotenv';
dotenv.config({
  path: `.env.${process.env.TEST_ENV || 'qa'}`
});

console.log("ENV:", process.env.TEST_ENV);
console.log("BASE_URL:", process.env.BASE_URL);

export default defineConfig({
  retries: 2,
  fullyParallel: true,
  workers: process.env.CI ? 2 : undefined,

  reporter: [
  ['line'],
  ['allure-playwright']
],

  use: {
    baseURL: process.env.BASE_URL || 'https://leaftaps.com/opentaps/control/login',
    headless: process.env.CI ? true : false,
    trace: 'on-first-retry',
    screenshot: 'only-on-failure',
    video: 'retain-on-failure'
  },
});
