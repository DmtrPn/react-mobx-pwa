import * as React from 'react';

import * as style from './Dream.scss';

import { Page } from '@common/Page';
import { DreamParams } from '@dream/store/Dream';

export interface DreamProps {
}

interface Props extends DreamProps {
    dreams: DreamParams[];
}

export function Dream({
    dreams,
}: Props): JSX.Element {
    return (
        <Page>
            <div className={style.root}>
                <div className={style.title}>
                    Dream Page
                </div>
                {dreams.map(dream =>
                    <div
                        key={dream.id}
                        className={style.dream}
                    >
                        {dream.name}
                    </div>,
                )}
            </div>
        </Page>
    );
}