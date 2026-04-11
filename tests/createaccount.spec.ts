import { test, expect } from '../fixtures/testFixtures'
import { CreateAccountPage } from '../pages/CreateAccountPage'
import { getUniqueName } from '../utils/datautils'

test('@regression Create Account ', async ({ page, homePage }) => {

    const companyAccountName = getUniqueName("Helix_");
        
    // Navigate to Create Account page
    await homePage.clickCreateAccount();

    // Create account
    const createAccountPage = new CreateAccountPage(page);
    await createAccountPage.createAccount(companyAccountName);

    // Verify account is created
    await expect(createAccountPage.deactivateButton).toBeVisible();
});