import * as React from 'react';

import * as style from './NotFound.scss';
import { Page } from '@common/Page';

export function NotFound() {
    return (<Page>
        <div className={style.root}>
            <span className={style.code}>404</span>
            <span className={style.message}>Not found</span>
        </div>
    </Page>);
}
