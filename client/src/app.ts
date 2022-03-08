import * as React from 'react';
import { render } from 'react-dom';

import { App } from '@core/App';

// import { swRegister } from './swRegister';
//
// if ('serviceWorker' in navigator) {
//     swRegister();
// }

render(
    React.createElement(App),
    document.getElementById('app'),
);
