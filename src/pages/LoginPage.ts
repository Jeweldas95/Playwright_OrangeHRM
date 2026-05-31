import { Page, Locator } from '@playwright/test';

export class LoginPage {
    readonly page: Page;
    readonly logo: Locator;
    constructor(page: Page) {
        this.page = page;
        this.logo = page.locator('img[alt="orangehrm-logo"]:visible');
    }
}