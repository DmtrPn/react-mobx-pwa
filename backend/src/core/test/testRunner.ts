import { DbConnector } from '@core/db-connector';
import '@core/di/IoC';

const dbConnector = DbConnector.getInstance();

beforeAll(async () => {
    await dbConnector.initialize();
    const entities = dbConnector.getDataSource().entityMetadatas;
    const manager = dbConnector.getDataSource().manager;
    await Promise.all(entities.map(entity =>
        manager.query(`TRUNCATE TABLE ${entity.tableName}  RESTART IDENTITY CASCADE`),
    ));
});

afterAll(async () => {
    await dbConnector.closeConnection();
});
