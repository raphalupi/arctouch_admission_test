import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

const classes = {
    wrapper: classnames(
        'flex',
        'justify-center',
        'items-center',
        'br-100',
        'pointer'
    ),
};

const HoverIcon = ({ icon, size, bgColors, animate }) => {
    const styles = {
        width: size,
        height: size,
    };

    const wrapperClasses = classnames(
        classes.wrapper,
        bgColors,
        animate && 'bg-animate'
    );

    return (
        <div className={wrapperClasses} style={styles}>
            {icon}
        </div>
    );
};

HoverIcon.propTypes = {
    icon: PropTypes.node,
    size: PropTypes.string,
    bgColors: PropTypes.string,
    animate: PropTypes.bool,
};

HoverIcon.defaultProps = {
    icon: null,
    size: '40px',
    bgColors: '',
    animate: true,
};

export default HoverIcon;
