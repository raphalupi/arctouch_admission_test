import React from 'react';
import PropTypes from 'prop-types';

import Icon from './Icon.jsx';

const IconWindows = ({ size, className }) => (
    <Icon
        size={size}
        className={className}
        viewBox="0 0 24 24"
        d="M 22 2 L 12 3.40625 L 12 11 L 22 11 Z M 10 3.6875 L 2 4.8125 L 2 11 L 10 11 Z M 2 13 L 2
        19.1875 L 10 20.3125 L 10 13 Z M 12 13 L 12 20.59375 L 22 22 L 22 13 Z" />
);

IconWindows.propTypes = {
    size: PropTypes.string,
    className: PropTypes.string,
};

IconWindows.defaultProps = {
    size: '20',
    className: 'black',
};

export default IconWindows;
