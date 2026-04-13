import { Page, Locator, expect } from '@playwright/test';
import { BasePage } from './BasePage';

export class CreateContactPage extends BasePage {

    readonly firstNameInput: Locator;
    readonly lastNameInput: Locator;
    readonly descriptionInput: Locator;
    readonly createContactButton: Locator;
    readonly viewContactLabel: Locator;
    readonly deactivateAccountButton: Locator;

    constructor(page: Page) {

        super(page)
        this.firstNameInput = page.locator("#firstNameField");
        this.lastNameInput = page.locator("#lastNameField");
        this.descriptionInput = page.locator("#createContactForm_description");
        this.createContactButton = page.getByRole('button', { name: 'Create Contact' });
        this.viewContactLabel = page.locator("//div[text()='View Contact']");
        this.deactivateAccountButton = page.locator("//a[text()='Deactivate Contact']");
    }

    async craeteContact(firstName: string, lastName: string, description: string) {


        await this.firstNameInput.fill(firstName);
        await this.lastNameInput.fill(lastName);
        await this.descriptionInput.fill(description);

        // ✅ Wait for button to be fully ready
        await expect(this.createContactButton).toBeVisible();

        //check the stabilirt of create button 
        await expect(this.createContactButton).toBeEnabled();

        // Scroll to view
        await this.createContactButton.scrollIntoViewIfNeeded();

        await this.createContactButton.click();
    }

}
