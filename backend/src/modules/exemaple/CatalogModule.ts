import { Module } from '@nestjs/common';
import { MovieController } from './controllers';

@Module({
    controllers: [MovieController],
})
export class CatalogModule {}
