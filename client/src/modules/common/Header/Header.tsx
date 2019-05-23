import * as React from 'react';

import * as style from './Header.scss';
import { Navigation } from '../Navigation';

export interface HeaderProps {
}

interface HeaderComponentProps extends HeaderProps {
}

export const Header = ({}: HeaderComponentProps): JSX.Element => {
    return (
        <div className={style.root}>
            <div className={style.headerContent}>
                <Navigation />
            </div>
        </div>
    );
};
