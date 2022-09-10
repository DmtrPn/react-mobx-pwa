import { Inject } from 'typescript-ioc';

import { UseCaseCommand } from '@common/use-cases/UseCaseCommand';
import { IMovieCrudService } from '@catalog/domain/movie/IMovieCrudService';

export abstract class MovieCommand<Params extends object> extends UseCaseCommand<Params> {

    @Inject protected crudService: IMovieCrudService;

}
