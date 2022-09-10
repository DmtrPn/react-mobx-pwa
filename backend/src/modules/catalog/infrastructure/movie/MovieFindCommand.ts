import { FindCommand } from '@common/infrastructure/FindCommand';
import { MovieModel } from '@catalog/infrastructure/movie/MovieModel';
import { MovieFindOptions } from '@catalog/domain/movie/types';

export class MovieFindCommand extends FindCommand<MovieModel, MovieFindOptions> {

    private name?: string;

    constructor(options: MovieFindOptions) {
        super(options, MovieModel);
    }

    protected addFilters(): this {
        return this
            .filterBy('name', this.name);
    }
    //
    // protected addRelations(): this {
    //     this.qb
    //         .leftJoinAndSelect('movie.author', 'author');
    //
    //     return this;
    // }
}
