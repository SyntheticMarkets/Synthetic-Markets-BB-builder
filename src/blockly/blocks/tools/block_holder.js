import { translate } from '@i18n';

Blockly.Blocks.block_holder = {
    init: function init() {
        this.appendDummyInput().appendField(translate('Blocks inside are ignored'));
        this.appendStatementInput('USELESS_STACK').setCheck(null);
        this.setColour('#162d41'); // ignore blocks block colour <<<<<//
        this.setTooltip(translate('Put your blocks in here to prevent them from being removed'));
        this.setHelpUrl('https://github.com/binary-com/binary-bot/wiki');
    },
};
Blockly.JavaScript.block_holder = () => '';
