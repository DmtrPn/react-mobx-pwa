import { renderHook } from '@testing-library/react';

import { TestSuit } from '@core/test/TestSuit';

import { useDreamList, UseDreamListData } from '../../useDreamList';
import { dreamStore } from '../../../store/DreamStore';

@Describe('Use dream list hook')
export class UseDreamListTestUnit extends TestSuit {
    @Test('use dream test')
    public async useDreamTest(): Promise<void> {
        const { result } = renderHook<UseDreamListData, void>(() => useDreamList());
        expect(result.current.dreams.length).toBe(0);
        expect(dreamStore.dreams.length).toBe(0);
        await this.waitAsyncUseEffectFinished();
        expect(dreamStore.dreams.length).toBe(2);
    }
}