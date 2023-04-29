import { useEffect } from 'react';
import { useStore } from '@store';

import { dreamService } from '../services/dreamService';
import { DreamParams, DreamStore } from '../store/DreamStore';

export interface UseDreamListData {
    dreams: DreamParams[];
}

export function useDreamList(): UseDreamListData {
    const { dreamStore } = useStore([DreamStore.Name]);

    useEffect(() => {
        const load = async () => {
            await dreamService.load();
        };
        load();
    }, []);

    return { dreams: dreamStore.dreams };
}
