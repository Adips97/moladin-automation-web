/* eslint-disable no-undef */
/* global driver */
import { WebsiteElementCommand } from './website.element.command';

export class WebsiteExpectedCommands {
    websiteElement : WebsiteElementCommand;
    constructor() {
        this.websiteElement = new WebsiteElementCommand();
    }

    async isElementDisplayed(selector : string) {
        const element = await this.websiteElement.finder(selector);
        const displayed = await element.isDisplayed();
        return displayed;
    }

    async isElementNotDisplayed(selector : string) {
        const element = await this.websiteElement.finder(selector);
        const displayed = await element.isDisplayed();
        return !(displayed);
    }

    async isElementClickAble(selector : string) {
        const element = await this.websiteElement.finder(selector);
        const showed = await element.isClickable();
        return showed;
    }

    async waitUntilElementDisplayed(selector : string, timeoutDuration = 10000) {
        await browser.waitUntil(async () => (await this.isElementDisplayed(selector)) === true, { timeout: timeoutDuration, timeoutMsg: 'Element Not Found' });
    }

    async waitUntilElementNotDisplayed(selector : string, timeoutDuration = 10000) {
        await browser.waitUntil(
            async () => (
                await this.isElementNotDisplayed(selector)) === true,
            { timeout: timeoutDuration, timeoutMsg: 'Element Still Found' },
        );
    }

    async waitUntilButtonClickAble(selector : string, timeoutDuration = 10000) {
        await browser.waitUntil(async () => (await this.isElementClickAble(selector)) === true, { timeout: timeoutDuration, timeoutMsg: 'Element is not found' });
    }
}
