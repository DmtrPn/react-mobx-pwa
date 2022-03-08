import * as React from 'react';
import { Routes, Route } from 'react-router';

import { locations } from './locations';
import { NotFound } from '@modules/notFound';
import { DreamRouter } from '@dream/routes/DreamRoter';

export function Router(): JSX.Element {
    return (
        <Routes>
            {locations.map(location =>
                <Route
                    key={location.url}
                    path={location.url}
                    element={React.createElement(location.Component)}
                />,
            )}
            {DreamRouter()}
            <Route path={'*'} element={React.createElement(NotFound)} />
        </Routes>
    );
}
