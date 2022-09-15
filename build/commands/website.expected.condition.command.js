"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.WebsiteExpectedCommands = void 0;
/* eslint-disable no-undef */
/* global driver */
const website_element_command_1 = require("./website.element.command");
class WebsiteExpectedCommands {
    constructor() {
        this.websiteElement = new website_element_command_1.WebsiteElementCommand();
    }
    isElementDisplayed(selector) {
        return __awaiter(this, void 0, void 0, function* () {
            const element = yield this.websiteElement.finder(selector);
            const displayed = yield element.isDisplayed();
            return displayed;
        });
    }
    isElementNotDisplayed(selector) {
        return __awaiter(this, void 0, void 0, function* () {
            const element = yield this.websiteElement.finder(selector);
            const displayed = yield element.isDisplayed();
            return !(displayed);
        });
    }
    isElementClickAble(selector) {
        return __awaiter(this, void 0, void 0, function* () {
            const element = yield this.websiteElement.finder(selector);
            const showed = yield element.isClickable();
            return showed;
        });
    }
    waitUntilElementDisplayed(selector, timeoutDuration = 10000) {
        return __awaiter(this, void 0, void 0, function* () {
            yield browser.waitUntil(() => __awaiter(this, void 0, void 0, function* () { return (yield this.isElementDisplayed(selector)) === true; }), { timeout: timeoutDuration, timeoutMsg: 'Element Not Found' });
        });
    }
    waitUntilElementNotDisplayed(selector, timeoutDuration = 10000) {
        return __awaiter(this, void 0, void 0, function* () {
            yield browser.waitUntil(() => __awaiter(this, void 0, void 0, function* () {
                return (yield this.isElementNotDisplayed(selector)) === true;
            }), { timeout: timeoutDuration, timeoutMsg: 'Element Still Found' });
        });
    }
    waitUntilButtonClickAble(selector, timeoutDuration = 10000) {
        return __awaiter(this, void 0, void 0, function* () {
            yield browser.waitUntil(() => __awaiter(this, void 0, void 0, function* () { return (yield this.isElementClickAble(selector)) === true; }), { timeout: timeoutDuration, timeoutMsg: 'Element is not found' });
        });
    }
}
exports.WebsiteExpectedCommands = WebsiteExpectedCommands;
