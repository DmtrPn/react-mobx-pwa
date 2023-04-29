import { WishApi } from '@api/WishApi';

import { wishStore } from './Wish';

class WishService {
    private readonly wishStore = wishStore;
    private isLoaded = false;

    public async load(): Promise<void> {
        if (!this.isLoaded) {
            this.isLoaded = true;
            const wishes = await WishApi.getWishList();
            this.wishStore.setWishes(wishes);
        }
    }
}

export const wishService = new WishService();
