import { exampleService } from './exampleService';

class ExampleFacade {
    public async load(): Promise<void> {
        await exampleService.load();
    }
}

export const exampleFacade = new ExampleFacade();
