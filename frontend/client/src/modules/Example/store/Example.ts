import { makeAutoObservable } from 'mobx';

export class ExampleStore {
    public static Name = 'exampleStore' as const;

    constructor() {
        makeAutoObservable(this);
    }
}
