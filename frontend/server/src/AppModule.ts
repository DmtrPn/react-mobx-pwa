import { Module, NestModule, MiddlewareConsumer } from '@nestjs/common';

import { middlewares } from '@components/middlewares';

import { DreamModule } from '@modules/dream/DreamModule';
import { WishModule } from '@modules/wish/WishModule';

@Module({
    imports: [DreamModule, WishModule],
})
export class AppModule implements NestModule {
    public configure(consumer: MiddlewareConsumer) {
        consumer.apply(...middlewares).forRoutes('*');
    }
}
