import { Module } from '@nestjs/common';

import { MovieController } from './controllers/movie';
import { AffirmationController } from './controllers/affirmation';
import { UserMovieController } from './controllers/user-movie';

@Module({
    controllers: [
        MovieController,
        AffirmationController,
        UserMovieController,
    ],
})
export class CatalogModule {}
