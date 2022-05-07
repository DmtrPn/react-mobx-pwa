import React from 'react';

import style from './NotFound.scss';

export function NotFound() {
    return (
        <div className={style.root}>
            <span className={style.code}>404</span>
            <span className={style.message}>Not found</span>
        </div>
    );
}
