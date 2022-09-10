import { FindCommand } from '@common/infrastructure/FindCommand';
import { UserMovieModel } from '@catalog/infrastructure/user-movie/UserMovieModel';
import { UserMovieFindOptions } from '@catalog/domain/user-movie/types';

export class UserMovieFindCommand extends FindCommand<UserMovieModel, UserMovieFindOptions> {

    private movieId?: UserMovieFindOptions['movieId'];
    private userId?: UserMovieFindOptions['userId'];

    constructor(options: UserMovieFindOptions) {
        super(options, UserMovieModel);
    }

    protected addFilters(): this {
        return this
            .filterBy('movieId', this.movieId)
            .filterBy('userId', this.userId);
    }
}
