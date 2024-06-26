import { translate } from '@i18n';
import { mainScope } from '../../relationChecker';

Blockly.Blocks.lastDigitList = {
    init: function init() {
        this.appendDummyInput().appendField(translate('Last Digit List'));
        this.setOutput(true, 'Array');
        this.setColour('#162d41'); // Last digit list block colour <<<<<<//
        this.setTooltip(translate('Returns the list of last digit values'));
        this.setHelpUrl('https://github.com/binary-com/binary-bot/wiki');
    },
    onchange: function onchange(ev) {
        mainScope(this, ev, 'Last Digit List');
    },
};
Blockly.JavaScript.lastDigitList = () => ['Bot.getLastDigitList()', Blockly.JavaScript.ORDER_ATOMIC];
