import './bootstrap';

import { BotApplication } from '@core/application/BotApplication';
import '@core/di/IoC';

async function bootstrap() {
    const app = new BotApplication();
    await app.init();
    await app.start();
}

bootstrap();
