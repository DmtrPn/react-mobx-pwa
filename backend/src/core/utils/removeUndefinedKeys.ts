import lodash, { isUndefined } from 'lodash';

type DefinedType<T> = T extends ((infer U) | undefined) ? U : T;

export const removeUndefinedKeys = <T extends object>(o: T): { [key in keyof T]: DefinedType<T[key]> } => {
    return lodash(o).omitBy(isUndefined).value() as { [key in keyof T]: DefinedType<T[key]> };
};
