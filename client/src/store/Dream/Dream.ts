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

    public get dreams(): DreamParams[] {
        return this.dreamList;
    }

    public setDreams(dreams: DreamParams[]) {
        this.dreamList = dreams;
    }
}
