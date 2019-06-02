import * as React from 'react';
import { NavLink } from 'react-router-dom';

import * as style from './Navigation.scss';

const locations: { url: string, label: string }[] = [
    {
        url: '/',
        label: 'Главная',
    },
    {
        url: '/wish',
        label: 'Желания',
    },
    {
        url: '/dream',
        label: 'Мечты',
    },
];

export const Navigation = (): JSX.Element => {
    return (
        <div className={style.linksList}>
            {locations.map(pageLocation =>
                <NavLink
                    exact
                    key={pageLocation.url}
                    className={style.link}
                    activeClassName={style.activeLink}
                    to={pageLocation.url}
                >
                    Link to {pageLocation.label}
                </NavLink>,
            )}
        </div>
    );
};
