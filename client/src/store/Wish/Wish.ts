import { makeAutoObservable } from 'mobx';

export interface WishParams {
    id: number;
    name: string;
}

export class WishStore {
    public static Name = 'wishStore' as const;

    private wishList: WishParams[] = [];

    constructor() {
        makeAutoObservable(this);
    }

    public get wishes(): WishParams[] {
        return this.wishList;
    }

    public setWishes(wishes: WishParams[]) {
        this.wishList = wishes;
    }
}
