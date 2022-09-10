import React from 'react';

import style from './Header.scss';

import { Navigation } from './Navigation';

export function Header(): JSX.Element {
    return (
        <div className={style.root}>
            <div className={style.headerContent}>
                <Navigation />
            </div>
        </div>
    );
}
