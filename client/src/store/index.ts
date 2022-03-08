import { DreamStore } from '@dream/store/Dream';
import { WishStore } from './Wish/Wish';

export interface StoreState {
    dreamStore: DreamStore;
    wishStore: WishStore;
}

export const store: StoreState = {
    dreamStore: new DreamStore(),
    wishStore: new WishStore(),
};
