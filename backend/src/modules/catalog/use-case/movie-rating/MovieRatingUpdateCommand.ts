import { Inject } from 'typescript-ioc';

import { UseCaseCommand } from '@common/use-cases/UseCaseCommand';
import { UserMovieCreateData } from '@catalog/domain/user-movie/types';
import { IUserMovieRepository } from '@catalog/domain/user-movie/IUserMovieRepository';
import { UserMovie } from '@catalog/domain/user-movie/UserMovie';

interface Params extends UserMovieCreateData {}

export class MovieRatingUpdateCommand extends UseCaseCommand<Params> {

    @Inject protected repository: IUserMovieRepository;

    public async execute(): Promise<void> {
        const userMovie = UserMovie.newInstance(this.params);

        await this.repository.save(userMovie);
    }

}
