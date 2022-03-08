import { DreamApi } from '@api';
import { store } from '@store';

class DreamService {

    public async load(): Promise<void> {
        const dreams = await DreamApi.getDreamList();

        store.dreamStore.setDreams(dreams);
    }
}

export const dreamService = new DreamService();
