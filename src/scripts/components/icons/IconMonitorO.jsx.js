import React from 'react';
import PropTypes from 'prop-types';

import Icon from './Icon.jsx';

const IconMonitorO = ({ size, className }) => (
    <Icon
        size={size}
        className={className}
        viewBox="0 0 50 50"
        d="M 4 5 C 2.898438 5 2 5.898438 2 7 L 2 36 C 2 37.101563 2.898438 38 4 38 L 19 38 L 19 41 L
        16 41 C 14.347656 41 13 42.347656 13 44 L 13 46 L 37 46 L 37 44 C 37 42.347656 35.652344 41
        34 41 L 31 41 L 31 38 L 46 38 C 47.101563 38 48 37.101563 48 36 L 48 7 C 48 5.898438
        47.101563 5 46 5 Z M 4 7 L 46 7 L 46 36 L 4 36 L 4 32 L 46 32 L 46 30 L 4 30 Z M 41 33 L 41
        35 L 43 35 L 43 33 Z M 21 38 L 29 38 L 29 41 L 21 41 Z M 16 43 L 34 43 C 34.550781 43 35
        43.449219 35 44 L 15 44 C 15 43.449219 15.449219 43 16 43 Z" />
);

IconMonitorO.propTypes = {
    size: PropTypes.string,
    className: PropTypes.string,
};

IconMonitorO.defaultProps = {
    size: '20',
    className: 'black',
};

export default IconMonitorO;
