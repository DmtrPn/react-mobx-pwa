import * as React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'mobx-react';

import { store } from '@store';
import { Page } from '@core/Page';

export function App(): JSX.Element {
    return (<Provider { ...store } >
        <BrowserRouter>
            <Page />
        </BrowserRouter>
    </Provider>);
}
