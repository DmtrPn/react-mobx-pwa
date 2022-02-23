export function toArrayFromIterable<D = string>(o: Map<string, D> | Set<D>): D[] {
    return Array.from(o.values());
}
