import '@core/test/unitTestRanner';

import { DreamController } from '@dream/controllers';

describe.skip('DreamController', () => {
    let dreamController: DreamController;

    beforeEach(() => {
        dreamController = new DreamController();
    });

    describe('findAll', () => {
        it('should return an array of movies', async () => {
            const result = [
                {
                    id: 1,
                    name: 'fly to the moon',
                },
                {
                    id: 2,
                    name: 'fly to the moon again',
                },
            ];
            const dreams = await dreamController.getDreams();

            expect(dreams.length).toBe(result.length);
        });
    });
});