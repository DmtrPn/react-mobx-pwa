import lodash from 'lodash';

export const removeNilKeys = <T = object>(o: object): T => {
    return lodash(o).omitBy(lodash.isNil).value() as unknown as T;
};
