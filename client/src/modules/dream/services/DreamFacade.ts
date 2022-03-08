import { IDreamFacade } from '@facades';

import { dreamService } from './dreamService';

export class DreamFacade implements IDreamFacade {
    public async load(): Promise<void> {
        await dreamService.load();
    }
}
