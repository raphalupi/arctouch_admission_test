import React from 'react';
import { render } from 'react-dom';

// Polyfills
/*import 'babel-polyfill';
import 'core-js/fn/object/assign';
import 'core-js/fn/promise';
import 'core-js/fn/symbol';
import 'core-js/es6/map';
import 'core-js/es6/set';*/

import 'tachyons/css/tachyons.min.css';

import App from './scripts/App.jsx';

render(
    <App />, document.getElementById('root')
);
