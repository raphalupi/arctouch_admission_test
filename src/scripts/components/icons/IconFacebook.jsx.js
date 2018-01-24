import React from 'react';
import PropTypes from 'prop-types';

import Icon from './Icon.jsx';

const IconFacebook = ({ size, className }) => (
    <Icon
        size={size}
        className={className}
        viewBox="0 0 24 24"
        d="M13,7.429V10h3.5L16,13h-3v9H9v-9H7v-3l2.012,0.008V7.436c0-2.857,1.143-4.429,4.429-4.429L17,3v3h-2.571
        C13.143,6,13,6.429,13,7.429z" />
);

IconFacebook.propTypes = {
    size: PropTypes.string,
    className: PropTypes.string,
};

IconFacebook.defaultProps = {
    size: '20',
    className: 'black',
};

export default IconFacebook;
