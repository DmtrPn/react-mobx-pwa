export const extractError = (error: Error): Error => {
    const anyError: any = error;

    return anyError.errors && anyError.errors instanceof Error ? anyError.errors : error;
};
