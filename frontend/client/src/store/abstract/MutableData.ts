import pick from 'lodash/pick';
import mapValues from 'lodash/mapValues';
import { action, makeObservable, observable } from 'mobx';

import { assignParams } from '@utils/assignParams';
import { updateAttributes } from '@utils/updateAttributes';

export abstract class MutableData<D extends object> {
    protected numbersFields = new Set<string>();
    protected abstract mutableKeys: (keyof D)[];

    public get isValid(): boolean {
        return true;
    }

    public serialize(): D {
        return pick(this as unknown as D, this.mutableKeys);
    }

    public update(params: Partial<D>): void {
        updateAttributes(this as unknown as D, this.formatData(params));
    }

    public getValue(name: string): any {
        return this[name];
    }

    protected init(data: D): void {
        const fields: any = {};

        this.mutableKeys.forEach(key => {
            fields[key] = observable;
            (this as any)[key] = undefined;
        });

        makeObservable(this, {
            ...fields,
            update: action,
        });

        assignParams<D>(this as unknown as D, this.formatData(data) as D);
    }

    private formatData(data: D | Partial<D>): Partial<D> | D {
        return mapValues(data, (value, key) => {
            return this.numbersFields.has(key) && !!value ? (Number(value) as any) : value;
        });
    }
}
