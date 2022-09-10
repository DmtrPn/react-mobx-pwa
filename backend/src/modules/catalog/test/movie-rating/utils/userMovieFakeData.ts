import { Attributes } from 'project-types/common';

import { UserMovieModel } from '@catalog/infrastructure/user-movie/UserMovieModel';
import { FakeParams } from '@core/test/FakeParams';
import { UserMovieUpdateData } from '@catalog/domain/user-movie/types';

export const getFakeUserMovieCreationParams = (): Attributes<UserMovieModel> => {
    return {
        movieId: FakeParams.getId(),
        userId: FakeParams.getId(),
        isViewed: FakeParams.getBoolean(),
        comment: FakeParams.getText(),
        rating: FakeParams.getInteger({ min: 0, max: 10 }),
    };
};

export const getFakeUserMovieUpdateParams = (): UserMovieUpdateData => {
    return {
        rating: FakeParams.getInteger({ min: 0, max: 10 }),
        isViewed: FakeParams.getBoolean(),
        comment: FakeParams.getText(),
    };
};