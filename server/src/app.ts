import './bootstrap';

import { Application } from '@core/application';

async function bootstrap() {
    const app = new Application();
    await app.init();
    app.start();
}

bootstrap();
