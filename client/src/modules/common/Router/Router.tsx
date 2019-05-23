import * as React from 'react';
import { Switch, Route } from 'react-router';

import { locations } from './locations';
import { NotFound } from '../../notFound';

export function Router(): JSX.Element {
    return (
        <Switch>
            {locations.map(location =>
                <Route
                    exact
                    key={location.url}
                    path={location.url}
                    component={location.Component}
                />
            )}
            <Route component={NotFound} />
        </Switch>
    );
}
