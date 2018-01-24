import React from 'react';
import PropTypes from 'prop-types';

import Icon from './Icon.jsx';

const IconTwitter = ({ size, className }) => (
    <Icon
        size={size}
        className={className}
        viewBox="0 0 26 26"
        d="M 6.3125 0.03125 L 8.09375 5.875 L 8.09375 9.6875 L 9.59375 9.6875 L 9.59375 5.6875 L
        11.3125 0.03125 L 9.8125 0.03125 L 8.875 3.875 L 8.78125 3.875 L 7.8125 0.03125 Z M 13.21875
        2.375 C 12.617188 2.375 12.136719 2.546875 11.78125 2.875 C 11.425781 3.199219 11.25
        3.636719 11.25 4.1875 L 11.25 7.875 C 11.25 8.480469 11.433594 8.988281 11.78125 9.34375
        C 12.132813 9.703125 12.574219 9.875 13.15625 9.875 C 13.757813 9.875 14.25 9.691406
        14.59375 9.34375 C 14.9375 8.996094 15.09375 8.515625 15.09375 7.90625 L 15.09375 4.21875 C
        15.09375 3.675781 14.914063 3.25 14.5625 2.90625 C 14.214844 2.558594 13.769531 2.375
        13.21875 2.375 Z M 16.21875 2.5625 L 16.21875 8.53125 C 16.21875 8.957031 16.3125 9.257813
        16.46875 9.46875 C 16.625 9.679688 16.851563 9.78125 17.15625 9.78125 C 17.402344 9.78125
        17.644531 9.710938 17.90625 9.5625 C 18.171875 9.410156 18.445313 9.195313 18.6875 8.90625 L
        18.6875 9.6875 L 20 9.6875 L 20 2.5625 L 18.6875 2.5625 L 18.6875 7.96875 C 18.5625 8.121094
        18.429688 8.246094 18.28125 8.34375 C 18.132813 8.445313 18.003906 8.5 17.90625 8.5 C
        17.785156 8.5 17.679688 8.480469 17.625 8.40625 C 17.566406 8.332031 17.5625 8.195313
        17.5625 8.03125 L 17.5625 2.5625 Z M 13.15625 3.625 C 13.332031 3.625 13.488281 3.65625
        13.59375 3.75 C 13.703125 3.847656 13.75 3.972656 13.75 4.125 L 13.75 8.03125 C 13.75
        8.222656 13.699219 8.363281 13.59375 8.46875 C 13.488281 8.578125 13.335938 8.625 13.15625
        8.625 C 12.980469 8.625 12.84375 8.574219 12.75 8.46875 C 12.652344 8.363281 12.625 8.226563
        12.625 8.03125 L 12.625 4.125 C 12.625 3.972656 12.679688 3.847656 12.78125 3.75 C 12.882813
        3.65625 12.996094 3.625 13.15625 3.625 Z M 13 11.15625 C 10.40625 11.152344 7.863281
        11.175781 5.375 11.28125 C 3.636719 11.28125 2.21875 12.683594 2.21875 14.40625 C 2.113281
        15.769531 2.058594 17.136719 2.0625 18.5 C 2.058594 19.863281 2.113281 21.230469 2.21875
        22.59375 C 2.21875 24.316406 3.636719 25.71875 5.375 25.71875 C 7.863281 25.820313 10.40625
        25.847656 13 25.84375 C 15.597656 25.851563 18.140625 25.820313 20.625 25.71875 C 22.363281
        25.71875 23.78125 24.316406 23.78125 22.59375 C 23.886719 21.230469 23.941406 19.863281
        23.9375 18.5 C 23.945313 17.136719 23.886719 15.769531 23.78125 14.40625 C 23.78125
        12.683594 22.363281 11.28125 20.625 11.28125 C 18.140625 11.175781 15.597656 11.152344 13
        11.15625 Z M 3.75 13.375 L 8.34375 13.375 C 8.425781 13.375 8.5 13.449219 8.5 13.53125 L 8.5
        14.9375 C 8.5 15.019531 8.425781 15.09375 8.34375 15.09375 L 6.9375 15.09375 L 6.9375
        23.1875 C 6.9375 23.269531 6.894531 23.34375 6.8125 23.34375 L 5.3125 23.34375 C 5.230469
        23.34375 5.15625 23.269531 5.15625 23.1875 L 5.15625 15.09375 L 3.75 15.09375 C 3.667969
        15.09375 3.625 15.019531 3.625 14.9375 L 3.625 13.53125 C 3.625 13.449219 3.667969 13.375
        3.75 13.375 Z M 13.40625 13.375 L 14.75 13.375 C 14.832031 13.375 14.90625 13.449219
        14.90625 13.53125 L 14.90625 16.25 C 15.015625 16.148438 15.132813 16.066406 15.25 16 C
        15.476563 15.875 15.707031 15.8125 15.9375 15.8125 C 16.40625 15.8125 16.75 16 17 16.34375 C
        17.238281 16.675781 17.375 17.140625 17.375 17.75 L 17.375 21.71875 C 17.375 22.257813
        17.261719 22.675781 17.03125 22.96875 C 16.792969 23.273438 16.4375 23.4375 16 23.4375 C
        15.722656 23.4375 15.476563 23.363281 15.25 23.25 C 15.128906 23.1875 15.015625 23.128906
        14.90625 23.03125 L 14.90625 23.1875 C 14.90625 23.269531 14.832031 23.34375 14.75 23.34375
        L 13.40625 23.34375 C 13.324219 23.34375 13.25 23.269531 13.25 23.1875 L 13.25 13.53125 C
        13.25 13.449219 13.324219 13.375 13.40625 13.375 Z M 20.21875 15.71875 C 20.867188 15.71875
        21.398438 15.921875 21.75 16.3125 C 22.101563 16.703125 22.28125 17.257813 22.28125 17.96875
        L 22.28125 19.8125 C 22.28125 19.894531 22.207031 19.9375 22.125 19.9375 L 19.75 19.9375 L
        19.75 21.15625 C 19.75 21.59375 19.796875 21.765625 19.84375 21.84375 C 19.882813 21.90625
        19.949219 22 20.15625 22 C 20.324219 22 20.441406 21.953125 20.5 21.875 C 20.527344
        21.832031 20.59375 21.675781 20.59375 21.15625 L 20.59375 20.65625 C 20.59375 20.574219
        20.667969 20.5 20.75 20.5 L 22.125 20.5 C 22.207031 20.5 22.28125 20.574219 22.28125
        20.65625 L 22.28125 21.1875 C 22.28125 21.957031 22.074219 22.542969 21.71875 22.9375 C
        21.363281 23.335938 20.828125 23.53125 20.125 23.53125 C 19.488281 23.53125 18.992188
        23.332031 18.625 22.90625 C 18.261719 22.488281 18.0625 21.910156 18.0625 21.1875 L 18.0625
        17.96875 C 18.0625 17.3125 18.253906 16.792969 18.65625 16.375 C 19.058594 15.957031
        19.585938 15.71875 20.21875 15.71875 Z M 8.34375 15.90625 L 9.65625 15.90625 C 9.738281
        15.90625 9.8125 15.980469 9.8125 16.0625 L 9.8125 21.53125 C 9.8125 21.710938 9.824219
        21.785156 9.84375 21.8125 C 9.851563 21.824219 9.886719 21.875 10 21.875 C 10.039063 21.875
        10.125 21.859375 10.28125 21.75 C 10.410156 21.664063 10.523438 21.558594 10.625 21.4375 L
        10.625 16.0625 C 10.625 15.980469 10.699219 15.90625 10.78125 15.90625 L 12.125 15.90625 C
        12.207031 15.90625 12.25 15.980469 12.25 16.0625 L 12.25 23.1875 C 12.25 23.269531 12.207031
        23.34375 12.125 23.34375 L 10.78125 23.34375 C 10.699219 23.34375 10.625 23.269531 10.625
        23.1875 L 10.625 22.78125 C 10.449219 22.953125 10.277344 23.082031 10.09375 23.1875 C
        9.804688 23.351563 9.53125 23.4375 9.25 23.4375 C 8.894531 23.4375 8.621094 23.316406 8.4375
        23.0625 C 8.261719 22.824219 8.1875 22.484375 8.1875 22.03125 L 8.1875 16.0625 C 8.1875
        15.980469 8.261719 15.90625 8.34375 15.90625 Z M 15.25 17.25 C 15.199219 17.257813 15.148438
        17.285156 15.09375 17.3125 C 15.03125 17.34375 14.96875 17.402344 14.90625 17.46875 L
        14.90625 21.78125 C 14.984375 21.863281 15.050781 21.933594 15.125 21.96875 C 15.207031
        22.007813 15.285156 22.03125 15.375 22.03125 C 15.542969 22.03125 15.609375 21.960938 15.625
        21.9375 C 15.664063 21.886719 15.6875 21.769531 15.6875 21.53125 L 15.6875 17.84375 C
        15.6875 17.640625 15.667969 17.472656 15.59375 17.375 C 15.519531 17.277344 15.402344
        17.222656 15.25 17.25 Z M 20.1875 17.28125 C 20.027344 17.28125 19.910156 17.316406 19.84375
        17.40625 C 19.796875 17.472656 19.75 17.636719 19.75 17.96875 L 19.75 18.53125 L 20.59375
        18.53125 L 20.59375 17.96875 C 20.59375 17.640625 20.550781 17.480469 20.5 17.40625 C
        20.4375 17.320313 20.339844 17.28125 20.1875 17.28125 Z" />
);

IconTwitter.propTypes = {
    size: PropTypes.string,
    className: PropTypes.string,
};

IconTwitter.defaultProps = {
    size: '20',
    className: 'black',
};

export default IconTwitter;
