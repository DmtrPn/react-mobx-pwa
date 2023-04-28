import { DreamApi } from '@api';

import { dreamStore, DreamStore } from '../store/DreamStore';

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
}

export const dreamService = new DreamService();
