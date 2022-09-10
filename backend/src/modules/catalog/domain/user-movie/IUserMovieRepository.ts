import { UserMovie } from './UserMovie';

export abstract class IUserMovieRepository {
    public abstract save(entity: UserMovie): void;
}
