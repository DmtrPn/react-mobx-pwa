import * as React from 'react';
import { observer, inject } from 'mobx-react';

import { Wish, WishProps } from './Wish';
import { WishApi } from '@api';
import { StoreState, WishState } from '@store';

interface Props extends StoreProps, WishProps {
}

interface StoreProps {
    wishState: WishState;
}

@inject<StoreState, Props, StoreProps, null>((stores, props) => ({
    wishState: stores.wishState,
}))
@observer
export class WishContainer extends React.Component<Props> {

    public async componentDidMount() {
        const { wishState } = this.props;

        const wishes = await WishApi.getWishList();

        wishState.setWishes(wishes);
    }

    public render() {
        const { wishState } = this.props;

        return (
            <Wish
                wishes={wishState.wishes}
            />
        );
    }
}
