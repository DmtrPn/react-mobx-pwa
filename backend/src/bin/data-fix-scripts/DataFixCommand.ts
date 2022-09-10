import { first } from 'lodash';

import { ICommand } from '@common/domain';
import { TransactionManager } from '@common/infrastructure/TransactionManager';

interface ColumnExistenceCheckingParams {
    tableName: string;
    columnName: string;
    schema?: string;
}

export abstract class DataFixCommand extends TransactionManager implements ICommand {

    protected scriptName = this.constructor.name;

    public async execute(): Promise<void> {
        const hasBeenRun = await this.isAlreadyFixed();

        if (hasBeenRun) {
            this.scriptExecutedMassage();
        } else {
            console.info(`${this.scriptName} started`);
            console.time(`${this.scriptName} finished`);
            await this.run();
            console.timeEnd(`${this.scriptName} finished`);
        }
    }

    protected abstract isAlreadyFixed(): Promise<boolean>;

    protected abstract run(): Promise<void>;

    protected scriptExecutedMassage(): void {
        console.info(`${this.scriptName} already executed`);
    }

    protected async deleteFromTable(tableName: string): Promise<void> {
        await this.manager.query(`TRUNCATE ${tableName}`);
    }

    protected async deleteTables(...tableNames: string[]): Promise<void> {
        await this.manager.query(`DROP TABLE ${tableNames.join()}`);
    }

    protected async areTablesExist(...tableNames: string[]): Promise<boolean> {
        const names = `'${tableNames.join('\',\'')}'`;
        const [{ count }] = await this.manager.query(`SELECT CAST(count(*) AS int) FROM INFORMATION_SCHEMA.TABLES WHERE TABLE_NAME IN(${names})`);
        return tableNames.length === count;
    }

    protected async getTableItemsCount(tableName: string): Promise<number> {
        const [{ count }] = await this.manager.query(`SELECT CAST(count(*) AS int) FROM ${tableName}`) as { count: number }[];
        return count;
    }

    protected async isTableEmpty(tableName: string): Promise<boolean> {
        const hasItems = await this.areTablesExist(tableName) && (await this.getTableItemsCount(tableName)) > 0;
        return !hasItems;
    }

    protected async isColumnExists({ tableName, columnName, schema = 'public' }: ColumnExistenceCheckingParams) {
        const res = await this.manager.query(
            `SELECT $3 = ANY(
                (SELECT array_agg(column_name) FROM information_schema.columns WHERE table_schema = $1 AND table_name = $2).array_agg
            ) result;`,
            [schema, tableName, columnName],
        );
        return first(res as { result: boolean }[])!.result;
    }

}
