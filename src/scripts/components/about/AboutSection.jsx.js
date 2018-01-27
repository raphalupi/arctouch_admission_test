import React from 'react';
import { StyleSheet, css } from 'aphrodite/no-important';
import classnames from 'classnames';

import Title from '../Title.jsx';
import Subtitle from '../Subtitle.jsx';
import { IconChevronRight } from '../icons/';

const styles = StyleSheet.create({
    content: {
        margin: '0 auto',
        maxWidth: '1200px'
    },

    videoWrapperBig: {
        paddingBottom: '23.25%',
    },
});

const classes = {
    wrapper: classnames(
        'bg-near-white'
    ),
    content: classnames(
        'w-80-ns',
        css(styles.content),
        'pv5-l',
        'pv4',
        'ph0-ns',
        'ph3',
        'flex',
        'flex-row-l',
        'flex-column'
    ),
    aboutWrapper: classnames(
        'w-60-l',
        'pr5-l',
        'pb3',
        'pb4-m',
        'pb0-l'
    ),
    topicsWrapper: classnames(
        'mt3'
    ),
    topic: classnames(
        'flex',
        'content-center',
        'mb2'
    ),
    chevronWrapper: classnames(
        'mh3-ns',
        'mh2'
    ),
    videoWrapperSmall: classnames(
        'aspect-ratio',
        'aspect-ratio--16x9',
        'dn-l'
    ),
    videoWrapperBig: classnames(
        'dn',
        'db-l',
        'w-40-l',
        'aspect-ratio',
        css(styles.videoWrapperBig)
    ),
};

const AboutSection = () => {
    const iconChevron = (
        <div className={classes.chevronWrapper}>
            <IconChevronRight size="18" className="black" />
        </div>
    );

    return (
        <div className={classes.wrapper}>
            <div className={classes.content}>
                <div className={classes.aboutWrapper}>
                    <Title
                        text="Whats Craze all About?"
                        className="tl mt0" />
                    <Subtitle
                        text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse fringilla nisi congue congue. Maecenas nec condimentum libero, at elementum mauris."
                        className="tl lh-copy" />
                    <Subtitle
                        text="Phasellus eget dapibus, ultricies nisl at, hendreit risusuis omare lectus id solicitudin ante lobortis at."
                        className="tl lh-copy" />
                    <div className={classes.topicsWrapper}>
                        <div className={classes.topic}>
                            {iconChevron}
                            <Subtitle
                                text="Lorem ipsum dolor sit amet"
                                className="mv0" />
                        </div>
                        <div className={classes.topic}>
                            {iconChevron}
                            <Subtitle
                                text="Lorem ipsum dolor sit amet consectetur elt"
                                className="mv0" />
                        </div>
                    </div>
                </div>
                <div className={classes.videoWrapperSmall}>
                    <iframe
                        className="aspect-ratio--object"
                        src="https://player.vimeo.com/video/15069551?transparent=0"
                        frameBorder="0" />
                </div>
                <div className={classes.videoWrapperBig}>
                    <iframe
                        className="aspect-ratio--object"
                        src="https://player.vimeo.com/video/15069551?transparent=0"
                        frameBorder="0" />
                </div>
            </div>
        </div>
    );
};

export default AboutSection;
