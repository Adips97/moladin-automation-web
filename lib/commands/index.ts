import { WebsiteElementCommand } from './website.element.command';
import { WebsiteExpectedCommands } from './website.expected.condition.command';
import { UtilityWebCRM } from './website.utility.commad';

class commands{
    elementFinder = new WebsiteElementCommand();
    elementCondition = new WebsiteExpectedCommands();
    utilityWeb = new UtilityWebCRM();
}

export default new commands();