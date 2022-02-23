import * as React from 'react';
import { render } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'mobx-react';

import { store } from '@store';
import { Router } from '@common/Router';
// import { swRegister } from './swRegister';
//
// if ('serviceWorker' in navigator) {
//     swRegister();
// }

render(
    <Provider { ...store } >
        <BrowserRouter>
            <Router />
        </BrowserRouter>
    </Provider>,
    document.getElementById('app'),
);
