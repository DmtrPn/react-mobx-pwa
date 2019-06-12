import { observable, action } from 'mobx';

export interface DreamParams {
    id: number;
    name: string;
}

export class DreamState {
    public static Name = 'dream';

    @observable
    public dreams: DreamParams[] = [];

    @action
    public setDreams(dreams: DreamParams[]) {
        this.dreams = dreams;
    }
}
