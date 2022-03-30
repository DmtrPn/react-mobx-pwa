import * as React from 'react';

import * as style from './NotFound.scss';

export function NotFound() {
    return (
        <div className={style.root}>
            <span className={style.code}>404</span>
            <span className={style.message}>Not found</span>
        </div>
    );
}
