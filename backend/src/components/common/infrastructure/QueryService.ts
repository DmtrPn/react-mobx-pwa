import { Class } from 'project-types/common';

import { TransactionManager } from '@common/infrastructure/TransactionManager';
import { FindCommand } from '@common/infrastructure/FindCommand';

export interface IQueryService<
    M extends object,
    FO extends object = {},
    R = M,
> {
    find(options: FO): Promise<R[]>;
}

export abstract class QueryService<
    M extends object,
    FO extends object = {},
    R = M,
> extends TransactionManager implements IQueryService<M, FO, R> {

    protected abstract modelClass: Class<M>;
    protected abstract findCommand: Class<FindCommand<M, FO>>;

    public async find(options: FO): Promise<R[]> {
        const models = await this.findModels(options);

        return models.map(model => this.create(model));
    }

    protected abstract create(model: M, ...params: any): R;

    protected findModels(options: FO): Promise<M[]> {
        const command = new this.findCommand(options);
        return command.execute();
    }

}
