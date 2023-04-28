import { useEffect, useState } from 'react';
import { useStore } from '@store';

import { wishService } from './wishService';
import { WishParams, WishStore } from './Wish';

interface UseWishListData {
    wishes: WishParams[];
}

export function useWishList(): UseWishListData {
    const { wishStore } = useStore([WishStore.Name]);
    const [wishes, setWishes] = useState<WishParams[]>(wishStore.wishes);

    useEffect(() => {
        const load = async () => {
            await wishService.load();
            setWishes(wishStore.wishes);
        };

        load();
    }, []);

    return { wishes };
}
