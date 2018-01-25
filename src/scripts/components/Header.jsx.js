import React from 'react';
import { StyleSheet, css } from 'aphrodite/no-important';
import classnames from 'classnames';

import {
    IconApple,
    IconAndroid,
    IconWindows,
} from './icons/';
import HoverIcon from './HoverIcon.jsx';

const styles = StyleSheet.create({
    wrapper: {
        background: 'url(src/img/background.png)'
    },

    titleContentWrapper: {
        maxWidth: '1200px',
        margin: '0 auto',
    },
});

const classes = {
    wrapper: classnames(
        css(styles.wrapper)
    ),
    titleContentWrapper: classnames(
        'flex',
        'justify-center',
        'pt5',
        css(styles.titleContentWrapper)
    ),
    titleWrapper: classnames(
        'flex-shrink-1',
        'pr5'
    ),
    imageWrapper: classnames(
        'flex-shrink-0'
    ),
    name: classnames(
        'white',
        'f-5'
    ),
    desc: classnames(
        'white',
        'f3'
    ),
    iconsWrapper: classnames(
        'flex',
        'nl2',
        'nr2'
    ),
    iconWrapper: classnames(
        'ph2'
    ),
    image: classnames(
        'h-100'
    ),
};

const Header = () => {
    const icons = [
        { node: (<IconApple size="25" className="white"/>), key: 'apple' },
        { node: (<IconAndroid size="25" className="white"/>), key: 'android' },
        { node: (<IconWindows size="25" className="white"/>), key: 'windows' },
    ];
    const hoverIconSize = '50px';
    const bgColors = 'bg-black-40 hover-bg-black';

    return (
        <div className={classes.wrapper}>
            <div className={classes.titleContentWrapper}>
                <div className={classes.titleWrapper}>
                    <h1 className={classes.name}>Craze</h1>
                    <p className={classes.desc}>A great new free psd theme to showcase your new app.</p>
                    <div className={classes.iconsWrapper}>
                        {icons.map(icon => (
                            <span key={icon.key} className={classes.iconWrapper}>
                                <HoverIcon
                                    icon={icon.node}
                                    size={hoverIconSize}
                                    bgColors={bgColors} />
                            </span>
                        ))}
                    </div>
                </div>
                <div className={classes.imageWrapper}>
                    <img src="src/img/hand.png" className={classes.image}/>
                </div>
            </div>
        </div>
    );
};

export default Header;
