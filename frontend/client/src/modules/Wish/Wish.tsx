import React from 'react';

import style from './Wish.scss';

export interface WishProps {}

interface Props extends WishProps {
    wishes: {
        id: number;
        name: string;
    }[];
}

export function Wish({ wishes }: Props): JSX.Element {
    return (
        <div className={style.root}>
            <div className={style.title}>Wish Page</div>
            {wishes.map(wish => (
                <div key={wish.id} className={style.wish}>
                    {wish.name}
                </div>
            ))}
        </div>
    );
}
