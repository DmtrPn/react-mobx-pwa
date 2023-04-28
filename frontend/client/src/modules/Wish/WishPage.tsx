import React from 'react';

import style from './Wish.scss';
import { useWishList } from '@store/Wish/useWishList';

export function WishPage(): JSX.Element {
    const { wishes } = useWishList();
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
