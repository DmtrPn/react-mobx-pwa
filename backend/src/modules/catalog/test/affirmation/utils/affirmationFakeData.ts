import { FakeParams } from '@core/test/FakeParams';
import { AffirmationUpdateData, AffirmationCreateData } from '@catalog/domain/affirmation/types';

export const getFakeAffirmationCreationParams = (): AffirmationCreateData => {
    return {
        id: FakeParams.getId(),
        text: FakeParams.getText(),
    };
};

export const getFakeAffirmationUpdateParams = (): AffirmationUpdateData => {
    return {
        text: FakeParams.getText(),
    };
};