import { QueryDeepPartialEntity } from 'typeorm/query-builder/QueryPartialEntity';

import { Class, Attributes } from 'project-types/common';

import { TransactionManager } from '@common/infrastructure/TransactionManager';
import { FindCommand } from '@common/infrastructure/FindCommand';

export abstract class CrudService<
    M extends object,
    CreationParams extends Partial<M>,
    UpdateParams = Omit<Attributes<M>, 'id'>,
    FO extends object = {},
>  extends TransactionManager {

    protected abstract modelClass: Class<M>;
    protected abstract findCommand: Class<FindCommand<M, FO>>;

    public find(options: FO): Promise<M[]> {
        const command = new this.findCommand(options);
        return command.execute();
    }

    public async create(params: CreationParams): Promise<void> {
        const theParams = this.enrichCreationParams(params);

        await this.executeInTransaction(entityManager =>
            entityManager
                .createQueryBuilder()
                .insert()
                .into(this.modelClass)
                .values(theParams)
                .execute(),
        );
    }

    public async update(id: string, params: UpdateParams): Promise<void> {
        await this.executeInTransaction(entityManager =>
            entityManager
                .createQueryBuilder()
                .update(this.modelClass)
                .set(params as unknown as QueryDeepPartialEntity<M>) //  as UpdateQueryBuilder<M>)
                .where({ id })
                .execute(),
        );
    }

    protected abstract enrichCreationParams(params: CreationParams): M;

}
