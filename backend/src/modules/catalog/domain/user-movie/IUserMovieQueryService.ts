import { UserMovieModel } from '@catalog/infrastructure/user-movie/UserMovieModel';
import { UserMovieFindOptions } from '@catalog/domain/user-movie/types';

export abstract class IUserMovieQueryService {
    public abstract find(options: UserMovieFindOptions): Promise<UserMovieModel[]>;
}
