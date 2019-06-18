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
            result = await axios.get(`${DREAM_URL}`);
        } catch (e) {
        }

        return result;
    }
}
