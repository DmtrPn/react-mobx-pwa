import { MigrationInterface, QueryRunner } from 'typeorm';

export class RenameMoveRatingTableToUserMovie1652465042732 implements MigrationInterface {

    public async up(queryRunner: QueryRunner) {
        await queryRunner.query(`
            ALTER TABLE movie_rating RENAME TO user_movie;
        `);
    }

    public async down(queryRunner: QueryRunner) {
        await queryRunner.query(`
            ALTER TABLE user_movie RENAME TO movie_rating;
        `);
    }

}
