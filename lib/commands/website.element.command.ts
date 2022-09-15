/* eslint-disable no-undef */
export class WebsiteElementCommand {
    selector:string;
    constructor() {
        this.selector = '';
    }

    async finder(element:string) {
        this.selector = element;
        return $(this.selector);
    }

    async finders(element:string) {
        this.selector = element;
        return $$(this.selector);
    }

    async typeText(selector:string, text:string) {
        const element = await this.finder(selector);
        await element.clearValue();
        await element.addValue(text);
    }

    async typePathImage(selector:string, text:string) {
        const element = await this.finder(selector);
        await element.addValue(text);
    }

    async getText(selector:string) {
        const element = await this.finder(selector);
        const getText = await element.getText();
        return getText;
    }

    async clickOn(selector:string) {
        const element = await this.finder(selector);
        await element.click();
    }

    async doubleClickOn(selector:string) {
        const element = await this.finder(selector);
        await element.doubleClick();
    }

    async scrollWeb(selector:string) {
        const element = await this.finder(selector);
        await element.scrollIntoView();
    }

    /**
     * for changing value that having text %var with dynamicValue
     * i.e  '//span[normalize-space()="%var"]';
     */
    async builderElement(element:string, dynamicValue:string) {
        this.selector = element.replace('%var', dynamicValue);
        return this.selector;
    }
}