import { test, expect } from '@playwright/test'
import { LoginPage } from '../pages/LoginPage' 
import { LandingPage } from '../pages/LandingPage' 
import { HomePage } from '../pages/HomePage'
import { CreateAccountPage } from '../pages/CreateAccountPage'
import { getUniqueName } from '../utils/datautils'
import { loginandNavigate } from '../utils/common' 
import { CONFIG } from '../utils/config'

test.beforeEach(async ({ page }) => {
  await loginandNavigate(page);
});

test('Create Account' , async({page})=>{

    const companyAccountName = getUniqueName("Helix_");
        
    // verify homepage displayed
    const homepage = new HomePage(page);
    await homepage.clickCreateAccount();

    // Verify create acount page sidplayed
    const createaccount = new CreateAccountPage(page)
    await createaccount.createAccount(companyAccountName);
    await expect(createaccount.deactivateButton).toBeVisible();

})

