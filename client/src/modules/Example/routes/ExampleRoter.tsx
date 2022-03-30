import * as React from 'react';
import { Route } from 'react-router';

import { Example } from '../ui/ExamplePage';

export function ExampleRouter(): JSX.Element {
    return (
        <Route path={'/example'} element={React.createElement(Example)}>
            <Route path={'subpage'} element={React.createElement(Example)} />
        </Route>
    );
}
