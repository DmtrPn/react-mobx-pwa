import { axios } from '../lib/axios';

const DREAM_URL = '/api/dream';

const DEFAULT_DREAMS = [
    {
        id: 1,
        name: 'Fly',
    },
    {
        id: 2,
        name: 'Moon',
    },
];

export class DreamApi {
    public static async getDreamList(): Promise<{ id: number, name: string }[]> {
        let result = DEFAULT_DREAMS;

        try {
            const res = await axios.get(`${DREAM_URL}`);
            result = res.data;
        } catch (e) {
        }

        return result;
    }
}
