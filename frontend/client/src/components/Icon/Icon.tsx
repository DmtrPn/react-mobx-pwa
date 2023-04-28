import React from 'react';

import style from './Icon.scss';

import { IconType } from './IconType';

interface IconProps {
    type: IconType;
}

export function Icon({ type }: IconProps): JSX.Element {
    return (
        <svg className={style.root}>
            <use xlinkHref={`#${type}`} />
        </svg>
    );
}
