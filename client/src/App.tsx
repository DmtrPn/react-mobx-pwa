import * as React from 'react';
import { render } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'mobx-react';

import { createStore } from '@store';
import { Router } from '@common/Router';
import { swRegister } from './swRegister';

if ('serviceWorker' in navigator) {
    swRegister();
}

const store = createStore();

render(
    <Provider { ...store } >
        <BrowserRouter>
            <Router />
        </BrowserRouter>
    </Provider>,
    document.getElementById('app'),
);
