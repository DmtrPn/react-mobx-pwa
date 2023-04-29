import { DreamApi } from '@api/DreamApi';

import { DreamParams, dreamStore, DreamStore } from '../store/DreamStore';

export class DreamService {
    private readonly dreamStore: DreamStore = dreamStore;
    private isLoaded = false;

    public async load(): Promise<void> {
        if (!this.isLoaded) {
            this.isLoaded = true;
            const dreams = await DreamApi.getDreamList();
            this.dreamStore.setDreams(dreams);
        }
    }

    public async update(dreamId: number, params: Partial<Omit<DreamParams, 'id'>>): Promise<void> {
        this.dreamStore.updateDream(dreamId, params);
    }
}

export const dreamService = new DreamService();
