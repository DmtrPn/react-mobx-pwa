import { axios } from '../lib/axios';

const WISH_URL = '/api/wish';

export class WishApi {
    public static async getWishList(): Promise<{ id: number, name: string }[]> {
        const res = await axios.get(`${WISH_URL}`);

        return res.data;
    }
}