import { Module } from '@nestjs/common';
import { WishController } from './controllers';

@Module({
    controllers: [WishController],
})
export class WishModule {}
