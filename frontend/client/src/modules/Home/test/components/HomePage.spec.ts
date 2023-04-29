import React from 'react';
import { render, screen } from '@testing-library/react';

import { TestSuit } from '@core/test/TestSuit';

import { HomePage } from '../../Home';

@Describe('Home page')
export class HomePageTestSpec extends TestSuit {
    @Test('Render test')
    public rendererTest(): void {
        render(React.createElement(HomePage));
        const component = screen.getByTestId('homePage');

        expect(component).toBeInTheDocument();
    }
}
