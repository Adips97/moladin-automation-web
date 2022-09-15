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
exports.WebsiteElementCommand = void 0;
/* eslint-disable no-undef */
class WebsiteElementCommand {
    constructor() {
        this.selector = '';
    }
    finder(element) {
        return __awaiter(this, void 0, void 0, function* () {
            this.selector = element;
            return $(this.selector);
        });
    }
    finders(element) {
        return __awaiter(this, void 0, void 0, function* () {
            this.selector = element;
            return $$(this.selector);
        });
    }
    typeText(selector, text) {
        return __awaiter(this, void 0, void 0, function* () {
            const element = yield this.finder(selector);
            yield element.clearValue();
            yield element.addValue(text);
        });
    }
    typePathImage(selector, text) {
        return __awaiter(this, void 0, void 0, function* () {
            const element = yield this.finder(selector);
            yield element.addValue(text);
        });
    }
    getText(selector) {
        return __awaiter(this, void 0, void 0, function* () {
            const element = yield this.finder(selector);
            const getText = yield element.getText();
            return getText;
        });
    }
    clickOn(selector) {
        return __awaiter(this, void 0, void 0, function* () {
            const element = yield this.finder(selector);
            yield element.click();
        });
    }
    doubleClickOn(selector) {
        return __awaiter(this, void 0, void 0, function* () {
            const element = yield this.finder(selector);
            yield element.doubleClick();
        });
    }
    scrollWeb(selector) {
        return __awaiter(this, void 0, void 0, function* () {
            const element = yield this.finder(selector);
            yield element.scrollIntoView();
        });
    }
    /**
     * for changing value that having text %var with dynamicValue
     * i.e  '//span[normalize-space()="%var"]';
     */
    builderElement(element, dynamicValue) {
        return __awaiter(this, void 0, void 0, function* () {
            this.selector = element.replace('%var', dynamicValue);
            return this.selector;
        });
    }
}
exports.WebsiteElementCommand = WebsiteElementCommand;
