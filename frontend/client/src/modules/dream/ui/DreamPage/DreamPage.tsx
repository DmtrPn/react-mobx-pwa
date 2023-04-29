import React from 'react';
import { observer } from 'mobx-react-lite';

import style from './Dream.scss';

import { useDreamList } from '../../hooks/useDreamList';

export interface DreamProps {}

interface Props extends DreamProps {}

export const DreamPage = observer(({}: Props): JSX.Element => {
    const { dreams } = useDreamList();
    return (
        <div className={style.root} data-testid={'dreamPage'}>
            <div className={style.title}>Dream Page</div>
            {dreams.map(dream => (
                <div key={dream.id} className={style.dream}>
                    {dream.name}
                </div>
            ))}
        </div>
    );
});
