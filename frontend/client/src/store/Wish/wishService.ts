import { WishApi } from '@api';
import { store } from '@store';

class WishService {

    public async load(): Promise<void> {
        const wishes = await WishApi.getWishList();

        store.wishStore.setWishes(wishes);
    }
}

export const wishService = new WishService();
