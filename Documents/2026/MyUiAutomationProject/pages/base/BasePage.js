import { devices } from '@playwright/test';
import { defineConfig } from '@playwright/test';
require('dotenv').config();
class BasePage {
    constructor(page) {
        this.page = page;
    }
    async navigate(path) {
        await this.page.goto(path);
    }
    async click(selector) {
        if (typeof selector === 'string') {
            await this.page.locator(selector).click();
        } else {
            console.log('clicking loctor object')
            await selector.click();
        }

    }
    async enterText(selector, text) {
        await this.page.locator(selector).fill(text);
    }
    //get txt from element (useful for assertions )
    async getText(selector) {
        return await this.page.locator(selector).innerText();
    }
}
module.exports = { BasePage };