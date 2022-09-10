import { MigrationInterface, QueryRunner } from 'typeorm';

export class CreateMovieRatingTable1650714992705 implements MigrationInterface {

    public async up(queryRunner: QueryRunner) {
        await queryRunner.query(`
            CREATE TABLE movie_rating (
                movie_id UUID NOT NULL REFERENCES movie(movie_id),
                user_id UUID NOT NULL REFERENCES users(user_id),
                rating INT NOT NULL,
                CONSTRAINT movie_rating_unique UNIQUE (movie_id, user_id)
            );
            CREATE INDEX IF NOT EXISTS movie_rating_movie_id_idx ON movie_rating (movie_id);
            CREATE INDEX IF NOT EXISTS movie_rating_user_id_idx ON movie_rating (user_id);
            
        `);
    }

    public async down(queryRunner: QueryRunner) {
        await queryRunner.query(`
            DROP TABLE movie_rating;
            DROP INDEX IF EXISTS movie_rating_movie_id_idx;
            DROP INDEX IF EXISTS movie_rating_user_id_idx;
        `);
    }

}
