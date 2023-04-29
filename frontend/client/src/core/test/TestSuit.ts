import '@jest-decorated/core/globals';
import '@testing-library/jest-dom';
import { act } from '@testing-library/react';

import { MockAxios, IMockAxios } from './MockAxios';

export abstract class TestSuit {
    protected mockAxios: IMockAxios = MockAxios.getInstance();

    @BeforeEach()
    public beforeEach(): void {}

    @AfterEach()
    public afterEach(): void {
        this.mockAxios.reset();
    }

    protected async waitAsyncUseEffectFinished(): Promise<void> {
        await act(async () => {});
    }

    protected checkIsGetSent(url: string): void {
        expect(this.mockAxios.getRequestHistory[0].url).toEqual(url);
        expect(this.mockAxios.getRequestHistory.length).toEqual(1);
    }

    protected checkIsPostSent(url: string): void {
        expect(this.mockAxios.postRequestHistory[0].url).toEqual(url);
        expect(this.mockAxios.postRequestHistory.length).toEqual(1);
    }

    protected checkIsPutSent(url: string): void {
        expect(this.mockAxios.putRequestHistory[0].url).toEqual(url);
        expect(this.mockAxios.putRequestHistory.length).toEqual(1);
    }
}
