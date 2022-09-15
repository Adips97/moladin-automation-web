/* eslint-disable no-undef */
/* eslint-disable class-methods-use-this */
/* global driver */
export class UtilityWebCRM {
    async delay(timeout:number) {
        await browser.pause(timeout);
    }

    async sendKeys(value:string) {
        await browser.keys(value);
    }

    async uploadFile(filePath:string) {
        await browser.uploadFile(filePath);
    }

    async refresh() {
        await browser.refresh();
    }

    async navigateUrl(stringUrl:string) {
        await browser.url(stringUrl);
    }

    async maximizeWindow() {
        await browser.maximizeWindow();
    }
}
