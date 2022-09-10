import { observable, computed, action, makeObservable } from 'mobx';
import compact from 'lodash/compact';

import { Optional, SortingOrder } from 'dobro-types/common';

export interface IList<ListParams, CreateParams, UpdateParams = CreateParams, FilterParams = null, I = string> {
    ids: I[];
    isDataSet: boolean;
    values: ListParams[];
    filteredValues: ListParams[];
    filteredValuesIds: I[];
    has(id: I): boolean;
    get(id: I): Optional<ListParams>;
    getValuesByIds(ids: I[]): ListParams[];
    getFilteredValues(filterParams: FilterParams): ListParams[];
    getFilteredValuesIds(filterParams: FilterParams): I[];
    getFilterParams(): FilterParams;
    setFilterParams(params: FilterParams): void;
    updateFilterParams(params: Partial<FilterParams>): void;
    getOrderParams(): OrderParams;
    setOrderParams(params: OrderParams): void;
    set(params: CreateParams[]): void;
    add(params: CreateParams[]): void;
    addIfNotExist(params: CreateParams[]): void;
    update(id: I, value: UpdateParams): void;
    remove(id: I): void;
    reset(): void;
    serialize?(): CreateParams[];
}

export interface IListItem<P> {
    serialize?(): P;
}

export interface OrderParams {
    fieldName: string;
    order: SortingOrder;
}

export abstract class List<
    ListParams,
    CreateParams,
    UpdateParams = CreateParams,
    FilterParams = null,
    I = string,
> implements IList<ListParams, CreateParams, UpdateParams, FilterParams, I> {

    protected readonly identifiableFieldName: string = 'id';

    @observable protected filterParams: FilterParams = {} as FilterParams;
    @observable protected orderParams: OrderParams = {} as OrderParams;
    @observable protected list: Map<I, ListParams> = new Map();
    @observable private isSetted = false;

    constructor(params?: CreateParams[]) {
        makeObservable(this);

        if (params) {
            this.set(params);
        }
    }

    @computed
    public get isDataSet(): boolean {
        return this.isSetted;
    }

    @computed
    public get ids(): I[] {
        return Array.from(this.list.keys());
    }

    @computed
    public get values(): ListParams[] {
        return Array.from(this.list.values());
    }

    @computed
    public get orderedValues(): ListParams[] {
        return this.getOrderedValues(this.values);
    }

    @computed
    public get filteredValues(): ListParams[] {
        const filteredValues = this.values.filter(value => this.filterValue(value, this.filterParams));

        return this.getOrderedValues(filteredValues);
    }

    @computed
    public get filteredValuesIds(): I[] {
        return this.filteredValues.map(value => this.getId(value));
    }

    public getValuesByIds(ids: I[]): ListParams[] {
        return compact(ids.map(id => this.get(id)));
    }

    public forEach(callbackfn: (value: ListParams, key: I) => void, _?: any): void {
        this.list.forEach(callbackfn);
    }

    @action
    public set(params: CreateParams[]): void {
        this.isSetted = true;

        this.add(params);
    }

    @action
    public add(params: CreateParams[]): void {
        params.forEach(createParams => {
            this.list.set(this.getId(createParams), this.create(createParams));
        });
    }

    @action
    public addIfNotExist(params: CreateParams[]): void {
        params.forEach(createParams => {
            const id = this.getId(createParams);
            if (!this.has(id)) {
                this.list.set(this.getId(createParams), this.create(createParams));
            }
        });
    }

    public abstract update(id: I, value: UpdateParams): void;

    @action
    public remove(id: I): void {
        this.list.delete(id);
    }

    @action
    public reset(): void {
        this.list.clear();
    }

    public get(id: I): ListParams {
        return this.list.get(id)!;
    }

    public has(id: I): boolean {
        return this.list.has(id);
    }

    public getSize(): number {
        return this.list.size;
    }

    public getFilterParams(): FilterParams {
        return this.filterParams;
    }

    @action
    public setFilterParams(params: FilterParams) {
        this.filterParams = params;
    }

    @action
    public updateFilterParams(params: Partial<FilterParams>) {
        this.filterParams = { ...this.filterParams, ...params };
    }

    public getOrderParams(): OrderParams {
        return this.orderParams;
    }

    @action
    public setOrderParams(params: OrderParams): void {
        this.orderParams = params || {} as OrderParams;
    }

    public getFilteredValues(filterParams: FilterParams): ListParams[] {
        return this.getOrderedValues(this.values.filter(value => this.filterValue(value, filterParams)));
    }

    public getFilteredValuesIds(filterParams: FilterParams): I[] {
        return this.getFilteredValues(filterParams).map(value => this.getId(value));
    }

    protected getOrderedValues(params: ListParams[]): ListParams[] {
        return params;
    }

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    protected filterValue(value: ListParams, filterParams: FilterParams): boolean {
        return true;
    }

    protected getId(value: ListParams | CreateParams): I {
        return value[this.identifiableFieldName];
    }

    protected abstract create(params: CreateParams): ListParams;
}
