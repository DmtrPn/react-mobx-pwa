import * as React from 'react';

import * as style from './Example.scss';

export interface ExampleParams {
}

interface ExampleProps extends ExampleParams {
}

interface ExampleComponentProps extends ExampleProps {
}

export function  Example(
    {}: ExampleComponentProps): JSX.Element {
    return (
        <div className={style.root}>
        </div>
    );
}
