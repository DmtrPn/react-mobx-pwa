import { DreamState } from './Dream';
import { WishState } from './Wish';

const STORE_NAME = {
    DreamState: 'dreamState',
    WishState: 'wishState',
};

const STORES = {
    [STORE_NAME.DreamState]: DreamState,
    [STORE_NAME.WishState]: WishState,
};

interface StoreState {
    dreamState: DreamState;
    wishState: WishState;
}

export {
    StoreState,
    STORE_NAME,
    STORES,
    DreamState,
    WishState,
};
