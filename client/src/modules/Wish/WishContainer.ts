import * as React from 'react';
import { observer, inject } from 'mobx-react';

import { WishStore, wishService } from '@store/Wish';

interface Props extends StoreProps, WishProps {
}

import { Wish, WishProps } from './Wish';

interface StoreProps {
    wishStore: WishStore;
}

const injectableStores: (keyof StoreProps)[] = [
    WishStore.Name,
];

@inject(...injectableStores)
@observer
export class WishContainer extends React.Component<Props> {

    public async componentDidMount() {
        await wishService.load();
    }

    public render() {
        const { wishStore: { wishes } } = this.props;

        return React.createElement(Wish, { wishes });
    }
}
