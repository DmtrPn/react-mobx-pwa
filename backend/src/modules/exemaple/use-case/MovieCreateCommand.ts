import { MovieCommand } from './MovieCommand';
import { MovieCreateData } from '@catalog/domain/movie/types';

interface Params extends MovieCreateData {}

export class MovieCreateCommand extends MovieCommand<Params> {

    execute(): void | Promise<void> {
        return undefined;
    }

}