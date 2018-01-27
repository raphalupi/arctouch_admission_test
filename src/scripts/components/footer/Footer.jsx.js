import React from 'react';
import { StyleSheet, css } from 'aphrodite/no-important';
import classnames from 'classnames';

const styles = StyleSheet.create({
    content: {
        margin: '0 auto',
        maxWidth: '1200px'
    },
});

const classes = {
    wrapper: classnames(
        'bg-near-white',
        'pa5-l',
        'pa4-m',
        'pa3',
        'tc'
    ),
    content: classnames(
        css(styles.content),
        'w-80-l',
        'w-90-m',
        'flex',
        'flex-column',
        'flex-row-ns',
        'flex-wrap-ns',
        'justify-center'
    ),
    link: classnames(
        'dib',
        'mh3',
        'pb2',
        'pb0-l',
        'f4',
        'gray',
        'pointer'
    ),
};

const Footer = () => {
    const links = ['Contact', 'Download', 'Press', 'Email', 'Support', 'Privacy Policy'];

    return (
        <div className={classes.wrapper}>
            <div className={classes.content}>
                {links.map(link => (
                    <div
                        key={link}
                        className={classes.link}
                    >
                        {link}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Footer;
