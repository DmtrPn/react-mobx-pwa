import { observable, action } from 'mobx';

type InitialStateParams = {
    dreams: { id: number, name: string }[];
};

export class DreamState {

    @observable
    public dreams: any[] = [];

    constructor(initialState?: InitialStateParams) {
        this.dreams = (initialState && initialState.dreams)
            ? initialState.dreams
            : [];
    }

    @action
    public setDreams(dreams: any[]) {
        this.dreams = dreams;
    }
}
