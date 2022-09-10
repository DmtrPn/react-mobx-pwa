export type Optional<T> = T | undefined;
export type Nullable<T> = T | null;

export type Class<T extends Object, P = any> = { new (...arg: P[]): T };

export type Attributes<T extends object> = Omit<T, MethodKeys<T>>;
export type MethodKeys<T> = ({[P in keyof T]: T[P] extends Function ? P : never })[keyof T];

export enum SortingOrder {
    ASC = 'asc',
    DESC = 'desc',
}

export type Identifiable<Id = unknown> = {
    id: Id;
};

export type FunctionType<P, R> = (params: P) => R;
