import { MigrationInterface, QueryRunner } from 'typeorm';

export class DropRatingColumn1650715368648 implements MigrationInterface {

    public async up(queryRunner: QueryRunner) {
        await queryRunner.query(`
            ALTER TABLE movie DROP COLUMN rating;
        `);
    }

    public async down(queryRunner: QueryRunner) {
        await queryRunner.query(`
            ALTER TABLE movie ADD COLUMN rating INT;
        `);
    }

}
