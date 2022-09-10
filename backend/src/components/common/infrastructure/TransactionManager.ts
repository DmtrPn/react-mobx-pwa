import { EntityManager } from 'typeorm';

import { DbConnector } from '@core/db-connector';

export abstract class TransactionManager {
    private dbConnector = DbConnector.getInstance();

    protected get manager(): EntityManager {
        return this.dbConnector.getDataSource().manager;
    }

    protected async executeInTransaction(runInTransaction: (entityManager: EntityManager) => Promise<unknown>): Promise<void> {
        await this.manager.transaction(runInTransaction);
    }

}