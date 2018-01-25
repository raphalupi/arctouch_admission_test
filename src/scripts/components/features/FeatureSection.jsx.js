import React from 'react';
import PropTypes from 'prop-types';
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

const classes = {
    wrapper: classnames(
    ),
};

const FeatureSection = () => {
    const subtitle = (<Subtitle text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse fringila" className="tc" />);

    const features = [{
        icon: (<IconMonitorO size="50" className="blue"/>),
        title: (<Title text="Flat Design" className="tc" />),
        subtitle,
    }];

    return (
        <div className={classes.wrapper}>
            {features.map((feature, i) => (
                <FeatureCard
                    key={i}
                    icon={feature.icon}
                    title={feature.title}
                    subtitle={feature.subtitle} />
            ))}
        </div>
    );
};

FeatureSection.propTypes = {
    icon: PropTypes.node,
    title: PropTypes.node,
    subtitle: PropTypes.node,
};

FeatureSection.defaultProps = {
    icon: null,
    title: null,
    subtitle: null,
};

export default FeatureSection;
