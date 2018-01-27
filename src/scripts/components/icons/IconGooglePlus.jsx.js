import React from 'react';
import PropTypes from 'prop-types';

import Icon from './Icon.jsx';

const IconGooglePlus = ({ size, className }) => (
    <Icon
        size={size}
        className={className}
        viewBox="0 0 50 50"
        d="M 17.1875 10.9375 C 9.421875 10.9375 3.125 17.234375 3.125 25 C 3.125 32.765625 9.421875
        39.0625 17.1875 39.0625 C 24.953125 39.0625 31.25 32.765625 31.25 25 C 31.25 24.035156
        31.144531 23.09375 30.960938 22.1875 L 30.882813 21.875 L 17.1875 21.875 L 17.1875 26.5625 L
        26.5625 26.5625 C 25.816406 30.996094 21.832031 34.375 17.1875 34.375 C 12.007813 34.375
        7.8125 30.179688 7.8125 25 C 7.8125 19.820313 12.007813 15.625 17.1875 15.625 C 19.53125
        15.625 21.667969 16.492188 23.3125 17.914063 L 26.671875 14.625 C 24.171875 12.335938
        20.84375 10.9375 17.1875 10.9375 Z M 39.0625 17.1875 L 39.0625 21.875 L 34.375 21.875 L
        34.375 25 L 39.0625 25 L 39.0625 29.6875 L 42.1875 29.6875 L 42.1875 25 L 46.875 25 L 46.875
        21.875 L 42.1875 21.875 L 42.1875 17.1875 Z" />
);

IconGooglePlus.propTypes = {
    size: PropTypes.string,
    className: PropTypes.string,
};

IconGooglePlus.defaultProps = {
    size: '20',
    className: 'black',
};

export default IconGooglePlus;
