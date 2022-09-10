import { FindCommand } from '@common/infrastructure/FindCommand';
import { MovieModel } from '@catalog/infrastructure/movie/MovieModel';
import { MovieFindOptions } from '@catalog/domain/movie/types';

export class MovieFindCommand extends FindCommand<MovieModel, MovieFindOptions> {

    constructor(options: MovieFindOptions) {
        super(options, MovieModel);
    }
}
