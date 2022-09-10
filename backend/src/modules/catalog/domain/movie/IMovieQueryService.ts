import { MovieModel } from '@catalog/infrastructure/movie/MovieModel';
import { MovieFindOptions } from '@catalog/domain/movie/types';
import { IIdentifiableQueryService } from '@common/infrastructure/IdentifiableQueryService';

import { MovieData } from './types';

export abstract class IMovieQueryService implements IIdentifiableQueryService<MovieModel, MovieFindOptions, MovieData> {
    public abstract find(options: MovieFindOptions): Promise<MovieData[]>;
    public abstract getRandom(): Promise<MovieData>;
    public abstract getById(id: string): Promise<MovieData>;
}
