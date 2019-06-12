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
            // const res = await axios.get(`${DREAM_URL}`);
            const res1 = await fetch(`${DREAM_URL}`);
            //     {
            //     url: `${DREAM_URL}`,
            //     method: 'GET',
            // });
// console.log("res1: ", res1);
            result = res1.json();
        } catch (e) {
        }

        return result;
    }
}
