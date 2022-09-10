export function updateAttributes<P extends object>(it: P, params: Partial<P>): void {
    Object.keys(params).forEach(key => {
        it[key] = params[key] ?? it[key];
    });
}
