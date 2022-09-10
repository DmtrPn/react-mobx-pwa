import { Module } from '@nestjs/common';
import { DreamController } from './controllers';

@Module({
    controllers: [DreamController],
})
export class DreamModule {}
