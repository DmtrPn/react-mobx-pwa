import { observable, action } from 'mobx';

export interface WishParams {
    id: number;
    name: string;
}

export class WishState {
    public static Name = 'wish';

    @observable
    public wishes: WishParams[] = [];

    @action
    public setWishes(wishes: WishParams[]) {
        this.wishes = wishes;
    }
}
