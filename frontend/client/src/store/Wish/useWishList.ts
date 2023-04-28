import { useEffect } from 'react';
import { useStore } from '@store';

import { wishService } from './wishService';
import { WishParams, WishStore } from './Wish';

interface UseWishListData {
    wishes: WishParams[];
}

export function useWishList(): UseWishListData {
    const { wishStore } = useStore([WishStore.Name]);

    useEffect(() => {
        const load = async () => {
            await wishService.load();
        };
        load();
    }, []);

    return { wishes: wishStore.wishes };
}
