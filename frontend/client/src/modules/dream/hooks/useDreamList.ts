import { useEffect, useState } from 'react';
import { useStore } from '@store';

import { dreamService } from '../services/dreamService';
import { DreamParams, DreamStore } from '../store/DreamStore';

interface UseDreamListData {
    dreams: DreamParams[];
}

export function useDreamList(): UseDreamListData {
    const { dreamStore } = useStore([DreamStore.Name]);
    const [dreams, setDreams] = useState<DreamParams[]>(dreamStore.dreams);

    useEffect(() => {
        const load = async () => {
            await dreamService.load();
            setDreams(dreamStore.dreams);
        };

        load();
    }, []);

    return { dreams };
}
