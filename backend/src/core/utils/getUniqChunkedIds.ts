import chunk from 'lodash/chunk';

import { getUniqIds } from './getUniqIds';

export function getUniqChunkedIds(ids: (string | undefined)[], chunkSize: number = 50): string[][] {
    return chunk(getUniqIds(ids), chunkSize);
}
