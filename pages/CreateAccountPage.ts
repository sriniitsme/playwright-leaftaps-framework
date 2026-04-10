import { Page, Locator } from "@playwright/test"
import { BasePage } from "./BasePage"

export class CreateAccountPage extends BasePage {

    readonly accounNameInput : Locator;
    readonly createAccountButton : Locator;
    readonly deactivateButton : Locator;

    constructor(page:Page){
        super(page)
        this.accounNameInput = page.locator("#accountName");
        this.createAccountButton = page.locator("//input[@value='Create Account']");
        this.deactivateButton = page.locator("//a[text()='Deactivate Account']");
    }

    async createAccount(accountName:string){
        await this.accounNameInput.fill(accountName);
        await this.createAccountButton.click();        
    }
    

}
