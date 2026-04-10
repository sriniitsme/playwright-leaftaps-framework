import { Page , Locator } from '@playwright/test'
import { BasePage } from './BasePage'

export class CreateLeadPage extends BasePage{

    readonly companyNameInput : Locator;
    readonly firstNameInput : Locator;
    readonly lastNameInput : Locator;
    readonly createLeadButton : Locator;
    readonly deleteLeadButton : Locator; 

    constructor(page:Page){
        super(page);
        this.companyNameInput = page.locator("#createLeadForm_companyName");
        this.firstNameInput  = page.locator("#createLeadForm_firstName");
        this.lastNameInput  = page.locator("#createLeadForm_lastName");
        this.createLeadButton = page.locator("//input[@value='Create Lead']");
        this.deleteLeadButton = page.locator("//a[text()='Delete']");

    }

    async createLead (companyName:string,firstName:string,lastName:string){
        await this.companyNameInput.fill(companyName);
        await this.firstNameInput.fill(firstName)
        await this.lastNameInput.fill(lastName)
        await this.createLeadButton.click()
    }

} 