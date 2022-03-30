import React from 'react';

import style from './Example.scss';

export interface ExampleProps {
}

interface Props extends ExampleProps {
}

export function Example({
}: Props): JSX.Element {
    return (
        <div className={style.root}>
            Example!!!!
        </div>
    );
}
