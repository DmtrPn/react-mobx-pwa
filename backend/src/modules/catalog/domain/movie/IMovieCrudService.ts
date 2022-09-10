import { MovieModel } from '@catalog/infrastructure/movie/MovieModel';
import { MovieFindOptions, MovieUpdateData, MovieCreateData } from '@catalog/domain/movie/types';

export abstract class IMovieCrudService {
    public abstract find(options: MovieFindOptions): Promise<MovieModel[]>;
    public abstract getById(id: string): Promise<MovieModel>;
    public abstract create(params: MovieCreateData): void;
    public abstract update(id: string, params: MovieUpdateData): void;
    public abstract remove(id: string): void;
}
