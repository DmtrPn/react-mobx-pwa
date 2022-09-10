#!/usr/bin/env node
import '../../bootstrap';
import { Config, ConfigName, DbConfig } from '@core/config';
import { DataSource } from 'typeorm';

async function migrations(): Promise<void> {
    const { entities, ...dbConfig } = <DbConfig>Config.getConfig(ConfigName.Db);
    const dataSource = new DataSource(dbConfig);
    await dataSource.initialize();
    await dataSource.runMigrations();
    await dataSource.destroy();
}

migrations();
