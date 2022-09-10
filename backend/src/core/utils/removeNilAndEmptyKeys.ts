import lodash from 'lodash';

export const removeNilAndEmptyKeys = <T = object>(o: object): T => {
    return lodash(o).omitBy(value => lodash.isNil(value)
        || ((typeof value === 'string' || Array.isArray(value)) && (value as any).length === 0),
    ).value() as unknown as T;
};
