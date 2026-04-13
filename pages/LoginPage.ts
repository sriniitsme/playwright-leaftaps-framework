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
        this.usernameInput = page.locator('input#username');
        this.passwordInput = page.locator('input#password');
        this.loginButton = page.locator(".decorativeSubmit");

    }

    //Actions

    async login(username: string, password: string) {

        console.log("Resolved: FEATURE + MAIN change");

        await this.usernameInput.fill(username);
        await this.passwordInput.fill(password);

        await Promise.all([
            this.page.waitForNavigation({ waitUntil: 'load' }),
            this.loginButton.click()
        ]);

    }



}

