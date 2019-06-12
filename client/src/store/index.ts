import { DreamState } from './Dream';
import { WishState } from './Wish';

export interface StoreState {
    dream: DreamState;
    wish: WishState;
}

export function createStore(): StoreState {
    return {
        dream: new DreamState(),
        wish: new WishState(),
    };
}
