export class DreamService {

    public async getDreams(): Promise<{ id: number, name: string }[]> {
        return [
            {
                id: 1,
                name: 'fly to the moon',
            },
            {
                id: 2,
                name: 'fly to the moon again',
            },
        ];
    }
}
