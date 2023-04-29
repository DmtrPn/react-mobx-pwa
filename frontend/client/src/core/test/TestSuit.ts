import '@jest-decorated/core/globals';
import '@testing-library/jest-dom';

export abstract class TestSuit {
    @BeforeEach()
    public beforeEach(): void {}

    @AfterEach()
    public afterEach(): void {}
}
