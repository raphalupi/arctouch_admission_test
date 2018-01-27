import React from 'react';
import PropTypes from 'prop-types';

import Icon from './Icon.jsx';

const IconImageO = ({ size, className }) => (
    <Icon
        size={size}
        className={className}
        viewBox="0 0 50 50"
        d="M 0 5 L 0 45 L 50 45 L 50 5 Z M 2 7 L 48 7 L 48 33 L 37.320313 33 L 30.320313 28 L
        24.414063 28 L 20.328125 23.914063 L 15.460938 24.890625 L 11.15625 18.429688 L 2 27.585938
        Z M 37.5 13 C 35.027344 13 33 15.027344 33 17.5 C 33 19.972656 35.027344 22 37.5 22 C
        39.972656 22 42 19.972656 42 17.5 C 42 15.027344 39.972656 13 37.5 13 Z M 37.5 15 C
        38.890625 15 40 16.109375 40 17.5 C 40 18.890625 38.890625 20 37.5 20 C 36.109375 20 35
        18.890625 35 17.5 C 35 16.109375 36.109375 15 37.5 15 Z M 10.84375 21.570313 L 14.539063
        27.109375 L 19.671875 26.085938 L 23.585938 30 L 29.679688 30 L 36.679688 35 L 48 35 L 48 43
        L 2 43 L 2 30.414063 Z" />
);

IconImageO.propTypes = {
    size: PropTypes.string,
    className: PropTypes.string,
};

IconImageO.defaultProps = {
    size: '20',
    className: 'black',
};

export default IconImageO;
