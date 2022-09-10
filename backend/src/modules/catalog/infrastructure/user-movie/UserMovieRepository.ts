import { Repository } from '@common/infrastructure/Repository';
import { FindCommand } from '@common/infrastructure/FindCommand';

import { UserMovie } from '@catalog/domain/user-movie/UserMovie';
import { UserMovieModel } from '@catalog/infrastructure/user-movie/UserMovieModel';
import { UserMovieFindOptions } from '@catalog/domain/user-movie/types';
import { IUserMovieRepository } from '@catalog/domain/user-movie/IUserMovieRepository';
import { UserMovieFindCommand } from '@catalog/infrastructure/user-movie/UserMovieFindCommand';

export class UserMovieRepository
    extends Repository<UserMovie, UserMovieModel, UserMovieFindOptions>
    implements IUserMovieRepository {

    protected create(model: UserMovieModel): UserMovie {
        return UserMovie.newInstance(model);
    }

    protected createFindCommand(findOption: UserMovieFindOptions): FindCommand<UserMovieModel, UserMovieFindOptions> {
        return new UserMovieFindCommand(findOption);
    }

    protected modelFrom(userMovie: UserMovie): UserMovieModel {
        return new UserMovieModel(userMovie.dto);
    }

}