import { test, expect } from '@playwright/test'
import { Config } from '@playwright/test' 
import { LoginPage } from '../pages/LoginPage' 
import { LandingPage } from '../pages/LandingPage' 
import { HomePage } from '../pages/HomePage'
import { CreateLeadPage } from '../pages/CreateLeadPage'
import { CONFIG } from '../utils/config'


test('Create Lead Test', async({page})=>{

    // Navigate
    await page.goto(CONFIG.baseUrl);

    // Login
    await page.waitForLoadState();
    const loginpage = new LoginPage(page);
    await loginpage.login(CONFIG.username, CONFIG.password);

    // Verify login
    const landingpage = new LandingPage(page);
    await expect(landingpage.crmsfaLink).toBeVisible();

    await landingpage.clickCrmSafe();

    // verify homepage displayed
    const homepage = new HomePage(page);
    await expect(homepage.createAccountLink).toBeVisible();

    await homepage.clickCreateLead();

    // Verify create acount page sidplayed
    const createlead = new CreateLeadPage(page)
    await expect(createlead.companyNameInput).toBeVisible();

    //create lead
    await createlead.createLead("com1", "john1", "dan1");

    //verify lead is created
    await expect(createlead.deleteLeadButton).toBeVisible();
}) 