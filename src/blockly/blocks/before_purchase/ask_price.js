import { translate } from '@i18n';
import { insideBeforePurchase } from '../../relationChecker';
import { getPurchaseChoices } from '../shared';

Blockly.Blocks.ask_price = {
    init: function init() {
        this.appendDummyInput()
            .appendField(translate('Ask Price'))
            .appendField(new Blockly.FieldDropdown(() => getPurchaseChoices()), 'PURCHASE_LIST');
        this.setOutput(true, 'Number');
        this.setColour('#162d41'); // ask price block colour <<<<<<<<<<//
        this.setTooltip(translate('Ask Price for selected proposal'));
        this.setHelpUrl('https://github.com/binary-com/binary-bot/wiki');
    },
    onchange: function onchange(ev) {
        insideBeforePurchase(this, ev, 'Ask Price');
    },
};
Blockly.JavaScript.ask_price = block => {
    const purchaseList = block.getFieldValue('PURCHASE_LIST');
    const code = `Bot.getAskPrice('${purchaseList}')`;
    return [code, Blockly.JavaScript.ORDER_ATOMIC];
};
