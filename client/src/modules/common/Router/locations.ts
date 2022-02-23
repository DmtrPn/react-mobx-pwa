import * as React from 'react';

import { HomePage } from '@modules/Home';
import { WishPage } from '@modules/Wish';
import { DreamPage } from '@modules/Dream';

export interface Location {
    url: string;
    path: string;
    Component: React.ComponentType<any>;
}

export const locations: Location[] = [
    {
        url: '/',
        path: '/',
        Component: HomePage,
    },
    {
        url: '/wish',
        path: '/wish',
        Component: WishPage,
    },
    {
        url: '/dream',
        path: '/dream',
        Component: DreamPage,
    },
];
