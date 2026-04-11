import { test as base } from "@playwright/test";
import { HomePage } from "../pages/HomePage";
import { LoginPage } from '../pages/LoginPage';
import { LandingPage } from '../pages/LandingPage';
import { CONFIG } from '../utils/config';

type MyFixtures = {
    homePage: HomePage;
};

export const test = base.extend<MyFixtures>({
    homePage: async ({ page }, use) => {

        // Navigate to app
        console.log(CONFIG.baseUrl)
        await page.goto(CONFIG.baseUrl);


        // Login
        const loginPage = new LoginPage(page);
        await loginPage.login(CONFIG.username, CONFIG.password);

        // Navigate to CRM/SFA
        const landingPage = new LandingPage(page);
        await landingPage.clickCrmSfa();

        // Create HomePage object
        const homePage = new HomePage(page);

        // Provide HomePage fixture to test
        await use(homePage);
    }
});

export { expect } from '@playwright/test';