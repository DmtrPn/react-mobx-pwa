import * as React from 'react';

import * as style from './Page.scss';
import './reset.scss';

import { Router } from '@core/Router';

import { Header } from './Header';

export interface PageProps {
    children?: React.ReactNode;
}

export function Page(): JSX.Element {
    return (
    <div className={style.root}>
        <Header />
        <div className={style.content}>
            <Router />
        </div>
    </div>);
}
