"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const website_element_command_1 = require("./website.element.command");
const website_expected_condition_command_1 = require("./website.expected.condition.command");
const website_utility_commad_1 = require("./website.utility.commad");
const elementFinder = new website_element_command_1.WebsiteElementCommand();
const elementCondition = new website_expected_condition_command_1.WebsiteExpectedCommands();
const utilityWeb = new website_utility_commad_1.UtilityWebCRM();
module.exports = {
    elementFinder,
    elementCondition,
    utilityWeb,
};
