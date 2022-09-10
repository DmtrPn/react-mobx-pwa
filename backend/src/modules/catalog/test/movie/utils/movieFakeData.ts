import { Attributes } from 'project-types/common';

import { MovieModel } from '@catalog/infrastructure/movie/MovieModel';
import { FakeParams } from '@core/test/FakeParams';
import { MovieStatus } from '@common/enums';
import { MovieUpdateData } from '@catalog/domain/movie/types';

export const getFakeMovieCreationParams = (): Attributes<MovieModel> => {
    return {
        id: FakeParams.getId(),
        link: FakeParams.getUrl(),
        name: FakeParams.getName(),
        description: FakeParams.getText(),
        authorId: FakeParams.getId(),
        status: MovieStatus.New,
    };
};

export const getFakeMovieUpdateParams = (): MovieUpdateData => {
    return {
        link: FakeParams.getUrl(),
        name: FakeParams.getName(),
        description: FakeParams.getText(),
    };
};