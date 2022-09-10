export class WishService {

    public async getWishes(): Promise<{ id: number, name: string }[]> {
        return [
            {
                id: 1,
                name: 'ice cream',
            },
            {
                id: 2,
                name: 'lemonade',
            },
        ];
    }
}
