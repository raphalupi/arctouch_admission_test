import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

const classes = {
    title: classnames(
        'f3',
        'black',
        'fw6'
    ),
};

const Title = ({ text, className }) => {
    const titleClasses = classnames(
        classes.title,
        className
    );

    return (
        <h1 className={titleClasses}>
            {text}
        </h1>
    );
};

Title.propTypes = {
    text: PropTypes.string,
    className: PropTypes.string,
};

Title.defaultProps = {
    text: '',
    className: '',
};

export default Title;
