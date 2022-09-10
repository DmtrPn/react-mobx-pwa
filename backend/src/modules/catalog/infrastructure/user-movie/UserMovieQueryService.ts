import { QueryService } from '@common/infrastructure/QueryService';

import { IUserMovieQueryService } from '@catalog/domain/user-movie/IUserMovieQueryService';
import { UserMovieFindOptions } from '@catalog/domain/user-movie/types';

import { UserMovieModel } from './UserMovieModel';
import { UserMovieFindCommand } from './UserMovieFindCommand';

export class UserMovieQueryService
    extends QueryService<UserMovieModel, UserMovieFindOptions>
    implements IUserMovieQueryService {

    protected modelClass = UserMovieModel;
    protected findCommand = UserMovieFindCommand;

    protected create(model: UserMovieModel): UserMovieModel {
        return model;
    }

}
