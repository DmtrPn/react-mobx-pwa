export function getIds<I = string>(params: { id: I }[]): I[] {
    return params.map(({ id }) => id);
}
