import { test, expect } from '@playwright/test'
import { HomePage } from '../pages/HomePage'
import { CreateLeadPage } from '../pages/CreateLeadPage'
import { getUniqueName } from '../utils/datautils'
import { loginandNavigate } from '../utils/common'

test.beforeEach(async ({ page }) => {
  await loginandNavigate(page);
});

test('Create Lead Test', async({page})=>{

    const leadCompanyName = getUniqueName("Matrix");
    const leadFirstName = getUniqueName("srini");
    const leadLastName = getUniqueName("vasan");

    // verify homepage displayed
    const homepage = new HomePage(page);
    await homepage.clickCreateLead();

    // Verify create acount page sidplayed
    const createlead = new CreateLeadPage(page)
    await createlead.createLead(leadCompanyName, leadFirstName, leadLastName);

    //verify lead is created
    await expect(createlead.deleteLeadButton).toBeVisible();
}) 