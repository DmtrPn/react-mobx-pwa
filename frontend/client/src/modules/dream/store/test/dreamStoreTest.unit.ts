import { TestSuit } from '@core/test/TestSuit';

import { DreamStore } from '../DreamStore';
import { generateDreamParams } from '../utils/generateDreamParams';

@Describe('Dream store test')
export class DreamStoreTestUnit extends TestSuit {
    private dreamStore = new DreamStore();

    beforeEach() {
        super.beforeEach();
        this.dreamStore = new DreamStore();
    }

    @Test('Set dream test')
    public setDreamTest(): void {
        const dream = generateDreamParams();
        this.dreamStore.setDreams([dream]);

        const dreams = this.dreamStore.dreams;

        expect(dreams.length).toBe(1);
        expect(dreams[0]).toStrictEqual(dream);
    }
}
