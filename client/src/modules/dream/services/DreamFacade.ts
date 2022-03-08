import { dreamService } from './dreamService';

class DreamFacade {
    public async load(): Promise<void> {
        await dreamService.load();
    }
}

export const dreamFacade = new DreamFacade();
