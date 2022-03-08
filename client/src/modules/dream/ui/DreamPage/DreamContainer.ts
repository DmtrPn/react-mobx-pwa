import * as React from 'react';
import { observer, inject } from 'mobx-react';

import { DreamStore } from '@dream/store';
import { dreamService } from '@dream/services';

import { Dream, DreamProps } from './Dream';

interface Props extends DreamProps, StoreProps {
}

interface StoreProps {
    dreamStore: DreamStore;
}

const injectableStores: (keyof StoreProps)[] = [
    DreamStore.Name,
];

@inject(...injectableStores)
@observer
export class DreamContainer extends React.Component<Props> {

    public async componentDidMount(): Promise<void> {
        await dreamService.load();
    }

    public render() {
        const { dreamStore: { dreams } } = this.props;

        return React.createElement(Dream, { dreams });
    }
}
