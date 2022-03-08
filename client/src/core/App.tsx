import * as React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'mobx-react';

import { store } from '@store';
import { Router } from '@common/Router';

export function App(): JSX.Element {
    return (<Provider { ...store } >
        <BrowserRouter>
            <Router />
        </BrowserRouter>
    </Provider>);
}
