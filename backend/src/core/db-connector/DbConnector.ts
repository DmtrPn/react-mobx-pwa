import { DataSource, EntityManager, Repository, EntityTarget } from 'typeorm';
import { PostgresConnectionOptions } from 'typeorm/driver/postgres/PostgresConnectionOptions';
import { SnakeNamingStrategy } from 'typeorm-naming-strategies';

import { Config, ConfigName, DbConfig } from '@core/config';
import { LoggerFactory } from '@components/logging';

export class DbConnector {

    private static instance: DbConnector;

    public static getInstance(): DbConnector {
        if (!this.instance) {
            this.instance = new DbConnector();
        }

        return this.instance;
    }

    private dataSource: DataSource;
    private logger = LoggerFactory.getLogger();

    private dbConfig: PostgresConnectionOptions = <DbConfig>Config.getConfig(ConfigName.Db);

    private constructor() {
        this.dataSource = new DataSource(this.dbConfig as PostgresConnectionOptions);
        this.dataSource.namingStrategy = new SnakeNamingStrategy();
    }

    public get manager(): EntityManager {
        return this.dataSource.manager;
    }

    public getRepository<Entity>(entity: EntityTarget<Entity>): Repository<Entity> {
        return this.dataSource.getRepository<Entity>(entity);
    }

    public getDataSource(): DataSource {
        if (!this.dataSource.isInitialized) {
            this.logger.info('DB does not initialized');
        }
        return this.dataSource;
    }

    public async initialize(): Promise<void> {
        if (!this.dataSource.isInitialized) {
            await this.createConnection()
                .then((connection) => {
                    if (connection.isInitialized) {
                        this.logger.info(`Connection to the database: ${ connection.options.database } is established`);
                    } else {
                        this.logger.error(`Connection to the database: ${ connection.options.database } is not established`);
                    }
                    this.dataSource = connection;

                })
                .catch(error => this.logger.fatal(error));
        }
    }

    public async closeConnection(): Promise<void> {
        if (this.dataSource && this.dataSource.isInitialized) {
            await this.dataSource.destroy();
        }
    }

    protected async createConnection(): Promise<DataSource> {
        return this.dataSource.initialize();
    }
}