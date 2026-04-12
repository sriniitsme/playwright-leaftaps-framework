import { test , expect } from "../fixtures/testFixtures";
import { CreateContactPage } from "../pages/CreateContactPage";
import { getUniqueName } from '../utils/datautils'

test('@smoke Create Contact ', async({page, homePage})=>{

    const firstName = getUniqueName("krish_");
    const lastname = getUniqueName("jk_");
    const description = getUniqueName("Description_");

    await homePage.clickCreatecContact();

    const createContactPage = new CreateContactPage(page);
    createContactPage.craeteContact(firstName, lastname, description);
    //await expect(createContactPage.deactivateAccountButton).toBeVisible();

})
