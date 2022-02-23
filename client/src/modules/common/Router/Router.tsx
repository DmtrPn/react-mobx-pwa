import * as React from 'react';
import { Routes, Route } from 'react-router';

import { locations } from './locations';
import { NotFound } from  '@modules/notFound';

export function Router(): JSX.Element {
    return (
        <Routes>
            {locations.map(location =>
                <Route
                    // index
                    key={location.url}
                    path={location.url}
                    element={React.createElement(location.Component)}
                />,
            )}
            <Route children={NotFound} />
        </Routes>
    );
}
