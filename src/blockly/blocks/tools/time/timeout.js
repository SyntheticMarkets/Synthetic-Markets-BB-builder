import { translate } from '@i18n';
import { mainScope } from '../../../relationChecker';

Blockly.Blocks.timeout = {
    init: function init() {
        this.appendStatementInput('TIMEOUTSTACK').setCheck(null);
        this.appendValueInput('SECONDS').setCheck(null).appendField(translate('Run After'));
        this.appendDummyInput().appendField(translate('Second(s)'));
        this.setInputsInline(true);
        this.setPreviousStatement(true, null);
        this.setColour('#162d41'); // After every seconds block colour <<<<//
        this.setTooltip(translate('Run the blocks inside after n seconds'));
        this.setHelpUrl('https://github.com/binary-com/binary-bot/wiki');
    },
    onchange: function onchange(ev) {
        mainScope(this, ev, translate('Run After n Seconds'));
    },
};

Blockly.JavaScript.timeout = block => {
    const stack = Blockly.JavaScript.statementToCode(block, 'TIMEOUTSTACK');
    const seconds = Blockly.JavaScript.valueToCode(block, 'SECONDS', Blockly.JavaScript.ORDER_ATOMIC);

    return `
    sleep(${seconds});
    ${stack}
  `;
};
