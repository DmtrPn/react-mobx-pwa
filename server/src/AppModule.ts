import { Module, NestModule, MiddlewareConsumer } from '@nestjs/common';

import { middlewares } from '@components/middlewares';

import { DreamModule } from './modules/dream';

@Module({
    imports: [DreamModule],
})
export class AppModule implements NestModule {
    public configure(consumer: MiddlewareConsumer) {
        consumer.apply(...middlewares).forRoutes('*');
    }
}
