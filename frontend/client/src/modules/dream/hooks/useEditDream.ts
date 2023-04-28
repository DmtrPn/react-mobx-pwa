import { dreamService } from '../services/dreamService';
import { DreamParams } from '../store/DreamStore';

interface UseDreamListData {
    updateDreams(dreamId: number, params: Partial<Omit<DreamParams, 'id'>>): void;
}

export function useDreamList(): UseDreamListData {
    return { updateDreams: dreamService.update };
}
