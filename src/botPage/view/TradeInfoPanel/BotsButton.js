// BotsButton.js

import React from 'react';
import { translate } from '@i18n';

const BotsButton = () => (
    <button
        title={translate('Open Bots')}
        id='botsButton'
        className='toolbox-button icon-bots' // Ensure you have 'icon-bots' styled in your CSS
        onClick={() => {
            // Your logic here
            console.log('Bots button clicked!');
        }}
    >
        {translate('Bots')}
    </button>
);

export default BotsButton;
