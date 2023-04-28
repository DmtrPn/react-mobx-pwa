import React from 'react';
// import autobind from 'autobind';
// import { observer, inject } from 'mobx-react';

import { Example, ExampleProps } from './Example';

interface Props extends ExampleProps {}

// interface StoreProps {
// }

// const injectableStores: (keyof StoreProps)[] = [
// ];

// @observer
export class ExampleContainer extends React.Component<Props> {
    public render() {
        return React.createElement(Example, {
            ...this.props,
        });
    }
}

// export const ExampleContainer = inject<Props, StoreProps>(...injectableStores)(Component);
