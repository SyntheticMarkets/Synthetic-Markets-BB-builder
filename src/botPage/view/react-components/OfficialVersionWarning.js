import React from 'react';
import PropTypes from 'prop-types';
import { translate } from '@i18n';

const OfficialVersionWarning = ({ show }) =>
    show ? (
        <div className='version-warning'>
            <div id='end-note'>{`${translate('')} `}</div>
        </div>
    ) : null;

OfficialVersionWarning.propTypes = {
    show: PropTypes.bool.isRequired,
};

export default OfficialVersionWarning;
