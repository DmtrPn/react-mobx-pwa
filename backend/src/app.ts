import './bootstrap';

import { Application } from '@core/application';
import '@core/di/IoC';
import '@core/access-control/initAccessControl';

async function bootstrap() {
    const app = new Application();
    await app.init();
    app.start();
}

bootstrap();
