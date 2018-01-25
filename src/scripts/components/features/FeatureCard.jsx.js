import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

const classes = {
    wrapper: classnames(
        'flex',
        'flex-column',
        'justify-center',
        'w-33'
    ),
    iconWrapper: classnames(
        'flex',
        'justify-center'
    ),
    titleWrapper: classnames(
    ),
    subtitleWrapper: classnames(
    ),
};

const FeatureCard = ({ icon, title, subtitle }) => {

    return (
        <div className={classes.wrapper}>
            <div className={classes.iconWrapper}>{icon}</div>
            <div className={classes.titleWrapper}>{title}</div>
            <div className={classes.subtitleWrapper}>{subtitle}</div>
        </div>
    );
};

FeatureCard.propTypes = {
    icon: PropTypes.node,
    title: PropTypes.node,
    subtitle: PropTypes.node,
};

FeatureCard.defaultProps = {
    icon: null,
    title: null,
    subtitle: null,
};

export default FeatureCard;
