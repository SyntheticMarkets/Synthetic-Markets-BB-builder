import { translate } from '@i18n';
import { expectValue } from '../../shared';

Blockly.Blocks.is_candle_black = {
    init: function init() {
        this.appendValueInput('OHLCOBJ').setCheck('Candle').appendField(translate('is candle black?'));
        this.setInputsInline(false);
        this.setOutput(true, 'Boolean');
        this.setColour('#162d41'); // Is candle black block <<<<<//
        this.setTooltip(
            translate(
                'Checks if the given candle is black, returns true if close is less than open in the given candle.'
            )
        );
        this.setHelpUrl('https://github.com/binary-com/binary-bot/wiki');
    },
};

Blockly.JavaScript.is_candle_black = block => {
    const ohlcObj = expectValue(block, 'OHLCOBJ');
    return [`Bot.isCandleBlack(${ohlcObj})`, Blockly.JavaScript.ORDER_ATOMIC];
};
