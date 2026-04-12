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


        // 🔥 Always start fresh
        await page.context().clearCookies();

        await page.goto(CONFIG.baseUrl);

        const loginPage = new LoginPage(page);
        await loginPage.login(CONFIG.username, CONFIG.password);

        const landingPage = new LandingPage(page);
        await landingPage.clickCrmSfa();

        const homePage = new HomePage(page);

        await use(homePage);
    }
});

export { expect } from '@playwright/test';