import '@core/test/testRunner';

import { AffirmationCrudService } from '@catalog/infrastructure/affirmation/AffirmationCrudService';

import { getFakeAffirmationCreationParams, getFakeAffirmationUpdateParams } from '../utils/affirmationFakeData';

describe('AffirmationCrudService', () => {

    const crudService = new AffirmationCrudService();
    const affirmation = getFakeAffirmationCreationParams();

    describe('create ', () => {
        test('create success', async () => {
            await crudService.create(affirmation);
            const created = await crudService.getById(affirmation.id);

            expect(affirmation).toEqual(created);
        });
    });

    describe('findAll', () => {
        test('should return an array of affirmations', async () => {
            const affirmations = await crudService.find({});

            expect(affirmations.length).toEqual(1);
            expect(affirmations[0]).toEqual(affirmation);
        });
    });

    // describe('get random', () => {
    //     test('get random success', async () => {
    //         const random = await crudService.getRandom();
    //
    //         expect(random).toEqual(affirmation);
    //     });
    // });

    describe('update', () => {
        test('update success', async () => {
            const updateParams = getFakeAffirmationUpdateParams();

            await crudService.update(affirmation.id, updateParams);

            const updatedMovie = await crudService.getById(affirmation.id);

            expect(updatedMovie).toEqual({ ...affirmation, ...updateParams });
        });
    });

});