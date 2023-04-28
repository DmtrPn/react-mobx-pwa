import React from 'react';

import style from './Dream.scss';

import { useDreamList } from '../../hooks/useDreamList';

export interface DreamProps {}

interface Props extends DreamProps {}

export function DreamPage({}: Props): JSX.Element {
    const { dreams } = useDreamList();
    return (
        <div className={style.root}>
            <div className={style.title}>Dream Page</div>
            {dreams.map(dream => (
                <div key={dream.id} className={style.dream}>
                    {dream.name}
                </div>
            ))}
        </div>
    );
}
