import * as React from 'react';

declare module 'mobx-react' {

    export function inject(
        ...stores: string[]
    ): <T extends IReactComponent<any>>(
        target: T,
    ) => T & (T extends IReactComponent<infer P> ? IWrappedComponent<P> : never);

    export function inject<Props, StoreProps>(
        ...stores: (keyof StoreProps)[]
    ): <T extends IReactComponent>(target: T) => React.ComponentClass<Props>;

    export function inject<S, P, I, C>(
        fn: IStoresToProps<S, P, I, C>
    ): <T extends IReactComponent>(target: T) => T & IWrappedComponent<P>;
}
