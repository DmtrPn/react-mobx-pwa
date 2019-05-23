import * as React from 'react';
// import autobind from 'autobind-decorator';

import { Example, ExampleParams } from './Example';

interface ExampleProps extends ExampleParams {
}

interface ExampleState {
}

export class ExampleContainer extends React.Component<ExampleProps, ExampleState> {

    constructor(props: ExampleProps) {
        super(props);

        this.state = {

        };
    }

    public render() {
        return React.createElement(Example, {});
    }
}
