import uniq from 'lodash/uniq';
import compact from 'lodash/compact';

export function getUniqIds(ids: (string | undefined)[]): string[] {
    return uniq(compact(ids));
}
