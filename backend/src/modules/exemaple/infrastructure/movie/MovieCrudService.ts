import { Class } from 'project-types/common';

import { IMovieCrudService } from '@catalog/domain/movie/IMovieCrudService';
import { MovieCreateData, MovieFindOptions, MovieUpdateData } from '@catalog/domain/movie/types';

import { MovieModel } from './MovieModel';
import { MovieFindCommand } from './MovieFindCommand';
import { IdentityCrudService } from '@common/infrastructure/IdentityCrudService';
import { FindCommand } from '@common/infrastructure/FindCommand';
import { MovieStatus } from '@components/common/enums';

export class MovieCrudService
    extends IdentityCrudService<MovieModel, MovieCreateData, MovieUpdateData, MovieFindOptions>
    implements IMovieCrudService {

    protected modelClass = MovieModel;
    protected findCommand: Class<FindCommand<MovieModel, MovieFindOptions>, any> = MovieFindCommand;

    protected enrichCreationParams(params: MovieCreateData): MovieModel {
        return new MovieModel({ ...params, status: MovieStatus.New });
    }

}
