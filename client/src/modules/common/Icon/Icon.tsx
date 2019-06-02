import * as React from 'react';

import * as style from './Icon.scss';
// import { IconType } from './IconType';

export interface IconProps {
    type:  any; // IconType;
    onClick?: React.MouseEventHandler<SVGSVGElement>;
    color?: string;
    svgSize?: string | number;
}

export const Icon = ({
                         type,
                         onClick,
                         color,
                         svgSize,
                     }: IconProps): JSX.Element => (
    <svg
        className={`${style.root} type_${type}`}
        onClick={onClick}
        color={color}
        fontSize={svgSize}
    >
        <use xlinkHref={`#${type}`} />
    </svg>
);
