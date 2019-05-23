import { observable, action } from 'mobx';

type InitialStateParams = {
    wishes: { id: number, name: string }[];
};

export class WishState {

    @observable
    public wishes: { id: number, name: string }[] = [];

    constructor(initialState?: InitialStateParams) {
        this.wishes = (initialState && initialState.wishes)
            ? initialState.wishes
            : [];
    }

    @action
    public setWishes(wishes: any[]) {
        this.wishes = wishes;
    }
}
