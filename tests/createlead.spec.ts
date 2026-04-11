import { test, expect } from '../fixtures/testFixtures'
import { CreateLeadPage } from '../pages/CreateLeadPage'
import { getUniqueName } from '../utils/datautils'

test('Create Lead Test', async ({ page, homePage }) => {

    const leadCompanyName = getUniqueName("Matrix");
    const leadFirstName = getUniqueName("srini");
    const leadLastName = getUniqueName("vasan");

    // Navigate to Create Lead page
    await homePage.clickCreateLead();

    // Create Lead
    const createLeadPage = new CreateLeadPage(page);
    await createLeadPage.createLead(leadCompanyName, leadFirstName, leadLastName);

    // Verify lead is created
    await expect(createLeadPage.deleteLeadButton).toBeVisible();
});