import { getUniqIds } from '@utils/getUniqIds';

export function getUniqNewIds(currentIds: string[], newIds: string[]): string[] {
    const uniqIds = getUniqIds(newIds);

    return uniqIds.filter(id => !currentIds.includes(id));
}
