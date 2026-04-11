import {Page, Locator} from '@playwright/test';
import { BasePage } from './BasePage';

export class LandingPage extends BasePage{

    readonly crmsfaLink:Locator;
    readonly logoutButton:Locator;

    constructor(page:Page){
        super(page);
        this.crmsfaLink = page.getByRole('link', { name: 'CRM/SFA' });
        this.logoutButton = page.getByRole('button');
    }

    async clickCrmSfa(){
        await this.crmsfaLink.click();
    }


}