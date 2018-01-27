import React from 'react';
import classnames from 'classnames';

const classes = {
    wrapper: classnames(
        'w-100',
        'w-40-m',
        'w-20-l',
        'flex',
        'flex-column',
        'mh1',
        'mv2',
        'mv0-l'
    ),
    planName: classnames(
        'tc',
        'f3',
        'white',
        'fw6',
        'pa3',
        'bg-blue',
        'tracked'
    ),
    planInfoWrapper: classnames(
        'pa3',
        'bg-white',
        'nb2-l'
    ),
    planPriceWrapper: classnames(
        'flex',
        'flex-row',
        'justify-center',
        'black',
        'fw6',
        'mb2'
    ),
    planPriceUnit: classnames(
        'f2'
    ),
    planPriceInt: classnames(
        'f2'
    ),
    planPriceDec: classnames(
        'f4',
        'align-self-start',
        'lh-copy'
    ),
    planFeatureItem: classnames(
        'bt',
        'b--moon-gray',
        'gray',
        'tc',
        'pv2'
    ),
    purchaseBox: classnames(
        'pa3',
        'bg-blue',
        'tc'
    ),
    purchaseBtn: classnames(
        'white',
        'bg-dark-blue',
        'ph3',
        'pv2',
        'mh3',
        'f7',
        'fw6',
        'bn'
    ),
};

const PricePlanBox = ({ data }) => {
    const priceInt = Math.floor(data.price);
    const priceFloat = (data.price % 1).toFixed(2).substring(2);

    return (
        <div className={classes.wrapper}>
            <div className={classes.planName}>{data.name}</div>
            <div className={classes.planInfoWrapper}>
                <div className={classes.planPriceWrapper}>
                    <div className={classes.planPriceUnit}>$</div>
                    <div className={classes.planPriceInt}>{priceInt}</div>
                    <div className={classes.planPriceDec}>{priceFloat}</div>
                </div>
                {data.features.map(feature => (
                    <div key={feature} className={classes.planFeatureItem}>
                        {feature}
                    </div>
                ))}
            </div>
            <div className={classes.purchaseBox}>
                <button className={classes.purchaseBtn}>PURCHASE</button>
            </div>
        </div>
    );
};

export default PricePlanBox;
