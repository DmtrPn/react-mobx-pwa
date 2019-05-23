import * as React from 'react';

import { HomePage } from '../../Home';
import { WishPage } from '../../Wish';
import { DreamPage } from '../../Dream';

export interface Location {
    url: string;
    path: string;
    Component?: React.ComponentType<any>;
    loadData?: () => any;
}

export const locations: Location[] = [
    {
        url: '/',
        path: '/',
        Component: HomePage
    },
    {
        url: '/wish',
        path: '/wish',
        Component: WishPage,
        loadData: () => WishPage.getInitData()
    },
    {
        url: '/dream',
        path: '/dream',
        Component: DreamPage,
        loadData: () => DreamPage.getInitData()
    }
];
