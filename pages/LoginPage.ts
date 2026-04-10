import { Page, Locator } from "@playwright/test";
import { BasePage } from "./BasePage";

export class LoginPage extends BasePage {
    //variables    
    readonly usernameInput: Locator;
    readonly passwordInput: Locator;
    readonly loginButton: Locator;

    //constructor
    constructor(page: Page) {
        super(page);
        this.usernameInput = page.locator("#username");
        this.passwordInput = page.locator("#password");
        this.loginButton = page.locator(".decorativeSubmit");

    }

    //Actions

    async login(username: string, password: string) {
            console.log('Entering username');
            await this.usernameInput.fill(username);

            console.log('Entering password');
            await this.passwordInput.fill(password);

            console.log('Clicking login');
            await this.loginButton.click();
        
    }



}

