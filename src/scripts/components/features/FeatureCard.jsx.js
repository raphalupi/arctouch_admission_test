import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, css } from 'aphrodite/no-important';
import classnames from 'classnames';

const styles = StyleSheet.create({
    cardAfter: {
        ':after': {
            width: '70px',
            height: '30px',
            backgroundColor: 'white',
            position: 'absolute',
            bottom: '-15px',
            right: '-35px',
            zIndex: '1',
            '@media screen and (min-width: 30em)': {
                content: '""',
            }
        }
    },
    cardAfterEmptyM: {
        ':after': {
            '@media screen and (max-width: 60em) and (min-width: 30em)': {
                backgroundColor: 'transparent',
            }
        }
    },
    cardAfterEmptyL: {
        ':after': {
            '@media screen and (min-width: 60em)': {
                backgroundColor: 'transparent',
            }
        }
    },
});

const classes = {
    wrapper: classnames(
        'flex',
        'flex-column-ns',
        'flex-row',
        'justify-center',
        'w-33-l',
        'w-50-m',
        'pa4-ns',
        'relative',
        css(styles.cardAfter)
    ),
    iconWrapper: classnames(
        'flex',
        'justify-center',
        'items-center',
        'items-start-ns'
    ),
};

const FeatureCard = ({ index, icon, title, subtitle }) => {
    const warpperClasses = classnames(
        classes.wrapper,
        index % 2 && 'flex-row-reverse', // reverse flex order to draw icons last
        'b--moon-gray',
        index && 'bt', // first card doesnt have top border on small device
        index < 2 && 'bt-0-m', // top 2 cards doesn't have top border on medium devices
        index < 3 && 'bt-0-l', // top 3 cards doesn't have top border on large devices
        index % 2 ? 'br-0-m' : 'br-m', // when in 2 columns, the first one gets a right border
        index % 2 ? css(styles.cardAfterEmptyM) : '', // when in 2 columns, hide the white box from the second column
        (index + 1) % 3 ? 'br-l' : 'br-0-l', // when in 3 columns, the first and second ones get a right border
        (index + 1) % 3 ? '' : css(styles.cardAfterEmptyL) // when in 3 columns, hide only the last column boxes
    );

    const textDirection = index % 2 ?
        classnames('pr3', 'pr0-ns', 'tr') :
        classnames('pl3', 'pl0-ns', 'tl');

    return (
        <div className={warpperClasses}>
            <div className={classes.iconWrapper}>{icon}</div>
            <div className={classnames('tc-ns', textDirection)}>
                <div className={classes.titleWrapper}>{title}</div>
                <div className={classes.subtitleWrapper}>{subtitle}</div>
            </div>
        </div>
    );
};

FeatureCard.propTypes = {
    index: PropTypes.number,
    icon: PropTypes.node,
    title: PropTypes.node,
    subtitle: PropTypes.node,
};

FeatureCard.defaultProps = {
    index: 0,
    icon: null,
    title: null,
    subtitle: null,
};

export default FeatureCard;
