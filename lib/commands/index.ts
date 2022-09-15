import { WebsiteElementCommand } from './website.element.command';
import { WebsiteExpectedCommands } from './website.expected.condition.command';
import { UtilityWebCRM } from './website.utility.commad';

const elementFinder = new WebsiteElementCommand();
const elementCondition = new WebsiteExpectedCommands();
const utilityWeb = new UtilityWebCRM();

module.exports = {
    elementFinder,
    elementCondition,
    utilityWeb,
};
