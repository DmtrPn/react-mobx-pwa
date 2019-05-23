import { axios } from '../lib/axios';

const DREAM_URL = '/api/dream';

export class DreamApi {
    public static async getDreamList(): Promise<{ id: number, name: string }[]> {
        const res = await axios.get(`${DREAM_URL}`);

        return res.data;
    }
}