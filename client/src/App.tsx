import * as React from 'react';
import { render } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'mobx-react';
import * as lodash from 'lodash';

import { STORES } from './store';
import { Router } from '@common/Router';
import { swRegister } from './swRegister';

if ('serviceWorker' in navigator) {
    swRegister();
}

const stores = lodash.mapValues(STORES, (store, name) => new store());

render(
    <Provider { ...stores } >
        <BrowserRouter>
            <Router />
        </BrowserRouter>
    </Provider>,
    document.getElementById('app'),
);
