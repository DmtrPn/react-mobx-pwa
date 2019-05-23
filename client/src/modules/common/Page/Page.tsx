import * as React from 'react';

import * as style from './Page.scss';
import { Header } from '../Header';

export interface PageProps {
    children?: React.ReactNode;
}

export const Page = ({
    children
}: PageProps): JSX.Element => (
    <div className={style.root}>
        <Header />
        <div className={style.content}>
            {children}
        </div>
    </div>
);