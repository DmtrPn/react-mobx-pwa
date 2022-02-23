import * as React from 'react';
import { NavLink } from 'react-router-dom';
import classnames from 'classnames';

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
                    // exact
                    key={pageLocation.url}
                    className={({ isActive }) => isActive
                        ? classnames([style.link, style.activeLink])
                        : style.link
                    }
                    to={pageLocation.url}
                >
                    Link to {pageLocation.label}
                </NavLink>,
            )}
        </div>
    );
};
