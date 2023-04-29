import React from 'react';
import { render, screen } from '@testing-library/react';

import { TestSuit } from '@core/test/TestSuit';

import { DreamPage } from '../../DreamPage';

@Describe('Dream page')
export class DreamPageTestSpec extends TestSuit {
    @Test('Render test')
    public async renderTest(): Promise<void> {
        render(React.createElement(DreamPage));
        await this.waitAsyncUseEffectFinished();

        const component = await screen.getByTestId('dreamPage');
        expect(component).toBeInTheDocument();
    }
}
