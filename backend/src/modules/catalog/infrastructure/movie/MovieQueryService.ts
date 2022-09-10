import { Inject } from 'typescript-ioc';
import groupBy from 'lodash/groupBy';
import isNil from 'lodash/isNil';

import { IdentifiableQueryService } from '@common/infrastructure/IdentifiableQueryService';

import { IMovieQueryService } from '@catalog/domain/movie/IMovieQueryService';
import { MovieData, MovieFindOptions } from '@catalog/domain/movie/types';
import { IUserMovieQueryService } from '@catalog/domain/user-movie/IUserMovieQueryService';

import { MovieModel } from './MovieModel';
import { MovieFindCommand } from './MovieFindCommand';
import { UserMovieModel } from '@catalog/infrastructure/user-movie/UserMovieModel';

export class MovieQueryService
    extends IdentifiableQueryService<MovieModel, MovieFindOptions, MovieData>
    implements IMovieQueryService {
    protected modelClass = MovieModel;

    protected findCommand = MovieFindCommand;
    @Inject private userMovieQueryService: IUserMovieQueryService;

    public async getById(id: string): Promise<MovieData> {
        const [
            model,
            userMovies,
        ] = await Promise.all([
            this.findOneById(id),
            this.userMovieQueryService.find({ movieId: id }),
        ]);

        return this.create(model, userMovies);
    }

    public async getRandom(): Promise<MovieData> {
        const rows = await this.manager.query('select * from movie offset floor(random() * (select count(*) from movie))  limit 1;');
        return rows[0];
    }

    public async find(options: MovieFindOptions): Promise<MovieData[]> {
        const [movies, userMovies] = await Promise.all([
            this.findModels(options),
            this.userMovieQueryService.find({}),
        ]);

        const groupedUserMovies = groupBy(userMovies, 'movieId');

        return movies.map(movie => this.create(movie, groupedUserMovies[movie.id] || []));
    }

    protected create(model: MovieModel, userMovies: UserMovieModel[]): MovieData {
        const withRating = userMovies.filter(({ rating }) => !isNil(rating));
        const totalRating = withRating
            .reduce((acc, data) => acc + data.rating, 0);
        const rating = withRating.length > 0 ? totalRating / withRating.length : 0;

        return {
            ...model,
            rating: Number(rating.toFixed(1)),
        };
    }

}
