import { translate } from '@i18n';
import { mainScope } from '../../relationChecker';
import candleInterval, { getGranularity } from './candleInterval';

Blockly.Blocks.ohlc = {
    init: function init() {
        this.appendDummyInput().appendField(translate('Candles List'));
        candleInterval(this);
        this.setInputsInline(true);
        this.setOutput(true, 'Array');
        this.setColour('#162d41'); // Candle list block colour <<<<<<<<//
        this.setTooltip(translate('Returns the candle list'));
        this.setHelpUrl('https://github.com/binary-com/binary-bot/wiki');
    },
    onchange: function onchange(ev) {
        mainScope(this, ev, 'Candles List');
    },
};
Blockly.JavaScript.ohlc = block => [
    `Bot.getOhlc({ granularity: ${getGranularity(block)} })`,
    Blockly.JavaScript.ORDER_ATOMIC,
];
