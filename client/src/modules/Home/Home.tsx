import * as React from 'react';

import { Page } from '@common/Page';

import * as style from './Home.scss';

export function HomePage(): JSX.Element {
    return (
        <Page>
            <div className={style.root}>
                Simple React + Mobx boilerplate
            </div>
        </Page>
    );
}
