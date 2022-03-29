import { Module } from '@nestjs/common';
import { DreamController } from './controllers/DreamController';
import { DreamService } from './services';

@Module({
    controllers: [DreamController],
    providers: [DreamService],
})
export class DreamModule {}
