import React from 'react';
import { StyleSheet, css } from 'aphrodite/no-important';
import classnames from 'classnames';

import Title from '../Title.jsx';
import Subtitle from '../Subtitle.jsx';
import HoverIcon from '../HoverIcon.jsx';
import {
    IconTwitter,
    IconFacebook,
    IconPinterest,
    IconGooglePlus,
    IconLinkedIn,
    IconYouTube,
} from '../icons/';

const styles = StyleSheet.create({
    content: {
        margin: '0 auto',
        maxWidth: '1200px'
    },
});

const classes = {
    wrapper: classnames(
    ),
    content: classnames(
        css(styles.content),
        'w-80-l',
        'w-90-m',
        'ph3',
        'ph0-ns',
        'pt6-l',
        'pv4',
        'pb5-l'
    ),
    iconsWrapper: classnames(
        'flex',
        'flex-row',
        'justify-center',
        'mt3'
    ),
    iconWrapper: classnames(
        'mh1'
    ),
};

const ContactSection = () => {
    const icons = [
        { node: (<IconTwitter size="18" className="white"/>), key: 'twitter' },
        { node: (<IconFacebook size="18" className="white"/>), key: 'facebook' },
        { node: (<IconPinterest size="18" className="white"/>), key: 'pinterest' },
        { node: (<IconGooglePlus size="18" className="white"/>), key: 'googleplus' },
        { node: (<IconLinkedIn size="18" className="white"/>), key: 'linkedin' },
        { node: (<IconYouTube size="18" className="white"/>), key: 'youtube' },
    ];

    return (
        <div className={classes.wrapper}>
            <div className={classes.content}>
                <Title
                    className="tc mt0"
                    text="Say Hi & Get in Touch" />
                <Subtitle
                    className="tc"
                    text="Lorem ipsum dolor sit amet, consectetus adipiscing elit suspendisse" />
                <div className={classes.iconsWrapper}>
                    {icons.map(icon => (
                        <span key={icon.key} className={classes.iconWrapper}>
                            <HoverIcon
                                icon={icon.node}
                                size="30px"
                                bgColors="bg-black-30 hover-bg-blue" />
                        </span>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ContactSection;
