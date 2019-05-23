import * as React from 'react';
import { observer, inject } from 'mobx-react';

import { Wish, WishProps } from './Wish';
import { WishApi } from '../../api';


interface Props extends WishProps {
    wishState: any;
}

interface State {
}

@inject('wishState')
@observer
export class WishContainer extends React.Component<Props, State> {

    constructor(props: Props) {
        super(props);

        this.state = {
        };
    }

    // This method is only called on the server
    public static async getInitData() {
        console.log('Get wishes on server side');

        const wishes = await WishApi.getWishList();

        return {
            wishState: {
                wishes,
                fromServer: true
            }
        };
    }


    public async componentDidMount() {
        const { wishState } = this.props;

        // On the client, we check if the data was requested on the server
        if (wishState.needUpdate) {
            console.log('Get wishes on client side');

            const wishes = await WishApi.getWishList();

            wishState.setWishes(wishes);
        } else {
            console.log('Wishes were requested on the server');

            wishState.setNeedUpdate();
        }
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
