import { compact } from 'lodash';

import { Class } from 'project-types/common';

import { TransactionManager } from './TransactionManager';
import { FindCommand } from './FindCommand';

/**
 * E - domain entity
 * M - ORM entity
 * FO - search options
 */
export abstract class Repository<E, M, FO> extends TransactionManager {

    protected ormEntity: Class<M>;

    protected constructor(modelClass: Class<M>) {
        super();
        this.ormEntity = modelClass;
    }

    public async find(findOption: FO = {} as FO): Promise<E[]> {
        const models = await this.findModels(findOption);

        return this.createList(models);
    }

    public async save(entity: E): Promise<void>;
    public async save(entity: E[]): Promise<void>;
    public async save(entity: E | E[]): Promise<void> {
        return Array.isArray(entity)
            ? this.saveAll(entity)
            : this.saveOne(entity);
    }

    public async delete(entity: E): Promise<void>;
    public async delete(entity: E[]): Promise<void>;
    public async delete(entity_: E | E[]): Promise<void> {
        throw Error(`Delete methode for ${this.constructor.name} not implement`);
    }

    protected get entityName(): string {
        return `${this.constructor.name.replace('Repository', '')}`;
    }

    protected async findModels(findOption: FO): Promise<M[]> {
        const searchRequest = this.createFindCommand(findOption);

        return searchRequest.execute();
    }

    protected createList(models: M[]): E[] {
        return compact(models.map(model => this.create(model)));
    }

    protected async saveOne(entity: E): Promise<void> {
        await this.executeInTransaction(entityManager => entityManager.save(this.modelFrom(entity)));
    }

    protected async saveAll(list: E[]): Promise<void> {
        const models = list.map(it => this.modelFrom(it));
        await this.executeInTransaction(entityManager => entityManager.save(models));
    }

    protected abstract create(model: M): E;
    protected abstract createFindCommand(findOption: FO): FindCommand<M, FO>;
    protected abstract modelFrom(e: E): M;

}
