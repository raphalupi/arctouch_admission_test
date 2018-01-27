import React from 'react';
import PropTypes from 'prop-types';

import Icon from './Icon.jsx';

const IconChevronRight = ({ size, className }) => (
    <Icon
        size={size}
        className={className}
        viewBox="0 0 50 50"
        d="M 18.136719 3 C 17.875 3.003906 17.628906 3.105469 17.441406 3.289063 L 11.417969
        9.265625 C 11.027344 9.65625 11.023438 10.289063 11.410156 10.679688 L 25.644531 25.03125 L
        11.296875 39.265625 C 10.902344 39.65625 10.898438 40.289063 11.289063 40.679688 L 17.265625
        46.703125 C 17.65625 47.097656 18.289063 47.101563 18.679688 46.710938 L 39.765625 25.796875
        C 40.15625 25.40625 40.160156 24.773438 39.769531 24.378906 L 18.859375 3.296875 C 18.667969
        3.101563 18.40625 2.996094 18.136719 3 Z" />
);

IconChevronRight.propTypes = {
    size: PropTypes.string,
    className: PropTypes.string,
};

IconChevronRight.defaultProps = {
    size: '20',
    className: 'black',
};

export default IconChevronRight;
