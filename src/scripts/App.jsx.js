import React from 'react';

import * as icons from './components/icons/';

const App = () => (
    <div>
        icons
        <div>
            {Object.values(icons).map(Icon => (
                <div key={Icon.name} className="dib">
                    <Icon key={Icon.name} size="40" />
                </div>
            ))}
        </div>
    </div>
);

export default App;
