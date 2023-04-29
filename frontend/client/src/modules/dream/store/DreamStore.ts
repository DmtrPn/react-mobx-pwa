import { makeAutoObservable } from 'mobx';

export interface DreamParams {
    id: number;
    name: string;
}

export class DreamStore {
    public static Name = 'dreamStore' as const;

    private dreamList: DreamParams[] = [];

    constructor() {
        makeAutoObservable(this);
    }

    public get dreams(): Readonly<DreamParams>[] {
        return this.dreamList;
    }

    public setDreams(dreams: DreamParams[]): void {
        this.dreamList = dreams;
    }

    public updateDream(dreamId: number, params: Partial<Omit<DreamParams, 'id'>>): void {
        this.dreamList = this.dreamList.map(dream => (dream.id === dreamId ? { ...dream, ...params } : dream));
    }
}

export const dreamStore = new DreamStore();
