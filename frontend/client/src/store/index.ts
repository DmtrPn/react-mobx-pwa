import pick from 'lodash/pick';

import { DreamStore, dreamStore } from '@dream/store/DreamStore';
import { WishStore, wishStore } from './Wish/Wish';

export interface StoreState {
    dreamStore: DreamStore;
    wishStore: WishStore;
}

export const store: StoreState = {
    dreamStore,
    wishStore,
};

type Params = keyof StoreState;

export function useStore<T extends Params>(stores: T[]): Pick<StoreState, T> {
    return pick(store, stores);
}
