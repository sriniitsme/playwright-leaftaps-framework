import { test, expect } from '@playwright/test'
import { Config } from '@playwright/test' 
import { LoginPage } from '../pages/LoginPage' 
import { LandingPage } from '../pages/LandingPage' 
import { HomePage } from '../pages/HomePage'
import { CreateAccountPage } from '../pages/CreateAccountPage'
import { CONFIG } from '../utils/config'
import { getUniqueName } from '../utils/datautils'

test('Create Account' , async({page})=>{

    const companyAccountName = getUniqueName("Helix_");
    
    
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

    await homepage.clickCreateAccount();

    // Verify create acount page sidplayed
    const createaccount = new CreateAccountPage(page)
    await expect(createaccount.accounNameInput).toBeVisible();

    //create lead
    await createaccount.createAccount(companyAccountName);

    //verify lead is created
    await expect(createaccount.deactivateButton).toBeVisible();

})

