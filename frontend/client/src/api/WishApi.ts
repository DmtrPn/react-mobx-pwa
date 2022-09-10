import { axios } from '../lib/axios';

const WISH_URL = '/api/wish';

const DEFAULT_WISHES = [
    {
        id: 1,
        name: 'Apple',
    },
    {
        id: 2,
        name: 'Book',
    },
];

export class WishApi {
    public static async getWishList(): Promise<{ id: number, name: string }[]> {
        let result = DEFAULT_WISHES;
        try {
            const res = await axios.get(`${WISH_URL}`);

            result = res.data.wishes;
        } catch (e) {
        }

        return result;
    }
}
