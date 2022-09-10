import React from 'react';

import style from './Home.scss';

export function HomePage(): JSX.Element {
    return (
        <div className={style.root}>
            Simple React + Mobx boilerplate
        </div>
    );
}
