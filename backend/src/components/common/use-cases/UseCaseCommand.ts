export abstract class UseCaseCommand<T extends object> {

    protected params: T;

    constructor(params: T) {
        this.params = params;
        this.setData();
    }

    public abstract execute(): void | Promise<void>;
    public setData(): void {}

}
