import * as React from 'react';
import { hydrate } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'mobx-react';
import * as lodash from 'lodash';
// import 'babel-polyfill';

import { STORES } from './store';
import { Router } from '@common/Router';

const stores = lodash.mapValues(STORES, (store, name) => new store());

hydrate(
    <Provider { ...stores } >
        <BrowserRouter>
            <Router />
        </BrowserRouter>
    </Provider>,
    document.getElementById('app')
);
