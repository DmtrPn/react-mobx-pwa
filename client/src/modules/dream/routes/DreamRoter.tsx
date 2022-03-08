import * as React from 'react';
import { Route } from 'react-router';

import { DreamPage } from '../ui/DreamPage';

export function DreamRouter(): JSX.Element {
    return (
        <Route path={'/dream'} element={React.createElement(DreamPage)}>
            <Route path={'subpage'} element={React.createElement(DreamPage)} />
        </Route>
    );
}
