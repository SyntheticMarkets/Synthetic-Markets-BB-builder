import { translate } from '@i18n';
import { expectValue } from '../shared';

Blockly.Blocks.sma = {
    init: function init() {
        this.appendDummyInput().appendField(translate('Simple Moving Average'));
        this.appendValueInput('INPUT').setCheck('Array').appendField(translate('Input List'));
        this.appendValueInput('PERIOD').setCheck('Number').appendField(translate('Period'));
        this.setOutput(true, 'Number');
        this.setColour('#162d41'); // sma indicator block colour <<<<<//
        this.setTooltip(translate('Calculates Simple Moving Average (SMA) from a list with a period'));
        this.setHelpUrl('https://github.com/binary-com/binary-bot/wiki');
    },
};

Blockly.JavaScript.sma = block => {
    const input = expectValue(block, 'INPUT');
    const period = Blockly.JavaScript.valueToCode(block, 'PERIOD', Blockly.JavaScript.ORDER_ATOMIC) || '10';
    return [`Bot.sma(${input}, ${period})`, Blockly.JavaScript.ORDER_NONE];
};
