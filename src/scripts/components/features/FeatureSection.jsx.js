import React from 'react';
import { StyleSheet, css } from 'aphrodite/no-important';
import classnames from 'classnames';

import Title from '../Title.jsx';
import Subtitle from '../Subtitle.jsx';
import {
    IconMonitorO,
    IconTarget,
    IconImageO,
    IconPaletteO,
    IconUserO,
    IconCogO,
} from '../icons/';
import FeatureCard from './FeatureCard.jsx';

const styles = StyleSheet.create({
    content: {
        margin: '0 auto',
        maxWidth: '1200px'
    },
});

const classes = {
    wrapper: classnames(
        'bg-white'
    ),
    content: classnames(
        'w-80-l',
        'w-90-m',
        css(styles.content),
        'pv5-l',
        'pv4',
        'ph3',
        'ph0-ns',
        'flex',
        'flex-column'
    ),
    titleWrapper: classnames(
        'tc'
    ),
    featuresWrapper: classnames(
        'flex',
        'flex-row-ns',
        'flex-column',
        'flex-wrap'
    ),
};

const FeatureSection = () => {
    const subtitle = (
        <Subtitle
            text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse fringila."
            className="mt0 lh-copy" />
    );

    const features = [{
        icon: (<IconMonitorO size="50" className="blue"/>),
        title: (<Title text="Flat Design"/>),
        subtitle,
    }, {
        icon: (<IconTarget size="50" className="blue"/>),
        title: (<Title text="Marketable"/>),
        subtitle,
    }, {
        icon: (<IconImageO size="50" className="blue"/>),
        title: (<Title text="Edit Photos"/>),
        subtitle,
    }, {
        icon: (<IconPaletteO size="50" className="blue"/>),
        title: (<Title text="Edit Colors"/>),
        subtitle,
    }, {
        icon: (<IconUserO size="50" className="blue"/>),
        title: (<Title text="User Friendly"/>),
        subtitle,
    }, {
        icon: (<IconCogO size="50" className="blue"/>),
        title: (<Title text="100% Editable"/>),
        subtitle,
    }];

    return (
        <div className={classes.wrapper}>
            <div className={classes.content}>
                <div className={classes.titleWrapper}>
                    <Title
                        text="Craze Features"
                        className="tc mt0" />
                    <Subtitle
                        text="Lorem ipsum dolor sit amet, pro aeterno adipisci ex, pro no iriure accusam. Eros admodum intellegat ex mea, mei wisi nullam ne, qui cu aliquid nominavi. Est habemus malestatis ut. Vim quod elitr interesset ea."
                        className="tc mb5-l mb4-m mb3 lh-copy" />
                </div>
                <div className={classes.featuresWrapper}>
                    {features.map((feature, i) => (
                        <FeatureCard
                            key={i}
                            index={i}
                            icon={feature.icon}
                            title={feature.title}
                            subtitle={feature.subtitle} />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default FeatureSection;
