import React from 'react';
import { StyleSheet, css } from 'aphrodite/no-important';
import classnames from 'classnames';

import {
    IconApple,
    IconAndroid,
    IconWindows,
} from '../icons/';
import HoverIcon from '../HoverIcon.jsx';

const styles = StyleSheet.create({
    wrapper: {
        background: 'url(src/img/background.png)'
    },

    content: {
        margin: '0 auto',
        maxWidth: '1200px'
    },

    shadow: {
        textShadow: '2px 2px #444a'
    },

    image: {
        userSelect: 'none',
    },
});

const classes = {
    wrapper: classnames(
        css(styles.wrapper)
    ),
    content: classnames(
        'w-80-l',
        'w-90-m',
        'flex',
        'justify-between',
        'pt5',
        'ph3',
        'ph0-ns',
        css(styles.content)
    ),
    titleWrapper: classnames(
        'w-100-l',
        'pr5-l',
        'pb5-l',
        'pb3',
        'tc',
        'tl-ns'
    ),
    name: classnames(
        'cursive-font',
        'white',
        'mt0',
        'mb4',
        'f-5',
        'fw-300',
        css(styles.shadow)
    ),
    desc: classnames(
        'white',
        'f3',
        css(styles.shadow)
    ),
    iconsWrapper: classnames(
        'flex',
        'nl2',
        'nr2',
        'justify-center',
        'justify-start-ns'
    ),
    iconWrapper: classnames(
        'ph2'
    ),
    imageWrapper: classnames(
        'w-40',
        'flex-shrink-0',
        'nb1',
        'dn',
        'db-l'
    ),
    image: classnames(
        css(styles.image)
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
            <div className={classes.content}>
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
