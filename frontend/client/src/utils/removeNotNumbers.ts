export const removeNotNumbers = (value: string): string => {
    return value.replace(/\D/gm, '');
};
