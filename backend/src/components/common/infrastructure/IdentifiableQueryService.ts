import { QueryService, IQueryService } from './QueryService';
import { FindOptionsWhere } from 'typeorm';

export interface IIdentifiableQueryService<
    M extends { id: string },
    FO extends object = {},
    R = M,
> extends IQueryService<M, FO, R> {
    getById(id: string): Promise<R>;
}

export abstract class IdentifiableQueryService<
    M extends { id: string },
    FO extends object,
    R = M,
> extends QueryService<M, FO, R> {

    public async getById(id: string): Promise<R> {
        const model = await this.findOneById(id);

        return this.create(model);
    }

    protected findOneById(id: string): Promise<M> {
        return this.manager.findOneBy<M>(this.modelClass, { id } as FindOptionsWhere<M>);
    }

}
