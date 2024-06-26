import { translate } from '@i18n';
import { expectValue } from '../shared';

Blockly.Blocks.rsi = {
    init: function init() {
        this.appendDummyInput().appendField(translate('Relative Strength Index'));
        this.appendValueInput('INPUT').setCheck('Array').appendField(translate('Input List'));
        this.appendValueInput('PERIOD').setCheck('Number').appendField(translate('Period'));
        this.setOutput(true, 'Number');
        this.setColour('#162d41'); // rsi indictor block colour <<<<<<//
        this.setTooltip(translate('Relative Strength Index (RSI) from a list with a period'));
        this.setHelpUrl('https://github.com/binary-com/binary-bot/wiki');
    },
};

Blockly.JavaScript.rsi = block => {
    const input = expectValue(block, 'INPUT');
    const period = Blockly.JavaScript.valueToCode(block, 'PERIOD', Blockly.JavaScript.ORDER_ATOMIC) || '14';
    return [`Bot.rsi(${input}, ${period})`, Blockly.JavaScript.ORDER_NONE];
};
