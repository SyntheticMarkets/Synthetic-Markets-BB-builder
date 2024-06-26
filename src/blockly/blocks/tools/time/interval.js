import { translate } from '@i18n';
import { disable } from '../../../utils';

Blockly.Blocks.interval = {
    init: function init() {
        this.appendStatementInput('TIMERSTACK').setCheck(null);
        this.appendValueInput('SECONDS').setCheck(null).appendField(translate('Run Every'));
        this.appendDummyInput().appendField(translate('Second(s)'));
        this.setInputsInline(true);
        this.setColour('#162d41'); // time seconds block colour <<<<<//
        this.setTooltip(translate('Run the blocks inside every n seconds'));
        this.setHelpUrl('https://github.com/binary-com/binary-bot/wiki');
    },
    onchange: function onchange() {
        disable(
            this,
            translate('Run every seconds block has been deprecated. Please contact us if you have a valid use case.')
        );
    },
};

Blockly.JavaScript.interval = () => '';
