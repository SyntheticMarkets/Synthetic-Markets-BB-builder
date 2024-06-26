import { translate } from '@i18n';

Blockly.Blocks.epoch = {
    init: function init() {
        this.appendDummyInput().appendField(translate('Seconds Since Epoch'));
        this.setOutput(true, 'Number');
        this.setColour('#162d41'); // time since epoch block colour <<<<<//
        this.setTooltip(translate('Returns the epoch time (seconds since epoch)'));
        this.setHelpUrl('https://github.com/binary-com/binary-bot/wiki');
    },
};
Blockly.JavaScript.epoch = () => ['Bot.getTime()', Blockly.JavaScript.ORDER_ATOMIC];
