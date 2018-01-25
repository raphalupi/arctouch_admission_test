import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

const classes = {
    title: classnames(
        'f3',
        'gray',
        'fw4',
        'mv2'
    ),
};

const Subtitle = ({ text, className }) => {
    const titleClasses = classnames(
        classes.title,
        className
    );

    return (
        <p className={titleClasses}>
            {text}
        </p>
    );
};

Subtitle.propTypes = {
    text: PropTypes.string,
    className: PropTypes.string,
};

Subtitle.defaultProps = {
    text: '',
    className: '',
};

export default Subtitle;
