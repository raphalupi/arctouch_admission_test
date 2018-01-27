import React from 'react';
import PropTypes from 'prop-types';

const Icon = ({ size, className, viewBox, d }) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox={viewBox}
        width={size}
        height={size}
        className={className}
        version="1.1"
    >
        <path
            fill="currentColor"
            d={d} />
    </svg>
);

Icon.propTypes = {
    viewBox: PropTypes.string,
    size: PropTypes.string,
    className: PropTypes.string,
    d: PropTypes.string,
};

Icon.defaultProps = {
    size: '20',
    className: 'black',
    viewBox: '0 0 0 0',
    d: '',
};

export default Icon;
