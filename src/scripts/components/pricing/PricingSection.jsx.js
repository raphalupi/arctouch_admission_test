import React from 'react';
import { StyleSheet, css } from 'aphrodite/no-important';
import classnames from 'classnames';

import Title from '../Title.jsx';
import Subtitle from '../Subtitle.jsx';
import PricePlanBox from './PricePlanBox.jsx';

const styles = StyleSheet.create({
    content: {
        margin: '0 auto',
        maxWidth: '1200px'
    },
});

const classes = {
    wrapper: classnames(
        'bg-near-white'
    ),
    content: classnames(
        'w-80-l',
        'w-90-m',
        css(styles.content),
        'pt5-ns',
        'pt4',
        'ph3',
        'ph0-ns',
        'flex',
        'flex-column'
    ),
    pricingWrapper: classnames(
        'flex',
        'flex-column',
        'flex-row-ns',
        'flex-wrap-ns',
        'justify-center',
        'items-center-l',
        'nb5-l'
    ),
};

const PricingSection = () => {
    const plans = [{
        name: 'Basic',
        price: 19.99,
        features: ['Feature 1', 'Feature 2', 'Feature 3', 'Feature 4', 'Feature 5']
    }, {
        name: 'Standard',
        price: 39.99,
        features: ['Feature 1', 'Feature 2', 'Feature 3', 'Feature 4', 'Feature 5']
    }, {
        name: 'Deluxe',
        price: 59.99,
        features: ['Feature 1', 'Feature 2', 'Feature 3', 'Feature 4', 'Feature 5', 'Feature 6']
    }, {
        name: 'Unlimited',
        price: 79.99,
        features: ['Feature 1', 'Feature 2', 'Feature 3', 'Feature 4', 'Feature 5']
    }];

    return (
        <div className={classes.wrapper}>
            <div className={classes.content}>
                <div className={classes.description}>
                    <Title
                        text="Pricing Plans"
                        className="tc mt0" />
                    <Subtitle
                        text="Lorem ipsum dolor sit amet, pro aeterno adipisci ex, pro no iriune accusam. Eros admodum intellegat ex mea, mei wisi nulliam ne, qui cu aliquid nominavi. Est habemus malestatis ut. Vim quod elitr interesset ea."
                        className="tc lh-copy" />
                </div>
                <div className={classes.pricingWrapper}>
                    {plans.map(plan => (
                        <PricePlanBox key={plan.name} data={plan} />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default PricingSection;
