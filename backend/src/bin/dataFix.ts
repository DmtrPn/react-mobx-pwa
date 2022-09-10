#!/usr/bin/env node
import '../bootstrap';

import { commands } from './data-fix-scripts';
import { DbConnector } from '@core/db-connector';

async function dataFix(): Promise<void> {

    const dbConnector = DbConnector.getInstance();
    await dbConnector.initialize();

    try {
        for (const Command of commands) {
            const fixCommand = new Command();

            await fixCommand.execute();
        }
    } catch (e) {
        console.error(e);
    } finally {
        await dbConnector.closeConnection();
    }

}

dataFix();
