import { Module } from '@nestjs/common';

import { MovieUpdate } from './update/MovieUpdate';

@Module({
    providers: [MovieUpdate],
})
export class BotModule {}