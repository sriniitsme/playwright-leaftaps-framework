import {Page, Locator} from '@playwright/test';
import { BasePage } from './BasePage';

export class HomePage extends BasePage{
    readonly createLeadLink : Locator;
    readonly createAccountLink : Locator;
    readonly createContactLink : Locator;

    constructor(page:Page){
        super(page);
        this.createLeadLink = page.getByRole('link', { name: 'Create Lead' });
        this.createAccountLink = page.locator("//a[text()='Create Account']");
        this.createContactLink = page.getByRole('link', { name: 'Create Contact' });
    }

    async clickCreateLead(){
        await this.createLeadLink.click();
    }

    async clickCreateAccount(){
        await this.createAccountLink.click();
    }
    
    async clickCreatecContact(){
        await this.createContactLink.click();
    }

}

