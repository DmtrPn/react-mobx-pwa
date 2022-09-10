import { MigrationInterface, QueryRunner } from 'typeorm';

export class AddViewedAndCommentColumnToUserMovie1652465079082 implements MigrationInterface {

    public async up(queryRunner: QueryRunner) {
        await queryRunner.query(`
            ALTER TABLE user_movie ADD COLUMN is_viewed BOOL NOT NULL DEFAULT 'f';
            ALTER TABLE user_movie ADD COLUMN comment TEXT;
            ALTER TABLE user_movie ALTER COLUMN rating DROP NOT NULL;
        `);
    }

    public async down(queryRunner: QueryRunner) {
        await queryRunner.query(`
            ALTER TABLE user_movie DROP COLUMN is_viewed;
            ALTER TABLE user_movie DROP COLUMN comment TEXT;
            ALTER TABLE user_movie ALTER COLUMN rating SET NOT NULL DEFAULT 0;
        `);
    }

}
